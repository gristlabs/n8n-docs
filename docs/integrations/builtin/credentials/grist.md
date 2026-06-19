---
title: Grist credentials
description: Documentation for Grist credentials. Use these credentials to authenticate Grist in n8n, a workflow automation platform.
contentType: [integration, reference]
---

# Grist credentials

You can use these credentials to authenticate the following nodes:

* [Grist](/integrations/builtin/app-nodes/n8n-nodes-base.grist.md)
* [Grist Trigger](/integrations/builtin/trigger-nodes/n8n-nodes-base.gristtrigger.md)

## Prerequisites

Create a [Grist](https://getgrist.com/) account.

## Supported authentication methods

- API key
- OAuth2 (PKCE)

## Related resources

Refer to [Grist's API documentation](https://support.getgrist.com/api/) for more information about the service.

## Grist URL

Both authentication methods use a single **Grist URL** field that points n8n at your Grist server:

- The default, `https://api.getgrist.com`, works for any account on hosted Grist (getgrist.com).
- To restrict the connection to a single team, use `https://YOUR_TEAM.getgrist.com`.
- For a self-managed instance, use its URL, without `/api` and without a trailing slash (for example `https://grist.example.com`).

## Using API key

To configure this credential, you'll need:

- A **Grist URL** (see [Grist URL](#grist-url) above).
- An **API Key**: in Grist, open the account menu (top right), then go to **Account settings** > **Developer** to create or copy your API key. Refer to the [Grist API authentication documentation](https://support.getgrist.com/rest-api/#authentication) for more information.

## Using OAuth2

OAuth2 lets n8n connect to Grist without storing a long-lived API key. Grist uses the PKCE authorization flow.

To configure this credential, you'll need:

- A **Grist URL** (see [Grist URL](#grist-url) above).
- A **Client ID** and **Client Secret** from a Grist Connected app.

To create the Connected app in Grist:

1. In Grist, register a new Connected app (OAuth app).
2. Set the redirect URL to your n8n OAuth callback: `https://<n8n-host>/rest/oauth2-credential/callback`. n8n shows the exact **OAuth Redirect URL** to use on the credential screen.
3. Copy the generated **Client ID** and **Client Secret** into the n8n credential.
4. Select **Connect my account** and complete the Grist consent screen.

The credential requests the following scopes: `offline_access`, `doc:read`, `doc:write`, and `doc:webhooks`. The `doc:webhooks` scope is required for the [Grist Trigger](/integrations/builtin/trigger-nodes/n8n-nodes-base.gristtrigger.md) node.

/// note | Self-managed Grist
OAuth2 requires a Grist instance with OAuth Apps enabled. Use your instance URL in the **Grist URL** field.
///
