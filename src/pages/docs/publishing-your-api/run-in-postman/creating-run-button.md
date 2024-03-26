---
title: "Create Run in Postman buttons"
updated: 2022-09-21
contextual_links:
  - type: section
    name: "Additional resources"
  - type: subtitle
    name: "Case Studies"
  - type: link
    name: "Intuit"
    url: "https://www.postman.com/case-studies/intuit/"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Generate a Run in Postman Button | Postman Level Up"
    url: "https://www.youtube.com/watch?v=r2DGy4jSuUE&list=PLM-7VG-sgbtC5tNXxd28cmePSa9BYwqeU&index=8"
  - type: subtitle
    name: "Blog posts"
  - type: link
    name: "Introducing the All-New Run in Postman Button"
    url: "https://blog.postman.com/new-run-in-postman/"
---

One way to [share your Postman collections](/docs/collaborating-in-postman/sharing/) is to create a standalone **Run in Postman** button. The **Run in Postman** button <img alt="Run in Postman button" src="https://assets.postman.com/postman-docs/run-in-postman-button-icon.jpg#icon" width="100px"/> allows users to fork the collections. You can embed the button in your website or a README to let developers interact with your API more quickly.

> Being a user, you can still create the **Run in Postman** button from API specification formats like OpenAPI and RAML. To create a button for the standard you use, first convert the file to a collection by [importing it into Postman](/docs/getting-started/importing-and-exporting/importing-data/) or by [generating a collection from your API](/docs/designing-and-developing-your-api/developing-an-api/adding-api-elements/#generating-a-collection).

## Contents

* [Creating a Run in Postman button](#creating-a-run-in-postman-button)
    * [Sample Markdown snippet](#sample-markdown-snippet)
    * [Sample HTML snippet](#sample-html-snippet)
* [Using a Run in Postman Button](#using-a-run-in-postman-button)

## Creating a Run in Postman button

Make sure you're signed in to your Postman account, and that you have a collection in a public workspace to share.

> Note: If the collection is present in a public workspace, you can directly embed the copied code where you would like the button to display. If the collection is present in a team or a personal workspace, [share the collection to a public workspace](/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#changing-workspace-visibility) to create the **Run in Postman** button.

1. Select **Collections** in the sidebar and select the collection you want to share.
1. Select <img alt="Share icon" src="https://assets.postman.com/postman-docs/icon-share.jpg#icon" width="16px"> **Share**.
1. Select the **Via Run in Postman** tab.
1. Choose a live or static button:

    * **Live button** - This button uses JavaScript, HTML, and CSS, so you can customize the button for a website. You can also access the [Run in Postman API](/docs/publishing-your-api/run-in-postman/run-button-API/) to dynamically create and update environments.
    > To create a live button, you need to share the collection to a public workspace. If you don't have a public workspace to share to, you can create a new one using the modal. For users on Enterprise plans, you need to have a [community manager](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) role to [create a new public workspace](/docs/collaborating-in-postman/using-workspaces/public-workspaces/).
    * **Static button** - This button uses Markdown, so you can display it in a README, blog, or other Markdown document.

1. You can optionally include an environment to embed with your collection. Select the **Add an environment** dropdown list and choose the environment.
1. Select <img alt="Copy icon" src="https://assets.postman.com/postman-docs/icon-copy-v9.jpg#icon" width="15px"> **Copy Code**.

    ![Create a Run in Postman button modal](https://assets.postman.com/postman-docs/v10/share-collection-run-in-postman-v10-3.jpg)

    Your embed code will include your collection's ID. In the examples below, **:collection_id** is a placeholder for that ID and **:collection_url** is a placeholder for url. If you choose to include an environment in your button, the code will also have the environment parameter.

1. Embed the code where you would like the button to display.

    ![Run in postman](https://assets.postman.com/postman-docs/v10/run-in-postman-button-v10-3.gif)

### Sample Markdown snippet

```markdown
[<img src="https://run.pstmn.io/button.svg" alt="Run In Postman" style="width: 128px; height: 32px;">](https://god.gw.postman.com/run-collection/:collection_id)
```

### Sample HTML snippet

```html
<div class="postman-run-button"
data-postman-action="collection/fork"
data-postman-var-1=":collection_id"
data-postman-collection-url=":collection_url"></div>
<script type="text/javascript">
  (function (p,o,s,t,m,a,n) {
    !p[s] && (p[s] = function () { (p[t] || (p[t] = [])).push(arguments); });
    !o.getElementById(s+t) && o.getElementsByTagName("head")[0].appendChild((
      (n = o.createElement("script")),
      (n.id = s+t), (n.async = 1), (n.src = m), n
    ));
  }(window, document, "_pm", "PostmanRunObject", "https://run.pstmn.io/button.js"));
</script>
```

## Using a Run in Postman Button

Select the **Run in Postman** button to open the page where you can fork the collection to your workspace. [Forking the collection](/docs/collaborating-in-postman/using-version-control/forking-elements/) into your workspace will enable you to contribute to the source collection using pull requests. You can also view the collection in a public workspace if you like and even import a copy of the collection using the links present on the screen. All collections shared with the new **Run in Postman** buttons come with [Fork counts](/docs/collaborating-in-postman/using-version-control/forking-elements/#view-fork-information), that help you and your consumers understand how developers use the API.

<img alt="Fork collection for run in postman" src="https://assets.postman.com/postman-docs/fork-collection-for-run-in-postman.jpg" height="400px"/>

> Live **Run in Postman** buttons automatically stay updated with changes in the original collection, so your consumers always get the most recent version of your collection without publishers having to manually update the collection's link.
