---
title: "Configure Postman Monitors to run from static IPs"
order: 93
page_id: "using_static_IPs_to_monitor"
search_keyword: "whitelist, whitelist IP"
updated: 2022-2-14
warning: false
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "API Monitoring | The Exploratory"
    url: "https://youtu.be/tDQzY1Hn2LY"
---

> **[Static IP address monitoring is available on Postman Professional and Enterprise plans.](https://www.postman.com/pricing)**

Postman's static IP feature enables you to use [collection-based monitors](/docs/monitoring-your-api/setting-up-monitor/) to monitor APIs that are behind a restricted firewall. This feature is available to all Postman Professional and Enterprise customers, provided your IT team [allowlists](#allowlisting-static-ip-addresses) the associated static IP addresses. The provided static IP addresses are fixed to their specified region and are shared by all customers who use this feature.

## Contents

* [Allowlisting static IP addresses](#allowlisting-static-ip-addresses)

* [Creating a new monitor to run from a static IP address](#creating-a-new-monitor-to-run-from-a-static-ip-address)

* [Changing an existing monitor to run from a static IP address](#changing-an-existing-monitor-to-run-from-a-static-ip-address)

* [Next steps](#next-steps)

## Allowlisting static IP addresses

Static IP addresses are available for US East and US West regions. Contact your IT team to allowlist the following IP addresses:

* US East: `34.201.186.27`
* US West: `52.89.173.88`

## Creating a new monitor to run from a static IP address

When [creating a new collection-based monitor](/docs/monitoring-your-api/setting-up-monitor/#creating-a-monitor), choose the **Manually select region** option. Select your desired static IP regions, and then select **Create**.

<img src="https://assets.postman.com/postman-docs/monitor-manually-select-region.jpg" width="272px" alt="Manually select regions"/>

## Changing an existing monitor to run from a static IP address

Select **Monitors** in the sidebar, and then select a collection-based monitor. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px">at the upper right, and then select **Edit**.

<img src="https://assets.postman.com/postman-docs/select-edit-monitor.jpg" width="293px" alt="Edit monitor"/>

Under **Regions**, choose the **Manually select region** option. Select your desired static IP regions, then select **Update Monitor**.

<img src="https://assets.postman.com/postman-docs/monitor-manually-select-region.jpg" width="272px" alt="Manually select regions"/>

## Next steps

After learning how to monitor APIs that are behind a restricted firewall, you can set up an integration with other tools in your development workflow.

* To learn how to set up integrations for your monitor results, see [Integrating with Postman](/docs/integrations/intro-integrations/).
