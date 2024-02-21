---
title: "Integrate Postman Vault with external vaults"
updated: 2024-03-15
early_access: true
plan: beta
---

> **[Postman Vault integrations are available on Postman Enterprise plans.](https://www.postman.com/pricing)**

You can integrate [Postman Vault](/docs/sending-requests/postman-vault/postman-vault-secrets/) with external vaults. Postman Vault integrations enable your team members to retrieve secrets stored in external vaults and use them in their local instances of Postman. Team members must authenticate with external vaults to access and use stored secrets in HTTP collections, environments, and requests.

## Contents

* [About Postman Vault integrations](#about-postman-vault-integrations)
* [Integrate with Azure Key Vault](#integrate-with-azure-key-vault)
* [Integrate with HashiCorp Vault](#integrate-with-hashicorp-vault)
* [Integrate with AWS Secrets Manager](#integrate-with-aws-secrets-manager)
* [Edit an integration](#edit-an-integration)
* [Disconnect an integration](#disconnect-an-integration)

## About Postman Vault integrations

Postman Vault integrations enable you to [add sensitive data to your Postman Vault](/docs/sending-requests/postman-vault/postman-vault-secrets/#add-sensitive-data-as-vault-secrets) that's stored in an external vault. Postman supports Postman Vault integrations with Azure Key Vault, HashiCorp Vault, and AWS Secrets Manager.

<!-- TODO: explain benefits of integrations, the secret is an ID and isn't actually entered into Postman Vault -->

> You can't update secrets stored in external vaults from Postman.

You to be a [Team Admin or Super Admin](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) to set up certain Postman Vault integrations.

## Integrate with Azure Key Vault

You can set up an integration with Postman Vault and [Azure Key Vault](https://learn.microsoft.com/en-us/azure/key-vault/general/overview). You must [get the secret identifier](#prerequisites-for-azure-key-vault) of the Azure Key Vault secret you want to use in Postman Vault. Then you can [set up the Azure Key Vault integration](#set-up-the-azure-key-vault-integration).

### Prerequisites for Azure Key Vault

<!-- TODO: explain how to get secret identifier -->

### Set up the Azure Key Vault integration

<!-- TODO: add an intro -->

To integrate Postman Vault with Azure Key Vault, do the following:

1. [Open your Postman Vault](/docs/sending-requests/postman-vault/postman-vault-secrets/#access-your-postman-vault), then select <img alt="Settings icon" src="https://assets.postman.com/postman-docs/icon-settings-v9.jpg#icon" width="16px"> **Settings** in the top right. Optionally, you can create the integration when you [add a vault secret](/docs/sending-requests/postman-vault/postman-vault-secrets/#add-sensitive-data-as-vault-secrets).
1. Select **Connect** next to "Azure Key Vault".
1. You'll be prompted to authorize Postman to access your Microsoft Azure account. After you grant access, you can close the browser tab and return to Postman. <!-- TODO: add fields for manually authorizing Postman -->

To add a secret from Azure Key Vault, do the following:

1. Enter a name for the vault secret, hover over the **Value** cell, then select the vault icon <img alt="Vault icon" src="https://assets.postman.com/postman-docs/icons/icon-postman-vault.jpg#icon" width="14px">.

    > To add a secret from a different external vault, select the new vault icon <img alt="New vault icon" src="https://assets.postman.com/postman-docs/v10/icon-pin-collection-v10.14.0.jpg#icon" width="16px">, then select an external vault.

1. Enter the **Secret Identifier** on the **Link secret** window. <!-- TODO: explain what the secret ID is -->

    > The latest version of the secret will be used unless you include the version ID.

1. Select **Use**.

## Integrate with HashiCorp Vault

You must be a Postman [Team Admin or Super Admin](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) to set up an integration with Postman Vault and [HashiCorp Vault](https://developer.hashicorp.com/vault/docs/what-is-vault). First complete the [prerequisites for HashiCorp Vault](#prerequisites-for-hashicorp-vault), enabling you to get the required resources to share with Postman Vault. Then you can [set up the HashiCorp Vault integration](#set-up-the-hashicorp-vault-integration).

### Prerequisites for HashiCorp Vault

Before you can set up the integration in Postman, [create a HashiCorp Vault policy](https://developer.hashicorp.com/vault/tutorials/policies/policies) that gives you permission to set up the OIDC identity provider. Then set up the [OpenID Connect (OIDC) identity provider](https://developer.hashicorp.com/vault/docs/concepts/oidc-provider), enabling you to authenticate your Postman team members with HashiCorp Vault.

Create a policy in HashiCorp with the following permissions:

```json
# For creating the OIDC application
path "/identity/oidc/client/*" {
  capabilities=["create", "read"]
}

# For creating the OIDC provider
path "/identity/oidc/provider/*" {
  capabilities=["create", "read"]
}

# For enabling a new jwt auth
path "/sys/auth/*" {
  capabilities=["sudo", "update"]
}

# update: To configure the created auth method
# create: To create a new role in the newly created auth
path "/auth/*" {
  capabilities=["update", "create"]
}

# To create a policy to be attached to the created role
path "/sys/policy/*" {
  capabilities=["update"]
}
```

### Set up the HashiCorp Vault integration

<!-- TODO: add an intro -->

To integrate Postman Vault with HashiCorp Vault, do the following:

1. [Open your Postman Vault](/docs/sending-requests/postman-vault/postman-vault-secrets/#access-your-postman-vault), then select <img alt="Settings icon" src="https://assets.postman.com/postman-docs/icon-settings-v9.jpg#icon" width="16px"> **Settings** in the top right. Optionally, you can create the integration when you [add a vault secret](/docs/sending-requests/postman-vault/postman-vault-secrets/#add-sensitive-data-as-vault-secrets).
1. Select **Set Up Integration** next to "Hashicorp Vault".
1. You'll be prompted to authorize Postman to access your HashiCorp account. If you need to manually authorize Postman, enter the following on the **Set up Hashicorp Integration** window:

    * **OIDC Provider URL** - The OpenID Connect (OIDC) provider URL
    * **JWT Auth Path** - Enter "postman-jwt".
    * **Client Id** -
    * **Role** - Enter "postman" as the role.
    * **Namespace (optional)** -

        > If you're using [Vault Enterprise namespaces](https://developer.hashicorp.com/vault/docs/enterprise/namespaces), Postman recommends creating a new namespace for this integration.

1. Select **Set Up Hashicorp**. After you grant access, you can close the browser tab and return to Postman.

To add a secret from HashiCorp Vault, do the following:

1. Enter a name for the vault secret, hover over the **Value** cell, then select the vault icon <img alt="Vault icon" src="https://assets.postman.com/postman-docs/icons/icon-postman-vault.jpg#icon" width="14px">.

    > To add a secret from a different external vault, select the new vault icon <img alt="New vault icon" src="https://assets.postman.com/postman-docs/v10/icon-pin-collection-v10.14.0.jpg#icon" width="16px">, then select an external vault.

1. Enter the following on the **Link secret** window: <!-- TODO: add fields -->

1. Select **Use**.

## Integrate with AWS Secrets Manager

You can set up an integration with Postman Vault and [AWS Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/managing-secrets.html). First complete the [prerequisites for AWS Secrets Manager](#prerequisites-for-aws-secrets-manager), enabling you to get the required resources to share with Postman Vault. Then you can [set up the AWS Secrets Manager integration](#set-up-the-aws-secrets-manager-integration).

### Prerequisites for AWS Secrets Manager

<!--TODO: explain how to get the access key, secret key, region, secret ARN, and Role ARN -->

### Set up the AWS Secrets Manager integration

To integrate Postman Vault with AWS Secrets Manager, do the following:

1. [Open your Postman Vault](/docs/sending-requests/postman-vault/postman-vault-secrets/#access-your-postman-vault), then select <img alt="Settings icon" src="https://assets.postman.com/postman-docs/icon-settings-v9.jpg#icon" width="16px"> **Settings** in the top right. Optionally, you can create the integration when you [add a vault secret](/docs/sending-requests/postman-vault/postman-vault-secrets/#add-sensitive-data-as-vault-secrets).
1. Select **Connect** next to "AWS Secrets Manager".
1. You'll be prompted to authorize Postman to access your AWS account. If you need to manually authorize Postman, enter the following on the **Authenticate AWS Secrets Manager** window:

    * **Access Key** - Enter the access key ID for your AWS account.
    * **Secret Key** - Enter the secret access key for your AWS account.
    * **Region** - Enter the AWS region where your AWS account is located.
    * **MFA Token** - The multi-factor authentication token to access your AWS account. You only need to enter this if your AWS account requires multi-factor authentication.

    > Learn how to [manage access keys for your AWS account](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html).

1. Select **Authenticate**. After you grant access, you can close the browser tab and return to Postman.

To add a secret from AWS Secrets Manager, do the following:

1. Enter a name for the vault secret, hover over the **Value** cell, then select the vault icon <img alt="Vault icon" src="https://assets.postman.com/postman-docs/icons/icon-postman-vault.jpg#icon" width="14px">.

    > To add a secret from a different external vault, select the new vault icon <img alt="New vault icon" src="https://assets.postman.com/postman-docs/v10/icon-pin-collection-v10.14.0.jpg#icon" width="16px">, then select an external vault.

1. Enter the following on the **Link secret** window: <!-- TODO: improve definitions -->

    * **Secret ARN** - The Amazon Resource Name (ARN) for the secret.
    * **Role ARN (Optional)** -

1. Select **Use**.

## Edit an integration

<!-- TODO: explain how to edit an existing integration -->

## Disconnect an integration

You can disconnect integrations from your Postman Vault. When you disconnect an integration, references to the vault secret will be unresolved in your local instance of Postman.

1. [Open your Postman Vault](/docs/sending-requests/postman-vault/postman-vault-secrets/#access-your-postman-vault), then select <img alt="Settings icon" src="https://assets.postman.com/postman-docs/icon-settings-v9.jpg#icon" width="16px"> **Settings** in the top right.
1. Select **Disconnect** next to the integration you want to disconnect.

You can also select the vault icon <img alt="Vault icon" src="https://assets.postman.com/postman-docs/icons/icon-postman-vault.jpg#icon" width="14px"> in the **Value** cell, and select the disconnect icon <!-- TODO: add icon -->.
