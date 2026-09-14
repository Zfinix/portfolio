# Thread: The Screen Is the API

## Tweets

1. I put my terminal agent on an Android phone. The model was never the hard part. A phone has no shell, so the screen is the only interface, and an agent that cannot prove an action landed is just guessing.

2. First, what it is not. Asterdroid is not a port and not a subset. The same aster-cli binary, cross-compiled for aarch64-linux-android, shipped in the APK as libaster.so. The tools, skills and prompts are the code that runs in my terminal.

3. The agent needs a body. asterctl is a small Rust client that talks to an accessibility service over an abstract unix socket, @aster-eyes. No file on disk, no permissions to get wrong. Connecting costs about 150 microseconds, so paying per verb is fine.

4. The unit of work is a tap, not a command. You cannot ask the settings app to turn on Wi-Fi. There is no flag for it. You open the app, find the row, and press it. That is the whole problem, and it is not a model problem.

5. Reading the screen is the decision that shaped everything. Through the accessibility service: 8 ms, 2.3 KB. Over adb uiautomator dump: 2,470 ms, 27,851 bytes of XML. A factor of 300. One agent can look after every action. The other has to ration its glances.

6. The pruning matters as much as the speed. 164 nodes walked, 35 kept. The rest are layout containers with no text and nothing to press. What survives is a numbered list of things that can be acted on.

7. Every action returns two lines. "receipt: posted" means the system took the event. "changed: +32 -30" means the screen actually moved. An empty diff prints a warning: nothing on screen changed, treat as not done.

8. A receipt is not evidence. On a desktop the person sees the window move. Here they see a chat. Anything the agent does not report is invisible, and anything it reports without a picture is a claim. So every screenshot it takes is posted to the chat on its own.

9. Nobody holds the phone, so consent lives in the conversation. Before anything that leaves the device, a call or a message, the agent states the concrete effect in one line and then does it. An explicit instruction is the confirmation.

10. The cross-build took more work than the agent logic. The stock Android target leaves native TLS off, so the embedded Python ran out of pthread keys. The fix is a target spec with two lines in it: tls-model emulated, has-thread-local true.

11. The result is an agent I text over Telegram. It reads the screen, acts, takes a screenshot, and replies. The model was never the hard part. The screen is the API, and a receipt is not evidence.

12. Full write-up, with the measurements and the protocol: [LINK]

## Link card

**OG title:** The Screen Is the API

**OG description:** Running the same Aster binary on an Android phone. No shell, so the screen is the only interface, and a receipt is not evidence.

**Taglines:**

1. The model was never the hard part.
2. A phone has no shell. The screen is the API.
3. An agent that cannot prove an action landed is just guessing.

## Image slots

Attach at most one image per tweet. Must-have: 1, 5, 7, 9. Spec for every shot: `images.md`.

| Tweet | File | What it shows |
| --- | --- | --- |
| 1 | `01-telegram-chat.png` | The bot mid-conversation, agent replying in the chat |
| 3 | `02-verb-list.png` | The verb list: map, find, tap, drag, finger, text, key, scroll, restart |
| 4 | `03-settings-screen.png` | The settings screen the agent saw, mid-task |
| 5 | `04-timing.png` | The 8 ms vs 2,470 ms measurement, terminal or blog chart |
| 6 | `05-pruned-tree.png` | The numbered list of 35 actionable nodes |
| 7 | `06-receipt.png` | "receipt: posted" plus "changed: +32 -30" in one frame |
| 8 | `07-agent-screenshot.png` | A screenshot the agent itself posted to the chat |
| 9 | `08-consent.png` | The one-line consent statement before an action |
| 10 | `09-target-spec.png` | The target spec with tls-model emulated, has-thread-local true |
| 11 | `10-mirror.png` | The live mirror running on the Mac |
