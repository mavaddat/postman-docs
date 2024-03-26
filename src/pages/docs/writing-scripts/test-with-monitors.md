---
title: "Run API test scripts using Postman Monitors"
order: 91
page_id: "test_with_monitors"
updated: 2023-12-01
search_keyword: "setEnvironmentVariable, postman.setEnvironmentVariable"
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "API Monitoring | The Exploratory"
    url: "https://youtu.be/tDQzY1Hn2LY"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "6 Steps to Enhance Your Audio with a Dolby API and Postman Monitors"
    url:  "https://blog.postman.com/6-steps-enhance-audio-dolby-api/"
  - type: subtitle
    name: "Public workspaces"
  - type: link
    name: "Postman API Monitoring Examples"
    url:  "https://www.postman.com/postman/workspace/e348c5a0-2965-44cc-87ed-7b316516f38d"
warning: false
---

Postman Monitors provide a way to automatically run test scripts and perform other tests at regular intervals. When you [set up a collection-based monitor](/docs/monitoring-your-api/setting-up-monitor/), you choose a collection with the requests and test scripts you want to run, and you specify how frequently Postman runs the collection. You'll be notified if a test fails, and all results are recorded on the [monitor's dashboard](/docs/monitoring-your-api/viewing-monitor-results/).

Below are some ways you can use collection-based monitors to test your APIs and ensure they're functioning correctly.

> For examples of monitors in action, visit the [Postman API Monitoring Examples public workspace](https://www.postman.com/postman/workspace/postman-api-monitoring-examples/overview) to find example collections for some common monitoring use cases. You can collaborate on the collections in the workspace by [creating a fork](/docs/collaborating-in-postman/using-version-control/forking-elements/#create-a-fork), or modify the collections for your team's use by [exporting and importing them into your team workspace](/docs/getting-started/importing-and-exporting/importing-and-exporting-overview/).

## Monitoring an API endpoint

To monitor a specific endpoint, create a collection with different variants of the same endpoint in different requests. The idea here is to test responses for each variant, so as to cover the endpoint completely. To learn more about testing requests, see [Writing tests](/docs/writing-scripts/test-scripts/).

## Monitoring an entire API

This is similar in approach to monitoring a specific endpoint, with the subtle difference of storing the common API host in an environment variable, such that the requests across different API endpoints differ in their path, among other request parameters. Such a sequence also makes it possible to chain data across requests, which allows testing an entire API as a whole.

## Running API tests

In an API where various endpoints are interlinked, precise knowledge about their functioning is crucial. In cases where data is passed from one request to another, the entire response, or a part of it, can be saved as an environment variable. Pay extra attention while setting non-atomic values (like objects and arrays), since the original value will be lost. Instead, such complex objects and arrays can be handled as follows:

```js
// set the value
postman.setEnvironmentVariable('complexObj', JSON.stringify(myComplexObjOrArray, null, 2));

// Fetch the value
var foo;
try {
    foo = JSON.parse(postman.getEnvironmentVariable('complexObj'));
}
catch (e) {
    console.error(e);
    foo = { __parseError: true };
}
if (foo.__parseError) {
    // handle parse errors here
}
```

With the stringified nested value in place, it can be passed to subsequent requests, for instance, as a request body.

## Monitoring HTTP response codes

Response code tests can be done by checking the value of `responseCode.code` within test scripts.

```js
pm.test('Request resulted in 200 OK', () => pm.response.to.have.status(200));
```

## Monitoring latency

As an alternative to request timeouts, website response latency can be monitored by comparing values of the `responseTime` variable within test scripts.

```js
pm.test('Response latency is acceptable', () => pm.expect(pm.response.responseTime).to.be.lte(1000));
// responseTime is in milliseconds
```
