---
title: "Create and use a mock server using the Postman API"
updated: 2022-11-10
search_keyword: "x-mock-response-code, x-mock-response-name, x-mock-response-id, x-mock-match-request-body, x-mock-match-request-headers, x-mock-response-delay"
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Intro to the Postman API | Postman Level Up"
    url: "https://youtu.be/iEtsp6o4AJg"
---

Setting up a [mock server](/docs/designing-and-developing-your-api/mocking-data/setting-up-mock/) enables you to simulate the behavior of a real API for development or testing purposes. In Postman, you [mock a collection](/docs/designing-and-developing-your-api/mocking-data/mocking-with-examples/) by adding examples and creating a mock server. You can also automate the process of setting up a mock server using the [Postman API](https://www.postman.com/postman/workspace/postman-public-workspace/documentation/12959542-c8142d51-e97c-46b6-bd77-52bb66712c9a). Follow the steps below to get a hands-on demonstration of how to mock a collection with the Postman API.

## Contents

* [Step 1: Set up a collection for mocking](#step-1-set-up-a-collection-for-mocking)
* [Step 2: Retrieve the collection ID](#step-2-retrieve-the-collection-id)
* [Step 3: Create a mock server with the Postman API](#step-3-create-a-mock-server-with-the-postman-api)
* [Step 4: Get the mock server URL](#step-4-get-the-mock-server-url)
* [Step 5: Send a request to the mock server](#step-5-send-a-request-to-the-mock-server)
* [Adding optional request headers](#adding-optional-request-headers)

## Step 1: Set up a collection for mocking

In Postman, [create a new collection](/docs/collections/using-collections/) called `testAPI`. Optionally, you can also [create a new environment](/docs/sending-requests/variables/managing-environments/) called `testAPIEnv`. For this demonstration, you will set up a mock server that enables you to simulate each endpoint in the `testAPI` collection and view their responses.

[Add a new request](/docs/sending-requests/create-requests/create-requests/) to the `testAPI` collection. In the example below, the collection has one request called `Request 1` that sends a `GET` request to `https://postman-echo.com/get?test=123`. Feel free to add more requests if you like.

To send the request, open the first request in the collection and select **Send**. Then, in the response pane, select <img alt="Save icon" src="https://assets.postman.com/postman-docs/icon-save.jpg#icon" width="16px"> **Save as Example**. Repeat this process for each request in the collection. Your mock server uses these [saved examples](/docs/sending-requests/response-data/examples/) to return mock data.

<img alt="Response saved as an example" src="https://assets.postman.com/postman-docs/v10/mock-api-saved-example-v10.jpg" width="893px">

> You can [edit an example](/docs/sending-requests/response-data/examples/#editing-an-example) to include the specific response body, header, or status code that you want the mocked endpoint to return. A request can have more than one example, in which case the mock server will follow a [matching algorithm](/docs/designing-and-developing-your-api/mocking-data/matching-algorithm/) to decide which example to return.

## Step 2: Retrieve the collection ID

To mock a collection using the Postman API, you first need to know the collection ID. You can retrieve the ID of the `testAPI` collection using the [GET All Collections](https://documenter.getpostman.com/view/12959542/UV5XjJV8#fa95fa93-5aa8-4146-94a6-bfebc1a578b4) endpoint of the Postman API. If you created an environment, you also need to retrieve its ID using the [GET All Environments](https://documenter.getpostman.com/view/12959542/UV5XjJV8#b7ace502-4a5a-4f1c-8164-158811bbf236) endpoint.

### Get the collection ID

Create a new request in Postman, leave `GET` selected for the method, and enter the following URL: `https://api.getpostman.com/collections`.

If you send the request, you'll receive an authentication error. To [authenticate with the Postman API](/docs/developer/postman-api/authentication/), add an `x-api-key` header to your request and sets its value to your Postman API key. (You can [generate a new Postman API key](/docs/developer/postman-api/authentication/#generate-a-postman-api-key) if you don't already have one.)

Select **Send** to send the `GET All Collections` request. The response pane displays a list of all your collections. Search for the `testAPI` collection and locate the `uid` value. You will use this collection ID in the next step.

<img alt="Getting the collection ID" src="https://assets.postman.com/postman-docs/v10/mock-api-get-collection-id-v10-2.jpg" width="750px">

> You can also find the collection ID in Postman. First, select **Collections** in the sidebar and select the `testAPI` collection. Then select the information icon <img alt="Information icon" src="https://assets.postman.com/postman-docs/icon-information-v9-5.jpg#icon" width="16px"> in the right sidebar to access the collection ID.

### Get the environment ID

Create a new request in Postman, leave `GET` selected for the method, and enter the following URL: `https://api.getpostman.com/environments`.

Make sure to add an `x-api-key` header with your Postman API Key, and then select **Send**. The response pane displays a list of all your environments. Search for the `testAPIenv` environment and locate the `uid` value.

<img alt="Getting the environment ID" src="https://assets.postman.com/postman-docs/v10/mock-api-environment-id-v10-2.jpg" width="750px">

> You can also find the environment ID in Postman. First, select **Environments** in the sidebar and select the `testAPIenv` environment. Then select the information icon <img alt="Information icon" src="https://assets.postman.com/postman-docs/icon-information-v9-5.jpg#icon" width="16px"> in the right sidebar to access the environment ID.

## Step 3: Create a mock server with the Postman API

After getting the collection ID (and optionally the environment ID), you can use the [POST Create Mock](https://documenter.getpostman.com/view/12959542/UV5XjJV8?_ga=2.100201950.1771040895.1644854022-1154140310.1627600155#296628ed-d49b-4206-b4a7-d622e693945c) endpoint to create a mock server.

First, create a new request in Postman, select `POST` for the method, and enter the following URL: `https://api.getpostman.com/mocks`.

Next, add the following **raw** JSON code to the **Body** tab of the request, substituting your collection ID and environment ID:

```JSON
{
  "mock": {
    "name": "testAPImock",
    "collection": "<your-collection-id>",
    "environment": "<your-environment-id>"
  }
}
```

> By default, mock servers are public and can receive requests from anyone and anywhere (such as a browser, application code, or a `curl` command). If you don't want the mock server to be public, add the line `"private": true` to the request body.

As always, make sure to add an `x-api-key` header with your Postman API Key. When ready, select **Send** to send the request to the Postman API and create the mock server.

<img alt="Creating a mock server" src="https://assets.postman.com/postman-docs/v10/mock-api-create-mock-v10-2.jpg" width="750px">

## Step 4: Get the mock server URL

To send a request to your mock server, you need to know the mock server URL. You can retrieve the mock server URL using the [GET All Mocks](https://documenter.getpostman.com/view/12959542/UV5XjJV8?_ga=2.100201950.1771040895.1644854022-1154140310.1627600155#52a729a4-4a36-46e5-bfdf-fda0af228d2f) endpoint. Create a new request in Postman, leave `GET` selected for the method, and enter the following URL: `https://api.getpostman.com/mocks`.

Add an `x-api-key` header with your Postman API Key, and then select **Send**. The response pane displays a list of all your mock servers. Search for the `testAPImock` mock server and locate the `mockUrl` value. You'll use this URL to send a request to the mock server.

<img alt="Getting the mock server URL" src="https://assets.postman.com/postman-docs/v10/mock-api-mock-url-v10-2.jpg" width="750px">

> You can also find the mock server URL in Postman. Select **Mock Servers** in the sidebar, select the `testAPI` mock server, and then select **Copy URL**.

## Step 5: Send a request to the mock server

You are ready to simulate requests using your collection. To send a request to the mock server, use the mock server URL and append the request path: `{{mockURL}}/path`.

Try this yourself by simulating `Request 1` in the `testAPI` collection. Create a new request in Postman, leaving `GET` selected for the method. For the request URL, enter your mock server URL and append the path from the request:

`https://<your-mock-server-url>/get?test=123`

There's no need to add an `x-api-key` header, as the mock server is public, so select **Send** to send the request. The response pane shows the response from the mock server.

<img alt="Sending a request to the mock server" src="https://assets.postman.com/postman-docs/v10/mock-api-mock-response-v10-2.jpg" width="750px">

Notice that the response is the same as the example you saved for `Request 1`. That's because the mock server uses the example to create a response. If you added more requests and examples to the collection, send them to the mock server using the mock server URL and the request path.

## Adding optional request headers

Postman mock servers accept optional headers you can use to customize how the mock server responds to requests. Using these headers, you can specify which saved examples the mock server will return. Without these headers, the mock server will follow a [matching algorithm](/docs/designing-and-developing-your-api/mocking-data/matching-algorithm/) to decide which example to return in a response.

To add a custom header to a request, open the request and select the **Headers** tab. Enter the custom header in the **KEY** field and then enter a **VALUE** for the header. You can type `x-mock` in the **KEY** field to see a list of the available mock server headers.

<img alt="Sending a request to the mock server" src="https://assets.postman.com/postman-docs/v10/mock-server-custom-headers-v10-2.jpg" />

### Matching a response code

Use the header `x-mock-response-code` to specify the HTTP response code the returned response will match. For example, `500` will return an example with the HTTP 500 response.

### Matching a response name or ID

Use the headers `x-mock-response-name` or `x-mock-response-id` to specify the exact response you want the mock server to return by matching the `id` or the `name` of the saved example. You can get the example response `id` or `name` by using the Postman API to [GET a Single Collection](https://documenter.getpostman.com/view/12959542/UV5XjJV8?&_ga=2.100400478.1771040895.1644854022-1154140310.1627600155#a6a282df-907e-438b-8fe6-e5efaa60b8bf) and searching for your example in the response.

> **Make sure to use unique names for all saved examples in the mocked collection.** If more than one example in the collection has the same name, you may not get the expected response when using the `x-mock-response-name` header. Alternatively, you can use the `x-mock-response-id` header to get the correct response.

### Matching a request body or header

Use the headers `x-mock-match-request-body` or `x-mock-match-request-headers` to specify the exact response you want the mock server to return by matching the headers or body of the saved example.

* To enable request body matching, set the value of `x-mock-match-request-body` to `true`.

* To enable request header matching, include the header `x-mock-match-request-headers` and set its value to a comma-separated string of header keys that you want to match in the saved examples. Header matching isn't case-sensitive.

> You can also enable body and header matching in the [mock server configuration](/docs/designing-and-developing-your-api/mocking-data/setting-up-mock/#matching-request-body-and-headers).

### Setting a custom response delay

Use the header `x-mock-response-delay` to add a delay to the response from the mock server. You can specify a value from `1` to `180000` milliseconds. After receiving the request, the mock server waits the specified period of time before sending the response.

> You can also specify a delay in the [mock server configuration](/docs/designing-and-developing-your-api/mocking-data/setting-up-mock/#editing-the-mock-server-configuration). The delay value set by the `x-mock-response-delay` header takes precedence over the value set in the mock server configuration.
