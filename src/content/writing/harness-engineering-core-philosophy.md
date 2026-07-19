---
title: "Harness Engineering: Core Philosophy"
date: "2026-07-16"
summary: "The one move the whole discipline rests on: stop treating the model as the agent, and treat the agent as a model, harness, and environment system whose job is a verifiable change."
tags: ["AI", "Agents", "Harness Engineering"]
series:
  name: "Harness Engineering"
  order: 2
status: "draft"
---

Everything in this series hangs on one move: stop treating the model as the agent, and start treating the agent as a system. Zhong and Zhu write it as a rough equation, where a system's capability is a function of the model, the harness, the environment, and the task:

`C_system = F(C_model, C_harness, C_environment, T)`

Read it plainly and it says the model is one term of four. **A capable model with a bad harness is a brain with no hands.** A modest model with a great harness can be dependable enough to trust with real work.

## From claim to evidence

The other half of the philosophy is about proof. In a good harness, "done" is not something the model asserts. It is an evidentiary object, produced by the system and checkable by a human. That single shift, from claim to evidence, is what separates a demo from something you would let touch production.

## The autonomy gap

There is a name for the thing a harness closes. The autonomy gap is the distance between what a model can do in the small, a function here, a test there, and what it can actually finish on its own without a human stepping in.

Every time a human has to intervene, it points at a missing part of the harness. Zhong and Zhu call that signal missing-harness human intervention, and it is diagnostic: it tells you exactly which runtime support was absent when the agent got stuck.
