---
title: "OneLogin"
order: 139
updated: 2022-03-16
page_id: "onelogin"
warning: false
---

> **[SSO with OneLogin is available on Postman Enterprise plans.](https://www.postman.com/pricing)**

To configure SSO with OneLogin, you can use the available Postman app. You must be an administrator in both OneLogin and Postman to configure SSO for your team.

## Contents

* [Configuring SSO with OneLogin](#configuring-sso-with-onelogin)

* [Next steps](#next-steps)

## Configuring SSO with OneLogin

Before configuring the Postman app in OneLogin, you must [configure SSO in Postman](/docs/administration/sso/admin-sso/). When choosing the **Authentication Type**, select **OneLogin**. Name your authentication and **Proceed**.

<img alt="Configure identity provider details in Postman" src="https://assets.postman.com/postman-docs/configure-identity-provider-details-v9.14.jpg"/>

To continue configuring your Postman app, do the following:

1. Open your OneLogin admin console in a new tab.
1. Go to **Applications** and select **Add App**.
1. Search for "Postman" and select the Postman app from the results.
1. Select **Configuration** on the left.
1. Take the **ACS URL** from Postman and add it as your **SAML Consumer URL** in OneLogin.

    <img alt="OneLogin configuration application details" src="https://assets.postman.com/postman-docs/onelogin-configuration3.jpg"/>

1. In Postman, select **Generate relay state** and add the generated value as the SAML RelayState in OneLogin.

    <img alt="Generate relay state in Postman" src="https://assets.postman.com/postman-docs/generate-relay-state-v9.14.jpg" width="350px"/>

1. Select **SSO** on the left in OneLogin.
1. Copy the **Issuer URL** and add it as the **Identity Provider Issuer** in Postman.

    <img alt="OneLogin SSO Enable SAML 2.0" src="https://assets.postman.com/postman-docs/onelogin-sso.jpg"/>

1. Copy the **SAML 2.0 Endpoint (HTTP)** and add it as **Identity Provider SSO URL** in Postman.
1. Select **View Details** under **X.509 Certificate**. Copy the **X.509 Certificate** and add it under **X.509 Certificate** in Postman.

1. Select **Save Authentication** in Postman to complete the configuration.

> If you encounter any issues, confirm you've added and saved the correct configuration values on both Postman and OneLogin. [Contact Postman support](https://www.postman.com/support/) for further help.

## Next steps

Now that you have set up SSO with OneLogin, you can learn about setting up SCIM provisioning:

* To learn more, visit [Configuring SCIM with OneLogin](/docs/administration/scim-provisioning/configuring-scim-with-onelogin/). (_[Enterprise teams](https://www.postman.com/pricing/) only._)
