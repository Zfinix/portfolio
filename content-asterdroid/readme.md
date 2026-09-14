# asterdroid

Asterdroid runs the full Aster agent on an Android phone. The app (`dev.aster.probe`) ships the same `aster-cli` binary that runs in a terminal inside the APK as `libaster.so`: it reads the screen through an accessibility service, touches it the way a thumb does, and answers over Telegram. The person holding the conversation is usually nowhere near the phone.

It started as a measuring rig for the questions Aster's `docs/COMPUTER-USE.md` leaves open on Android, and the measurements below are why it is built the way it is. It is now the daily-driver way to run Aster on a phone.

## Architecture

One process tree on the phone:

```
Telegram  <->  aster remote telegram   (libaster.so, supervised by AsterAgentService)
                  | run_command
                  v
               asterctl (libclient.so) --abstract socket--> AsterA11yService
                  |                                           |  reads the tree,
                  v                                           |  dispatches touches,
               asterctl serve (the mirror)                    v  OCRs what it cannot see
               H.264 out, touches in                       the phone itself
```

- **libaster.so** is the agent, not a port and not a subset. `build-agent.sh` cross-compiles `aster-cli` for `aarch64-linux-android`; the tools, skills, prompts and review path are the code that runs in your terminal. `AsterAgentService` runs it as a foreground service (the only way to hold a long-running process on modern Android), supervises it, and restarts it with backoff that only tightens when it fails immediately, which means misconfigured. The bridge runs in `yolo` mode because there is no terminal on the phone to answer a permission prompt: consent lives in the chat, and before anything that leaves the device the agent states the concrete effect in one line and then does it.
- **asterctl** (from `client/`, shipped as `libclient.so`) is the agent's body, a small Rust client. The agent calls it through `run_command` the same way it calls anything else.
- **AsterA11yService** is the accessibility service. It captures a pruned node list, serves it over the socket, dispatches gestures, and falls back to OCR where the tree is blind. It owns the wake path: every verb starts by waking the screen, because a phone left on a desk is off by default. That is a wake lock with `ACQUIRE_CAUSES_WAKEUP`, held for two minutes, followed by a poll of the active window every 50 ms until it is there or three seconds pass.
- **AsterIme** is an input method that draws nothing. `ACTION_SET_TEXT` is refused by plenty of fields and synthesised key events drop characters, so the IME owns the `InputConnection` and commits text at the cursor. It never shows a window because a zero-height view still claims the whole screen as touchable, which blocks every tap and hides the app from the tree the agent is reading. `onEvaluateInputViewShown` returns false and the connection is bound anyway.
- **device-AGENTS.md** (shipped as `assets/AGENTS.md`) and the skills in `skills/` (synced flat into assets by the Gradle `syncDocs` task) are the load-bearing part: they are the agent's entire understanding of what it is. Change behavior by changing those files, not by adding code.

### The socket

`asterctl` talks to `AsterA11yService` over an abstract unix socket named `@aster-eyes`. Abstract means there is no file on disk and no permissions to get wrong. Connecting costs about 150 microseconds, which is why paying it per verb is fine. The service binds it with ten retries 300 ms apart, then waits two seconds and loops, because a previous listener unwinding can take longer than any fixed number of tries and giving up used to leave the service bound and answering nothing.

One line in, text out. The verbs are the agent's whole vocabulary on the device:

```text
map              numbered, actionable elements
find <text>      the same, filtered by text, content-desc or id
tap <n>          click element n, resolving up to the row that owns a label
tap <x,y|F7|o3>  a pixel, a grid cell from `shot grid`, or a block from the last ocr
drag p1 p2 [ms]  down, pause, move, pause, up: what sliders and cues need
finger down|move|up   one touch held across calls, with shots in between
shot grid [px]   the screen with lettered cells; `shot grid R3` zooms with pixel labels
text <s>         set text on a focused field
key back|home|recents|enter|delete|tab
volume up|down|max|mute|<0-100> [stream]
media pause|play|toggle|next|prev
restart <app>
```

The target grammar is uniform across all of them: an element index from `map`, a pixel pair, a grid cell like `F7`, an OCR block like `o3`, or a blob from `locate`. That is what lets the agent fall back from the tree to the grid to OCR without learning a new syntax each time.

Two more families skip work the slow way would need. Where an intent exists it is one call instead of a dozen reads that can each go wrong: `open`, `settings`, `quicksettings`, `notifications`, `dial`, `sms`, `url`, `alarm`, `timer`, `event`, `media`, `volume`, `wallpaper`, `emergency`. And for screens the tree cannot describe, `locate bright` finds numbered blobs by true centre, `aim` points a cue at a target and self-corrects, `shot grid` lays lettered cells over the screen, and `marks` draws the map's own indices on it. On a canvas app, where the whole map is one element with nothing inside, those are the only handles there are.

### The receipt model

Every action returns two lines. The first is the receipt, the acknowledgement that the event was accepted. The second is what actually changed.

