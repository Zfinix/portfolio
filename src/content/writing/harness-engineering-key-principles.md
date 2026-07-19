---
title: "Harness Engineering: Key Principles"
date: "2026-07-16"
summary: "Five principles that hold a harness up: explicit resources, traceable mediation, requirement-level verification, attribution before recovery, and entropy awareness."
tags: ["AI", "Agents", "Harness Engineering"]
series:
  name: "Harness Engineering"
  order: 6
status: "draft"
---

Five principles hold the whole thing up, and they read like hard-won lessons more than theory:

- **Explicit runtime resources**: expose what the agent is spending, do not leave it implicit.
- **Traceable mediation**: record every selection and decision the harness makes.
- **Requirement-level verification**: bind "done" to a deterministic check, never to the model's own say-so.
- **Attribution before recovery**: diagnose the failure before you re-edit anything.
- **Maintenance and entropy awareness**: track the residue and the slow degradation a long run leaves behind.

If I had to compress it further: order first, cleverness later, and system first, model second. Most of the failures I have watched come from breaking one of these quietly, usually the third one, letting the model declare victory instead of proving it.
