---
title: "Harness Engineering: Five Subsystems"
date: "2026-07-16"
summary: "The five subsystems every harness needs: context, tools, memory, observability, and verification, and the trace each one leaves behind so you can see what it did."
tags: ["AI", "Agents", "Harness Engineering"]
series:
  name: "Harness Engineering"
  order: 3
status: "draft"
---

Birgitta Böckeler splits a harness into guides that steer the agent before it acts and sensors that check its work after. The paper gets more concrete and names five subsystems. Every one of them leaves a trace behind, so you can always see what it did.

- **Context management**: selects and exposes the task-relevant slice of the project. What the model sees.
- **Tool and action interface**: declares the tools and commands available, and records every invocation, including the ones that timed out. What the model can do.
- **Project memory and task state**: holds architecture and testing knowledge, and tracks the hypotheses tried so far. What the model remembers.
- **Observability and failure attribution**: exposes logs and runtime errors, and classifies the failure before anyone tries to recover. How it knows what went wrong.
- **Verification protocol**: maps requirements to deterministic evidence and produces a verification report. How it proves the work is done.

The pattern to notice is that each subsystem does one job and emits one kind of record. That is not bookkeeping for its own sake. It is what makes the difference between an agent that says it did the work and one that can show you.
