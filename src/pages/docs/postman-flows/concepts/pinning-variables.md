---
title: "Pin variables in Postman Flows"
updated: 2024-02-15
early_access: true
plan: beta
---

You can pin variables in Postman Flows so they keep their values across loop iterations. When a variable is pinned, its value persists until it receives a new value. When a variable is unpinned, you can update or reinitialize its value with each iteration or run of the Flow.

<img alt="Pinned variable" src="https://assets.postman.com/postman-docs/v10/pinned-variable-v10.jpg" width="127px"/>

Unpinned variables offer flexibility for Flows that use dynamic data processing, so that each iteration or run can adapt based on new inputs or changes in the workflow context. Unpinning is useful in loops where each pass requires fresh data or where the variable's value is updated often.

If a pinned variable is defined outside of a loop but used inside the loop, each time it's used in the loop, it will have the same value as the variable defined outside the loop. However, if the pinned variable is both defined and used inside the loop, each time it's used in the loop, it will receive a new value.
