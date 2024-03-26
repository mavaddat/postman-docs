---
title: "Duo"
order: 136
updated: 2020-05-22
page_id: "duo"
warning: false
---

> **[SSO with Duo is available on Postman Enterprise plans.](https://www.postman.com/pricing)**

*Note: An admin of your Duo organization must create the SAML application.*

## Setting up a custom SAML application in Duo

1. Head over to the applications page from the Duo dashboard. Select **Protect an Application**.

     [![duo dashboard](https://assets.postman.com/postman-docs/duo_dashboard.png)](https://assets.postman.com/postman-docs/duo_dashboard.png)

1. Search for "SAML - Service Provider" and select the **Protect this Application** link.
     [![duo protect](https://assets.postman.com/postman-docs/duo_protect.png)](https://assets.postman.com/postman-docs/duo_protect.png)

1. Enter `Postman` as the service provider. The service provider details can be found on the Postman [Edit Team Details page](https://go.postman.co/settings/team/general). Other fields can either be left blank or set to the default value.
     [![duo provider](https://assets.postman.com/postman-docs/duo_provider.png)](https://assets.postman.com/postman-docs/duo_provider.png)

     | **Field** | **Value** |
     |---|---|
     | Service Provider Name | Postman |
     | Entity ID | *collect it from the Postman team details page* |
     | Assertion Consumer Service | *collect it from the Postman team details page* |
     | NameID format | EmailAddress |

1. After configuring the service provider details, select **Save Configuration**.
     [![duo save](https://assets.postman.com/postman-docs/duo_save.png)](https://assets.postman.com/postman-docs/duo_save.png)

1. Download the configuration file.
     [![duo download](https://assets.postman.com/postman-docs/duo_download.png)](https://assets.postman.com/postman-docs/duo_download.png)

1. Duo requires your cloud application to be added to the Duo Access Gateway. Refer to this [guide for setting this up](https://duo.com/docs/dag-generic).

1. Once the setup is complete, submit your identity provider's (IdP) details to Postman. Collect the `Identity Provider Single Sign-On URL`, `Identity Provider Issuer`, and `X.509 Certificate` from the Duo configuration page and fill these values in your Postman [Edit Team Details page](https://go.postman.co/settings/team/general) within the **Duo Identity Provider Details** modal. For more details on this last step, review [setting up SSO in Postman](/docs/administration/sso/admin-sso/).
