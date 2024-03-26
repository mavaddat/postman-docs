---
title: "Review pull requests in Postman"
updated: 2022-11-17
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Version Control for Collections | Postman Level Up"
    url: "https://www.youtube.com/watch?v=QKxukXJWRPI&list=PLM-7VG-sgbtC5tNXxd28cmePSa9BYwqeU&index=7"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Introducing Environment Forking and Pull Requests"
    url: "https://blog.postman.com/introducing-environment-forking-and-pull-requests/"
  - type: link
    name: "Streamline the API Development Lifecycle with Postman Version Control"
    url: "https://blog.postman.com/streamline-api-development-lifecycle-with-postman-version-control/"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Youi"
    url: "https://www.postman.com/case-studies/youi/"
---

If you're tagged as a reviewer on a pull request, you can view the changes, comment, approve or decline the request, and merge the forked collection or environment into the parent element.

## Contents

* [Reviewing pull requests](#reviewing-pull-requests)
* [Viewing the diff](#viewing-the-diff)
* [Adding comments](#adding-comments)
* [Editing or declining a pull request](#editing-or-declining-a-pull-request)
* [Approving a pull request](#approving-a-pull-request)
* [Pulling updates during a pull request](#pulling-updates-during-a-pull-request)
* [Merging changes from a pull request](#merging-changes-from-a-pull-request)
* [Resolving conflicts from a pull request](#resolving-conflicts-from-a-pull-request)

## Reviewing pull requests

To access the list of pull requests, go to the element and select the pull requests icon <img alt="Pull request icon" src="https://assets.postman.com/postman-docs/icon-pull-request.jpg#icon" width="16px"> in the right sidebar. Each item shows the pull request's status, which will be `OPEN` for any that haven't been merged or declined. Select a pull request's name to open it.

<img src="https://assets.postman.com/postman-docs/v10/open-pull-request-list-v10.jpg" alt="Pull request list" width="350px"/>

When you're tagged as a reviewer on a pull request, Postman notifies you when a team member creates a pull request:

* Select the notifications icon <img alt="Notification icon" src="https://assets.postman.com/postman-docs/icon-notification-bell-v9.jpg#icon" width="18px"> in the Postman header to view the notification. Select **View Pull Request** to view the pull request.
* You will also receive an email with information about the pull request's title, the element included in the pull request, and who created the pull request. Select **Review Changes** in the email to access the pull request in Postman.

> If you create a pull request and make changes to it from the same Postman account, you won't receive any notifications about changes made to the pull request.

## Viewing the diff

When you review a pull request, it's important to understand the changes that the pull request will introduce into the parent collection or environment. The difference between the fork and the parent element is called the _diff_.

To view the diff, do the following:

1. In the pull request, view the diff under the **Changes** heading.

<img alt="View diff when reviewing pull request" src="https://assets.postman.com/postman-docs/v10/pull-request-review-view-diff-v10.jpg"/>

The diff will tell you whether a change is an addition, a deletion, or a modification.

## Adding comments

1. Select the comments icon <img alt="Comments icon" src="https://assets.postman.com/postman-docs/icon-comments-v9.jpg#icon" width="18px"> in the right sidebar and enter your comment.
1. Select **Comment** to add your comment.

> You can learn more about [using comments to collaborate on pull requests](/docs/collaborating-in-postman/working-with-your-team/discussing-your-work/).

## Editing or declining a pull request

You can edit a pull request's details before approving it, or you can decline it.

<img alt="Refresh, edit, or decline a pull request" src="https://assets.postman.com/postman-docs/v10/refresh-edit-decline-pull-request-v10.jpg" width="350px"/>

To edit the pull request details, do the following:

1. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> at the upper right and select **Edit**.
1. Make any changes to the pull request's title, description, and list of reviewers.
1. Select **Save Changes**.

If you don't want to merge the pull request into the parent element, you can decline it. You can't reopen a pull request that you have declined, so if you want to request edits or offer feedback, [add a comment](#adding-comments) instead.

To decline the pull request, do the following:

1. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> at the upper right and select **Decline**.
1. Select **Decline Pull Request**.

## Approving a pull request

If you're tagged as a reviewer on a pull request, you can approve the pull request.

To approve a pull request, select **Approve**.

> If you need to revoke your approval, select **Unapprove**.

<img alt="Approve a pull request" src="https://assets.postman.com/postman-docs/pull-request-approve-v9.12.jpg" width="300px"/>

After you approve the pull request, its status in the list of pull requests is `APPROVED`.

<img src="https://assets.postman.com/postman-docs/v10/pull-request-list-approved-v10.jpg" alt="Approved pull request" width="350px"/>

## Pulling updates during a pull request

You can keep your forked collections and environments up to date with any changes to the parent element, for example if another team member has merged changes into the parent element.

1. [Create the pull request.](/docs/collaborating-in-postman/using-version-control/creating-pull-requests/#creating-pull-requests) Postman will warn you that the parent element has changed since you last updated it.
1. Select **Pull Changes** to update your fork with the changes to the parent element.

    ![Pull recent changes](https://assets.postman.com/postman-docs/v10/pr-pull-changes-v10.jpg)

1. Review the diff and select **Pull changes**.

    <img alt="Pull changes into fork" src="https://assets.postman.com/postman-docs/v10/pull-changes-v10.jpg"/>

To pull updates from a parent element without opening a pull request, see [Pulling updates from a parent element](/docs/collaborating-in-postman/using-version-control/forking-elements/#pull-updates-from-a-parent-element).

## Merging changes from a pull request

When you're ready to add the changes from a pull request, you'll _merge_ them into the parent collection or environment. After the requested reviewer approves a pull request, you can merge it into the parent element.

1. From the approved pull request, select **Merge**.

    ![Merge a pull request](https://assets.postman.com/postman-docs/v10/pull-request-merge-fork-v10.jpg)

    > If the parent element has any changes since you last updated your fork, you can [pull those changes](/docs/collaborating-in-postman/using-version-control/forking-elements/#pull-updates-from-a-parent-element) before merging.

1. Select one of the following merge options:
    * **Merge changes** - Merge the changes into the parent element. This doesn't make any changes to the fork. You must have Editor access to the parent element.
    * **Merge changes and update source** - Merge the changes into the parent element. Any differences in the parent element are also made to the fork. You must have Editor access to both the parent and forked elements.
    * **Merge changes and delete source** - Merge the changes into the parent element. After the merge process is complete, Postman deletes the fork. You must have Editor access to both the parent and forked elements.

    <img src="https://assets.postman.com/postman-docs/merge-fork-options-v9.12.jpg" alt="Merge Fork Options" width="400px"/>

1. Select **Merge**.

To merge changes from a fork without opening a pull request, see [Merging changes from a fork](/docs/collaborating-in-postman/using-version-control/forking-elements/#merge-changes-from-a-fork).

## Resolving conflicts from a pull request

A merge conflict happens when you try to merge changes into an updated parent element and Postman isn't able to automatically resolve the differences between the two. If there's a conflict when you try to merge a pull request, you'll need to decide how you want to resolve them before continuing.

> Merge conflicts can involve changes in more than one workspace.

To resolve a merge conflict from a pull request, do the following:

1. Begin the pull request process described in [Creating pull requests](/docs/collaborating-in-postman/using-version-control/creating-pull-requests/#creating-pull-requests).
1. Select **Changes** to review the changes in the merge conflict.
1. Select **Resolve Conflicts** to resolve merge conflicts between the fork and parent element.

    > You can also select **Pull the changes** for any conflict.

    <img src="https://assets.postman.com/postman-docs/v10/resolve-conflicts-v10-2.jpg" alt="Resolve conflicts"/>

1. For each conflict, choose the version you want to include when you merge. Select **Keep Source** to keep the change on the parent element. Select **Keep Destination** to keep the change on your fork. You can also select the version you want to keep for each conflict.

    <img src="https://assets.postman.com/postman-docs/v10/conflicts-keep-source-or-destination-v10-2.jpg" alt="Pull Changes"/>

> To keep all changes on your fork, select **Keep all changes to source**. To keep all changes on the parent element, select **Keep all changes to destination**.

After you resolve the conflicts, select **Pull changes** to [pull the updates](#pulling-updates-during-a-pull-request).
