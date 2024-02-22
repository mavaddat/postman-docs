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
* [Disconnect an integration](#disconnect-an-integration)

## About Postman Vault integrations

Postman Vault integrations enable you to [add sensitive data to your Postman Vault](/docs/sending-requests/postman-vault/postman-vault-secrets/#add-sensitive-data-as-vault-secrets) that's stored in an external vault. Postman supports Postman Vault integrations with Azure Key Vault, HashiCorp Vault, and AWS Secrets Manager.

<!-- TODO: explain benefits of integrations, the secret is an ID and isn't actually entered into Postman Vault -->

> You can't update secrets stored in external vaults from Postman.

You need to be a [Team Admin or Super Admin](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) to set up certain Postman Vault integrations.

## Integrate with Azure Key Vault

When setting up an integration with [Azure Key Vault](https://learn.microsoft.com/en-us/azure/key-vault/general/overview), you need to authenticate with your Microsoft Azure account. Then you can reference secrets stored in Azure Key Vault using the secret identifier for each secret.

You can follow the steps to [create and retrieve a secret](https://learn.microsoft.com/en-us/azure/key-vault/secrets/quick-create-portal) from Azure Key Vault.

To integrate Postman Vault with Azure Key Vault, do the following:

1. [Open your Postman Vault](/docs/sending-requests/postman-vault/postman-vault-secrets/#access-your-postman-vault), then select <img alt="Settings icon" src="https://assets.postman.com/postman-docs/icon-settings-v9.jpg#icon" width="16px"> **Settings** in the top right. Optionally, you can create the integration when you [add a vault secret](/docs/sending-requests/postman-vault/postman-vault-secrets/#add-sensitive-data-as-vault-secrets).
1. Select **Connect** next to "Azure Key Vault".
1. You'll be prompted to authorize Postman to access your Microsoft Azure account. After you grant access, you can close the browser tab and return to Postman. <!-- TODO: add fields for manually authorizing Postman -->

To add a secret from Azure Key Vault, do the following:

<!-- TODO: users must authenticate if they haven't already -->

1. Enter a name for the vault secret, hover over the **Value** cell, then select the vault icon <img alt="Vault icon" src="https://assets.postman.com/postman-docs/icons/icon-postman-vault.jpg#icon" width="14px">.

    > To add a secret from a different external vault, select the new vault icon <img alt="New vault icon" src="https://assets.postman.com/postman-docs/v10/icon-pin-collection-v10.14.0.jpg#icon" width="16px">, then select an external vault.

1. Enter the **Secret Identifier** on the **Link secret** window. The secret identifier is the URI of the secret in Azure Key Vault. Learn more about [identifiers in Azure Key Vault](https://learn.microsoft.com/en-us/azure/key-vault/general/about-keys-secrets-certificates).

    ```txt
    https://<vault-name>.vault.azure.net/secrets/<secret-name>/<secret-version-id>
    ```

    > The latest version of the secret will be used unless you include the version ID.

1. Select **Use**.

To edit the secret from Azure Key Vault, select the vault icon <img alt="Vault icon" src="https://assets.postman.com/postman-docs/icons/icon-postman-vault.jpg#icon" width="14px"> next to the secret you want to edit, then select the edit icon <img alt="Edit icon" src="https://assets.postman.com/postman-docs/documentation-edit-icon-v8-10.jpg#icon" width="18px">.

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

<!-- TODO: users must authenticate if they haven't already -->

1. Enter a name for the vault secret, hover over the **Value** cell, then select the vault icon <img alt="Vault icon" src="https://assets.postman.com/postman-docs/icons/icon-postman-vault.jpg#icon" width="14px">.

    > To add a secret from a different external vault, select the new vault icon <img alt="New vault icon" src="https://assets.postman.com/postman-docs/v10/icon-pin-collection-v10.14.0.jpg#icon" width="16px">, then select an external vault.

1. Enter the following on the **Link secret** window: <!-- TODO: add fields -->

1. Select **Use**.

To edit the secret from HashiCorp Vault, select the vault icon <img alt="Vault icon" src="https://assets.postman.com/postman-docs/icons/icon-postman-vault.jpg#icon" width="14px"> next to the secret you want to edit, then select the edit icon <img alt="Edit icon" src="https://assets.postman.com/postman-docs/documentation-edit-icon-v8-10.jpg#icon" width="18px">.

## Integrate with AWS Secrets Manager

When setting up an integration with [AWS Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/managing-secrets.html), you need to authenticate with your AWS account, entering the access key pair (access key ID and secret access key), region, and MFA token for your AWS account. Then you can reference secrets stored in AWS Secrets Manager using the secret ARN and role ARN for each secret.

> Your AWS instance shouldn't be behind a proxy server.

To access secrets stored in AWS Secrets Manager from Postman Vault, you must have the [`secretsmanager:GetSecretValue` permission](https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html) in the [identity-based policy](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_controlling.html) associated with your AWS user.

You can follow the steps to [create a secret](https://docs.aws.amazon.com/secretsmanager/latest/userguide/create_secret.html), [find a secret](https://docs.aws.amazon.com/secretsmanager/latest/userguide/manage_search-secret.html), and [retrieve a secret](https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieving-secrets.html) from AWS Secrets Manager. To view a secret's details, including the secret ARN, open the [Secrets Manager console](https://console.aws.amazon.com/secretsmanager/) then select the secret's name.

To integrate Postman Vault with AWS Secrets Manager, do the following:

1. [Open your Postman Vault](/docs/sending-requests/postman-vault/postman-vault-secrets/#access-your-postman-vault), then select <img alt="Settings icon" src="https://assets.postman.com/postman-docs/icon-settings-v9.jpg#icon" width="16px"> **Settings** in the top right. Optionally, you can create the integration when you [add a vault secret](/docs/sending-requests/postman-vault/postman-vault-secrets/#add-sensitive-data-as-vault-secrets).
1. Select **Connect** next to "AWS Secrets Manager".
1. You'll be prompted to authorize Postman to access your AWS account. If you need to manually authorize Postman, enter the following on the **Authenticate AWS Secrets Manager** window:

    * **Access Key** - Enter the [access key ID](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html) for your AWS account.
    * **Secret Key** - Enter the [secret access key](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html) for your AWS account.
    * **Region** - Enter the AWS [region](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-regions) where your AWS account is located.

    > You can instead autofill each field from the credentials file in your `home` directory. Select a field, then select <img alt="Documentation icon" src="https://assets.postman.com/postman-docs/documentation-icon-v8-10.jpg#icon" width="16px"> **Autofill from config file**. Postman checks the `main` and `default` profiles in that order for your credentials.
    >
    > You can learn more about the credentials [file format](https://docs.aws.amazon.com/sdkref/latest/guide/file-format.html) and [default location](https://docs.aws.amazon.com/sdkref/latest/guide/file-location.html) in your `home` directory.

1. Select **Authenticate**.

1. If your AWS account requires [multi-factor authentication](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_mfa.html), enter an **MFA Token**. Then select **Authenticate**.

1. After you grant access, you can close the browser tab and return to Postman.

To add a secret from AWS Secrets Manager, do the following:

<!-- TODO: users must authenticate if they haven't already -->

1. Enter a name for the vault secret, hover over the **Value** cell, then select the vault icon <img alt="Vault icon" src="https://assets.postman.com/postman-docs/icons/icon-postman-vault.jpg#icon" width="14px">.

    > To add a secret from a different external vault, select the new vault icon <img alt="New vault icon" src="https://assets.postman.com/postman-docs/v10/icon-pin-collection-v10.14.0.jpg#icon" width="16px">, then select an external vault.

1. Enter the following on the **Link secret** window: <!-- TODO: improve definitions -->

    * **Secret ARN** - Enter the unique [Amazon Resource Name (ARN)]((https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html)) that identifies the secret.

        ```txt
        arn:aws:secretsmanager:<region>:<account-id>:secret:<secret-name>-<six-random-characters>
        ```

        > You can only use the current version of the secret.

    * **Role ARN (Optional)** - The secret's [permissions policy](https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access_resource-policies.html) might require you to assume a role with elevated permissions to access it. Enter the unique ARN specifying the required role to temporarily assume it. Learn more about [roles in AWS](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use.html).

        Also make sure you have the `iam:assumeRole` permission in the [identity-based policy](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_controlling.html) associated with your AWS user.

        ```txt
        arn:aws:iam::<account-id>:role/<role-name-with-path>
        ```

1. Select **Use**.

To edit the secret from AWS Secrets Manager, select the vault icon <img alt="Vault icon" src="https://assets.postman.com/postman-docs/icons/icon-postman-vault.jpg#icon" width="14px"> next to the secret you want to edit, then select the edit icon <img alt="Edit icon" src="https://assets.postman.com/postman-docs/documentation-edit-icon-v8-10.jpg#icon" width="18px">.

## Disconnect an integration

You can disconnect integrations from your Postman Vault. When you disconnect an integration, references to the vault secret will be unresolved in your local instance of Postman.

You can't edit an existing integration with an external vault. You must disconnect the integration and then create a new integration.

To disconnect an integration, do the following:

1. [Open your Postman Vault](/docs/sending-requests/postman-vault/postman-vault-secrets/#access-your-postman-vault), then select <img alt="Settings icon" src="https://assets.postman.com/postman-docs/icon-settings-v9.jpg#icon" width="16px"> **Settings** in the top right.
1. Select **Disconnect** next to the integration you want to disconnect.

You can also select the vault icon <img alt="Vault icon" src="https://assets.postman.com/postman-docs/icons/icon-postman-vault.jpg#icon" width="14px"> in the **Value** cell, and select the disconnect icon <!-- TODO: add icon -->.
