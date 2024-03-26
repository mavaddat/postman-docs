---
title: "Integrate Postman with Datadog"
page_id: "datadog"
updated: 2023-04-21
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Integrate with Datadog in Postman"
    url: "https://youtu.be/nOYro8AWInI"
  - type: subtitle
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Postman Is Now a Datadog Technology Partner: More Integration Features"
    url: "https://blog.postman.com/postman-datadog-technology-partner-more-integration-features/"
---

Datadog is a monitoring service for cloud-scale applications. It combines data from servers, databases, tools, and services to present a unified view of an entire stack. This integration allows you to configure your Postman Monitors to send metrics to Datadog where you can visualize and compare them with other metrics.

Setting up a Datadog integration requires you to get an API key from Datadog and configure your Postman monitors. After you set up the integration, you can view real-time alerts based on the results of your monitors.

> **You can also view Datadog application performance management (APM) metrics in the Postman API Builder.** Viewing APM metrics is a separate integration from sending monitor results to Datadog. Learn more about [viewing Datadog APM metrics](/docs/designing-and-developing-your-api/observing-an-api/datadog-apm/).

## Contents

* [Retrieving your Datadog API key](#retrieving-your-datadog-api-key)
* [Configuring Postman Monitors](#configuring-postman-monitors)
* [Viewing data in Datadog](#viewing-data-in-datadog)
* [Forwarding metrics](#forwarding-metrics)
* [Metrics tags](#metrics-tags)
* [Updating existing integrations](#updating-existing-integrations)

## Retrieving your Datadog API key

1. Sign in to [Datadog](https://app.datadoghq.com/). Open your Organization Settings page and select [API Keys](https://app.datadoghq.com/organization-settings/api-keys).

1. Select **+ New Key**. Create a name for the new API key, then select **Create Key**.

1. Copy the new API key so you can use it later.

## Configuring Postman Monitors

1. From the **[Home](https://go.postman.co/home)** page select **[Integrations](https://go.postman.co/integrations)**.

    <img alt="Home page and integrations" src="https://assets.postman.com/postman-docs/v10/home-integrations-v10.jpg" width="390px">

1. Select **Browse All Integrations**.
1. Search and select **[Datadog](https://go.postman.co/integrations/service/datadog)**.

    > You can select **View all** for a list of all the integrations created by your team.

1. Next to **Post monitoring results**, select **Add Integration** to start the configuration process.

    ![Datadog integrations page](https://assets.postman.com/postman-docs/v10/datadog-details-v10.jpg)

1. To send your monitor metrics and events to Datadog:

    * **Nickname** - A nickname for your integration.
    * **Workspace** - The workspace that has your monitor.
    * **Monitor** - The collection-based monitor which will send its results to Datadog.
    * **Region** - Select the Datadog region you want to use.
    * **Datadog API Key** - Enter your [Datadog API key](#retrieving-your-datadog-api-key).
    * Select the checkbox if you want to send events for completed runs.
    * Select the checkbox if you want to send metrics for each run.

1. Select **Add Integration**.

> **You can view your configured integrations on the [Browse Integrations](https://go.postman.co/integrations/browse) page.** You can also view integrations that have been configured for a monitor by opening the monitor and selecting the information icon <img alt="Information icon" src="https://assets.postman.com/postman-docs/icon-information-v9-5.jpg#icon" width="16px"> in the right sidebar. Learn more about [viewing or editing integrations](/docs/integrations/intro-integrations/#view-or-edit-integrations).

## Viewing data in Datadog

When your monitor runs, the data starts flowing into Datadog.

![view in datadog](https://assets.postman.com/postman-docs/datadog-monitor-alerts.jpg)

Once the data is present in Datadog, you can filter it based on the monitor name or id, collection name or uid, user name or id, and environment name or uid (if present). You can also combine different metrics to create a dashboard.

## Forwarding metrics

Postman can forward a wide array of metrics for the specified monitors to Datadog. This table lists the name, type, and level of the metrics, and a description of the metric. For more information on Datadog metric collection, see the [Datadog documentation](https://docs.datadoghq.com/metrics/).

| **Metrics Name**          |       **Type**         | **Description**         | **Level**         |
| ------------- | ------------- | ------------- | ------------- |
| `postman.monitor.run.errors` | Gauge | Total number of errors across all requests in a monitoring run | Run
| `postman.monitor.run.failed\_tests` | Gauge | Total number of failed tests across all requests in a monitoring run | Run
| `postman.monitor.run.passed\_tests` | Gauge | Total number of passed tests across all requests in a monitoring run | Run
| `postman.monitor.run.request\_count` | Gauge | Total number of requests in a monitoring run | Run
| `postman.monitor.run.total\_latency` | Gauge | The total latency time for all requests in a monitoring run | Run
| `postman.monitor.run.http\_status\_2xx` | Gauge | Total number of requests in a monitoring run that return an HTTP status code in the 200 range  | Run  |
| `postman.monitor.run.http\_status\_4xx` | Gauge | Total number of requests in a monitoring run that return an HTTP status code in the 400 range  | Run  |
| `postman.monitor.run.http\_status\_5xx` | Gauge | Total number of requests in a monitoring run that return an HTTP status code in the 500 range  | Run  |
| `postman.monitor.request.latency` | Gauge | Latency for each request in a monitoring run  | Request  |
| `postman.monitor.request.failed\_tests` | Gauge | Number of failed tests for each request in a monitoring run  | Request  |
| `postman.monitor.request.passed\_tests` | Gauge | Number of passed tests for each request in a monitoring run  | Request  |
| `postman.monitor.request.bytes` | Gauge | Total bytes sent and received for each request in a monitoring run  | Request |

<br />

## Metrics tags

Postman sends tags to Datadog along with each metric and event. Tags enable you to filter the metric based on various parameters such as monitor name or collection name. The following tags are sent by Postman to Datadog:

| **Tag**          | **Description**
| ------------- | -------------
| Region | The region from where the monitor is run
| Triggers | What triggered the monitor run: Manual, Webhook, or Scheduled
| Run results | Successful, Failure, Error, or Abort
| Level | The level the metric is captured for: Run or Request
| Status Code | HTTP response code for the request run
| Job ID | Monitor's Job ID
| Request ID | The request identifier

## Updating existing integrations

Postman is a Datadog Technology Partner, and Postman’s integration is listed on the Datadog Integrations page. To enable the partnership, the metrics being emitted by Postman have been renamed as described in the [Forwarding metrics](#forwarding-metrics) section.

If you have integrations created before the integration listing on Datadog, you must update them to take the advantage of the integration listing.

To update existing integrations, do the following:

1. Go to the [Post monitoring results](https://go.postman.co/integrations/service/datadog/monitor_run_datadog) page.

1. Select the integration you want to upgrade.

1. Select **Update Now**, then select **Update Integration** on the confirmation box to upgrade the integration.

    ![Datadog upgrade integration](https://assets.postman.com/postman-docs/datadog-integration-update-now.jpg)

1. Select **Confirm**.

The updated integration has the following benefits:

* The Postman metrics for the integration are no longer treated as [Custom Metrics](https://docs.datadoghq.com/metrics/) in Datadog, which means they're free. (Custom metrics on Datadog are [charged](https://docs.datadoghq.com/account_management/billing/custom_metrics/?tab=countrategauge).)
* Datadog provides a default dashboard that you can use to observe the monitor. Change the `monitor_name` variable to the monitor for which you want to observe the dashboard.
  ![Datadog dashboard](https://assets.postman.com/postman-docs/datadog-dashboard.jpg)
