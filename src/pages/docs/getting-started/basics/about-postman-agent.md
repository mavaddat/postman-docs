---
title: "About the Postman Agent"
updated: 2024-04-29
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Agent for the Postman Web Client | Postman Level Up"
    url:  "https://www.youtube.com/watch?v=6xlJUx2ZMy4&list=PLM-7VG-sgbtC5tNXxd28cmePSa9BYwqeU&index=3"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Introducing the Postman Agent: Send API Requests from Your Browser without Limits"
    url: "https://blog.postman.com/introducing-the-postman-agent-send-api-requests-from-your-browser-without-limits/"
---

The Postman Agent enables you to send API requests when you're using the [Postman web app](/docs/getting-started/installation/installation-and-updates/#use-the-postman-web-app). The Postman Agent is required to bypass the cross-origin resource sharing (CORS) limitations of web browsers. Postman has four agents you can choose from.

You can use the Desktop Agent to send all types of API requests from the Postman web app without CORS limitations. You can also use the Cloud Agent, the Browser Agent, or the Interceptor Agent to send HTTP requests. The Postman web app can automatically select the best agent for your requests, or you can manually select an agent.

> **Postman recommends installing the [Postman desktop app](/docs/getting-started/installation/installation-and-updates/).** The Postman desktop app offers the full Postman experience, with no limitations when sending requests.

## Contents