```text
receipt: posted ("System" via its row)
changed: +32 -30 pkg=com.android.settings after_ms=713
```

A receipt only means the system took the event. The diff is the evidence, and an empty diff prints a warning instead of a success: `warning: nothing on screen changed; treat as not done`. On a blind tree the diff is pixels instead: the service keeps a small thumbnail of the frame before the action, compares it after with a per-pixel RGB delta threshold, and reads the result with OCR.

```text
changed: tree blind (0 elements); 6% of pixels changed since the frame 2s before the action
```

Three rules keep the verifier honest, and each one came from watching the agent get something wrong:

- **Read when the screen is still.** Reading mid-animation costs about forty times as much and returns a frame nobody asked for. Events mark the screen dirty, and a read waits for quiet before it captures.
- **Wait for the action to land before waiting for quiet.** Waiting only for quiet returns instantly when the app has not reacted yet, reads the stale tree, and reports a real navigation as no change. A verifier that lies is worse than no verifier at all.
- **Never exec the agent on the main thread.** The activity blocked on the client while the socket handler posted its capture to the same looper. Same process, same thread, instant deadlock.

## What the probe established

Measured on a Pixel 7 emulator, Android 15 / API 35, with a software GPU, so the absolute numbers are pessimistic; the structure holds.

| question | answer |
| --- | --- |
| Can a normal app exec the agent? | yes, from `nativeLibraryDir`, exit 0 |
| Can it read another app's screen? | yes, 164 nodes walked to 35 kept, 2.3 KB |
| Can it act, and does the act land? | yes, confirmed by the foreground activity changing |
| How fast, screen already still? | ~8 ms end to end from the Rust side |
| How fast during a fling? | p50 21 ms, p95 84 ms |
| How fast across an app launch? | 100 to 600 ms, sometimes worse |
| Same read over `adb uiautomator dump` | 2470 ms, 27851 bytes |

The last row decided the architecture. `uiautomator dump` costs two and a half seconds and returns twenty-eight kilobytes of XML; reading through the accessibility service in-process costs eight milliseconds and returns the pruned list the agent actually wants. That is a factor of three hundred, and it is the difference between an agent that can look after every action and one that has to ration its glances.

## The cross-build

Rust's stock Android target keeps native thread-local storage off. That sounds harmless until you embed a Python interpreter, which Aster does for its `python` tool: every thread-local then costs one of bionic's 128 pthread keys, and the interpreter aborts with `out of TLS keys`.

The fix is a custom target spec, `target-spec/aarch64-linux-android.json`, whose whole reason for existing is two lines:

```json
"tls-model": "emulated",
"has-thread-local": true
```

With native TLS on, LLVM lowers thread-locals to emulated TLS on Android, which routes every one of them through a single key. That lowering calls `__emutls_get_address`, which lives in the NDK's compiler-rt archive, and rustc's default link drops it. So `build-agent.sh` passes the archive explicitly:

```sh
RT="$(ls "$NDK"/toolchains/llvm/prebuilt/"$HOST"/lib/clang/*/lib/linux/libclang_rt.builtins-aarch64-android.a | head -1)"
export CARGO_TARGET_AARCH64_LINUX_ANDROID_RUSTFLAGS="-C link-arg=$RT -L $FFI_DIR/lib"
```

`libffi` is the other one. RustPython's `ctypes` wants a system `libffi`, which Android does not ship, so the script builds a static one once from source (libffi 3.4.6, configured with the NDK's `aarch64-linux-android29-clang`) into `target/android-tls/libffi` and links against it.

Because `build-std` and JSON target specs are still nightly features, the build sets `RUSTC_BOOTSTRAP=1` and needs `rust-src` installed (`rustup component add rust-src`). The invocation:

```sh
cargo build --release -p aster-cli --bin aster \
  -Zbuild-std=std,panic_abort -Zjson-target-spec \
  --target target-spec/aarch64-linux-android.json \
  --target-dir target/android-tls --manifest-path ../../Cargo.toml
```

The output is copied to `app/src/main/jniLibs/arm64-v8a/libaster.so`. It has to be a `.so` in that directory, because `nativeLibraryDir` is the one place Android will execute a file from. The control client is built the same way but with plain std, no target spec, and lands as `libclient.so`.

## Install

The agent calls `asterctl` and itself by name, so `Install.kt` creates symlinks for both in the app's private `bin` directory on every service start. A symlink keeps the SELinux label of its target, which is why that works and a copy into the data directory would not be executable at all. Every install lands in a new `nativeLibraryDir`, so the links are deleted and remade each time rather than trusted.

`Install.kt` also refreshes the binaries, skills, instructions and `.env` on every start, because after an update the links and bundled files are stale and nobody may ever open the app to refresh them. API keys are not typed into a form: they arrive as a `.env` pushed into the app's external files dir, the one place `adb` can write without `run-as`, and the app moves it inside and deletes the outside copy.

## The learn loop

