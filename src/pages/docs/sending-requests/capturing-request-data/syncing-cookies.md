---
title: "Sync cookies using Postman Interceptor and the Postman proxy"
updated: 2023-08-14
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Syncing Cookies for Authentication | Postman Level Up"
    url: "https://www.youtube.com/watch?v=jfgFNw5SoUg"
  - type: link
    name: "Postman Interceptor Demo"
    url: "https://youtu.be/Swjims0aOl4"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Enhanced HTTP Traffic Capture and Analysis in Postman"
    url: "https://blog.postman.com/http-traffic-capture-and-analysis-in-postman/"
---

Postman enables you to capture and sync cookies from a browser or client application. You can sync cookies using either the Postman proxy or Postman Interceptor at any time, without starting a [proxy or Interceptor session](/docs/sending-requests/capturing-request-data/capture-overview/).

Once configured, Postman continuously captures cookies from the browser or client applications. For the domains you specify, captured cookies are automatically synced to your Postman cookie jar. You can then [use the cookies](/docs/sending-requests/response-data/cookies/) when sending requests from Postman.

> You can't sync cookies with the [Postman web app](/docs/getting-started/installation/installation-and-updates/#web-limitations). Make sure you've installed the [Postman desktop app](/docs/getting-started/installation/installation-and-updates/).

<!-- -->

> You can also capture requests and cookies during a proxy or Interceptor session. Learn more about capturing requests and cookies with the [Postman proxy](/docs/sending-requests/capturing-request-data/capturing-http-requests/) or [Postman Interceptor](/docs/sending-requests/capturing-request-data/interceptor/).

## Contents

* [Syncing cookies with Postman Interceptor](#syncing-cookies-with-postman-interceptor)
    * [Syncing cookies from the Interceptor extension](#syncing-cookies-from-the-interceptor-extension)
* [Syncing cookies with the Postman proxy](#syncing-cookies-with-the-postman-proxy)

## Syncing cookies with Postman Interceptor

Postman Interceptor is a browser extension that captures network requests directly from a web browser and saves them to Postman. You can use Interceptor to continuously sync the cookies in your browser to the [Postman cookie jar](/docs/sending-requests/response-data/cookies/). You can then use the synced cookies when sending requests in Postman.

> The cookie jar always has the latest value for a given cookie. If you need to observe how cookie values change during a request flow, start an [Interceptor session](/docs/sending-requests/capturing-request-data/interceptor/).

To sync cookies using the Postman Interceptor, do the following:

1. Install the Postman Interceptor extension by following the steps in [Installing Interceptor](/docs/sending-requests/capturing-request-data/interceptor/#installing-interceptor).

1. Select <img alt="Cookies icon" src="https://assets.postman.com/postman-docs/icon-cookies.jpg#icon" width="16px"> **Cookies** in the Postman footer.
1. In the **Cookies** window, select the **Sync Cookies** tab and select the **Interceptor** option.

    > Make sure you get the message **Connected**. If you get the message **Disconnected**, make sure your browser is open and the [Interceptor extension is installed](/docs/sending-requests/capturing-request-data/interceptor/#installing-interceptor).

1. Enter one or more **Domains**. Postman will sync cookies for the specified domains to the cookie jar.

    > Adding a domain automatically syncs cookies for its subdomains as well. For example, adding the domain `example.com` will also sync cookies from `m.example.com`. To sync cookies for the domain only, you can add `https://` in front of the domain, such as `https://example.com`.

1. Select **Start Syncing**.

<img alt="Sync cookies with Interceptor" src="https://assets.postman.com/postman-docs/cookies-interceptor-capture-v9-15.jpg" width="848px"/>

Postman is ready to capture and sync cookies using Interceptor.

* Cookies for the domains you specified are automatically synced from your browser to Postman.
* To stop syncing cookies for a domain, select <img alt="Close icon" src="https://assets.postman.com/postman-docs/icon-close.jpg#icon" width="16px"> next to the domain name.
* To stop capturing and syncing all cookies, select **Stop Syncing**.

### Syncing cookies from the Interceptor extension

You can also use the Interceptor extension to automatically sync cookies from your browser to the Postman cookie jar, without starting an Interceptor session.

Open the Interceptor extension from your browser's toolbar and select the **Sync Cookies** tab. Enter the domains you want to sync cookies for and select **Sync Cookies**. For more information, see [Using Postman Interceptor](/docs/sending-requests/capturing-request-data/interceptor/).

<img alt="Sync cookies with the Interceptor extension" src="https://assets.postman.com/postman-docs/v10/interceptor-sync-cookies-v10-17.jpg" width="462px"/>

## Syncing cookies with the Postman proxy

A proxy acts as an intermediary between a client application (like a mobile app) and a server (like an API). You can use Postman's built-in proxy to capture any cookies passing between a client and a server. The captured cookies are synced to the [Postman cookie jar](/docs/sending-requests/response-data/cookies/) for later use.

> The cookie jar always has the latest value for a given cookie. If you need to observe how cookie values change during a request flow, start a [proxy session](/docs/sending-requests/capturing-request-data/capturing-http-requests/).

To sync cookies using the Postman proxy, do the following:

1. Select <img alt="Cookies icon" src="https://assets.postman.com/postman-docs/icon-cookies.jpg#icon" width="16px"> **Cookies** in the Postman footer.
1. In the **Cookies** window, select the **Sync Cookies** tab and select the **Proxy** option.
1. Enter a **Port** number. The default value is `5559`. You will use this port number when configuring clients.

    > You can't change the port number while the proxy is enabled.

1. Turn on the toggle next to **Enable Postman as a proxy**.
1. Enter one or more **Domains**. Postman will sync cookies for the specified domains to the cookie jar.

    > Adding a domain automatically syncs cookies for its subdomains as well. For example, adding the domain `example.com` will also sync cookies from `m.example.com`. To sync cookies for the domain only, you can add `https://` in front of the domain, such as `https://example.com`.

1. Select **Start Syncing**.

<img alt="Capture cookies with the proxy" src="https://assets.postman.com/postman-docs/cookies-proxy-capture-v9-14.jpg" width="848px"/>

Postman is ready to capture and sync cookies using the proxy.

* To start syncing cookies, configure one or more clients to use the Postman proxy. Learn more about [configuring the proxy on a client device](/docs/sending-requests/capturing-request-data/capturing-http-requests/#step-3-configure-the-proxy-on-a-client-device).
* To stop syncing cookies for a domain, select <img alt="Close icon" src="https://assets.postman.com/postman-docs/icon-close.jpg#icon" width="16px"> next to the domain name.
* To stop capturing and syncing all cookies, select **Stop Syncing**.
