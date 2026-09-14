# Newsletter: The Screen Is the API

## Subject line options

1. The screen is the API
2. I put my terminal agent on an Android phone
3. An agent that has to prove it did the thing

## Preheader

Asterdroid runs the same Aster binary on a physical phone, and the hard part was everything around the model: no shell, a screen for an interface, and a rule that a receipt is not evidence.

## Body

I built a thing called asterdroid. It is Aster, my Rust terminal agent, running on a physical Android phone. No terminal, nobody holding the phone. You text it over Telegram, it reads the screen, taps it, takes a screenshot, and replies.

The model was never the hard part. The hard part is that a phone has no shell. There is no command that turns on Wi-Fi. There is a settings screen with a row that says Wi-Fi and a switch on the right, and the only way to flip it is to open the app, find the row, and press it. On a phone, the screen is the API.

Full post here: [LINK]

### The agent is the same binary

Asterdroid is not a port and not a subset. A build script cross-compiles `aster-cli` for `aarch64-linux-android` and ships it inside the APK as `libaster.so`. The tools, the skills, the prompts, the review path, all of it is the code that runs in my terminal. When I fix something in the harness, the phone gets the fix.

What sits underneath is a body, not a brain. A small Rust client called `asterctl` talks to an Android accessibility service over an abstract unix socket. Abstract means there is no file on disk and no permissions to get wrong. Connecting costs about 150 microseconds, which is why paying per verb is fine.

### The measurement story

The first version was a measuring rig. My computer-use plan for Aster left two questions open: how fast a UI tree read is, and whether an action can be confirmed. The honest way to answer them was to build the thing and measure it. It turned out useful enough that it is now how I run Aster on a phone day to day.

Measured on a Pixel 7 emulator, Android 15:

- A screen read with the screen still: about 8 ms end to end.
- During a fling: 21 ms at the median, 84 ms at the 95th percentile.
- Across an app launch: 100 to 600 ms.
- The same read over `adb uiautomator dump`: 2,470 ms and 27,851 bytes of XML.

That last row decided the architecture. Reading through the accessibility service in-process is about three hundred times faster than the obvious way, and it returns the pruned list the agent wants: 164 nodes walked, 35 kept, 2.3 KB. The rest are layout containers with nothing to press. Being fast enough to look after every action changes what the agent can be.

### A receipt is not evidence

Every action returns two lines:

```
receipt: posted ("System" via its row)
changed: +32 -30 pkg=com.android.settings after_ms=713
```

The first line means the system accepted the event. That is all it means. The second line is the evidence, what actually changed on screen. An empty diff prints a warning instead of a success: `warning: nothing on screen changed; treat as not done`.

This matters because the user is not watching. On a desktop the person sees the window move. Here they see a chat, and anything the agent reports without a picture is a claim. An agent that says it turned off Wi-Fi and did not is worse than an agent that refuses.

### The learn loop

The instructions and skills are the load-bearing part of the agent, so I let it rewrite some of them itself. After a turn finishes, `aster learn` scores that turn and rewrites the skill for the task it was.

The trigger is narrow: six or more tool calls. Below that the turn was a question or a chat, and there is nothing to turn into a procedure. When it fires, it runs as a child process with a 180 second timeout, so the chat gets its reply and the reflection happens behind it. When the reflection lands, the chat gets one line saying what changed.

The score is a tuple: rounds, then tool calls, then active seconds, in that order. That tuple is the whole definition of better. Wall time is recorded but not ranked, because a turn that waits on a slow screen is not a worse turn.

Three rules are enforced in code, not asked for in a prompt:

- It only rewrites skills it wrote itself. Every learned skill carries a `runs.jsonl` ledger, and an update may only name a skill that has one.
- A turn is learned once. The ledger records the session and the turn index, so running it again does nothing.
- The skill body moves only on a score at least as good as the best so far. If the new run is worse, the body stays and a dated lesson is appended: what regressed, by how much, and why.

That last one is the loop admitting it got worse. I think it is the most useful feature in the thing.

### The limits

- It cannot type into a terminal. A field that handles its own input and never opens an input connection reports posted while nothing arrives.
- It cannot really see a canvas. Maps is one element with nothing inside, so the fallback is OCR, which misreads. Treat what it returns as a reading, not a fact.
- It cannot get past the lock screen. Taps reach apps only when the screen is unlocked.
- It cannot wake the phone from cold. A wake lock is not a boot, so a reboot means opening the app once.
- The numbers are from an emulator with a software GPU. The structure holds, the absolute timings are pessimistic, and a real device is faster.

That is the honest list. A post that only lists wins is a brochure.

The model was never the hard part. The screen is the API, and a receipt is not evidence. The diff is.

Read the whole thing, with the protocol, the cross-build, and the mirror: [LINK]