The agent writes skills it learns into the app's private `.aster/skills` directory, where they survive updates; the built-in ones in `skills/` are re-synced from assets on every start. The app lists both, learned ones first, newest first within each, with a ledger per learned skill: how many times it has run and its best result in rounds or tool calls. Change a behavior by editing the Markdown, rebuilding, installing, and the next service start picks it up.

## The mirror

`/mirror` in Telegram starts `asterctl serve` on the device and replies with a tappable URL; `/mirror off` stops it. The page shows the screen and takes touches back. The URL names the phone, not itself: the Tailscale address when the tailnet is up, the LAN address otherwise, never `127.0.0.1`, which would only open on the phone.

- **Video** is H.264 off the phone's hardware encoder, up to 1080p60, decoded in the browser with WebCodecs. Frames go from a MediaProjection VirtualDisplay straight into the encoder's input surface, so the pixels never touch the heap.
- **Stills** are the older JPEG-per-screenshot path, kept as the fallback for a browser with no `VideoDecoder`. They cap at two or three frames per second because the accessibility service's `takeScreenshot` is rate-limited to one per 333 ms, and no amount of quality tuning moves that. Video has no such ceiling.
- **The capture consent answers itself.** Since Android 14 a projection needs a visible recording notification (`MirrorService`), and `MirrorAutoAccept` watches for the systemui dialog and presses Start with the service's own thumb, so a `/mirror` from the couch does not wait on a person who is not holding the phone.
- **One capture serves every viewer** and outlives them (30 min idle), so a session of coming and going costs one dialog. Touches take the service's `live` verbs on their own thread, so a finger on the page tracks a finger on the glass instead of arriving as a finished shape.
- **A port conflict reports itself.** The probe tells the mirror from any other listener on 7070, so a squatter gets a plain "stop that app" instead of a false "already up".

Packet formats and quality knobs: `skills/mirror/SKILL.md`.

## Running it

The agent binary is built from an aster checkout. `build-agent.sh` expects one beside this repo; `ASTER_REPO` points it somewhere else.

```sh
./build-agent.sh                            # the agent binary, into app/src/main/jniLibs
./gradlew assembleDebug                     # the app, with the agent and the docs inside
adb install -r app/build/outputs/apk/debug/app-debug.apk
./grant.sh                                  # every permission, app-op and service toggle, over adb
```

Needs an aster checkout, `ANDROID_HOME` with build-tools and platform 35, an NDK, `kotlinc`, and a device on adb. The manifest declares every permission an app can hold; runtime ones are asked for at launch and `grant.sh` hands over the rest, including the app-op specials and the accessibility, keyboard and notification toggles.

On a release build `run-as` is gone, so drive a verb from the host through a broadcast; the reply and any shot land in the external files dir:

```sh
adb shell am broadcast -p dev.aster.probe --receiver-foreground -a dev.aster.probe.CTL --es cmd "'shot grid'"
adb shell cat /sdcard/Android/data/dev.aster.probe/files/ctl/reply.txt
adb pull /sdcard/Android/data/dev.aster.probe/files/ctl/shot.png
```

The inner quotes matter: `adb shell` strips the outer pair, so without them the phone sees `shot` and `grid` as two arguments. `-p` matters too, or the broadcast is deferred while the app is in the background. On a real device none of this is needed: the agent execs `asterctl` as its own child.

## Known limits

- **Type into a terminal.** `text` reaches normal text fields, including ones that refuse the usual accessibility text action. It cannot reach a view that handles its own input and never opens an input connection, and a terminal is the common case. There it reports posted while nothing arrives.
- **See a canvas.** Maps exposes the whole map as a single element with nothing inside. The fallback is OCR, which misreads things. Treat what it returns as a reading rather than a fact, and cross-check it when the task depends on it.
- **Reach the lock screen.** The screen must be unlocked for taps to reach apps. The mirror will happily show and tap the lock screen to no effect. The service prints a note when the keyguard is up, but it cannot get past it.
- **Wake the phone from cold.** Every verb starts by waking the screen. That is a wake lock, not a boot. The app declares `RECEIVE_BOOT_COMPLETED` and does not yet use it, so a reboot means opening the app once before the agent is reachable again.
- **The numbers are from an emulator.** Pixel 7 emulator, Android 15 / API 35, software GPU. The absolute timings are pessimistic; the structure holds and a real device is faster.

## Layout

| path | what it is |
| --- | --- |
| `app/` | the Android app: Compose UI, `AsterAgentService`, `AsterA11yService`, `AsterIme`, `Install.kt`, the manifest |
| `client/` | `asterctl`, the Rust control client and mirror server |
| `skills/` | built-in skills, synced flat into assets by the Gradle `syncDocs` task |
| `target-spec/` | `aarch64-linux-android.json`, the custom Rust target |
| `device-AGENTS.md` | the agent's instructions, shipped as `assets/AGENTS.md` |
| `build-agent.sh` | cross-builds the agent binary into the app |
| `build-client.sh` | cross-builds `asterctl` into the app |
| `grant.sh` | grants every permission, app-op and service toggle over adb |
| `docs/ANDROID.md` | the architecture in full |
