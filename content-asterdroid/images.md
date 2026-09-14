# Image spec: The Screen Is the API

Ten shots. You shoot them, they land in `images/` next to this file with the exact filenames below. Tweet slots are mapped at the bottom of `thread.md`.

## Rules for every shot

- Crop tight. No status bar, no notification shade, no other chats in frame.
- No contact names except the bot. No phone number visible anywhere.
- Phone screenshots: power + volume down.
- Terminal shots: crop to the text, dark background is fine.
- PNG only. If a shot has anything in it you would not publish, retake it, do not crop around it.

## 1. `01-telegram-chat.png` — the hook

**Must show:** the bot chat mid-conversation, the agent's reply visible, ideally one inline screenshot the agent posted. This is the "you text it and it acts" proof.

**How:** Telegram, open the @withaster_bot chat, scroll to a recent exchange where it replied to a request, screenshot just that exchange.

## 2. `02-verb-list.png` — the body

**Must show:** the verb list: `map find tap drag finger text key scroll restart`.

**How:** easiest on the Mac: `asterctl --help` in a terminal, screenshot the output. Fallback: the verb table section of the blog post.

## 3. `03-settings-screen.png` — a tap, not a command

**Must show:** a settings screen mid-task, the row the agent was about to press visible.

**How:** best source is a screenshot the agent itself took during a real task, from the Telegram chat. Fallback: open Settings, Network on the phone and screenshot it yourself.

## 4. `04-timing.png` — 8 ms vs 2,470 ms

**Must show:** the comparison, both numbers readable. Strongest image in the set.

**How:** open the blog post at `http://127.0.0.1:4321/blog/the-screen-is-the-api/`, scroll to FIG. 2, the log-scale chart, screenshot the figure panel only.

## 5. `05-pruned-tree.png` — 164 walked, 35 kept

**Must show:** the numbered list of actionable nodes, short enough to read at thumbnail size.

**How:** on the Mac, run a `map` against the phone via asterctl, screenshot the terminal output showing the numbered list.

## 6. `06-receipt.png` — a receipt is not evidence

**Must show:** both lines in one frame: `receipt: posted` and `changed: +32 -30`. Both must be legible.

**How:** from a terminal session running the agent during an action, or from the Telegram chat where it reported one.

## 7. `07-agent-screenshot.png` — the proof loop

**Must show:** a message in the Telegram chat where the bot posted a screenshot of the phone on its own.

**How:** Telegram, bot chat, find a bot message with an inline phone screenshot, screenshot that message.

## 8. `08-consent.png` — consent in the conversation

**Must show:** the agent's one-line statement of what it is about to do, before doing it. The sentence is the image.

**How:** Telegram, bot chat, find the message right before it sent a message or placed a call.

## 9. `09-target-spec.png` — the cross-build

**Must show:** the two load-bearing lines: `tls-model: emulated` and `has-thread-local: true`.

**How:** open the target spec file in the asterdroid repo in your editor, screenshot just those lines with a couple of lines of context.

## 10. `10-mirror.png` — the mirror

**Must show:** the live mirror in a browser tab, the phone screen visible on the Mac.

**How:** start the mirror, screenshot the browser window with the phone feed filling most of the frame.

## If you only shoot a few

**1, 4, 6, 8.** Those four carry the argument alone: the chat, the measurement, the receipt, the consent.
