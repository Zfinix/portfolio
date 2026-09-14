I put my terminal agent on an Android phone. The model was never the hard part. The screen is the API, and a receipt is not evidence.

Asterdroid is the same Aster binary I run in my terminal, cross-compiled and shipped inside an APK. I text it over Telegram. It reads the screen in about 8 ms and taps it the way a thumb does. Nobody holds the phone.

The hard part was everything around the model. A phone has no shell. There is no command to turn on Wi-Fi, only a settings row with a switch. So the agent reads the screen through an accessibility service instead of a terminal.

That 8 ms figure, measured on a Pixel 7 emulator, decided the architecture. The obvious route, adb uiautomator dump, costs 2,470 ms for the same read. That factor of 300 is why the agent can look after every action instead of rationing its glances.

The other lesson is about proof. Every action returns two lines. The first is the receipt, the acknowledgement that the event was accepted. The second is what actually changed on screen. A receipt only means the system took the event. An empty diff prints a warning: treat as not done. An agent that says it turned off Wi-Fi and did not is worse than one that refuses.

#AI #Android #Agents #Rust

Read the full post: [LINK]
