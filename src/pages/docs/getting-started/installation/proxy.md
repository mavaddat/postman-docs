---
title: "Configure Postman to use a proxy server"
updated: 2023-07-15
search_keyword: "HTTP_PROXY, NO_PROXY"
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Capture Responses Using the Postman Proxy"
    url: "https://blog.postman.com/capture-responses-using-the-postman-proxy/"
---

A proxy is an intermediary server that sits between a client application (like Postman) and the destination server that the client is communicating with (like an API). The proxy server acts as a security barrier, making requests on your behalf to websites and other internet resources, and preventing others from accessing your internal network.

<img alt="Standard web proxy" src="https://assets.postman.com/postman-docs/proxy-standard-flow.jpg">

By default, the Postman desktop app uses your system's configured proxy to send API requests or access the internet. If needed, you can enter authentication details for the [default proxy](#configuring-the-default-proxy) in the Postman desktop app. You can also configure Postman to use the [system proxy](#using-the-system-proxy-for-requests) or a [custom proxy](#using-a-custom-proxy-for-requests) when sending requests. If you haven't already, [download and install the Postman desktop app](/docs/getting-started/installation/installation-and-updates/) to get started.

> The steps below show how to configure Postman to use a proxy server when sending requests or accessing online resources. If you want to configure Postman's built-in proxy to capture API requests, see [Capturing request data overview](/docs/sending-requests/capturing-request-data/capture-overview/).

## Contents

