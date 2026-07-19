---
title: "Harness Engineering: Regulation Categories"
date: "2026-07-16"
summary: "A harness is control over scarce runtime resources and a taxonomy for how things fail: budgets, boundaries, and the eight failure types you have to be able to name."
tags: ["AI", "Agents", "Harness Engineering"]
series:
  name: "Harness Engineering"
  order: 4
status: "draft"
---

A harness is not just parts, it is control over scarce runtime resources. The paper treats context budget, tool budget, verification evidence, the permission boundary, human attention, and even an entropy budget as things you actively manage, not things you leave implicit and hope for the best.

## Safety is a boundary, not a request

This is also where safety lives, and safety is a design decision, not a hope. A permission boundary is the harness deciding what the agent simply cannot do: run untrusted code with no network, cap its memory, let nothing it touches outlive the request. The model never gets the choice to phone home because the boundary never gave it the option. **You do not make an agent safe by asking it nicely in the prompt. You make it safe by building a harness where the unsafe action does not exist.**

## Name the failure before you fix it

When things break, naming the break is the point. The paper sorts failures into a taxonomy of eight: context, tool, feedback, verification, recovery, entropy, model, and unknown. You cannot fix what you cannot attribute, so a good harness classifies the failure before it tries to patch it. A patch aimed at the wrong failure class is how agents spin.
