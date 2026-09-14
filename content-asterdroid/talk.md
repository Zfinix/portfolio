# asterdroid: 5-minute lightning talk

## Slide beats

1. Title: "The Screen Is the API". Photo of the phone running the agent.
2. The setup: the same Aster binary in a terminal and inside the APK.
3. The problem: a phone has no shell.
4. The measurement: 8 ms vs 2,470 ms, one bar chart.
5. The architecture: Telegram to libaster.so to asterctl to the accessibility service.
6. The proof: a receipt and a diff, the two-line protocol.
7. The learn loop: the agent rewriting its own skill files.
8. The limits: what it still cannot do.
9. Closing: the thesis, restated.

## Script

**Slide 1 (50 words).**
I put my terminal agent on an Android phone. Not a demo, not a port. The same Rust binary that answers me in the terminal now lives inside the APK, and I text it like a person. This is what I learned building it, and the number that decided everything.

**Slide 2 (48 words).**
Aster is a terminal agent. It reads code, edits files, runs commands. The phone runs the exact same binary, cross-compiled for aarch64-linux-android and shipped as libaster.so. Same tools, same skills, same prompts. Nothing was reimplemented. The work was the body around it.

**Slide 3 (45 words).**
A phone has no shell. There is no command that turns on Wi-Fi. There is a settings screen with a switch. So the screen is the API. The agent reads it through the accessibility service and taps it the way a thumb does.

**Slide 4 (55 words).**
I built it as a measuring rig first. A screen read through the accessibility service costs about 8 milliseconds. The same read over adb uiautomator dump costs 2,470 milliseconds and returns 28 kilobytes of XML. That is 300x. It is the difference between looking after every action and rationing your glances.

**Slide 5 (52 words).**
The path is short. Telegram delivers the message. libaster.so thinks. asterctl, a small Rust client, drives the accessibility service over a local socket. The service reads the node tree and injects gestures. Consent lives in the chat, because there is no terminal on a phone to answer a permission prompt.

**Slide 6 (55 words).**
Every action returns two lines. The receipt says the event was accepted. The diff says what changed on screen. An empty diff prints a warning: nothing changed, treat it as not done. That warning is the whole philosophy. A receipt is not evidence. The diff is.

**Slide 7 (50 words).**
After a hard turn, the agent scores itself and rewrites its own instructions. It only touches skills with a run ledger, learns a turn once, and only moves a skill body on a score at least as good as its best. Otherwise it appends a dated lesson.

**Slide 8 (45 words).**
What it cannot do: terminals and canvases, because they draw pixels with no tree. The lock screen, by design. A reboot needs the app opened once. And the emulator numbers are pessimistic, a software GPU. The ratio holds.

**Slide 9 (30 words).**
The model was never the hard part. The screen is the API, and a receipt is not evidence. The code is up. Thank you.

## Live-demo fallback

1. Venue Wi-Fi dies: the phone runs its own hotspot path through Tailscale; switch the laptop to the phone's network and the mirror follows.
2. The lock screen is up: wake it from the mirror page, which answers the capture consent itself. Never type the PIN on stage.
3. The app was rebooted since last opened: open it once before going on stage; the boot receiver is declared but not wired.
4. The agent taps and nothing changes: do not cut. Say "watch the warning", because the empty diff is the thesis demonstrated live.
5. Total failure: the bar chart slide is the talk. The 300x number carries the argument without a phone.

## Closing line

"It fits in your pocket, and it shows its work."