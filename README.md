## n8n Raindrop Backup Node

This is an n8n community node. It allows you to backup your Raindrop.io bookmarks, get user information, and generate new backups in your workflow.

Images
<a href="https://imgur.com/DeUgFsK"><img src="https://i.imgur.com/DeUgFsK.png" title="source: imgur.com" /></a>

#### Installation

No special requirement for this node.

Just follow the generic installation guide in the n8n community nodes documentation.

NpmJs url: https://www.npmjs.com/package/n8n-nodes-raindropbackup

NpmJs package name: n8n-nodes-raindropbackup

    Go to Settings > Community Nodes, and click Install a community node.
    Enter n8n-nodes-raindropbackup in Enter npm package name input.
    Click Install.

After installation, you can use the search bar to add the Raindrop Backup node to your workflow.

#### Usage

The node configuration is simple. Specify the credentials and the operation you want to perform.
Credentials

To use this node, you need to configure the Raindrop credentials in n8n. The Raindrop API credentials are already built into n8n. Follow the steps below to set it up:

    In n8n, go to Credentials.
    Create a new credential and select Raindrop API.
    Click on Connect and follow the instructions to authorize n8n to access your Raindrop account.


For more information on setting up Raindrop credentials, refer to the n8n documentation.  https://docs.n8n.io/integrations/builtin/credentials/raindrop/#using-oauth 

<a href="https://imgur.com/IYj1cDe"><img src="https://i.imgur.com/IYj1cDe.png" title="source: imgur.com" /></a>


#### Resources/Operations

This section describes the operations available in this node.

| Resource | Operation           | Description                                                | Credentials required |
| -------- | ------------------- | ---------------------------------------------------------- | -------------------- |
| Backup   | Generate New Backup | Generates a new backup of your Raindrop bookmarks.         | Yes                  |
|          | Get Many            | Fetches all backups created since the account was created. | Yes                  |
| User     | Get User            | Fetches user information from Raindrop.io.                 | Yes                  |




#### Generates a new backup of your Raindrop bookmarks.

Example output:

``` JASON
{
  "result": {
    "message": "We will send you email with html export file when it be ready! Time depends on bookmarks count and queue."
  }
}

```

<a href="https://imgur.com/ZDSdDno"><img src="https://i.imgur.com/ZDSdDno.png" title="source: imgur.com" /></a>



#### Get Many - Requires credential

Fetches all backups created since the account was created.

Example output:


``` JASON
{
  "result": {
    "items": [
      {
        "_id": "665125b73d690ffb25b6880a",
        "created": "2024-05-24T23:41:43.182Z"
      },
      {
        "_id": "664a3fa2d1275c06f9c663e1",
        "created": "2024-05-19T18:06:26.354Z"
      },
      // More items...
    ]
  }
}

```


<a href="https://imgur.com/LRKWeGp"><img src="https://i.imgur.com/LRKWeGp.png" title="source: imgur.com" /></a>


#### Get User - Requires credential

Fetches user information from Raindrop.io.

Example output:

``` JASON
{
  "result": {
    "user": {
      "tfa": {
        "enabled": true
      },
      "files": {
        "used": 0,
        "size": 100000000,
        "lastCheckPoint": "2023-10-28T00:13:10.816Z"
      },
      "_id": "1737296",
      "fullName": "pichon",
      "name": "pichon",
      "email": "admin@mail.com",
      "avatar": "https://up.raindrop.io/user/avatars/00/00/0/12285535.png",
      "pro": false,
      "groups": [
        {
          "title": "Collections",
          "hidden": false,
          "sort": 0,
          "collections": [
            43256920,
            43211905,
            // More collections...
          ]
        }
      ],
      "lastAction": "2024-05-24T23:12:48.229Z",
      "lastVisit": "2024-05-24T00:27:28.323Z",
      "registered": "2023-10-28T00:13:10.817Z",
      "lastUpdate": "2024-05-24T23:12:48.229Z",
      "config": {
        "default_collection_view": "grid",
        "raindrops_hide": [
          "list_excerpt",
          "simple_excerpt",
          "grid_excerpt",
          "masonry_excerpt"
        ],
        "raindrops_buttons": [
          "select",
          "preview",
          "edit",
          "remove",
          "new_tab"
        ],
        "raindrops_search_by_score": true,
        "raindrops_search_incollection": false,
        "broken_level": "default",
        "font_size": 0,
        "add_default_collection": -1,
        "acknowledge": [],
        "last_collection": 38758240,
        "filters_hide": true,
        "tags_hide": true,
        "nested_view_legacy": true,
        "ai_suggestions": true,
        "password": true
      }
    }
  }
}

```

You can use a docker-compose.yml file to launch 2 containers, one with n8n and another with a mock Raindrop API for testing purposes.


