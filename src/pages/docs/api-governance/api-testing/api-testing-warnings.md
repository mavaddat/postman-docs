---
title: "Warnings in API requests"
updated: 2022-07-20
---

Postman applies security rules configured for your API requests when you send requests to any API using either the Postman web app or the Postman desktop app. A security warning doesn't mean that your API is broken. Instead, it indicates that there are potential security risks that your API might be vulnerable to. Postman highlights these security warnings and helps you understand their implications and possible ways to patch the warnings.

> **Rule customization**. [Enterprise teams](https://www.postman.com/pricing/) can also customize the rules that Postman applies to API requests. For more information, see [Configuring API Security rules](/docs/api-governance/configurable-rules/configuring-api-security-rules/).

## Viewing security warnings for API requests

When you [send an API request](/docs/sending-requests/create-requests/create-requests/), Postman scans it for potential security risks. If it finds any, Postman adds the number of warnings to the **Security** tab in the response.

<img alt="Security tab showing one warning" src="https://assets.postman.com/postman-docs/v10/api-response-security-tab-v10.jpg" width="900px"/>

To learn about API security warnings and how to hide warnings that aren't relevant to your team, see [Viewing security warnings](/docs/sending-requests/response-data/responses/#viewing-security-warnings).

For the list of all the security warnings that Postman might show for API requests, see [Security warnings](/docs/api-governance/api-testing/security-warnings/).
