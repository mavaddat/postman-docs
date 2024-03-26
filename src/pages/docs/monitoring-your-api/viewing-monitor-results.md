---
title: "View collection-based monitor results"
order: 90
page_id: "viewing_monitor_results"
updated: 2022-07-05
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Monetary"
    url: "https://www.postman.com/case-studies/monetary/"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "API Monitoring | The Exploratory"
    url: "https://youtu.be/tDQzY1Hn2LY"

warning: false
---

[Collection-based monitors](/docs/monitoring-your-api/setting-up-monitor/) continuously track the health and performance of your APIs. With Postman, you can stay up to date on what's happening across all collection-based monitors in your workspace. Or you can dive into individual monitors to examine test results and performance over time.

## Contents

* [Viewing monitors in Postman](#viewing-monitors-in-postman)

    * [Monitor summary](#monitor-summary)

    * [Individual requests](#individual-requests)

    * [Filters](#filters)

        * [Filtering by request](#filtering-by-request)

        * [Filtering by type](#filtering-by-type)

        * [Filtering by run result](#filtering-by-run-result)

        * [Filtering by region](#filtering-by-region)

        * [Filtering by formula](#filtering-by-formula)

    * [Time traverse](#time-traverse)

    * [Test results](#test-results)

    * [Console log](#console-log)

    * [Activity log](#activity-log)

    * [Monitor details](#monitor-details)

* [Troubleshooting](#troubleshooting)

## Viewing monitors in Postman

You can view your collection-based monitors in Postman by navigating to your workspace and selecting **Monitors** in the sidebar. Select your monitor to open a tab detailing its latest performance.

<img src="https://assets.postman.com/postman-docs/view-monitor-in-tab3.jpg" alt="View monitor in tab"/>

> Monitors in team workspaces are visible to all members of the workspace.

### Monitor summary

You can use the **Monitor Summary** to understand how your APIs have performed over time. Each monitor run is represented by a bar in the graph.

The upper section charts your monitor's average response time for each run, while the lower section visualizes the number of failed tests for each run across all regions. To view the exact values for failed percentage and response time, hover over each run individually.

![Monitor summary](https://assets.postman.com/postman-docs/monitor-summary-with-hover.jpg)

> A red bar indicates that either tests failed or errors occurred during the run. For more information, view your [Console Log](/docs/monitoring-your-api/viewing-monitor-results/#console-log).

### Individual requests

You can select **Individual requests** to break down your monitor summary into separate requests.

![Request split](https://assets.postman.com/postman-docs/monitors-individual-requests.jpg)

### Filters

You can use filters to identify recurring patterns in your monitoring runs by selecting particular requests, run types, results, and regions (if applicable).

[![monitor filters](https://assets.postman.com/postman-docs/monitor-filters-example.gif)](https://assets.postman.com/postman-docs/monitor-filters-example.gif)

> You can **Clear Filters** to return to your original dashboard view.

#### Filtering by request

You can filter by request to compare an individual request's response time in different runs. Select **All Requests** under **Filter By**, then select your request.

#### Filtering by type

You can filter by run type to compare how the response time changes between manual runs, scheduled runs, and webhook runs. Select **Type: All**, then select the type of run you'd like to analyze further.

> Manual runs are initiated in Postman or are triggered by the [Postman API](https://documenter.getpostman.com/view/12959542/UV5XjJV8#688c4c2a-58b6-4f26-b06b-1f45508ee1d4). Scheduled runs are initiated by the schedule you set when creating or editing your monitor. Webhook runs are initiated by integrations you've created.

#### Filtering by run result

Each run is labeled based on its result:

* **Successful** - Your monitor completed the run with no issues and passed all tests.
* **Failure** - Your monitor completed the run, however one or more tests failed.
* **Error** - Your monitor was unable to complete its run due to an error. An error can occur if there is a syntax error in the code you've written, a network error, or for various other reasons. If you get an error, your [Console Log](#console-log) will help you identify what caused it.
* **Abort** - Your monitor timed out because it didn't complete its run within the allotted 10 minutes (Postman Free plans) or 15 minutes (Postman paid plans).

You can filter by run result to compare how your runs with the same result have differed. Select **Run result: All**, then select one or more types of run results to view.

#### Filtering by region

You can filter by [region](/docs/monitoring-your-api/setting-up-monitor/#adding-regions) to compare how runs within different regions have varied. Select **All Regions**, then select a region to view.

> This feature is available if you selected multiple regions when you created or last edited your monitor. To learn more about regions, see [Adding regions](/docs/monitoring-your-api/setting-up-monitor/#adding-regions).

#### Filtering by formula

You can filter by mathematical formula to view the average, sum, minimum, and maximum response time for each run:

* **Average** - The average of the total response time across all regions.
* **Sum** - The sum of the response time across all regions.
* **Minimum** - The minimum total response time for a run across all regions.
* **Maximum** - The maximum total response time for a run across all regions.

Select **Average** to open the menu, then select an option. To view the calculated response time value, you can hover over each run individually.

### Time traverse

You can review past run results to understand what happened at a particular point in time. To do so, select **Go to** in the upper-left corner of the monitor summary or request split graph. Select the time and date, then select **Apply** to view a specific run.

![Time traverse](https://assets.postman.com/postman-docs/monitors-time-traverse20.jpg)

> To revert the view to your most recent runs, select the time and date you defined in the upper-left corner of the graph, then select **Reset**.

### Test results

Select **Test Results** to get more detailed information on your tests, including which passed or failed, the response codes, and the response times.

If your monitor is configured to run in multiple regions, you can view the test results for a particular region by selecting it from **Region**.

[![test results](https://assets.postman.com/postman-docs/monitor-view-test-results0.jpg)](https://assets.postman.com/postman-docs/monitor-view-test-results0.jpg)

### Console log

Select **Console Log** to view monitor run details along with the [`console.log`](/docs/sending-requests/response-data/troubleshooting-api-requests/) statements that run as part of your pre-request and test scripts in the Postman Console. Run details specify the various stages of a monitor run such as preparing run, running, rerunning ([if applicable](/docs/monitoring-your-api/setting-up-monitor/#using-retry-on-failure)), and the run result, along with error and test failure information. Selecting a request in the Console Log will open it in a tab, allowing you to review and edit the request as needed.

If your monitor is configured to run in multiple regions, you can view the Console logs for a particular region by selecting it from **Region**.

[![Console log](https://assets.postman.com/postman-docs/monitor-view-console-log0.jpg)](https://assets.postman.com/postman-docs/monitor-view-console-log0.jpg)

You can use the Console to both troubleshoot issues and learn more about an individual run's behavior.

> **Monitor run logs are retained for a period of six months.** If you select a monitor run that's outside the retention period, you can view the number of failed tests and errors. Other monitor run details will no longer be available. To request this information, contact [Postman support](https://www.postman.com/support/).

### Activity log

You can view a monitor's activity logs by selecting the changelog icon <img alt="Changelog icon" src="https://assets.postman.com/postman-docs/icon-changelog-v9.jpg#icon" width="18px"> in the upper-right corner, then selecting **View activity logs**.

<img src="https://assets.postman.com/postman-docs/monitor-activity-log20.jpg" width="400px" alt="Activity log"/>

You can check these logs to learn when a monitor was created, edited, paused, or resumed running, and which team member performed each action.

### Monitor details

You can view details about a monitor by selecting the information icon <img alt="Information icon" src="https://assets.postman.com/postman-docs/icon-information-v9-5.jpg#icon" width="16px"> in the upper-right corner. Here you can view a monitor's ID, creator, creation date and time, collection, environment, and integration options.

<img src="https://assets.postman.com/postman-docs/monitor-information10.jpg" width="400px" alt="Monitor details"/>

## Troubleshooting

Learn how to [troubleshoot your monitors](/docs/monitoring-your-api/troubleshooting-monitors/) and check out [Postman monitoring FAQs](/docs/monitoring-your-api/faqs-monitors/).
