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
* [Set expiration duration for cached secrets](#set-expiration-duration-for-cached-secrets)
* [Retrieve a different secret from an external vault](#retrieve-a-different-secret-from-an-external-vault)
* [Reauthenticate with an external vault](#reauthenticate-with-an-external-vault)
* [Disconnect an integration](#disconnect-an-integration)

## About Postman Vault integrations

Postman Vault integrations enable you to retrieve secrets that's stored in an external vault from your Postman Vault. You can then reference retrieved secrets in your local instance of Postman. Postman supports Postman Vault integrations with [Azure Key Vault](#integrate-with-azure-key-vault), [HashiCorp Vault](#integrate-with-hashicorp-vault), and [AWS Secrets Manager](#integrate-with-aws-secrets-manager).

> You'll need to [reauthenticate with external vaults](#reauthenticate-with-an-external-vault) each time you sign in to Postman, or if your authentication session expires.

You can only integrate your Postman Vault with one organization in an external vault provider at a time. If you want to integrate with a different organization in your external vault provider, you must [disconnect the integration](#disconnect-an-integration), then create a new integration that authenticates with a different organization. See the following details about creating and managing integrations with external vault providers:

* **Azure Key Vault and AWS Secrets Manager** - You create and manage the integration with your Postman Vault. This means you and your team members can integrate with different organizations in Azure Key Vault and AWS Secrets Manager.
* **HashiCorp Vault** - Only a Postman [Team Admin or Super Admin](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) can create and manage the integration with your Postman Vault. This means that you and your team members must integrate with the same organization in HashiCorp.

## Integrate with Azure Key Vault

When setting up an integration with [Azure Key Vault](https://learn.microsoft.com/en-us/azure/key-vault/general/overview), you need to authenticate with your Microsoft Azure account. Then you can retrieve secrets stored in Azure Key Vault using the secret identifier for each secret.

> Your computer must be able to access your Microsoft Azure instance.

You can follow the steps to [create a secret](https://learn.microsoft.com/en-us/azure/key-vault/secrets/quick-create-portal#add-a-secret-to-key-vault) from Azure Key Vault. You can also follow the steps to [retrieve a secret](https://learn.microsoft.com/en-us/azure/key-vault/secrets/quick-create-portal#retrieve-a-secret-from-key-vault), enabling you to view the secret's identifier.

To integrate Postman Vault with Azure Key Vault, do the following:

1. [Open your Postman Vault](/docs/sending-requests/postman-vault/postman-vault-secrets/#access-your-postman-vault), then select <img alt="Settings icon" src="https://assets.postman.com/postman-docs/icon-settings-v9.jpg#icon" width="16px"> **Settings** in the top right. Optionally, you can create the integration when you [add a vault secret](/docs/sending-requests/postman-vault/postman-vault-secrets/#add-sensitive-data-as-vault-secrets).
1. Select **Connect** next to "Azure Key Vault".
1. You'll be prompted to authorize Postman to access your Microsoft Azure account. After you grant access, you can close the browser tab and return to Postman.

To retrieve a secret's value from Azure Key Vault, do the following:

1. In Azure, make sure you have the at least the [`Azure Vault Reader` role](https://learn.microsoft.com/en-us/azure/key-vault/general/rbac-guide?tabs=azure-cli). This enables you to retrieve secrets stored in Azure Key Vault from Postman Vault.
1. In Postman, enter a name for the vault secret, hover over the **Value** cell, then select the vault integration icon <img alt="Vault icon" src="https://assets.postman.com/postman-docs/icons/icon-postman-vault.jpg#icon" width="14px">.

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

You must be a Postman [Team Admin or Super Admin](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) to set up an integration with Postman Vault and [HashiCorp Vault](https://developer.hashicorp.com/vault/docs/what-is-vault). You need to set up an OpenID Connect (OIDC) identity provider in HashiCorp Vault, enabling Postman to access your HashiCorp Vault instance. To set up the integration in Postman, you need to enter the OIDC client URL, OIDC client ID, and namespace for your team.

Once a Postman Admin sets up the integration, you need to authenticate with your HashiCorp account. Then you can retrieve secrets stored in HashiCorp Vault using the key-value secrets engine, path, and key name for each secret.

> Your computer must be able to access your HashiCorp instance.

You can use the HashiCorp Vault Browser CLI in your public cluster to set up an OIDC identity provider. Use the [`write` command](https://developer.hashicorp.com/vault/docs/commands/write) to write data to HashiCorp Vault, and use the [`read` command](https://developer.hashicorp.com/vault/docs/commands/read) to read data from HashiCorp Vault.

You can also follow the steps to [create a KV (key-value) secrets engine](https://developer.hashicorp.com/vault/docs/secrets/kv), and store [static key-value secrets](https://developer.hashicorp.com/vault/tutorials/secrets-management/static-secrets) or [versioned key-value secrets](https://developer.hashicorp.com/vault/tutorials/secrets-management/versioned-kv). Postman only supports KV secrets engines.

To set up an OIDC identity provider in HashiCorp Vault, do the following:

1. In HashiCorp Vault, go to the [public address](https://developer.hashicorp.com/vault/tutorials/cloud/get-started-vault#vault-cluster-overview) for your HashiCorp Vault cluster.
1. Make sure you have permission to set up an [OIDC identity provider](https://developer.hashicorp.com/vault/docs/concepts/oidc-provider). You must at least have the permissions specified in the following [HashiCorp Vault policy](https://developer.hashicorp.com/vault/tutorials/policies/policies):

    ```json
    path "/identity/oidc/client/*" {
      capabilities=["create", "read"]
    }

    path "/identity/oidc/provider/*" {
      capabilities=["create", "read"]
    }

    path "/sys/auth/*" {
      capabilities=["sudo", "update"]
    }

    path "/auth/*" {
      capabilities=["update", "create"]
    }

    path "/sys/policy/*" {
      capabilities=["update"]
    }
    ```

    * `/identity/oidc/client/*` - Allows you to create and read any client application in your HashiCorp instance that understands the OIDC protocol.
    * `/identity/oidc/provider/*` - Allows you to create and read any OIDC provider in your HashiCorp instance.
    * `/sys/auth/*` - Allows you to enable a new auth method. You'll use this permission to enable a new [JSON Web Token (JWT) auth method](https://developer.hashicorp.com/vault/api-docs/auth/jwt). Learn more about the [`/sys/auth/` endpoint](https://developer.hashicorp.com/vault/api-docs/system/auth).
    * `/auth/*` - Allows you to update the new auth method, and [create a new role](https://developer.hashicorp.com/vault/api-docs/auth/jwt#create-update-role) in the new auth method.
    * `/sys/policy/*` - Allows you to create a policy. The policy will be used to attach to the new role. Learn more about the [`/sys/policy/` endpoint](https://developer.hashicorp.com/vault/api-docs/system/policy).

1. Create a public [OIDC client application](https://developer.hashicorp.com/vault/docs/concepts/oidc-provider#client-applications). You can use the `write` command to create a client application from the Browser CLI. Learn about the [endpoint for creating a client application](https://developer.hashicorp.com/vault/api-docs/secret/identity/oidc-provider#create-or-update-a-client). Example:

    ```shell
    vault write identity/oidc/client/<client-application-name> client_type=public assignments=allow_all
    ```

1. Get the client ID of the OIDC client application. You can use the `read` command to get the client ID from the Browser CLI. Learn about the [output options for printing a specific field](https://developer.hashicorp.com/vault/docs/commands/read#output-options). Example:

    ```shell
    vault read -field=client_id identity/oidc/client/<client-application-name>
    ```

1. Create an [OIDC provider](https://developer.hashicorp.com/vault/docs/concepts/oidc-provider#oidc-providers). You can use the `write` command to create an OIDC provider from the Browser CLI. Learn about the [endpoint for creating an OIDC provider](https://developer.hashicorp.com/vault/api-docs/secret/identity/oidc-provider#create-or-update-a-provider).

    ```shell
    vault write identity/oidc/provider/<client-application-name> allowed_client_ids="<oidc-client-id>" issuer="<vault-url>"
    ```

1. Get the OIDC provider URL for the client application. You can use the `read` command to get the OIDC provider URL from the Browser CLI. Learn about the [output options for printing a specific field](https://developer.hashicorp.com/vault/docs/commands/read#output-options). Example:

    ```shell
    vault read -field=issuer identity/oidc/client/<client-application-name>
    ```

1. Create a new JWT auth method named "postman-jwt". You can use the `write` command to create the new auth method from the Browser CLI. Learn about the [endpoint for creating auth methods](https://developer.hashicorp.com/vault/api-docs/system/auth#enable-auth-method). Example:

    ```shell
    vault write /sys/auth/postman-jwt type="jwt"
    ```

1. Configure a role named "postman" with permission to authenticate using the "postman-jwt" auth method. You can use the `write` command to configure the role from the Browser CLI. Learn about the [endpoint for configuring the role](https://developer.hashicorp.com/vault/api-docs/auth/jwt#configure). Example:

    ```shell
    vault write auth/postman-jwt/config oidc_discovery_url="<oidc-provider-url>" default_role=postman
    ```

1. Create a HashiCorp Vault policy that allows you to read data from all secrets engines. This policy will be attached to the "postman" role. You can use the `write` command to create a policy from the Browser CLI. Learn about the [endpoint for creating a policy](https://developer.hashicorp.com/vault/api-docs/system/policy#create-update-policy). Example:

    ```shell
    vault write sys/policy/<policy-name> policy='path "*" { capabilities=["read"] } path "sys/*" { capabilities=["deny"] } path "auth/*" { capabilities=["deny"] }'
    ```

    > You can update the policy to restrict the "postman" role from accessing specific secrets engines. At a minimum, the policy must allow the "postman" role to access the secrets engine that stores secrets you'll retrieve in Postman.

1. Create a role named "postman" and attach the policy to it. You can use the `write` command to create  a role from the Browser CLI. Learn about the [endpoint for creating a role](https://developer.hashicorp.com/vault/api-docs/auth/jwt#create-update-role). Example:

    ```shell
    vault write auth/postman-jwt/role/postman bound_audiences="<oidc-client-id>" user_claim=sub token_policies=<policy-name> role_type=jwt
    ```

To integrate Postman Vault with HashiCorp Vault, do the following:

1. [Open your Postman Vault](/docs/sending-requests/postman-vault/postman-vault-secrets/#access-your-postman-vault), then select <img alt="Settings icon" src="https://assets.postman.com/postman-docs/icon-settings-v9.jpg#icon" width="16px"> **Settings** in the top right. Optionally, you can create the integration when you [add a vault secret](/docs/sending-requests/postman-vault/postman-vault-secrets/#add-sensitive-data-as-vault-secrets).
1. Select **Set Up Integration** next to "Hashicorp Vault".
1. Enter the following on the **Set up Hashicorp Integration** window:

    * **OIDC Provider URL** - Enter the OIDC provider URL of the client application.
    * **JWT Auth Path** - This enables a new JWT auth method named "postman-jwt" in HashiCorp Vault. <!-- TODO: explain why -->
    * **Client Id** - Enter the OIDC client application's ID.
    * **Role** - This creates a new role in the JWT auth method named "postman".  <!-- TODO: explain why -->
    * **Namespace (optional)** - Optionally, enter the [namespace](https://developer.hashicorp.com/vault/docs/enterprise/namespaces) where you want users to manage their sensitive data. If you're already using namespaces, Postman recommends creating a new namespace for this integration.

1. Select **Set Up Hashicorp**.

To retrieve a secret's value from HashiCorp Vault, do the following:

1. Enter a name for the vault secret, hover over the **Value** cell, select the vault integration icon <img alt="Vault icon" src="https://assets.postman.com/postman-docs/icons/icon-postman-vault.jpg#icon" width="14px">, then select **HashiCorp Vault**.

    > To retrieve a secret from a different external vault, select the new vault integration icon <img alt="New vault icon" src="https://assets.postman.com/postman-docs/v10/icon-pin-collection-v10.14.0.jpg#icon" width="16px">, then select an external vault.

1. You'll be prompted to authorize Postman to access your HashiCorp account. After you grant access, you can close the browser tab and return to Postman.
1. Enter the following on the **Link secret** window:

    * **Engine** - The name of the [KV secrets engine]((https://developer.hashicorp.com/vault/docs/secrets/kv)). <!-- TODO: confirm that this is the name -->
    * **Path** - The path for the secret. This is the location of the secret in your KV secrets engine.
    * **Key** - The key name in the secret's key-value pair.

1. Select **Use**.
1. You can [reference vault secrets](/docs/sending-requests/postman-vault/postman-vault-secrets/#use-vault-secrets) in your local instance of Postman.

To view details about a secret you've retrieved from HashiCorp Vault, select the vault integration icon <img alt="Vault icon" src="https://assets.postman.com/postman-docs/icons/icon-postman-vault.jpg#icon" width="14px"> next to a secret.

## Integrate with AWS Secrets Manager

When setting up an integration with [AWS Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/managing-secrets.html), you need to authenticate with your AWS account, entering the access key pair (access key ID and secret access key), region, and MFA token for your AWS account. Then you can retrieve secrets stored in AWS Secrets Manager using the secret ARN and role ARN for each secret.

> Your computer must be able to access your Amazon Web Services instance.

You can follow the steps to [create a secret](https://docs.aws.amazon.com/secretsmanager/latest/userguide/create_secret.html), [find a secret](https://docs.aws.amazon.com/secretsmanager/latest/userguide/manage_search-secret.html), and [retrieve a secret](https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieving-secrets.html) from AWS Secrets Manager. Postman retrieves the value exactly as it's entered in the **Plaintext** tab, so enter the secret's value in the format you want it returned in Postman. To view a secret's details, including the secret ARN, open the [Secrets Manager console](https://console.aws.amazon.com/secretsmanager/) then select the secret's name.

To integrate Postman Vault with AWS Secrets Manager, do the following:

1. [Open your Postman Vault](/docs/sending-requests/postman-vault/postman-vault-secrets/#access-your-postman-vault), then select <img alt="Settings icon" src="https://assets.postman.com/postman-docs/icon-settings-v9.jpg#icon" width="16px"> **Settings** in the top right. Optionally, you can create the integration when you [add a vault secret](/docs/sending-requests/postman-vault/postman-vault-secrets/#add-sensitive-data-as-vault-secrets).
1. Select **Connect** next to "AWS Secrets Manager".
1. You'll be prompted to authorize Postman to access your AWS account. If you need to manually authorize Postman, enter the following on the **Authenticate AWS Secrets Manager** window:

    * **Access Key** - Enter the [access key ID](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html) for your AWS account.
    * **Secret Key** - Enter the [secret access key](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html) for your AWS account.
    * **Region** - Enter the AWS [region](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-regions) where your AWS account is located.

    > You can instead autofill each field from the credentials file in your `home` directory. To create the credentials file, [install the AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html), then [configure the credentials file](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html) with your access key, secret key, and region. Once the file is configured, select a field on the **Authenticate AWS Secrets Manager** window, then select <img alt="Documentation icon" src="https://assets.postman.com/postman-docs/documentation-icon-v8-10.jpg#icon" width="16px"> **Autofill from config file**.
    >
    > Postman checks the `main` and `default` profiles in that order in your credentials file. You can learn more about the credentials [file format](https://docs.aws.amazon.com/sdkref/latest/guide/file-format.html) and [default location](https://docs.aws.amazon.com/sdkref/latest/guide/file-location.html) of the file in your `home` directory.

1. Select **Authenticate**.

1. If your AWS account requires [multi-factor authentication](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_mfa.html), enter an **MFA Token**.

1. Select **Authenticate**.

To retrieve a secret's value from AWS Secrets Manager, do the following:

1. In AWS, make sure you have the [`secretsmanager:GetSecretValue` permission](https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html) in the [identity-based policy](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_identity-vs-resource.html) associated with your AWS user. This enables you to retrieve secrets stored in AWS Secrets Manager from Postman Vault.<!-- You can learn more about [creating a policy](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_create.html) and [attaching a policy to a user](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_manage-attach-detach.html#add-policies-console). -->
1. In Postman, enter a name for the vault secret, hover over the **Value** cell, then select the vault integration icon <img alt="Vault icon" src="https://assets.postman.com/postman-docs/icons/icon-postman-vault.jpg#icon" width="14px">.

    > To retrieve a secret from a different external vault, select the new vault integration icon <img alt="New vault icon" src="https://assets.postman.com/postman-docs/v10/icon-pin-collection-v10.14.0.jpg#icon" width="16px">, then select an external vault.

1. Enter the following on the **Link secret** window:

    * **Secret ARN** - Enter the unique [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) that identifies the secret. Postman retrieves the value exactly as it's entered in the secret's **Plaintext** tab.

        ```txt
        arn:aws:secretsmanager:<region>:<account-id>:secret:<secret-name>-<six-random-characters>
        ```

        > You can only use the current version of the secret.

    * **Role ARN (Optional)** - The secret's [permissions policy](https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access_resource-policies.html) might require you to assume a role with elevated permissions to access it. Enter the unique ARN specifying the required role to temporarily assume it. Learn more about [assuming roles in AWS](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use.html).

        Also make sure you have the `iam:assumeRole` permission in the identity-based policy associated with your AWS user.

        ```txt
        arn:aws:iam::<account-id>:role/<role-name-with-path>
        ```

1. Select **Use**.
1. You can [reference vault secrets](/docs/sending-requests/postman-vault/postman-vault-secrets/#use-vault-secrets) in your local instance of Postman.

To view details about a secret you've retrieved from AWS Secrets Manager, select the vault integration icon <img alt="Vault icon" src="https://assets.postman.com/postman-docs/icons/icon-postman-vault.jpg#icon" width="14px"> next to a secret.

## Set expiration duration for cached secrets

The value of secrets retrieved from external vaults are cached in memory for 1 hour by default. When secrets are cleared from your memory's cache, Postman retrieves your secrets' values from your external vault, caching them in memory again for the specified duration. You can customize the duration that values are cached in memory for, and you can manually reset the value cached in memory.

You can customize the amount of time secrets' values are cached in memory for. Select <img alt="Settings icon" src="https://assets.postman.com/postman-docs/icon-settings-v9.jpg#icon" width="16px"> **Settings** in the top right, then specify the amount of time secrets are valid for (in minutes) next to **Secret expiry duration**.

You can also manually reset secrets' values cached in memory. This ensures that Postman is caching the latest value in memory. Select <img alt="Settings icon" src="https://assets.postman.com/postman-docs/icon-settings-v9.jpg#icon" width="16px"> **Settings** in the top right, then select **Manually Reset Cache**.

## Retrieve a different secret from an external vault

You can retrieve a different secret stored in an external vault you've created an integration with. To retrieve a different secret, select the vault integration icon <img alt="Vault icon" src="https://assets.postman.com/postman-docs/icons/icon-postman-vault.jpg#icon" width="14px"> next to a secret, then select the edit icon <img alt="Edit icon" src="https://assets.postman.com/postman-docs/documentation-edit-icon-v8-10.jpg#icon" width="18px">. Enter the required details on the **Link secret** window, then select **Use**.

> Postman recommends that you [manually reset the value cached in memory](#set-expiration-duration-for-cached-secrets).

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