* [Available Postman Agents](#available-postman-agents)
    * [Postman Desktop Agent](#postman-desktop-agent)
    * [Postman Cloud Agent](#postman-cloud-agent)
    * [Postman Interceptor Agent](#postman-browser-agent)
    * [Postman Browser Agent](#postman-browser-agent)
* [Compare Postman Agents](#compare-postman-agents)
* [Select a Postman Agent for requests](#select-a-postman-agent-for-requests)

## Available Postman Agents

Postman has four different agents you can use to send API requests, depending on your needs.

### Postman Desktop Agent

The Desktop Agent is an application that runs locally on your computer. It enables API requests to originate in your web browser but get routed through your local machine and network. This enables the Postman web app to bypass the CORS limitations of browsers.

When you [select the Desktop Agent](#select-a-postman-agent-for-requests), you'll be prompted to download the agent if it's not already installed. Select **Download Desktop Agent** to download the agent, or download it from [the Postman Agent page](https://www.postman.com/downloads/postman-agent/). Run the downloaded file to install the agent.

You can use the Desktop Agent to send all types of API requests supported by Postman, including HTTP, WebSocket, Socket.io, gRPC, MQTT, and GraphQL requests.

> The Postman Desktop Agent doesn't support the Safari web browser. You must use a different web browser or agent.

### Postman Cloud Agent

The Cloud Agent enables API requests to originate in your web browser but get routed through Postman's secure cloud servers. This enables the Postman web app to bypass the CORS limitations of browsers.

You can use the Cloud Agent to send HTTP requests. You can't use the Cloud Agent to send WebSocket, Socket.io, gRPC, MQTT, or GraphQL requests. Because the Cloud Agent uses Postman's cloud servers, it can't access private or local resources on your network when sending requests.

> Your [Postman Plan](https://www.postman.com/pricing/) gives you a limited number of requests that can be sent using the Cloud Agent each month. Learn more about [resource usage in Postman](/docs/billing/resource-usage/#cloud-agent-usage).

### Postman Interceptor Agent

[Postman interceptor](/docs/sending-requests/capturing-request-data/interceptor/) is a browser extension you can use to capture and inspect API traffic in Postman. You can also use Interceptor to send HTTP requests from the Postman web app and avoid the CORS limitations of web browsers. Using the Interceptor Agent is a good option if you want to use Safari, or if you can’t install applications (like the Desktop Agent app) on your system.

When you [select the Interceptor Agent](#select-a-postman-agent-for-requests), you'll be prompted to install the agent if it's not already installed. Select **Install Interceptor Agent** to install the agent in your web browser (Chrome, Safari, Firefox, or Edge), or refer to the [Postman Interceptor installation instructions](/docs/sending-requests/capturing-request-data/interceptor/#installing-interceptor).

You can use the Interceptor Agent to send HTTP requests. You can't use the Interceptor Agent to send WebSocket, Socket.io, gRPC, MQTT, or GraphQL requests.

The Interceptor Agent doesn't support using [CA, self-signed, or client certificates](/docs/sending-requests/authorization/certificates/). If you select the Interceptor Agent, the following [request settings](/docs/sending-requests/create-requests/request-settings/) aren't available:

* Enable SSL certificate verification
* Use server cipher suite during handshake
* Protocols disabled during handshake
* Cipher suite selection

### Postman Browser Agent

You can use the Browser Agent to send HTTP requests. You can't use the Browser Agent to send WebSocket, Socket.io, gRPC, MQTT, or GraphQL requests. You may experience the CORS limitations of browsers when using the Browser Agent.

## Compare Postman Agents

To have Postman automatically select the best agent for sending requests, choose the **Auto-select** option. Or use the following table to help you choose the best agent for your needs:

| Postman Agent         | Description                                                                                 |
|-----------------------|---------------------------------------------------------------------------------------------|
| **Desktop Agent**     | &#x2714; Recommended for most users<br><br>&#x2714; Avoids CORS issues<br><br>&#x2714; Send HTTP, GraphQL, gRPC, WebSocket, Socket.IO, and MQTT requests<br><br>&#x2714; Requires installing the Desktop Agent app<br><br>&#x2714; Safari browser isn't supported                           |
| **Cloud Agent**       | &#x2714; Avoids CORS issues<br><br>&#x2714; No installation required<br><br>&#x2714; Send HTTP requests only<br><br>&#x2714; Can't access private or local network resources<br><br>&#x2714; Usage limits based on your Postman plan                               |
| **Interceptor Agent** | &#x2714; Avoids CORS issues<br><br>&#x2714; No need to install a separate desktop app<br><br>&#x2714; Send HTTP requests only<br><br>&#x2714; Can't use CA, self-signed, or client certificates |
| **Browser Agent**     | &#x2714; No installation required<br><br>&#x2714; Send HTTP requests only<br><br>&#x2714; May encounter CORS issues when sending requests                                             |

## Select a Postman Agent for requests

1. In the [Postman web app](/docs/getting-started/installation/installation-and-updates/#use-the-postman-web-app), select **Auto-select agent**, **Cloud Agent**, **Desktop Agent**, **Browser Agent**, or **Interceptor Agent** from the Postman footer.
1. Select the agent you want to use for sending requests:

    * Turn on the **Auto-select** toggle to have Postman automatically select the best available agent. Postman selects agents in the following order: Desktop, Cloud, Interceptor, and Browser.

        > You must install and launch the [Desktop Agent app](#postman-desktop-agent), or install the [Interceptor Agent browser extension](#postman-interceptor-agent), to make these options available for auto-selection.

    * Turn off the **Auto-select** toggle and select the agent you want to use (select **Other Agents** to see all options):

        * **[Cloud Agent](#postman-cloud-agent)** - Send HTTP requests using Postman's cloud servers.
        * **[Desktop Agent](#postman-desktop-agent)** - (Recommended) Send requests using the Postman Desktop Agent app.
        * **[Browser Agent](#postman-browser-agent)** - Send HTTP requests using your browser, with CORS limitations.
        * **[Interceptor Agent](#postman-interceptor-agent)** - Send HTTP requests using the Postman Interceptor browser extension.

    <img alt="Select agent" src="https://assets.postman.com/postman-docs/v11/select-agent-for-requests-v11.jpg" width="451">

1. Send your request and view the response in the workbench.

> If you send a request and it isn't successful because the best agent isn't selected, you can use the provided link in the response area to switch to the recommended agent and send your request again.
>
><img alt="Select agent" src="https://assets.postman.com/postman-docs/v11/postman-agent-error-v11.jpg">
