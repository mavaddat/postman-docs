---
title: "Pin variables in Postman Flows"
updated: 2024-02-15
early_access: true
plan: beta
---

You can pin variables in Postman Flows so they keep their values across loop iterations. When a variable is pinned, its value persists until it receives a new value. When a variable is unpinned, you can update or reinitialize its value with each iteration or run of the Flow.

<img alt="Pinned variable" src="https://assets.postman.com/postman-docs/v10/pinned-variable-v10.jpg" width="127px"/>

Unpinned variables offer flexibility for Flows that use dynamic data processing, so that each iteration or run can adapt based on new inputs or changes in the workflow context. Unpinning is useful in loops where each pass requires fresh data or where the variable's value is updated often.

A pinned variable that is defined outside of a loop retains the same value in every iteration of the loop. But the value of a pinned variable that is defined and used inside a loop can change, because the variable is destroyed and recreated with each iteration of the loop.
