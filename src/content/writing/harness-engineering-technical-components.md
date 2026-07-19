---
title: "Harness Engineering: Technical Components"
date: "2026-07-16"
summary: "The concrete pieces of a harness and the artifacts they emit: eleven responsibilities, the traces they produce, the outcome labels, and the metrics they make measurable."
tags: ["AI", "Agents", "Harness Engineering"]
series:
  name: "Harness Engineering"
  order: 7
status: "draft"
---

In practice the harness is a set of responsibilities, and each one produces an artifact. The task interface emits a task record. The context manager emits a context trace. The tool registry emits a tool trace. Then memory references, a task-state file, an observation log, an attribution log, a verification trace, a permission record, an entropy audit, and an intervention log every time a human has to step in.

## The episode package

Bundle those together and you get an episode package: a full trace of what happened, ending in an outcome label. The labels are blunt on purpose, from `autonomous_verified_success` down through `assisted_verified_success`, `unverified_success`, `failed`, and `unsafe_invalid`. **A harness turns a run into an audit trail.**

## What that makes measurable

Once every run leaves a trace, you can actually measure the harness instead of guessing. The autonomous verified success rate tells you how often the system finished a task correctly with no human help. The missing-harness intervention rate tells you how often a human had to rescue a gap in the harness itself. Those two numbers, plus tool recovery rate and failure-attribution completeness, are how you tell whether a change to the harness helped or just moved the problem.
