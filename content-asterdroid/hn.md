# asterdroid: HN submission

## Title options

1. Asterdroid: the same Aster binary, running on an Android phone
2. Show HN: Asterdroid, an agent that lives on a phone and answers over Telegram
3. Reading an Android screen in 8 ms instead of 2,470 ms
4. A phone has no shell, so the screen is the API
5. A receipt is not evidence: how the agent proves a tap landed

**Best: 1.** It leads with the artifact and states the one fact that separates it from every phone-agent demo: nothing was reimplemented.

## First comment draft

I wrote this. Asterdroid is Aster, my Rust terminal agent, running on an Android phone. It is not a port. build-agent.sh cross-compiles aster-cli for aarch64-linux-android and ships the binary in the APK as libaster.so. The tools, skills and prompts are the same code that runs in a terminal. You text it over Telegram. It reads the screen through an accessibility service, taps the way a thumb does, and posts a screenshot with every reply.

It started as a measuring rig. Pixel 7 emulator, Android 15. The number that decided the architecture: a screen read through the accessibility service costs about 8 ms end to end. The same read over adb uiautomator dump costs 2,470 ms and returns 28 KB of XML. That is 300x. It is the difference between looking after every action and rationing your glances. Mid-fling reads are p50 21 ms, p95 84 ms. The node tree prunes from 164 nodes to 35 worth keeping, 2.3 KB. The absolute numbers are from an emulator with a software GPU, so they are pessimistic. The ratio is the point.

The model was never the hard part. A phone has no shell, so the screen is the API. The other lesson is about verification. Every action returns two lines: a receipt, then a diff of what changed. The receipt only means the event was accepted. An empty diff prints a warning that says treat it as not done. A receipt is not evidence.
