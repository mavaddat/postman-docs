---
title: "Integrate Postman Vault with external vaults"
updated: 2024-03-15
early_access: true
plan: beta
---

> **[Postman Vault integrations are available on Postman Enterprise plans.](https://www.postman.com/pricing)**

You can integrate your [Postman Vault](/docs/sending-requests/postman-vault/postman-vault-secrets/) with external vaults, such as Azure Key Vault. This enables you to retrieve secrets stored in external vaults and use them in your local instance of Postman. You must authenticate with external vaults to access and use stored secrets in your HTTP collections, environments, and requests.

You can create Postman Vault integration from the [Postman desktop app](/docs/getting-started/installation/installation-and-updates/).

Before you integrate your Postman Vault with external vaults, make sure you understand how to [add vault secrets to your Postman Vault](/docs/sending-requests/postman-vault/postman-vault-secrets/#add-sensitive-data-as-vault-secrets), and [reference vault secrets in Postman](/docs/sending-requests/postman-vault/postman-vault-secrets/#use-vault-secrets).

## Contents

* [About Postman Vault integrations](#about-postman-vault-integrations)
* [Integrate with Azure Key Vault](#integrate-with-azure-key-vault)
* [Integrate with HashiCorp Vault](#integrate-with-hashicorp-vault)
* [Integrate with AWS Secrets Manager](#integrate-with-aws-secrets-manager)
* [Retrieve a different secret from an external vault](#retrieve-a-different-secret-from-an-external-vault)
* [Reauthenticate with an external vault](#reauthenticate-with-an-external-vault)
* [Disconnect an integration](#disconnect-an-integration)

## About Postman Vault integrations

Postman Vault integrations enable you to retrieve sensitive data that's stored in an external vault from your Postman Vault. You can then reference retrieved sensitive data in your local instance of Postman. Postman supports Postman Vault integrations with [Azure Key Vault](#integrate-with-azure-key-vault), [HashiCorp Vault](#integrate-with-hashicorp-vault), and [AWS Secrets Manager](#integrate-with-aws-secrets-manager).

You can only integrate your Postman Vault with one organization in an external vault provider at a time. If you want to integrate with a different organization in your external vault provider, you must [disconnect the integration](#disconnect-an-integration), then create a new integration that authenticates with a different organization. See the following details about creating and managing integrations with external vault providers:

* **Azure Key Vault and AWS Secrets Manager** - You create and manage the integration with your Postman Vault. This means you and your team members can integrate with different organizations in Azure Key Vault and AWS Secrets Manager.
* **HashiCorp Vault** - Only a Postman [Team Admin or Super Admin](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) can create and manage the integration with your Postman Vault. This means that you and your team members must integrate with the same organization in HashiCorp.

## Integrate with Azure Key Vault

When setting up an integration with [Azure Key Vault](https://learn.microsoft.com/en-us/azure/key-vault/general/overview), you need to authenticate with your Microsoft Azure account. Then you can retrieve secrets stored in Azure Key Vault using the secret identifier for each secret.

You can follow the steps to [create a secret](https://learn.microsoft.com/en-us/azure/key-vault/secrets/quick-create-portal#add-a-secret-to-key-vault) from Azure Key Vault. You can also follow the steps to [retrieve a secret](https://learn.microsoft.com/en-us/azure/key-vault/secrets/quick-create-portal#retrieve-a-secret-from-key-vault), enabling you to view the secret's identifier.

To integrate Postman Vault with Azure Key Vault, do the following:

1. [Open your Postman Vault](/docs/sending-requests/postman-vault/postman-vault-secrets/#access-your-postman-vault), then select <img alt="Settings icon" src="https://assets.postman.com/postman-docs/icon-settings-v9.jpg#icon" width="16px"> **Settings** in the top right. Optionally, you can create the integration when you [add a vault secret](/docs/sending-requests/postman-vault/postman-vault-secrets/#add-sensitive-data-as-vault-secrets).
1. Select **Connect** next to "Azure Key Vault".
1. You'll be prompted to authorize Postman to access your Microsoft Azure account. After you grant access, you can close the browser tab and return to Postman.

To retrieve a secret's value from Azure Key Vault, do the following:

1. In Azure, make sure you have the at least the [`Azure Vault Reader` role](https://learn.microsoft.com/en-us/azure/key-vault/general/rbac-guide?tabs=azure-cli). This enables you to retrieve secrets stored in Azure Key Vault from Postman Vault.
1. Enter a name for the vault secret, hover over the **Value** cell, then select the vault integration icon <img alt="Vault icon" src="https://assets.postman.com/postman-docs/icons/icon-postman-vault.jpg#icon" width="14px">.

    > To retrieve a secret from a different external vault, select the vault integration icon <img alt="Vault icon" src="https://assets.postman.com/postman-docs/v10/icon-pin-collection-v10.14.0.jpg#icon" width="16px">, then select an external vault.

1. Enter the **Secret Identifier** on the **Link secret** window. The secret identifier is the URI of the secret in Azure Key Vault. Learn more about [identifiers in Azure Key Vault](https://learn.microsoft.com/en-us/azure/key-vault/general/about-keys-secrets-certificates).

    ```txt
    https://<vault-name>.vault.azure.net/secrets/<secret-name>/<secret-version-id>
    ```

    > The latest version of the secret will be used unless you include the version ID.

1. Select **Use**.
1. You can [reference vault secrets](/docs/sending-requests/postman-vault/postman-vault-secrets/#use-vault-secrets) in your local instance of Postman.

To view details about a secret you've retrieved from Azure Key Vault, select the vault integration icon <img alt="Vault icon" src="https://assets.postman.com/postman-docs/icons/icon-postman-vault.jpg#icon" width="14px"> next to a secret.

## Integrate with HashiCorp Vault

You must be a Postman [Team Admin or Super Admin](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) to set up an integration with Postman Vault and [HashiCorp Vault](https://developer.hashicorp.com/vault/docs/what-is-vault). To set up the integration, you need to enter the OpenID Connect (OIDC) authentication details from HashiCorp, enabling team members to authenticate with their HashiCorp accounts. <!-- TODO: verify the name of what the Admin is sharing details for -->

Once a Postman Admin creates the integration, you need to authenticate with your HashiCorp account. Then you can retrieve secrets stored in HashiCorp Vault using the key-value secrets engine, path, and key name for each secret. You can follow the steps to [create a KV (key-value) secrets engine](https://developer.hashicorp.com/vault/docs/secrets/kv), and store [static key-value secrets](https://developer.hashicorp.com/vault/tutorials/secrets-management/static-secrets) or [versioned key-value secrets](https://developer.hashicorp.com/vault/tutorials/secrets-management/versioned-kv).

> Postman only supports KV secrets engines.

Before a Postman Team or Super Admin can set up the integration in Postman, [create a HashiCorp Vault policy](https://developer.hashicorp.com/vault/tutorials/policies/policies) that gives you permission to set up the [OpenID Connect (OIDC) identity provider](https://developer.hashicorp.com/vault/docs/concepts/oidc-provider). Create a policy in HashiCorp with the following permissions:

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

* `/identity/oidc/client/*` - Enables you to create and view any OIDC application.
* `/identity/oidc/provider/*` - Enables you to create and view any OIDC provider.
* `/sys/auth/*` -
* `/auth/*` -

To integrate Postman Vault with HashiCorp Vault, do the following:

1. In HashiCorp Vault, [set up an OIDC provider](https://developer.hashicorp.com/vault/docs/secrets/identity/oidc-provider). This creates a client application that team members can use to authenticate with HashiCorp Vault. Use metadata from the client application to set up the Postman Vault integration with HashiCorp Vault. <!-- TODO: explain why -->
1. In Postman, [open your Postman Vault](/docs/sending-requests/postman-vault/postman-vault-secrets/#access-your-postman-vault), then select <img alt="Settings icon" src="https://assets.postman.com/postman-docs/icon-settings-v9.jpg#icon" width="16px"> **Settings** in the top right. Optionally, you can create the integration when you [add a vault secret](/docs/sending-requests/postman-vault/postman-vault-secrets/#add-sensitive-data-as-vault-secrets).
1. Select **Set Up Integration** next to "Hashicorp Vault".
1. Enter the following on the **Set up Hashicorp Integration** window:

    * **OIDC Provider URL** - The OpenID Connect (OIDC) provider URL of the client application created in HashiCorp Vault.
    * **JWT Auth Path** - Enter `postman-jwt` as the path. <!-- TODO: explain why -->
    * **Client Id** - The OIDC client application's ID.
    * **Role** - Enter `postman` as the role. <!-- TODO: explain why -->
    * **Namespace (optional)** -

        > If you're using [Vault Enterprise namespaces](https://developer.hashicorp.com/vault/docs/enterprise/namespaces), Postman recommends creating a new namespace for this integration.

1. Select **Set Up Hashicorp**.

To retrieve a secret's value from HashiCorp Vault, do the following: <!-- TODO: verify the order of these steps -->

1. Enter a name for the vault secret, hover over the **Value** cell, select the vault integration icon <img alt="Vault icon" src="https://assets.postman.com/postman-docs/icons/icon-postman-vault.jpg#icon" width="14px">, then select **HashiCorp Vault**.

    > To retrieve a secret from a different external vault, select the new vault integration icon <img alt="New vault icon" src="https://assets.postman.com/postman-docs/v10/icon-pin-collection-v10.14.0.jpg#icon" width="16px">, then select an external vault.

1. You'll be prompted to authorize Postman to access your HashiCorp account.  After you grant access, you can close the browser tab and return to Postman.
1. Enter the following on the **Link secret** window: <!-- TODO: add fields -->

    * **Engine** - The name of the [KV secrets engine]((https://developer.hashicorp.com/vault/docs/secrets/kv)). <!-- TODO: confirm that this is the name -->
    * **Path** - The path to the secret.
    * **Key** - The key name in the secret's key-value pair.

1. Select **Use**.
1. You can [reference vault secrets](/docs/sending-requests/postman-vault/postman-vault-secrets/#use-vault-secrets) in your local instance of Postman.

To view details about a secret you've retrieved from HashiCorp Vault, select the vault integration icon <img alt="Vault icon" src="https://assets.postman.com/postman-docs/icons/icon-postman-vault.jpg#icon" width="14px"> next to a secret.

## Integrate with AWS Secrets Manager

When setting up an integration with [AWS Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/managing-secrets.html), you need to authenticate with your AWS account, entering the access key pair (access key ID and secret access key), region, and MFA token for your AWS account. Then you can retrieve secrets stored in AWS Secrets Manager using the secret ARN and role ARN for each secret.

> Your AWS instance shouldn't be behind a proxy server.

You can follow the steps to [create a secret](https://docs.aws.amazon.com/secretsmanager/latest/userguide/create_secret.html), [find a secret](https://docs.aws.amazon.com/secretsmanager/latest/userguide/manage_search-secret.html), and [retrieve a secret](https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieving-secrets.html) from AWS Secrets Manager. To view a secret's details, including the secret ARN, open the [Secrets Manager console](https://console.aws.amazon.com/secretsmanager/) then select the secret's name.

<!-- Before you set up the integration with AWS Secrets Manager, you must first have the [`secretsmanager:GetSecretValue` permission](https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html) in the [identity-based policy](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_controlling.html) associated with your AWS user. This enables you to retrieve secrets stored in AWS Secrets Manager from Postman Vault. -->

To integrate Postman Vault with AWS Secrets Manager, do the following:

1. [Open your Postman Vault](/docs/sending-requests/postman-vault/postman-vault-secrets/#access-your-postman-vault), then select <img alt="Settings icon" src="https://assets.postman.com/postman-docs/icon-settings-v9.jpg#icon" width="16px"> **Settings** in the top right. Optionally, you can create the integration when you [add a vault secret](/docs/sending-requests/postman-vault/postman-vault-secrets/#add-sensitive-data-as-vault-secrets).
1. Select **Connect** next to "AWS Secrets Manager".
1. You'll be prompted to authorize Postman to access your AWS account. If you need to manually authorize Postman, enter the following on the **Authenticate AWS Secrets Manager** window:

    * **Access Key** - Enter the [access key ID](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html) for your AWS account.
    * **Secret Key** - Enter the [secret access key](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html) for your AWS account.
    * **Region** - Enter the AWS [region](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-regions) where your AWS account is located.

    > You can instead autofill each field from the credentials file in your `home` directory. To create the credentials file, [install the AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html), then [configure the credentials file](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html) with your access key, secret key, and region. Once the file is configured, select a field on the **Authenticate AWS Secrets Manager** window, then select <img alt="Documentation icon" src="https://assets.postman.com/postman-docs/documentation-icon-v8-10.jpg#icon" width="16px"> **Autofill from config file**.
    >
    > Postman checks the `main` and `default` profiles in that order in your credentials. You can learn more about the credentials [file format](https://docs.aws.amazon.com/sdkref/latest/guide/file-format.html) and [default location](https://docs.aws.amazon.com/sdkref/latest/guide/file-location.html) of the file in your `home` directory.
    <!-- TODO: verify the credentials file instructions -->

1. Select **Authenticate**.

1. If your AWS account requires [multi-factor authentication](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_mfa.html), enter an **MFA Token**.

1. Select **Authenticate**.

To retrieve a secret's value from AWS Secrets Manager, do the following:

1. In AWS, make sure you have the [`secretsmanager:GetSecretValue` permission](https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html) in the [identity-based policy](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_identity-vs-resource.html) associated with your AWS user. This enables you to retrieve secrets stored in AWS Secrets Manager from Postman Vault. Follow the steps to [create a policy](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_create.html) and [attach a policy to a user](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_manage-attach-detach.html#add-policies-console). <!-- TODO: consider removing these RBAC links -->
1. In Postman, enter a name for the vault secret, hover over the **Value** cell, then select the vault integration icon <img alt="Vault icon" src="https://assets.postman.com/postman-docs/icons/icon-postman-vault.jpg#icon" width="14px">.

    > To retrieve a secret from a different external vault, select the new vault integration icon <img alt="New vault icon" src="https://assets.postman.com/postman-docs/v10/icon-pin-collection-v10.14.0.jpg#icon" width="16px">, then select an external vault.

1. Enter the following on the **Link secret** window: <!-- TODO: improve definitions -->

    * **Secret ARN** - Enter the unique [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) that identifies the secret.

        ```txt
        arn:aws:secretsmanager:<region>:<account-id>:secret:<secret-name>-<six-random-characters>
        ```

        > You can only use the current version of the secret.

    * **Role ARN (Optional)** - The secret's [permissions policy](https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access_resource-policies.html) might require you to assume a role with elevated permissions to access it. Enter the unique ARN specifying the required role to temporarily assume it. Learn more about [roles in AWS](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use.html).

        Also make sure you have the `iam:assumeRole` permission in the identity-based policy associated with your AWS user.

        ```txt
        arn:aws:iam::<account-id>:role/<role-name-with-path>
        ```

1. Select **Use**.
1. You can [reference vault secrets](/docs/sending-requests/postman-vault/postman-vault-secrets/#use-vault-secrets) in your local instance of Postman.

To view details about a secret you've retrieved from AWS Secrets Manager, select the vault integration icon <img alt="Vault icon" src="https://assets.postman.com/postman-docs/icons/icon-postman-vault.jpg#icon" width="14px"> next to a secret.

## Retrieve a different secret from an external vault

You can retrieve a different secret stored in an external vault you've created an integration with. To retrieve a different secret, select the vault integration icon <img alt="Vault icon" src="https://assets.postman.com/postman-docs/icons/icon-postman-vault.jpg#icon" width="14px"> next to a secret, then select the edit icon <img alt="Edit icon" src="https://assets.postman.com/postman-docs/documentation-edit-icon-v8-10.jpg#icon" width="18px">. Enter the required details on the **Link secret** window, then select **Use**.

To update the value of a secret stored in an external vault, you must sign in to your external vault provider separately and update the secret's value there. You can't update the value of secrets stored in external vaults directly from Postman.

## Reauthenticate with an external vault

You'll need to reauthenticate with your integrated external vaults each time you sign in to Postman, or if your authentication session expires.

To reauthenticate with an external vault, do the following:

1. [Open your Postman Vault](/docs/sending-requests/postman-vault/postman-vault-secrets/#access-your-postman-vault).
1. Select the vault integration icon <img alt="Vault icon" src="https://assets.postman.com/postman-docs/icons/icon-postman-vault.jpg#icon" width="14px"> in the **Value** cell with the integration that you need to reauthenticate with.
1. Select **Re-Authenticate Vault**.
1. Follow the steps to recreate the integration with [Azure Key Vault](#integrate-with-azure-key-vault), [HashiCorp Vault](#integrate-with-hashicorp-vault), or [AWS Secrets Manager](#integrate-with-aws-secrets-manager).

## Disconnect an integration

You can disconnect Azure Key Vault and AWS Secrets Manager integrations from your Postman Vault. You must be a Postman [Team Admin or Super Admin](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) to disconnect a HashiCorp Vault integration. When you disconnect an integration, references to the vault secret will be unresolved in your local instance of Postman.

You can't edit an existing integration with an external vault. You must disconnect the integration and then create a new integration.

To disconnect an integration, do the following:

1. [Open your Postman Vault](/docs/sending-requests/postman-vault/postman-vault-secrets/#access-your-postman-vault), then select <img alt="Settings icon" src="https://assets.postman.com/postman-docs/icon-settings-v9.jpg#icon" width="16px"> **Settings** in the top right.
1. Select **Disconnect** next to the integration you want to disconnect.

You can also select the vault integration icon <img alt="Vault icon" src="https://assets.postman.com/postman-docs/icons/icon-postman-vault.jpg#icon" width="14px"> in the **Value** cell, and select the disconnect icon <!-- TODO: add icon -->.
