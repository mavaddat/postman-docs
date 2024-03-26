---
title: "Manage public elements in Postman"
updated: 2023-06-15
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Discovering APIs | Postman Enterprise"
    url: "https://youtu.be/e1v647ayIBg"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Introducing Public Workspace Summary Emails"
    url: "https://blog.postman.com/introducing-public-workspace-summary-emails/"
  - type: link
    name: "How to Securely Deploy Postman at Scale, Part 2: Information Management"
    url: "https://blog.postman.com/how-to-securely-deploy-postman-at-scale-part-2-information-management/"
  - type: link
    name: "How to Set Up Your First Public Workspace"
    url: "https://blog.postman.com/how-to-set-up-public-workspaces/"
search_keyword: "collection links, collection JSON links, manage public elements, public documentation, public workspaces"
---

> **[Manage public elements is available on Postman Enterprise plans.](https://www.postman.com/pricing/)**

The [Manage public elements](https://blog.postman.com/govern-your-public-api-collections-more-effectively/) dashboard gives you a central place to control what collections are shared outside of your team for public consumption. You need to have a Community Manager or Super Admin [team role](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) in enterprise organizations to view and manage everything that’s made public by your team, including public collections links, public documentation, and public workspaces created by members of your team, all in one place.

## Contents

* [Managing public elements](#managing-public-elements)
    * [Workspaces](#workspaces)
    * [Public documentation](#public-documentation)
    * [Collection JSON links](#collection-json-links)
    * [Collection access keys](#collection-access-keys)

### Managing public elements

To manage public elements, you need to have a Super Admin or Community Manager role in a Postman **Enterprise** plan. Use the dashboard to manage what collections your team has exposed for public consumption and for information about specific links. You can also delete links to collections you feel shouldn't be public.

To access the **Manage public elements** dashboard, select **Team** in the header, then select **Manage Public Elements**.

#### Workspaces

In the dashboard's **Workspaces** tab, you have access to all the public workspaces created by your team. You can also view and respond to requests to make workspaces public. Along with workspace name, the request date and the requester details are displayed.

To respond to the request, hover over the relevant line, then select **Respond**. Approve the request to convert the workspace into a [public workspace](/docs/collaborating-in-postman/using-workspaces/public-workspaces/).

<img alt="Convert to public workspaces" src="https://assets.postman.com/postman-docs/request-visibility-public-workspace.jpg"/>

> To learn more about workspaces, see [Creating workspaces](/docs/collaborating-in-postman/using-workspaces/creating-workspaces/) and [Managing workspaces](/docs/collaborating-in-postman/using-workspaces/managing-workspaces/). For more details on how to create a public workspace, visit [Public workspaces](/docs/collaborating-in-postman/using-workspaces/public-workspaces/).

#### Public documentation

The dashboard's **Documentation** tab displays all the collections with published documentation. Use the search box to filter by the publisher. Along with the collection name and environment name, you can view the date the documentation was published on, who published it, and the documentation URL.

You can also view and respond to requests to make documentation public. To approve or deny a publish request, hover over a request and select **Review Request**. Select **Approve** to [publish the documentation](/docs/publishing-your-api/publishing-your-docs/) and make it public, or select **Deny** to keep the documentation private.

<img alt="Responding to publish requests" src="https://assets.postman.com/postman-docs/request-publish-documentation-v10-2.jpg"/>

#### Collection JSON links

> Sharing collection JSON files using a public link has been deprecated. No new links can be generated and existing links can't be modified or edited. Users can still access any existing collection JSON links.
>
> To share a collection's JSON, you can use the Postman API. To learn more, see [Sharing using the Postman API](/docs/collaborating-in-postman/sharing/#sharing-using-the-postman-api).

The dashboard's **Collection JSON Links** tab displays all the collections with existing JSON links.

As a Community Manager or Super Admin, you can view or delete a collection JSON link. In addition to the collection name, the dashboard displays more information about the date the link was updated on, who updated the link, and the JSON link.

#### Collection access keys

The dashboard's **Collection Access Keys** tab displays your team's [collection access keys](/docs/developer/postman-api/authentication/#generate-a-collection-access-key). You can view which collection a key belongs to, the date of its creation, and who created it. To revoke a key, hover over the key and select **Delete**.

If you turn off the **Allow creation of Collection Access Keys** setting, this prevents users from [creating new collection access keys](/docs/collaborating-in-postman/sharing/#sharing-using-the-postman-api).

![The Collection Access Keys tab](https://assets.postman.com/postman-docs/manage-public-elements-collection-access-keys-v10.jpg)

Select **Revoke All Keys** to remove all of the team's existing keys. If you select this, a warning appears.

![Revoking a team's keys](https://assets.postman.com/postman-docs/revoke-team-collection-access-keys-v10.jpg)

In the warning, select **Revoke All Keys** to confirm. To cancel, select **Keep All Keys** or close the window.

> **Revoking collection access keys is permanent.** You will not be able to undo this action.
