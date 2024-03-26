---
title: "Postman Monitors frequently asked questions"
page_id: "faqs_monitors"
updated: 2022-08-03
search_keyword: "console.log, console.warn"
warning: false
---

## General questions

### What can I test with monitors?

You can [write tests](/docs/writing-scripts/test-scripts/) for collection-based monitors to check for proper behavior, business logic, and error handling.

### How many monitors can I create?

There is no limit to the number of collection-based monitors you can create. You can have any number of collections, each with any number of monitors, and each monitor can run on a different schedule.

### How many regions can my monitor run in?

If you are on a paid plan, you can select one or more geographic regions you'd like your monitor to run in, or have Postman automatically select a region for you. If you are on a free plan, Postman always selects a region for you. If you want to manually select specific regions, [upgrade your Postman plan](https://www.postman.com/pricing)

> If you’re interested in a region that’s not available when creating a monitor, contact the [Postman support team](https://www.postman.com/support/).

### What time zone is my monitor set to?

Your monitor's time zone is automatically set to the time zone of your computer when you create the monitor.

### How long can a monitor run?

Collection-based monitors are limited to a maximum of 10 minutes (Postman Free plans) or 15 minutes (Postman paid plans) for each run. All HTTP requests, responses, pre-request scripts, and test scripts must complete within the time limit or the monitor will time out.

### How do I persist variables between monitor runs?

You can't import existing global variables into a monitor, but you can create new global variables during a run. Global and environment variables can be updated and subsequently used during a monitoring run, however they will immediately revert to their original values. You can change this behavior and persist variable values by using the [Postman API](https://docs.api.getpostman.com/#6517e0d6-3bc3-3da5-ab57-7a578a8504ce) to update your environment each time your monitor runs.

### How many HTTP requests can a monitor send?

For collection-based monitors, there is no limit to the number of requests, but the total runtime can't exceed 10 minutes (Postman Free plans) or 15 minutes (Postman paid plans).

### Can I run a request multiple times?

Collection-based monitors only run one iteration by default, but you can use `setNextRequest()` to run multiple iterations.

### How much data can a monitor send or receive?

There is no specific limit to the amount of data that can be sent or received per request. However, large requests or responses take longer to send and receive. Make sure that all requests can be completed within the time limit of 10 minutes (Postman Free plans) or 15 minutes (Postman paid plans).

### Can I upload data files or attach files to a monitor?

You can upload a data file with sets of values to use as variable inputs when running the monitor, similar to the [collection runner](/docs/collections/running-collections/working-with-data-files/). Data files are limited to 1 MB in size and a maximum of 50 data rows (CSV) or 50 objects (JSON). Learn more about [uploading a data file for a monitor](/docs/monitoring-your-api/setting-up-monitor/#uploading-a-data-file).

Because scheduled collection runs and monitors run in the Postman cloud, you can't attach form data or binary files to requests like you can in the [request builder](/docs/sending-requests/create-requests/parameters/#send-body-data-with-requests). Instead, you can add [raw data](/docs/sending-requests/create-requests/parameters/#raw-data) on the request's **Body** tab to send JSON or other text data with the request.

> A monitor can also use files that can be retrieved by an API from cloud services such as Google Docs or Dropbox.

### Are static IP addresses dedicated to individual customers or shared?

The provided static IP addresses are fixed to their specified region and shared by all customers who enable this feature, which is available to Postman Professional and Enterprise teams. For more information, see [Running Postman Monitors using static IPs](/docs/monitoring-your-api/using-static-IPs-to-monitor/).

### How do I troubleshoot problems?

For collection-based monitors, you can view the full Postman Console output for every monitor run, including any errors. You can also use methods such as `console.log()` and `console.warn()` to output your own debugging information. You can use the `console.clear()` method to clear information from the Console. To learn more, see [Troubleshooting monitors](/docs/monitoring-your-api/troubleshooting-monitors/).

> For your security and privacy, Postman doesn't log request or response bodies in the Console. Postman also doesn't log headers, as they may include items like cookies and authorization keys.

## Security

### Who can see my monitors?

A monitor is visible to all users who have access to the workspace the monitor was created in. To learn more, see [Using and managing workspaces](/docs/collaborating-in-postman/using-workspaces/managing-workspaces/).

### Who can edit my monitors?

Monitors can be edited in their respective workspace by members who have been granted [Editor permissions](/docs/collaborating-in-postman/roles-and-permissions/) on the monitor. To review or manage which team members have Editor or Viewer permissions on a specific monitor, open your workspace and select **Monitors** in the sidebar. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to a monitor, and then select **Manage Roles**.

### Can I move a monitor?

Monitors can't be moved between workspaces. If you move a collection out of the workspace where its associated monitor is located, the monitor is paused. To learn more, see [Moving elements to workspaces](/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#moving-elements-to-workspaces).

### Can I delete a monitor?

You can delete a monitor at any time. Once deleted, all run history for the monitor is deleted too. If you want to retain the history, pause the monitor instead of deleting it.

### Where do monitors run?

Monitors run on Postman's cloud infrastructure, which is hosted by Amazon Web Services (AWS). More information about Postman's cloud infrastructure is available on the [Security overview](https://www.postman.com/trust/security/).

### Can monitors access private networks?

Because monitors run in the Postman cloud, all URLs must be publicly available on the internet. A monitor can't directly access your `localhost` or run requests behind a firewall. Also, you can't monitor APIs that run on private networks, VPNs, or corporate intranets. For collection-based monitors, you can [use static IPs](/docs/monitoring-your-api/using-static-IPs-to-monitor/) to overcome this issue. Static IPs are available on [Postman Professional and Enterprise plans](https://www.postman.com/pricing).

### Will monitors impact my API performance?

To limit the impact of monitor activity on your API, you can configure which of your API endpoints are called as well as how often they're called. Postman also restricts each monitor’s total runtime to 10 minutes (Postman Free plans) or 15 minutes (Postman paid plans). This limits the number of requests the monitor can perform.