* [Configuring the default proxy](#configuring-the-default-proxy)
* [Using the system proxy for requests](#using-the-system-proxy-for-requests)
* [Using a custom proxy for requests](#using-a-custom-proxy-for-requests)
* [Troubleshooting proxy configurations](#troubleshooting-proxy-configurations)

## Configuring the default proxy

If you have configured a proxy for your local system, the Postman desktop app uses this proxy by default to send API requests or access any online resources. Learn more about [adding a proxy to your operating system](#i-cant-send-a-request-and-my-network-requires-a-proxy).

> You can't configure the default proxy in the Postman web app. Instead, use the [system proxy](#using-the-system-proxy-for-requests) or a [custom proxy](#using-a-custom-proxy-for-requests) for sending requests.

If the proxy server configured for your system requires basic authentication, add the credentials to the Postman desktop app.

To configure the default proxy, do the following:

1. In the Postman desktop app, select the settings icon <img alt="Settings icon" src="https://assets.postman.com/postman-docs/icon-settings-v9.jpg#icon" width="16px"> in the header and select **Settings**.
1. Select the **Proxy** tab.
1. Under **Default proxy configuration**, select the checkbox next to **This proxy requires authentication**.
1. Enter the **Username** and **Password** required by the proxy server.
1. Select **Save and Restart Postman**.

<img alt="Default proxy" src="https://assets.postman.com/postman-docs/v10/proxy-default-v10-16a.jpg">

## Using the system proxy for requests

If you have configured a proxy for your local system, Postman can use this proxy to send API requests. Learn more about [adding a proxy to your operating system](#i-cant-send-a-request-and-my-network-requires-a-proxy).

To configure Postman to use the system proxy, do the following:

1. Select the settings icon <img alt="Settings icon" src="https://assets.postman.com/postman-docs/icon-settings-v9.jpg#icon" width="16px"> in the header and select **Settings**.
1. Select the **Proxy** tab.
1. Under **Proxy configurations for sending requests**, turn on the toggle next to **Use system proxy**.
1. (Optional) Turn on the toggle if you want Postman to use the `HTTP_PROXY`, `HTTPS_PROXY`, and `NO_PROXY` environment variables configured for your operating system.

> Make sure the **Use custom proxy configuration** toggle isn't turned on. If both the system proxy and custom proxy options are enabled, Postman will use the custom proxy.

<img alt="System proxy" src="https://assets.postman.com/postman-docs/v10/proxy-system-v10-16a.jpg">

## Using a custom proxy for requests

Configure a custom proxy to send API requests using a proxy server other than your system proxy. You can send HTTP requests, HTTPS requests, or both types of requests through the custom proxy.

To configure Postman to use a custom proxy, do the following:

1. Select the settings icon <img alt="Settings icon" src="https://assets.postman.com/postman-docs/icon-settings-v9.jpg#icon" width="16px"> in the header and select **Settings**.
1. Select the **Proxy** tab.
1. Under **Proxy configurations for sending requests**, turn on the toggle next to **Use custom proxy configuration**.
1. Enter information about the custom proxy:

    * **Proxy type** - Select the type of requests you want to send through the proxy server. Both **HTTP** and **HTTPS** are selected by default.
    * **Proxy server** - Enter the hostname or IP address of the proxy server and the port number. (Don't include the protocol before the hostname or IP address.)
    * **Proxy auth** - Turn on this toggle if the proxy server requires basic authentication. Enter the **Username** and **Password** for the proxy server.
    * **Proxy bypass** - Enter a comma-separated list of hosts. Requests sent to these hosts won't use the custom proxy.

<img alt="Custom proxy" src="https://assets.postman.com/postman-docs/v10/proxy-custom-v10-16a.jpg">

## Troubleshooting proxy configurations

If you're having problems sending requests from Postman, see the topics below for help resolving the issue.

> For more help with configuration and request issues, see [Troubleshooting requests](/docs/sending-requests/response-data/troubleshooting-api-requests/).

### I can't send a request and my network requires a proxy

Enable the [system proxy option](#using-the-system-proxy-for-requests) in Postman and make sure the proxy is configured for your operating system.

* **Windows** - Open **Settings**, select **Network & Internet**, and select **Proxy**. Under **Manual proxy setup**, turn on the toggle. Enter the proxy address and port, and then select **Save**.

* **macOS** - Open **System Preferences** and select **Network**. Select your active network connection, select **Advanced**, and select the **Proxies** tab. Select **Web Proxy (HTTP)** and enter the proxy address and port. You can also enter the username and password if needed. Select **OK** and then select **Apply**.

* **Linux** - (These steps may vary depending on your Linux distribution.) Open **Settings**, select **Network**, and turn on the **Network Proxy** option. Select **Automatic** or **Manual**, and then enter the configuration settings for your proxy.

### I can't send a request and my network doesn't require a proxy

In Postman, make sure both the system proxy and custom proxy are turned off.

1. Select the settings icon <img alt="Settings icon" src="https://assets.postman.com/postman-docs/icon-settings-v9.jpg#icon" width="16px"> in the header and select **Settings**.
1. Select the **Proxy** tab.
1. Clear the **Use system proxy** and **Use custom proxy configuration** checkboxes.

If you still can't send requests, the problem might be due to environment variables configured for your operating system. If there are environment variables, Postman will use the system proxy and ignore the proxy settings in Postman. Do one of the following:

* Remove the environment variables `http_proxy`, `https_proxy`, `HTTP_PROXY`, and `HTTPS_PROXY` from your shell profile or operating system configuration.
* Create an executable file using the code for your operating system. Run the file to open the Postman desktop app without any of the proxy environment variables set.

    * **Windows** - Create a `postman.bat` file with the following code:

        ```shell
        set HTTP_PROXY=''
        set HTTPS_PROXY=''
        set http_proxy=''
        set https_proxy=''
        start C:\path\to\Postman.exe
        ```

    * **macOS or Linux** - Create a `postman.sh` file with the following code:

        ```shell
        http_proxy=''
        https_proxy=''
        HTTP_PROXY=''
        HTTPS_PROXY=''
        /path/to/postman
        ```

### The proxy on my system requires basic authentication

Make sure to [configure basic authentication](#configuring-the-default-proxy) for the default proxy in the Postman desktop app.

You can also start Postman with the appropriate environment variables. Create an executable file using the code for your operating system. Run the file to open the Postman desktop app using your proxy configuration.

* **Windows** - Create a `postman.bat` file with the following code:

    ```shell
    set HTTP_PROXY=http://USER:PASS@host:port
    set HTTPS_PROXY=https://USER:PASS@host:port
    start C:\path\to\Postman.exe
    ```

* **macOS or Linux** - Create a `postman.sh` file with the following code:

    ```shell
    HTTP_PROXY=http://USER:PASS@host:port
    HTTPS_PROXY=https://USER:PASS@host:port /path/to/postman
    ```
