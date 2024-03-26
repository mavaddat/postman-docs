---
title: "Write pre-request scripts"
order: 42
updated: 2022-07-20
page_id: "pre_request_scripts"
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Pre-request Scripts in Postman | The Exploratory"
    url: "https://youtu.be/1ls5Dr5SOxw"
  - type: link
    name: "Get and Set Variables | Postman Level Up"
    url: "https://youtu.be/EKv6n-jY9lU"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "When and How to Use JSON Serialization in Postman"
    url: "https://blog.postman.com/when-and-how-to-use-json-serialization-in-postman/"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Twitter uses pre-request scripts to create a testing environment"
    url:  "https://www.postman.com/case-studies/twitter/"
  - type: link
    name: "Toast chains requests automatically with pre-request scripts"
    url:  "https://www.postman.com/case-studies/toast/"
warning: false

---

You can use pre-request scripts in Postman to execute JavaScript before a request runs. By including code in the __Pre-request Script__ tab for a request, collection, or folder, you can carry out pre-processing such as setting variable values, parameters, headers, and body data. You can also use pre-request scripts for debugging code, for example by logging output to the Postman Console.

## Contents

* [Pre-request scripting example](#pre-request-scripting-example)
* [Scripting before your request runs](#scripting-before-your-request-runs)
* [Re-using pre-request scripts](#re-using-pre-request-scripts)
* [Next steps](#next-steps)

## Pre-request scripting example

An example usage of pre-request scripting could be as follows:

* You have a series of requests in a collection and are running them in a sequence, such as when using the [collection runner](/docs/collections/running-collections/intro-to-collection-runs/).
* The second request is dependent on a value returned from the first request.
* The value needs to be processed before you pass it to the second request.
* The first request sets the data value from a response field to a variable in its __Tests__ script.
* The second request retrieves the value and processes it in its __Pre-request Script__, then sets the processed value to a variable (which is referenced in the second request, for example in its parameters).

## Scripting before your request runs

To include code you want to execute before Postman sends a request, do the following:

1. Select __Collections__ in the sidebar.
1. Open the request, then select the __Pre-request Script__ tab.
1. Enter the JavaScript you need to process before the request runs, then select __Save__.
1. Select __Send__ to send the request. The code will execute before Postman sends the request to the API.

    ![Pre-Request Code](https://assets.postman.com/postman-docs/pre-request-script-v8.jpg)

## Re-using pre-request scripts

You can add pre-request scripts to entire collections and folders within collections. In both cases, your pre-request script will run before every request in the collection or direct child request in the folder. This allows you to define commonly used pre-processing or debugging steps you need to execute for multiple requests.

> You can define a pre-request script when you first create a collection or folder, or at any time after that.

To add pre-request scripts to a collection or folder, do the following:

1. Select __Collections__ in the sidebar.
1. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px">, then select __Edit__.

    <img src="https://assets.postman.com/postman-docs/edit-collection-action-v8.jpg" alt="Collection Actions" width="300px"/>

1. Select the __Pre-request Scripts__ tab. Enter code that will run before every request in the collection or direct child request in the folder.

   ![Collection pre-request script](https://assets.postman.com/postman-docs/edit-collection-pre-request-v9.jpg)

1. Select __Save__.

## Next steps

After learning the basics of writing pre-request test scripts, you can extend your scripts:

* To learn more about how to use the `pm` object, visit the [Postman JavaScript reference](/docs/writing-scripts/script-references/postman-sandbox-api-reference/).
