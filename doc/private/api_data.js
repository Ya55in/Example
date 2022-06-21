define({ "api": [
  {
    "type": "delete",
    "url": "/settings/1",
    "title": "Delete a setting",
    "name": "Delete_a_Setting",
    "group": "General_Settings",
    "version": "1.0.0",
    "description": "<p>Delete a settings.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "unsignedBigInteger",
            "optional": false,
            "field": "hotel_id",
            "description": "<p>hotel_id of the general settings.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "logo",
            "description": "<p>logo of the general settings.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "licence_days",
            "description": "<p>licence_days the general settings.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "1",
          "type": "json"
        }
      ]
    },
    "filename": "../app/Http/Controllers/GeneralSettingsController.php",
    "groupTitle": "General_Settings"
  },
  {
    "type": "get",
    "url": "/settings",
    "title": "List of settings",
    "name": "GeneralSettings_index",
    "group": "General_Settings",
    "version": "1.0.0",
    "description": "<p>List all settings. It is possible to add some filters for more accuracy.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "unsignedBigInteger",
            "optional": false,
            "field": "hotel_id",
            "description": "<p>hotel_id of the general settings.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "logo",
            "description": "<p>logo of the general settings.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "licence_days",
            "description": "<p>licence_days the general settings.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "    {\n    \"data\": [\n       {\n       \"id\": 1,\n       \"hotel_id\": \"1\",\n       \"logo\": \"logo_1619185986.jpeg\",\n       \"licence_days\": 30,\n     }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../app/Http/Controllers/GeneralSettingsController.php",
    "groupTitle": "General_Settings"
  },
  {
    "type": "post",
    "url": "/settings",
    "title": "New setting",
    "name": "New_Setting",
    "group": "General_Settings",
    "version": "1.0.0",
    "description": "<p>Add new settings.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "unsignedBigInteger",
            "optional": false,
            "field": "hotel_id",
            "description": "<p>hotel_id of the general settings.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "logo",
            "description": "<p>logo of the general settings.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "licence_days",
            "description": "<p>licence_days the general settings.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "    {\n    \"data\": [\n       {\n       \"id\": 1,\n       \"hotel_id\": \"1\",\n       \"logo\": \"logo_1619185986.jpeg\",\n       \"licence_days\": 30,\n     }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../app/Http/Controllers/GeneralSettingsController.php",
    "groupTitle": "General_Settings"
  },
  {
    "type": "get",
    "url": "/settings/1",
    "title": "Show a setting",
    "name": "Show_a_setting",
    "group": "General_Settings",
    "version": "1.0.0",
    "description": "<p>Show a setting.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "unsignedBigInteger",
            "optional": false,
            "field": "hotel_id",
            "description": "<p>hotel_id of the general settings.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "logo",
            "description": "<p>logo of the general settings.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "licence_days",
            "description": "<p>licence_days the general settings.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "    {\n    \"data\": [\n       {\n       \"id\": 1,\n       \"hotel_id\": \"1\",\n       \"logo\": \"logo_1619185986.jpeg\",\n       \"licence_days\": 30,\n     }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../app/Http/Controllers/GeneralSettingsController.php",
    "groupTitle": "General_Settings"
  },
  {
    "type": "put",
    "url": "/settings/1",
    "title": "Update setting",
    "name": "Update_Setting",
    "group": "General_Settings",
    "version": "1.0.0",
    "description": "<p>Update setting.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "unsignedBigInteger",
            "optional": false,
            "field": "hotel_id",
            "description": "<p>hotel_id of the general settings.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "logo",
            "description": "<p>logo of the general settings.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "licence_days",
            "description": "<p>licence_days the general settings.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "    {\n    \"data\": [\n       {\n       \"id\": 1,\n       \"hotel_id\": \"1\",\n       \"logo\": \"logo_1619185986.jpeg\",\n       \"licence_days\": 30,\n     }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../app/Http/Controllers/GeneralSettingsController.php",
    "groupTitle": "General_Settings"
  },
  {
    "type": "delete",
    "url": "/users/1",
    "title": "Delete user",
    "name": "Delete_user",
    "group": "Users",
    "version": "1.0.0",
    "description": "<p>Delete user.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "firstname",
            "description": "<p>firstname of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "lastname",
            "description": "<p>lastname of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "1",
          "type": "json"
        }
      ]
    },
    "filename": "../app/Http/Controllers/UserController.php",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/users",
    "title": "New user",
    "name": "New_user",
    "group": "Users",
    "version": "1.0.0",
    "description": "<p>Add new user.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "firstname",
            "description": "<p>firstname of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "lastname",
            "description": "<p>lastname of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "    {\n    \"data\": [\n       {\n       \"id\": 1,\n       \"firstname\": \"Azzeddine\",\n       \"lastname\": \"Lubowitz\",\n       \"email\": \"usern@gmail.com\",\n       \"role\": {\n       \"id\": 1,\n       \"name\": \"User\",\n       \"created_at\": \"2021-04-06T11:52:39.000000Z\",\n       \"updated_at\": \"2021-04-06T11:52:39.000000Z\"\n     }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../app/Http/Controllers/UserController.php",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users/1",
    "title": "Show a user",
    "name": "Show_a_user",
    "group": "Users",
    "version": "1.0.0",
    "description": "<p>Show a user.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "firstname",
            "description": "<p>firstname of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "lastname",
            "description": "<p>lastname of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "    {\n    \"data\": [\n       {\n       \"id\": 1,\n       \"firstname\": \"Azzeddine\",\n       \"lastname\": \"Lubowitz\",\n       \"email\": \"usern@gmail.com\",\n       \"role\": {\n       \"id\": 1,\n       \"name\": \"User\",\n       \"created_at\": \"2021-04-06T11:52:39.000000Z\",\n       \"updated_at\": \"2021-04-06T11:52:39.000000Z\"\n     }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../app/Http/Controllers/UserController.php",
    "groupTitle": "Users"
  },
  {
    "type": "put",
    "url": "/users/1",
    "title": "Update user",
    "name": "Update_a_user",
    "group": "Users",
    "version": "1.0.0",
    "description": "<p>Update user.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "firstname",
            "description": "<p>firstname of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "lastname",
            "description": "<p>lastname of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "    {\n    \"data\": [\n       {\n       \"id\": 1,\n       \"firstname\": \"Azzeddine\",\n       \"lastname\": \"Lubowitz\",\n       \"email\": \"usern@gmail.com\",\n       \"role\": {\n       \"id\": 1,\n       \"name\": \"User\",\n       \"created_at\": \"2021-04-06T11:52:39.000000Z\",\n       \"updated_at\": \"2021-04-06T11:52:39.000000Z\"\n     }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../app/Http/Controllers/UserController.php",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users",
    "title": "List of users",
    "name": "users_index",
    "group": "Users",
    "version": "1.0.0",
    "description": "<p>List all users. It is possible to add some filters for more accuracy.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "firstname",
            "description": "<p>firstname of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "lastname",
            "description": "<p>lastname of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "    {\n    \"data\": [\n       {\n       \"id\": 1,\n       \"firstname\": \"Azzeddine\",\n       \"lastname\": \"Lubowitz\",\n       \"email\": \"usern@gmail.com\",\n       \"role\": {\n       \"id\": 1,\n       \"name\": \"User\",\n       \"created_at\": \"2021-04-06T11:52:39.000000Z\",\n       \"updated_at\": \"2021-04-06T11:52:39.000000Z\"\n     }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../app/Http/Controllers/UserController.php",
    "groupTitle": "Users"
  },
  {
    "type": "delete",
    "url": "/articles/1",
    "title": "Delete an article",
    "name": "Delete_an_article",
    "group": "articles",
    "version": "1.0.0",
    "description": "<p>Delete article.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "unsignedBigInteger",
            "optional": false,
            "field": "category_id",
            "description": "<p>category_id of the article.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "name",
            "description": "<p>name of the article.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "image",
            "description": "<p>image of the article.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "description",
            "description": "<p>description of the article.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "price",
            "description": "<p>price of the article.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "1",
          "type": "json"
        }
      ]
    },
    "filename": "../app/Http/Controllers/ArticleController.php",
    "groupTitle": "articles"
  },
  {
    "type": "post",
    "url": "/articles",
    "title": "New article",
    "name": "New_article",
    "group": "articles",
    "version": "1.0.0",
    "description": "<p>Add new article.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "unsignedBigInteger",
            "optional": false,
            "field": "category_id",
            "description": "<p>category_id of the article.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "name",
            "description": "<p>name of the article.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "image",
            "description": "<p>image of the article.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "description",
            "description": "<p>description of the article.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "price",
            "description": "<p>price of the article.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "    {\n    \"data\": [\n       {\n       \"id\": 1,\n       \"category_id\": 1,\n       \"name\": \"article name\",\n       \"image\": \"image.jpg\",\n       \"description\": \"description...\",\n       \"price\": 10.00,\n     }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../app/Http/Controllers/ArticleController.php",
    "groupTitle": "articles"
  },
  {
    "type": "get",
    "url": "/articles/1",
    "title": "Show an article",
    "name": "Show_an_article",
    "group": "articles",
    "version": "1.0.0",
    "description": "<p>Show article.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "unsignedBigInteger",
            "optional": false,
            "field": "category_id",
            "description": "<p>category_id of the article.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "name",
            "description": "<p>name of the article.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "image",
            "description": "<p>image of the article.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "description",
            "description": "<p>description of the article.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "price",
            "description": "<p>price of the article.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "    {\n    \"data\": [\n       {\n       \"id\": 1,\n       \"category_id\": 1,\n       \"name\": \"article name\",\n       \"image\": \"image.jpg\",\n       \"description\": \"description...\",\n       \"price\": 10.00,\n     }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../app/Http/Controllers/ArticleController.php",
    "groupTitle": "articles"
  },
  {
    "type": "put",
    "url": "/articles/1",
    "title": "Update article",
    "name": "Update_article",
    "group": "articles",
    "version": "1.0.0",
    "description": "<p>Update article.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "unsignedBigInteger",
            "optional": false,
            "field": "category_id",
            "description": "<p>category_id of the article.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "name",
            "description": "<p>name of the article.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "image",
            "description": "<p>image of the article.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "description",
            "description": "<p>description of the article.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "price",
            "description": "<p>price of the article.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "    {\n    \"data\": [\n       {\n       \"id\": 1,\n       \"category_id\": 1,\n       \"name\": \"article name\",\n       \"image\": \"image.jpg\",\n       \"description\": \"description...\",\n       \"price\": 10.00,\n     }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../app/Http/Controllers/ArticleController.php",
    "groupTitle": "articles"
  },
  {
    "type": "get",
    "url": "/articles",
    "title": "List of articles",
    "name": "articles_index",
    "group": "articles",
    "version": "1.0.0",
    "description": "<p>List all articles. It is possible to add some filters for more accuracy.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "unsignedBigInteger",
            "optional": false,
            "field": "category_id",
            "description": "<p>category_id of the article.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "name",
            "description": "<p>name of the article.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "image",
            "description": "<p>image of the article.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "description",
            "description": "<p>description of the article.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "price",
            "description": "<p>price of the article.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "    {\n    \"data\": [\n       {\n       \"id\": 1,\n       \"category_id\": 1,\n       \"name\": \"article name\",\n       \"image\": \"image.jpg\",\n       \"description\": \"description...\",\n       \"price\": 10.00,\n     }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../app/Http/Controllers/ArticleController.php",
    "groupTitle": "articles"
  },
  {
    "type": "delete",
    "url": "/categories/1",
    "title": "Delete a category",
    "name": "Delete_a_category",
    "group": "categories",
    "version": "1.0.0",
    "description": "<p>Delete a category.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "unsignedBigInteger",
            "optional": false,
            "field": "hotel_id",
            "description": "<p>hotel_id of the category.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "name",
            "description": "<p>name of the category.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "icon",
            "description": "<p>icon of the category.</p>"
          },
          {
            "group": "Success 200",
            "type": "time",
            "optional": false,
            "field": "startTime",
            "description": "<p>startTime of the category.</p>"
          },
          {
            "group": "Success 200",
            "type": "time",
            "optional": false,
            "field": "endDate",
            "description": "<p>endTime of the category.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "Sequence",
            "description": "<p>Sequence of the category.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "1",
          "type": "json"
        }
      ]
    },
    "filename": "../app/Http/Controllers/CategoryController.php",
    "groupTitle": "categories"
  },
  {
    "type": "post",
    "url": "/categories",
    "title": "New category",
    "name": "New_Category",
    "group": "categories",
    "version": "1.0.0",
    "description": "<p>Add new categories.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "unsignedBigInteger",
            "optional": false,
            "field": "hotel_id",
            "description": "<p>hotel_id of the category.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "name",
            "description": "<p>name of the category.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "icon",
            "description": "<p>icon of the category.</p>"
          },
          {
            "group": "Success 200",
            "type": "time",
            "optional": false,
            "field": "startTime",
            "description": "<p>startTime of the category.</p>"
          },
          {
            "group": "Success 200",
            "type": "time",
            "optional": false,
            "field": "endTime",
            "description": "<p>endTime of the category.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "Sequence",
            "description": "<p>Sequence of the category.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "    {\n    \"data\": [\n       {\n       \"id\": 1,\n       \"hotel_id\": \"1\",\n       \"name\": \"Category1\",\n       \"icon\": \"icon_1619185986.jpeg\",\n       \"startTime\": \"08:30:00\",\n       \"endTime\": \"18:30:00\",\n       \"Sequence\": \"1\",\n     }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../app/Http/Controllers/CategoryController.php",
    "groupTitle": "categories"
  },
  {
    "type": "get",
    "url": "/categories/1",
    "title": "Show a category",
    "name": "Show_a_category",
    "group": "categories",
    "version": "1.0.0",
    "description": "<p>Show a category.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "unsignedBigInteger",
            "optional": false,
            "field": "hotel_id",
            "description": "<p>hotel_id of the category.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "name",
            "description": "<p>name of the category.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "icon",
            "description": "<p>icon of the category.</p>"
          },
          {
            "group": "Success 200",
            "type": "time",
            "optional": false,
            "field": "startTime",
            "description": "<p>startTime of the category.</p>"
          },
          {
            "group": "Success 200",
            "type": "time",
            "optional": false,
            "field": "endTime",
            "description": "<p>endTime of the category.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "Sequence",
            "description": "<p>Sequence of the category.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "    {\n    \"data\": [\n       {\n       \"id\": 1,\n       \"hotel_id\": \"1\",\n       \"name\": \"Category1\",\n       \"icon\": \"icon_1619185986.jpeg\",\n       \"startTime\": \"08:30:00\",\n       \"endTime\": \"18:30:00\",\n       \"Sequence\": \"1\",\n     }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../app/Http/Controllers/CategoryController.php",
    "groupTitle": "categories"
  },
  {
    "type": "put",
    "url": "/categories/1",
    "title": "Update category",
    "name": "Update_Category",
    "group": "categories",
    "version": "1.0.0",
    "description": "<p>Update categories.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "unsignedBigInteger",
            "optional": false,
            "field": "hotel_id",
            "description": "<p>hotel_id of the category.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "name",
            "description": "<p>name of the category.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "icon",
            "description": "<p>icon of the category.</p>"
          },
          {
            "group": "Success 200",
            "type": "time",
            "optional": false,
            "field": "startTime",
            "description": "<p>startTime of the category.</p>"
          },
          {
            "group": "Success 200",
            "type": "time",
            "optional": false,
            "field": "endTime",
            "description": "<p>endTime of the category.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "Sequence",
            "description": "<p>Sequence of the category.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "    {\n    \"data\": [\n       {\n       \"id\": 1,\n       \"hotel_id\": \"1\",\n       \"name\": \"Category1\",\n       \"icon\": \"icon_1619185986.jpeg\",\n       \"startTime\": \"08:30:00\",\n       \"endTime\": \"18:30:00\",\n       \"Sequence\": \"1\",\n     }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../app/Http/Controllers/CategoryController.php",
    "groupTitle": "categories"
  },
  {
    "type": "get",
    "url": "/Categories",
    "title": "List of categories",
    "name": "categories_index",
    "group": "categories",
    "version": "1.0.0",
    "description": "<p>List all categories. It is possible to add some filters for more accuracy.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "unsignedBigInteger",
            "optional": false,
            "field": "hotel_id",
            "description": "<p>hotel_id of the category.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "name",
            "description": "<p>name of the category.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "icon",
            "description": "<p>icon of the category.</p>"
          },
          {
            "group": "Success 200",
            "type": "time",
            "optional": false,
            "field": "startTime",
            "description": "<p>startTime of the category.</p>"
          },
          {
            "group": "Success 200",
            "type": "time",
            "optional": false,
            "field": "endTime",
            "description": "<p>endDate of the category.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "Sequence",
            "description": "<p>Sequence of the category.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "    {\n    \"data\": [\n       {\n       \"id\": 1,\n       \"hotel_id\": \"1\",\n       \"name\": \"Category1\",\n       \"icon\": \"icon_1619185986.jpeg\",\n       \"startTime\": \"08:30:00\",\n       \"endTime\": \"18:30:00\",\n       \"Sequence\": \"1\",\n     }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../app/Http/Controllers/CategoryController.php",
    "groupTitle": "categories"
  },
  {
    "type": "delete",
    "url": "/choices/1",
    "title": "Delete a choice",
    "name": "Delete_a_choice",
    "group": "choices",
    "version": "1.0.0",
    "description": "<p>Delete choice.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "unsignedBigInteger",
            "optional": false,
            "field": "option_id",
            "description": "<p>option_id of the choice.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "name",
            "description": "<p>name of the choice.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "1",
          "type": "json"
        }
      ]
    },
    "filename": "../app/Http/Controllers/ChoiceController.php",
    "groupTitle": "choices"
  },
  {
    "type": "post",
    "url": "/choices",
    "title": "New choice",
    "name": "New_choice",
    "group": "choices",
    "version": "1.0.0",
    "description": "<p>Add new choice.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "unsignedBigInteger",
            "optional": false,
            "field": "option_id",
            "description": "<p>option_id of the choice.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "name",
            "description": "<p>name of the choice.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "    {\n    \"data\": [\n       {\n       \"id\": 1,\n       \"option_id\": 1,\n       \"name\": \"option name\",\n     }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../app/Http/Controllers/ChoiceController.php",
    "groupTitle": "choices"
  },
  {
    "type": "get",
    "url": "/choices/1",
    "title": "Show a choice",
    "name": "Show_a_choice",
    "group": "choices",
    "version": "1.0.0",
    "description": "<p>Show a choice.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "unsignedBigInteger",
            "optional": false,
            "field": "option_id",
            "description": "<p>option_id of the choice.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "name",
            "description": "<p>name of the choice.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "    {\n    \"data\": [\n       {\n       \"id\": 1,\n       \"option_id\": 1,\n       \"name\": \"option name\",\n     }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../app/Http/Controllers/ChoiceController.php",
    "groupTitle": "choices"
  },
  {
    "type": "put",
    "url": "/choices/1",
    "title": "Update choice",
    "name": "Update_choice",
    "group": "choices",
    "version": "1.0.0",
    "description": "<p>Update choice.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "unsignedBigInteger",
            "optional": false,
            "field": "option_id",
            "description": "<p>option_id of the choice.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "name",
            "description": "<p>name of the choice.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "    {\n    \"data\": [\n       {\n       \"id\": 1,\n       \"option_id\": 1,\n       \"name\": \"option name\",\n     }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../app/Http/Controllers/ChoiceController.php",
    "groupTitle": "choices"
  },
  {
    "type": "get",
    "url": "/choices",
    "title": "List of choices",
    "name": "choices_index",
    "group": "choices",
    "version": "1.0.0",
    "description": "<p>List all choice. It is possible to add some filters for more accuracy.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "unsignedBigInteger",
            "optional": false,
            "field": "option_id",
            "description": "<p>option_id of the choice.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "name",
            "description": "<p>name of the choice.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "    {\n    \"data\": [\n       {\n       \"id\": 1,\n       \"option_id\": 1,\n       \"name\": \"option name\",\n     }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../app/Http/Controllers/ChoiceController.php",
    "groupTitle": "choices"
  },
  {
    "type": "delete",
    "url": "/commands/1",
    "title": "DElete command",
    "name": "Delete_command",
    "group": "commands",
    "version": "1.0.0",
    "description": "<p>Delete command.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "unsignedBigInteger",
            "optional": false,
            "field": "user_id",
            "description": "<p>user_id of the command.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "status",
            "description": "<p>status of the command.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "1",
          "type": "json"
        }
      ]
    },
    "filename": "../app/Http/Controllers/CommandController.php",
    "groupTitle": "commands"
  },
  {
    "type": "post",
    "url": "/commands",
    "title": "New command",
    "name": "New_command",
    "group": "commands",
    "version": "1.0.0",
    "description": "<p>List all commands. It is possible to add some filters for more accuracy.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "unsignedBigInteger",
            "optional": false,
            "field": "user_id",
            "description": "<p>user_id of the command.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "status",
            "description": "<p>status of the command.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "    {\n    \"data\": [\n       {\n       \"id\": 1,\n       \"user_id\": 1,\n       \"user\": {\n       \"id\": 1,\n       \"lastname\": \"naciri\",\n       \"firstname\": \"hamza\",\n       \"name\": \"HN\",\n       \"email\": \"hamza@hamza.hamza\",\n       \"email_verified_at\": null,\n       \"created_at\": \"2021-05-20T10:04:27.000000Z\",\n        \"updated_at\": \"2021-05-20T10:04:27.000000Z\"\n         },\n        \"articles\": [{\n         \"id\": 1,\n         \"category_id\": 1,\n         \"name\": \"article name\",\n         \"image\": \"image.png\",\n         \"description\": \"desciption.....\",\n         \"price\": 20,\n         \"max_options\": 2,\n         \"created_at\": \"2021-05-20T09:12:26.000000Z\",\n         \"updated_at\": \"2021-05-20T09:12:26.000000Z\",\n         \"pivot\": {\n         \"command_id\": 1,\n         \"article_id\": 1\n            },\n            {\n         \"id\": 1,\n         \"category_id\": 1,\n         \"name\": \"article name\",\n         \"image\": \"image.png\",\n         \"description\": \"desciption.....\",\n         \"price\": 20,\n         \"max_options\": 2,\n         \"created_at\": \"2021-05-20T09:12:26.000000Z\",\n         \"updated_at\": \"2021-05-20T09:12:26.000000Z\",\n         \"pivot\": {\n         \"command_id\": 1,\n         \"article_id\": 1\n            }],\n         \"status\" : \"InPreparation\"\n     }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../app/Http/Controllers/CommandController.php",
    "groupTitle": "commands"
  },
  {
    "type": "get",
    "url": "/commands/1",
    "title": "Show an command",
    "name": "Show_an_command",
    "group": "commands",
    "version": "1.0.0",
    "description": "<p>Show command.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "unsignedBigInteger",
            "optional": false,
            "field": "user_id",
            "description": "<p>user_id of the command.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "status",
            "description": "<p>status of the command.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "    {\n    \"data\": [\n       {\n       \"id\": 1,\n       \"user_id\": 1,\n       \"user\": {\n       \"id\": 1,\n       \"lastname\": \"naciri\",\n       \"firstname\": \"hamza\",\n       \"name\": \"HN\",\n       \"email\": \"hamza@hamza.hamza\",\n       \"email_verified_at\": null,\n       \"created_at\": \"2021-05-20T10:04:27.000000Z\",\n        \"updated_at\": \"2021-05-20T10:04:27.000000Z\"\n         },\n        \"articles\": [{\n         \"id\": 1,\n         \"category_id\": 1,\n         \"name\": \"article name\",\n         \"image\": \"image.png\",\n         \"description\": \"desciption.....\",\n         \"price\": 20,\n         \"max_options\": 2,\n         \"created_at\": \"2021-05-20T09:12:26.000000Z\",\n         \"updated_at\": \"2021-05-20T09:12:26.000000Z\",\n         \"pivot\": {\n         \"command_id\": 1,\n         \"article_id\": 1\n            },\n            {\n         \"id\": 1,\n         \"category_id\": 1,\n         \"name\": \"article name\",\n         \"image\": \"image.png\",\n         \"description\": \"desciption.....\",\n         \"price\": 20,\n         \"max_options\": 2,\n         \"created_at\": \"2021-05-20T09:12:26.000000Z\",\n         \"updated_at\": \"2021-05-20T09:12:26.000000Z\",\n         \"pivot\": {\n         \"command_id\": 1,\n         \"article_id\": 1\n            }],\n         \"status\" : \"InPreparation\"\n     }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../app/Http/Controllers/CommandController.php",
    "groupTitle": "commands"
  },
  {
    "type": "put",
    "url": "/commands/1",
    "title": "Update command",
    "name": "Update_command",
    "group": "commands",
    "version": "1.0.0",
    "description": "<p>Update command.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "unsignedBigInteger",
            "optional": false,
            "field": "user_id",
            "description": "<p>user_id of the command.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "status",
            "description": "<p>status of the command.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "    {\n    \"data\": [\n       {\n       \"id\": 1,\n       \"user_id\": 1,\n       \"user\": {\n       \"id\": 1,\n       \"lastname\": \"naciri\",\n       \"firstname\": \"hamza\",\n       \"name\": \"HN\",\n       \"email\": \"hamza@hamza.hamza\",\n       \"email_verified_at\": null,\n       \"created_at\": \"2021-05-20T10:04:27.000000Z\",\n        \"updated_at\": \"2021-05-20T10:04:27.000000Z\"\n         },\n        \"articles\": [{\n         \"id\": 1,\n         \"category_id\": 1,\n         \"name\": \"article name\",\n         \"image\": \"image.png\",\n         \"description\": \"desciption.....\",\n         \"price\": 20,\n         \"max_options\": 2,\n         \"created_at\": \"2021-05-20T09:12:26.000000Z\",\n         \"updated_at\": \"2021-05-20T09:12:26.000000Z\",\n         \"pivot\": {\n         \"command_id\": 1,\n         \"article_id\": 1\n            },\n            {\n         \"id\": 1,\n         \"category_id\": 1,\n         \"name\": \"article name\",\n         \"image\": \"image.png\",\n         \"description\": \"desciption.....\",\n         \"price\": 20,\n         \"max_options\": 2,\n         \"created_at\": \"2021-05-20T09:12:26.000000Z\",\n         \"updated_at\": \"2021-05-20T09:12:26.000000Z\",\n         \"pivot\": {\n         \"command_id\": 1,\n         \"article_id\": 1\n            }],\n         \"status\" : \"InPreparation\"\n     }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../app/Http/Controllers/CommandController.php",
    "groupTitle": "commands"
  },
  {
    "type": "get",
    "url": "/commands",
    "title": "List of commands",
    "name": "commands_index",
    "group": "commands",
    "version": "1.0.0",
    "description": "<p>List all commands. It is possible to add some filters for more accuracy.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "unsignedBigInteger",
            "optional": false,
            "field": "user_id",
            "description": "<p>user_id of the command.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "status",
            "description": "<p>status of the command.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "    {\n    \"data\": [\n       {\n       \"id\": 1,\n       \"user_id\": 1,\n       \"user\": {\n       \"id\": 1,\n       \"lastname\": \"naciri\",\n       \"firstname\": \"hamza\",\n       \"name\": \"HN\",\n       \"email\": \"hamza@hamza.hamza\",\n       \"email_verified_at\": null,\n       \"created_at\": \"2021-05-20T10:04:27.000000Z\",\n        \"updated_at\": \"2021-05-20T10:04:27.000000Z\"\n         },\n        \"articles\": [{\n         \"id\": 1,\n         \"category_id\": 1,\n         \"name\": \"article name\",\n         \"image\": \"image.png\",\n         \"description\": \"desciption.....\",\n         \"price\": 20,\n         \"max_options\": 2,\n         \"created_at\": \"2021-05-20T09:12:26.000000Z\",\n         \"updated_at\": \"2021-05-20T09:12:26.000000Z\",\n         \"pivot\": {\n         \"command_id\": 1,\n         \"article_id\": 1\n            },\n            {\n         \"id\": 1,\n         \"category_id\": 1,\n         \"name\": \"article name\",\n         \"image\": \"image.png\",\n         \"description\": \"desciption.....\",\n         \"price\": 20,\n         \"max_options\": 2,\n         \"created_at\": \"2021-05-20T09:12:26.000000Z\",\n         \"updated_at\": \"2021-05-20T09:12:26.000000Z\",\n         \"pivot\": {\n         \"command_id\": 1,\n         \"article_id\": 1\n            }],\n         \"status\" : \"InPreparation\"\n     }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../app/Http/Controllers/CommandController.php",
    "groupTitle": "commands"
  },
  {
    "type": "put",
    "url": "/defaultLicences/1",
    "title": "update default licence",
    "name": "update_default_licence",
    "group": "default_licences",
    "version": "1.0.0",
    "description": "<p>update default licence.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "days",
            "description": "<p>days of the choice.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "    {\n    \"data\": [\n       {\n       \"id\": 1,\n       \"days\": 1,\n     }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../app/Http/Controllers/DefaultLicenceController.php",
    "groupTitle": "default_licences"
  },
  {
    "type": "delete",
    "url": "/hotels/1",
    "title": "Delete a hotel",
    "name": "Delete_a_hotel",
    "group": "hotels",
    "version": "1.0.0",
    "description": "<p>Delete a hotel.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "unsignedBigInteger",
            "optional": false,
            "field": "user_id",
            "description": "<p>user_id of the hotel.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "name",
            "description": "<p>name of the hotel.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "country",
            "description": "<p>country of the hotel.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "city",
            "description": "<p>city of the hotel.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "address",
            "description": "<p>address of the hotel.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "status",
            "description": "<p>status of the hotel.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "1",
          "type": "json"
        }
      ]
    },
    "filename": "../app/Http/Controllers/HotelController.php",
    "groupTitle": "hotels"
  },
  {
    "type": "post",
    "url": "/hotels",
    "title": "New hotel",
    "name": "New_Hotel",
    "group": "hotels",
    "version": "1.0.0",
    "description": "<p>Add new hotels.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "unsignedBigInteger",
            "optional": false,
            "field": "user_id",
            "description": "<p>user_id of the hotel.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "name",
            "description": "<p>name of the hotel.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "country",
            "description": "<p>country of the hotel.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "city",
            "description": "<p>city of the hotel.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "address",
            "description": "<p>address of the hotel.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "status",
            "description": "<p>status of the hotel.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "    {\n    \"data\": [\n       {\n       \"id\": 1,\n       \"user_id\": \"1\",\n       \"name\": \"name\",\n       \"country\": \"Morocco\",\n       \"city\": \"Marrakech\",\n       \"address\": \"Address\",\n       \"status\": \"1\",\n     }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../app/Http/Controllers/HotelController.php",
    "groupTitle": "hotels"
  },
  {
    "type": "get",
    "url": "/hotels/1",
    "title": "Show a hotel",
    "name": "Show_a_hotel",
    "group": "hotels",
    "version": "1.0.0",
    "description": "<p>Show a hotel.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "unsignedBigInteger",
            "optional": false,
            "field": "user_id",
            "description": "<p>user_id of the hotel.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "name",
            "description": "<p>name of the hotel.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "country",
            "description": "<p>country of the hotel.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "city",
            "description": "<p>city of the hotel.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "address",
            "description": "<p>address of the hotel.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "status",
            "description": "<p>status of the hotel.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "    {\n    \"data\": [\n       {\n       \"id\": 1,\n       \"user_id\": \"1\",\n       \"name\": \"name\",\n       \"country\": \"Morocco\",\n       \"city\": \"Marrakech\",\n       \"address\": \"Address\",\n       \"status\": \"1\",\n     }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../app/Http/Controllers/HotelController.php",
    "groupTitle": "hotels"
  },
  {
    "type": "put",
    "url": "/hotels/1",
    "title": "Update hotel",
    "name": "Update_Hotel",
    "group": "hotels",
    "version": "1.0.0",
    "description": "<p>Update hotel.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "unsignedBigInteger",
            "optional": false,
            "field": "user_id",
            "description": "<p>user_id of the hotel.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "name",
            "description": "<p>name of the hotel.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "country",
            "description": "<p>country of the hotel.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "city",
            "description": "<p>city of the hotel.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "address",
            "description": "<p>address of the hotel.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "status",
            "description": "<p>status of the hotel.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "    {\n    \"data\": [\n       {\n       \"id\": 1,\n       \"user_id\": \"1\",\n       \"name\": \"name\",\n       \"country\": \"Morocco\",\n       \"city\": \"Marrakech\",\n       \"address\": \"Address\",\n       \"status\": \"1\",\n     }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../app/Http/Controllers/HotelController.php",
    "groupTitle": "hotels"
  },
  {
    "type": "get",
    "url": "/hotels",
    "title": "List of hotels",
    "name": "hotels_index",
    "group": "hotels",
    "version": "1.0.0",
    "description": "<p>List all hotels. It is possible to add some filters for more accuracy.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "unsignedBigInteger",
            "optional": false,
            "field": "user_id",
            "description": "<p>user_id of the hotel.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "name",
            "description": "<p>name of the hotel.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "country",
            "description": "<p>country of the hotel.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "city",
            "description": "<p>city of the hotel.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "address",
            "description": "<p>address of the hotel.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "status",
            "description": "<p>status of the hotel.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "    {\n    \"data\": [\n       {\n       \"id\": 1,\n       \"user_id\": \"1\",\n       \"name\": \"name\",\n       \"country\": \"Morocco\",\n       \"city\": \"Marrakech\",\n       \"address\": \"Address\",\n       \"status\": \"1\",\n     }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../app/Http/Controllers/HotelController.php",
    "groupTitle": "hotels"
  },
  {
    "type": "delete",
    "url": "/licences/1",
    "title": "Delete a licence",
    "name": "Delete_a_licence",
    "group": "licences",
    "version": "1.0.0",
    "description": "<p>Delete a licence.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "unsignedBigInteger",
            "optional": false,
            "field": "hotel_id",
            "description": "<p>hotel_id of the licence.</p>"
          },
          {
            "group": "Success 200",
            "type": "datetime",
            "optional": false,
            "field": "startDate",
            "description": "<p>startDate of the licence.</p>"
          },
          {
            "group": "Success 200",
            "type": "datetime",
            "optional": false,
            "field": "endDate",
            "description": "<p>endDate of the licence.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "1",
          "type": "json"
        }
      ]
    },
    "filename": "../app/Http/Controllers/LicenceController.php",
    "groupTitle": "licences"
  },
  {
    "type": "post",
    "url": "/licences",
    "title": "New licence",
    "name": "New_Licence",
    "group": "licences",
    "version": "1.0.0",
    "description": "<p>Add new licences.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "unsignedBigInteger",
            "optional": false,
            "field": "hotel_id",
            "description": "<p>hotel_id of the licence.</p>"
          },
          {
            "group": "Success 200",
            "type": "datetime",
            "optional": false,
            "field": "startDate",
            "description": "<p>startDate of the licence.</p>"
          },
          {
            "group": "Success 200",
            "type": "datetime",
            "optional": false,
            "field": "endDate",
            "description": "<p>endDate of the licence.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "    {\n    \"data\": [\n       {\n       \"id\": 1,\n       \"hotel_id\": \"1\",\n       \"startDate\": \"2021-04-06T11:52:39.000000Z\",\n       \"endDate\": \"2021-04-06T16:52:39.000000Z\"\n     }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../app/Http/Controllers/LicenceController.php",
    "groupTitle": "licences"
  },
  {
    "type": "get",
    "url": "/licences/1",
    "title": "Show a licence",
    "name": "Show_a_licence",
    "group": "licences",
    "version": "1.0.0",
    "description": "<p>Show a licence.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "unsignedBigInteger",
            "optional": false,
            "field": "hotel_id",
            "description": "<p>hotel_id of the licence.</p>"
          },
          {
            "group": "Success 200",
            "type": "datetime",
            "optional": false,
            "field": "startDate",
            "description": "<p>startDate of the licence.</p>"
          },
          {
            "group": "Success 200",
            "type": "datetime",
            "optional": false,
            "field": "endDate",
            "description": "<p>endDate of the licence.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "    {\n    \"data\": [\n       {\n       \"id\": 1,\n       \"hotel_id\": \"1\",\n       \"startDate\": \"2021-04-06T11:52:39.000000Z\",\n       \"endDate\": \"2021-04-06T16:52:39.000000Z\"\n     }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../app/Http/Controllers/LicenceController.php",
    "groupTitle": "licences"
  },
  {
    "type": "put",
    "url": "/licences/1",
    "title": "Update licence",
    "name": "Update_licence",
    "group": "licences",
    "version": "1.0.0",
    "description": "<p>Update licence.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "unsignedBigInteger",
            "optional": false,
            "field": "hotel_id",
            "description": "<p>hotel_id of the licence.</p>"
          },
          {
            "group": "Success 200",
            "type": "datetime",
            "optional": false,
            "field": "startDate",
            "description": "<p>startDate of the licence.</p>"
          },
          {
            "group": "Success 200",
            "type": "datetime",
            "optional": false,
            "field": "endDate",
            "description": "<p>endDate of the licence.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "    {\n    \"data\": [\n       {\n       \"id\": 1,\n       \"hotel_id\": \"1\",\n       \"startDate\": \"2021-04-06T11:52:39.000000Z\",\n       \"endDate\": \"2021-04-06T16:52:39.000000Z\"\n     }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../app/Http/Controllers/LicenceController.php",
    "groupTitle": "licences"
  },
  {
    "type": "get",
    "url": "/licences",
    "title": "List of licences",
    "name": "licences_index",
    "group": "licences",
    "version": "1.0.0",
    "description": "<p>List all licences. It is possible to add some filters for more accuracy.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "unsignedBigInteger",
            "optional": false,
            "field": "hotel_id",
            "description": "<p>hotel_id of the licence.</p>"
          },
          {
            "group": "Success 200",
            "type": "datetime",
            "optional": false,
            "field": "startDate",
            "description": "<p>startDate of the licence.</p>"
          },
          {
            "group": "Success 200",
            "type": "datetime",
            "optional": false,
            "field": "endDate",
            "description": "<p>endDate of the licence.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "    {\n    \"data\": [\n       {\n       \"id\": 1,\n       \"hotel_id\": \"1\",\n       \"startDate\": \"2021-04-06T11:52:39.000000Z\",\n       \"endDate\": \"2021-04-06T16:52:39.000000Z\"\n     }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../app/Http/Controllers/LicenceController.php",
    "groupTitle": "licences"
  },
  {
    "type": "delete",
    "url": "/offers/1",
    "title": "Delete an offer",
    "name": "Delete_an_offer",
    "group": "offers",
    "version": "1.0.0",
    "description": "<p>Delete an offer.</p>",
    "success": {
      "examples": [
        {
          "title": "Success example",
          "content": "1",
          "type": "json"
        }
      ]
    },
    "filename": "../app/Http/Controllers/OfferController.php",
    "groupTitle": "offers"
  },
  {
    "type": "post",
    "url": "/offers",
    "title": "New offers",
    "name": "New_offer",
    "group": "offers",
    "version": "1.0.0",
    "description": "<p>Add new offers.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "hotel_id",
            "description": "<p>hotel_id of the Offer.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "type_id",
            "description": "<p>type_id of the Offer.</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "prix",
            "description": "<p>prix of the Offer.</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "profit",
            "description": "<p>profit of the Offer.</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "discount",
            "description": "<p>discount of the Offer.</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "prixFinal",
            "description": "<p>prixFinal of the Offer.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "frequency",
            "description": "<p>frequency of the Offer.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "titre",
            "description": "<p>titre of the Offer.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>image of the Offer.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "orders",
            "description": "<p>orders of the Offer.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "status",
            "description": "<p>status of the Offer.</p>"
          },
          {
            "group": "Parameter",
            "type": "Text",
            "optional": false,
            "field": "description",
            "description": "<p>description of the Offer.</p>"
          },
          {
            "group": "Parameter",
            "type": "dateTime",
            "optional": false,
            "field": "startDate",
            "description": "<p>startDate of the offer.</p>"
          },
          {
            "group": "Parameter",
            "type": "dateTime",
            "optional": false,
            "field": "endDate",
            "description": "<p>endDate of the offer.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "titre",
            "description": "<p>Titre of the offer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Image of the offer.</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the offer.</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "prix",
            "description": "<p>Prix of the offer.</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "Frequency",
            "description": "<p>Frequency of the offer.</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "discount",
            "description": "<p>Discount of the offer.</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "profit",
            "description": "<p>Profit of the offer.</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the offer.</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "orders",
            "description": "<p>Orders of the offer.</p>"
          },
          {
            "group": "Success 200",
            "type": "dateTime",
            "optional": false,
            "field": "startDate",
            "description": "<p>startDate of the offer.</p>"
          },
          {
            "group": "Success 200",
            "type": "dateTime",
            "optional": false,
            "field": "endDate",
            "description": "<p>endDate of the offer.</p>"
          },
          {
            "group": "Success 200",
            "type": "Objet",
            "optional": false,
            "field": "hotel",
            "description": "<p>Hotel of the offer.</p>"
          },
          {
            "group": "Success 200",
            "type": "Objet",
            "optional": false,
            "field": "type",
            "description": "<p>Type of the offer.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "{\n    \"data\": [\n      {\n         \"id\": 1,\n          \"titre\": \"titre\",\n          \"description\": \"desc\",\n          \"prix\": 100,\n          \"Frequency\": 4,\n          \"startDate\": null,\n          \"endDate\": null,\n          \"image\": \"http://localhost/img/offers/EiUO2ilhl8G6Y6GiEh3K0GOK44CkGhNs93C9OXNJ.jpg\",\n          \"profit\": 0,\n          \"discount\": 0,\n          \"prixFinal\": 0,\n          \"status\": 0,\n          \"orders\": 0,\n          \"hotel\": {\n              \"id\": 1,\n              \"user_id\": null,\n              \"name\": \"SEC Hotel\",\n              \"country\": \"Morocco\",\n              \"city\": \"Marrakech\",\n              \"address\": \"Guiliz\",\n              \"status\": \"test\",\n              \"categories\": [\n                  {\n                      \"id\": 1,\n                      \"hotel_id\": 1,\n                      \"name\": \"Categorie\",\n                      \"icon\": \"categories/mStlbQFRuKDlpEBk6EGkRP0YlHbO4eNTELdQLYoI.jpg\",\n                      \"startTime\": \"07:00:00\",\n                      \"endTime\": \"23:00:00\",\n                      \"Sequence\": 2,\n                      \"created_at\": \"2021-08-30T10:40:16.000000Z\",\n                      \"updated_at\": \"2021-08-30T10:40:16.000000Z\"\n                  }\n              ]\n          },\n          \"type\": {\n              \"id\": 2,\n              \"hotel_id\": 1,\n              \"name\": \"La Terrasse Restaurant\",\n              \"gold_img\": \"http://localhost/img/types/terrasserestaurantgoldimage.png\",\n              \"purple_img\": \"http://localhost/img/types/terrasserestaurantpurpleimage.png\"\n          }\n      }\n  ],\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../app/Http/Controllers/OfferController.php",
    "groupTitle": "offers"
  },
  {
    "type": "get",
    "url": "/offers/1",
    "title": "Show an offer",
    "name": "Show_an_offer",
    "group": "offers",
    "version": "1.0.0",
    "description": "<p>Show an offer.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>id of the Offer.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "titre",
            "description": "<p>Titre of the offer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Image of the offer.</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the offer.</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "prix",
            "description": "<p>Prix of the offer.</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "Frequency",
            "description": "<p>Frequency of the offer.</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "discount",
            "description": "<p>Discount of the offer.</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "profit",
            "description": "<p>Profit of the offer.</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the offer.</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "orders",
            "description": "<p>Orders of the offer.</p>"
          },
          {
            "group": "Success 200",
            "type": "dateTime",
            "optional": false,
            "field": "startDate",
            "description": "<p>date of the offer.</p>"
          },
          {
            "group": "Success 200",
            "type": "dateTime",
            "optional": false,
            "field": "endDate",
            "description": "<p>date of the offer.</p>"
          },
          {
            "group": "Success 200",
            "type": "Objet",
            "optional": false,
            "field": "hotel",
            "description": "<p>Hotel of the offer.</p>"
          },
          {
            "group": "Success 200",
            "type": "Objet",
            "optional": false,
            "field": "type",
            "description": "<p>Type of the offer.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "{\n    \"data\": [\n      {\n         \"id\": 1,\n          \"titre\": \"titre\",\n          \"description\": \"desc\",\n          \"prix\": 100,\n          \"Frequency\": 4,\n          \"startDate\": null,\n          \"endDate\": null,\n          \"image\": \"http://localhost/img/offers/EiUO2ilhl8G6Y6GiEh3K0GOK44CkGhNs93C9OXNJ.jpg\",\n          \"profit\": 0,\n          \"discount\": 0,\n          \"prixFinal\": 0,\n          \"status\": 0,\n          \"orders\": 0,\n          \"hotel\": {\n              \"id\": 1,\n              \"user_id\": null,\n              \"name\": \"SEC Hotel\",\n              \"country\": \"Morocco\",\n              \"city\": \"Marrakech\",\n              \"address\": \"Guiliz\",\n              \"status\": \"test\",\n              \"categories\": [\n                  {\n                      \"id\": 1,\n                      \"hotel_id\": 1,\n                      \"name\": \"Categorie\",\n                      \"icon\": \"categories/mStlbQFRuKDlpEBk6EGkRP0YlHbO4eNTELdQLYoI.jpg\",\n                      \"startTime\": \"07:00:00\",\n                      \"endTime\": \"23:00:00\",\n                      \"Sequence\": 2,\n                      \"created_at\": \"2021-08-30T10:40:16.000000Z\",\n                      \"updated_at\": \"2021-08-30T10:40:16.000000Z\"\n                  }\n              ]\n          },\n          \"type\": {\n              \"id\": 2,\n              \"hotel_id\": 1,\n              \"name\": \"La Terrasse Restaurant\",\n              \"gold_img\": \"http://localhost/img/types/terrasserestaurantgoldimage.png\",\n              \"purple_img\": \"http://localhost/img/types/terrasserestaurantpurpleimage.png\"\n          }\n      }\n  ],\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../app/Http/Controllers/OfferController.php",
    "groupTitle": "offers"
  },
  {
    "type": "put",
    "url": "/offer/1",
    "title": "Update offer",
    "name": "Update_Offer",
    "group": "offers",
    "version": "1.0.0",
    "description": "<p>Update offers.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "id",
            "description": "<p>id of the Offer.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "hotel_id",
            "description": "<p>hotel_id of the Offer.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "type_id",
            "description": "<p>type_id of the Offer.</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "prix",
            "description": "<p>prix of the Offer.</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "profit",
            "description": "<p>profit of the Offer.</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "discount",
            "description": "<p>discount of the Offer.</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "prixFinal",
            "description": "<p>prixFinal of the Offer.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "frequency",
            "description": "<p>frequency of the Offer.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "titre",
            "description": "<p>titre of the Offer.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>image of the Offer.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "orders",
            "description": "<p>orders of the Offer.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "status",
            "description": "<p>status of the Offer.</p>"
          },
          {
            "group": "Parameter",
            "type": "Text",
            "optional": false,
            "field": "description",
            "description": "<p>description of the Offer.</p>"
          },
          {
            "group": "Parameter",
            "type": "dateTime",
            "optional": false,
            "field": "startDate",
            "description": "<p>startDate of the offer.</p>"
          },
          {
            "group": "Parameter",
            "type": "dateTime",
            "optional": false,
            "field": "endDate",
            "description": "<p>endDate of the offer.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "titre",
            "description": "<p>Titre of the offer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Image of the offer.</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the offer.</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "prix",
            "description": "<p>Prix of the offer.</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "Frequency",
            "description": "<p>Frequency of the offer.</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "discount",
            "description": "<p>Discount of the offer.</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "profit",
            "description": "<p>Profit of the offer.</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the offer.</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "orders",
            "description": "<p>Orders of the offer.</p>"
          },
          {
            "group": "Success 200",
            "type": "dateTime",
            "optional": false,
            "field": "startDate",
            "description": "<p>startDate of the offer.</p>"
          },
          {
            "group": "Success 200",
            "type": "dateTime",
            "optional": false,
            "field": "endDate",
            "description": "<p>endDate of the offer.</p>"
          },
          {
            "group": "Success 200",
            "type": "Objet",
            "optional": false,
            "field": "hotel",
            "description": "<p>Hotel of the offer.</p>"
          },
          {
            "group": "Success 200",
            "type": "Objet",
            "optional": false,
            "field": "type",
            "description": "<p>Type of the offer.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "{\n    \"data\": [\n      {\n         \"id\": 1,\n          \"titre\": \"titre\",\n          \"description\": \"desc\",\n          \"prix\": 100,\n          \"Frequency\": 4,\n          \"startDate\": null,\n          \"endDate\": null,\n          \"image\": \"http://localhost/img/offers/EiUO2ilhl8G6Y6GiEh3K0GOK44CkGhNs93C9OXNJ.jpg\",\n          \"profit\": 0,\n          \"discount\": 0,\n          \"prixFinal\": 0,\n          \"status\": 0,\n          \"orders\": 0,\n          \"hotel\": {\n              \"id\": 1,\n              \"user_id\": null,\n              \"name\": \"SEC Hotel\",\n              \"country\": \"Morocco\",\n              \"city\": \"Marrakech\",\n              \"address\": \"Guiliz\",\n              \"status\": \"test\",\n              \"categories\": [\n                  {\n                      \"id\": 1,\n                      \"hotel_id\": 1,\n                      \"name\": \"Categorie\",\n                      \"icon\": \"categories/mStlbQFRuKDlpEBk6EGkRP0YlHbO4eNTELdQLYoI.jpg\",\n                      \"startTime\": \"07:00:00\",\n                      \"endTime\": \"23:00:00\",\n                      \"Sequence\": 2,\n                      \"created_at\": \"2021-08-30T10:40:16.000000Z\",\n                      \"updated_at\": \"2021-08-30T10:40:16.000000Z\"\n                  }\n              ]\n          },\n          \"type\": {\n              \"id\": 2,\n              \"hotel_id\": 1,\n              \"name\": \"La Terrasse Restaurant\",\n              \"gold_img\": \"http://localhost/img/types/terrasserestaurantgoldimage.png\",\n              \"purple_img\": \"http://localhost/img/types/terrasserestaurantpurpleimage.png\"\n          }\n      }\n  ],\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../app/Http/Controllers/OfferController.php",
    "groupTitle": "offers"
  },
  {
    "type": "get",
    "url": "/offers",
    "title": "List of Offers",
    "name": "offers_index",
    "group": "offers",
    "version": "1.0.0",
    "description": "<p>List all offers. It is possible to add some filters for more accuracy.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "hotel_id",
            "description": "<p>Hotel_id of the Offer.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "titre",
            "description": "<p>Titre of the offer.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Image of the offer.</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the offer.</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "prix",
            "description": "<p>Prix of the offer.</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "Frequency",
            "description": "<p>Frequency of the offer.</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "discount",
            "description": "<p>Discount of the offer.</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "profit",
            "description": "<p>Profit of the offer.</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the offer.</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "orders",
            "description": "<p>Orders of the offer.</p>"
          },
          {
            "group": "Success 200",
            "type": "dateTime",
            "optional": false,
            "field": "startDate",
            "description": "<p>date of the offer.</p>"
          },
          {
            "group": "Success 200",
            "type": "dateTime",
            "optional": false,
            "field": "endDate",
            "description": "<p>date of the offer.</p>"
          },
          {
            "group": "Success 200",
            "type": "Objet",
            "optional": false,
            "field": "hotel",
            "description": "<p>Hotel of the offer.</p>"
          },
          {
            "group": "Success 200",
            "type": "Objet",
            "optional": false,
            "field": "type",
            "description": "<p>Type of the offer.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "{\n    \"data\": [\n      {\n         \"id\": 1,\n          \"titre\": \"titre\",\n          \"description\": \"desc\",\n          \"prix\": 100,\n          \"Frequency\": 4,\n          \"startDate\": null,\n          \"endDate\": null,\n          \"image\": \"http://localhost/img/offers/EiUO2ilhl8G6Y6GiEh3K0GOK44CkGhNs93C9OXNJ.jpg\",\n          \"profit\": 0,\n          \"discount\": 0,\n          \"prixFinal\": 0,\n          \"status\": 0,\n          \"orders\": 0,\n          \"hotel\": {\n              \"id\": 1,\n              \"user_id\": null,\n              \"name\": \"SEC Hotel\",\n              \"country\": \"Morocco\",\n              \"city\": \"Marrakech\",\n              \"address\": \"Guiliz\",\n              \"status\": \"test\",\n              \"categories\": [\n                  {\n                      \"id\": 1,\n                      \"hotel_id\": 1,\n                      \"name\": \"Categorie\",\n                      \"icon\": \"categories/mStlbQFRuKDlpEBk6EGkRP0YlHbO4eNTELdQLYoI.jpg\",\n                      \"startTime\": \"07:00:00\",\n                      \"endTime\": \"23:00:00\",\n                      \"Sequence\": 2,\n                      \"created_at\": \"2021-08-30T10:40:16.000000Z\",\n                      \"updated_at\": \"2021-08-30T10:40:16.000000Z\"\n                  }\n              ]\n          },\n          \"type\": {\n              \"id\": 2,\n              \"hotel_id\": 1,\n              \"name\": \"La Terrasse Restaurant\",\n              \"gold_img\": \"http://localhost/img/types/terrasserestaurantgoldimage.png\",\n              \"purple_img\": \"http://localhost/img/types/terrasserestaurantpurpleimage.png\"\n          }\n      }\n  ],\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../app/Http/Controllers/OfferController.php",
    "groupTitle": "offers"
  },
  {
    "type": "delete",
    "url": "/options/1",
    "title": "Delete an option",
    "name": "Delete_an_option",
    "group": "options",
    "version": "1.0.0",
    "description": "<p>Delete an option.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "unsignedBigInteger",
            "optional": false,
            "field": "article_id",
            "description": "<p>article_id of the room.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "name",
            "description": "<p>name of the room.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "max_choice",
            "description": "<p>max_choice the room.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "1",
          "type": "json"
        }
      ]
    },
    "filename": "../app/Http/Controllers/OptionController.php",
    "groupTitle": "options"
  },
  {
    "type": "post",
    "url": "/options",
    "title": "New option",
    "name": "New_option",
    "group": "options",
    "version": "1.0.0",
    "description": "<p>Add new option.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "unsignedBigInteger",
            "optional": false,
            "field": "article_id",
            "description": "<p>article_id of the room.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "name",
            "description": "<p>name of the room.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "max_choice",
            "description": "<p>max_choice the room.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "    {\n    \"data\": [\n       {\n       \"id\": 1,\n       \"article_id\": 1,\n       \"name\": \"option name\",\n       \"max_choice\": 5\n     }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../app/Http/Controllers/OptionController.php",
    "groupTitle": "options"
  },
  {
    "type": "get",
    "url": "/options/1",
    "title": "Show an option",
    "name": "Show_an_option",
    "group": "options",
    "version": "1.0.0",
    "description": "<p>Show an option.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "unsignedBigInteger",
            "optional": false,
            "field": "article_id",
            "description": "<p>article_id of the room.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "name",
            "description": "<p>name of the room.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "max_choice",
            "description": "<p>max_choice the room.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "    {\n    \"data\": [\n       {\n       \"id\": 1,\n       \"article_id\": 1,\n       \"name\": \"option name\",\n       \"max_choice\": 5\n     }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../app/Http/Controllers/OptionController.php",
    "groupTitle": "options"
  },
  {
    "type": "put",
    "url": "/options/1",
    "title": "Update option",
    "name": "Update_option",
    "group": "options",
    "version": "1.0.0",
    "description": "<p>Update option.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "unsignedBigInteger",
            "optional": false,
            "field": "article_id",
            "description": "<p>article_id of the room.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "name",
            "description": "<p>name of the room.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "max_choice",
            "description": "<p>max_choice the room.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "    {\n    \"data\": [\n       {\n       \"id\": 1,\n       \"article_id\": 1,\n       \"name\": \"option name\",\n       \"max_choice\": 5\n     }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../app/Http/Controllers/OptionController.php",
    "groupTitle": "options"
  },
  {
    "type": "get",
    "url": "/options",
    "title": "List of options",
    "name": "options_index",
    "group": "options",
    "version": "1.0.0",
    "description": "<p>List all options. It is possible to add some filters for more accuracy.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "unsignedBigInteger",
            "optional": false,
            "field": "article_id",
            "description": "<p>article_id of the room.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "name",
            "description": "<p>name of the room.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "max_choice",
            "description": "<p>max_choice the room.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "    {\n    \"data\": [\n       {\n       \"id\": 1,\n       \"article_id\": 1,\n       \"name\": \"option name\",\n       \"max_choice\": 5\n     }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../app/Http/Controllers/OptionController.php",
    "groupTitle": "options"
  },
  {
    "type": "delete",
    "url": "/prolongations/1",
    "title": "Delete a prolongation",
    "name": "Delete_a_prolongation",
    "group": "prolongations",
    "version": "1.0.0",
    "description": "<p>delete prolongation.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "unsignedBigInteger",
            "optional": false,
            "field": "hotel_id",
            "description": "<p>hotel_id of the prolongation.</p>"
          },
          {
            "group": "Success 200",
            "type": "datetime",
            "optional": false,
            "field": "startDate",
            "description": "<p>startDate the prolongation.</p>"
          },
          {
            "group": "Success 200",
            "type": "datetime",
            "optional": false,
            "field": "endDate",
            "description": "<p>endDate of the prolongation.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "1",
          "type": "json"
        }
      ]
    },
    "filename": "../app/Http/Controllers/ProlongationController.php",
    "groupTitle": "prolongations"
  },
  {
    "type": "post",
    "url": "/prolongations",
    "title": "New prolongation",
    "name": "New_prolongation",
    "group": "prolongations",
    "version": "1.0.0",
    "description": "<p>Add new prolongation.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "unsignedBigInteger",
            "optional": false,
            "field": "hotel_id",
            "description": "<p>hotel_id of the prolongation.</p>"
          },
          {
            "group": "Success 200",
            "type": "datetime",
            "optional": false,
            "field": "startDate",
            "description": "<p>startDate the prolongation.</p>"
          },
          {
            "group": "Success 200",
            "type": "datetime",
            "optional": false,
            "field": "endDate",
            "description": "<p>endDate of the prolongation.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "    {\n    \"data\": [\n       {\n       \"id\": 1,\n       \"hotel_id\": 1,\n       \"startDate\": \"2021-04-06T11:52:39.000000Z\",\n       \"endDate\": \"2021-04-06T16:52:39.000000Z\"\n     }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../app/Http/Controllers/ProlongationController.php",
    "groupTitle": "prolongations"
  },
  {
    "type": "get",
    "url": "/prolongations/1",
    "title": "Show a prolongation",
    "name": "Show_a_prolongation",
    "group": "prolongations",
    "version": "1.0.0",
    "description": "<p>Show a prolongation.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "unsignedBigInteger",
            "optional": false,
            "field": "hotel_id",
            "description": "<p>hotel_id of the prolongation.</p>"
          },
          {
            "group": "Success 200",
            "type": "datetime",
            "optional": false,
            "field": "startDate",
            "description": "<p>startDate the prolongation.</p>"
          },
          {
            "group": "Success 200",
            "type": "datetime",
            "optional": false,
            "field": "endDate",
            "description": "<p>endDate of the prolongation.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "    {\n    \"data\": [\n       {\n       \"id\": 1,\n       \"hotel_id\": 1,\n       \"startDate\": \"2021-04-06T11:52:39.000000Z\",\n       \"endDate\": \"2021-04-06T16:52:39.000000Z\"\n     }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../app/Http/Controllers/ProlongationController.php",
    "groupTitle": "prolongations"
  },
  {
    "type": "put",
    "url": "/prolongations/1",
    "title": "Update prolongation",
    "name": "Update_prolongation",
    "group": "prolongations",
    "version": "1.0.0",
    "description": "<p>Update prolongation.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "unsignedBigInteger",
            "optional": false,
            "field": "hotel_id",
            "description": "<p>hotel_id of the prolongation.</p>"
          },
          {
            "group": "Success 200",
            "type": "datetime",
            "optional": false,
            "field": "startDate",
            "description": "<p>startDate the prolongation.</p>"
          },
          {
            "group": "Success 200",
            "type": "datetime",
            "optional": false,
            "field": "endDate",
            "description": "<p>endDate of the prolongation.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "    {\n    \"data\": [\n       {\n       \"id\": 1,\n       \"hotel_id\": 1,\n       \"startDate\": \"2021-04-06T11:52:39.000000Z\",\n       \"endDate\": \"2021-04-06T16:52:39.000000Z\"\n     }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../app/Http/Controllers/ProlongationController.php",
    "groupTitle": "prolongations"
  },
  {
    "type": "get",
    "url": "/prolongations",
    "title": "List of prolongations",
    "name": "prolongations_index",
    "group": "prolongations",
    "version": "1.0.0",
    "description": "<p>List all prolongations. It is possible to add some filters for more accuracy.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "unsignedBigInteger",
            "optional": false,
            "field": "hotel_id",
            "description": "<p>hotel_id of the prolongation.</p>"
          },
          {
            "group": "Success 200",
            "type": "datetime",
            "optional": false,
            "field": "startDate",
            "description": "<p>startDate the prolongation.</p>"
          },
          {
            "group": "Success 200",
            "type": "datetime",
            "optional": false,
            "field": "endDate",
            "description": "<p>endDate of the prolongation.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "    {\n    \"data\": [\n       {\n       \"id\": 1,\n       \"hotel_id\": 1,\n       \"startDate\": \"2021-04-06T11:52:39.000000Z\",\n       \"endDate\": \"2021-04-06T16:52:39.000000Z\"\n     }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../app/Http/Controllers/ProlongationController.php",
    "groupTitle": "prolongations"
  },
  {
    "type": "delete",
    "url": "/rooms/1",
    "title": "Delete a room",
    "name": "Delete_a_room",
    "group": "rooms",
    "version": "1.0.0",
    "description": "<p>Delete a room.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "unsignedBigInteger",
            "optional": false,
            "field": "hotel_id",
            "description": "<p>hotel_id of the room.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "room_number",
            "description": "<p>room_number the room.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "qrcode",
            "description": "<p>qrcode of the room.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "1",
          "type": "json"
        }
      ]
    },
    "filename": "../app/Http/Controllers/RoomController.php",
    "groupTitle": "rooms"
  },
  {
    "type": "post",
    "url": "/rooms",
    "title": "New room",
    "name": "New_room",
    "group": "rooms",
    "version": "1.0.0",
    "description": "<p>Add new Room.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "unsignedBigInteger",
            "optional": false,
            "field": "hotel_id",
            "description": "<p>hotel_id of the room.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "room_number",
            "description": "<p>room_number the room.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "qrcode",
            "description": "<p>qrcode of the room.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "    {\n    \"data\": [\n       {\n       \"id\": 1,\n       \"hotel_id\": 1,\n       \"room_number\": 1,\n       \"qrcode\": \"url\",\n     }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../app/Http/Controllers/RoomController.php",
    "groupTitle": "rooms"
  },
  {
    "type": "get",
    "url": "/rooms/1",
    "title": "Show a room",
    "name": "Show_a_room",
    "group": "rooms",
    "version": "1.0.0",
    "description": "<p>Show a Room.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "unsignedBigInteger",
            "optional": false,
            "field": "hotel_id",
            "description": "<p>hotel_id of the room.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "room_number",
            "description": "<p>room_number the room.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "qrcode",
            "description": "<p>qrcode of the room.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "    {\n    \"data\": [\n       {\n       \"id\": 1,\n       \"hotel_id\": 1,\n       \"room_number\": 1,\n       \"qrcode\": \"url\",\n     }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../app/Http/Controllers/RoomController.php",
    "groupTitle": "rooms"
  },
  {
    "type": "put",
    "url": "/rooms/1",
    "title": "Update room",
    "name": "Update_room",
    "group": "rooms",
    "version": "1.0.0",
    "description": "<p>Update Room.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "unsignedBigInteger",
            "optional": false,
            "field": "hotel_id",
            "description": "<p>hotel_id of the general settings.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "room_number",
            "description": "<p>room_number the room.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "qrcode",
            "description": "<p>qrcode of the room.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "    {\n    \"data\": [\n       {\n       \"id\": 1,\n       \"hotel_id\": 1,\n       \"room_number\": 1,\n       \"qrcode\": \"url\",\n     }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../app/Http/Controllers/RoomController.php",
    "groupTitle": "rooms"
  },
  {
    "type": "get",
    "url": "/rooms",
    "title": "List of rooms",
    "name": "rooms_index",
    "group": "rooms",
    "version": "1.0.0",
    "description": "<p>List all rooms. It is possible to add some filters for more accuracy.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "unsignedBigInteger",
            "optional": false,
            "field": "hotel_id",
            "description": "<p>hotel_id of the room.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "room_number",
            "description": "<p>room_number the room.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "qrcode",
            "description": "<p>qrcode of the room.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "    {\n    \"data\": [\n       {\n       \"id\": 1,\n       \"hotel_id\": 1,\n       \"room_number\": 1,\n       \"qrcode\": \"url\",\n     }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../app/Http/Controllers/RoomController.php",
    "groupTitle": "rooms"
  },
  {
    "type": "delete",
    "url": "/shops/1",
    "title": "Delete a shop",
    "name": "Delete_a_shop",
    "group": "shops",
    "version": "1.0.0",
    "description": "<p>Delete a shop.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "unsignedBigInteger",
            "optional": false,
            "field": "hotel_id",
            "description": "<p>hotel_id of the shop.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "name",
            "description": "<p>name of the shop.</p>"
          },
          {
            "group": "Success 200",
            "type": "unsignedBigInteger",
            "optional": false,
            "field": "type_id",
            "description": "<p>type of the shop.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "color",
            "description": "<p>type of the shop.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "pdf_file",
            "description": "<p>type of the shop.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "menu",
            "description": "<p>menu of the shop.</p>"
          },
          {
            "group": "Success 200",
            "type": "time",
            "optional": false,
            "field": "startTime",
            "description": "<p>startTime of the shop.</p>"
          },
          {
            "group": "Success 200",
            "type": "time",
            "optional": false,
            "field": "endTime",
            "description": "<p>endTime of the shop.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "description",
            "description": "<p>description of the shop.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "sequence",
            "description": "<p>sequence of the shop.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "1",
          "type": "json"
        }
      ]
    },
    "filename": "../app/Http/Controllers/ShopController.php",
    "groupTitle": "shops"
  },
  {
    "type": "post",
    "url": "/shops",
    "title": "New shop",
    "name": "New_shop",
    "group": "shops",
    "version": "1.0.0",
    "description": "<p>Add new shop.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "unsignedBigInteger",
            "optional": false,
            "field": "hotel_id",
            "description": "<p>hotel_id of the shop.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "name",
            "description": "<p>name of the shop.</p>"
          },
          {
            "group": "Success 200",
            "type": "unsignedBigInteger",
            "optional": false,
            "field": "type_id",
            "description": "<p>type of the shop.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "color",
            "description": "<p>type of the shop.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "pdf_file",
            "description": "<p>type of the shop.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "menu",
            "description": "<p>menu of the shop.</p>"
          },
          {
            "group": "Success 200",
            "type": "time",
            "optional": false,
            "field": "startTime",
            "description": "<p>startTime of the shop.</p>"
          },
          {
            "group": "Success 200",
            "type": "time",
            "optional": false,
            "field": "endTime",
            "description": "<p>endTime of the shop.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "description",
            "description": "<p>description of the shop.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "sequence",
            "description": "<p>sequence of the shop.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "    {\n    \"data\": [\n       {\n       \"id\": 1,\n       \"hotel_id\": \"1\",\n       \"name\": \"shop name\",\n       \"type_id\": \"4\",\n       \"color\": \"gold\",\n       \"pdf_file\": \"menu.pdf\",\n       \"menu\": \"shop menu\",\n       \"startTime\": \"09:00:00\",\n       \"endTime\": \"16:00:00\",\n       \"description\": \"shop description\",\n       \"sequence\": \"1\",\n     }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../app/Http/Controllers/ShopController.php",
    "groupTitle": "shops"
  },
  {
    "type": "get",
    "url": "/shops/1",
    "title": "Show a shop",
    "name": "Show_a_shop",
    "group": "shops",
    "version": "1.0.0",
    "description": "<p>Show a shop.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "unsignedBigInteger",
            "optional": false,
            "field": "hotel_id",
            "description": "<p>hotel_id of the shop.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "name",
            "description": "<p>name of the shop.</p>"
          },
          {
            "group": "Success 200",
            "type": "unsignedBigInteger",
            "optional": false,
            "field": "type_id",
            "description": "<p>type of the shop.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "color",
            "description": "<p>type of the shop.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "pdf_file",
            "description": "<p>type of the shop.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "menu",
            "description": "<p>menu of the shop.</p>"
          },
          {
            "group": "Success 200",
            "type": "time",
            "optional": false,
            "field": "startTime",
            "description": "<p>startTime of the shop.</p>"
          },
          {
            "group": "Success 200",
            "type": "time",
            "optional": false,
            "field": "endTime",
            "description": "<p>endTime of the shop.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "description",
            "description": "<p>description of the shop.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "sequence",
            "description": "<p>sequence of the shop.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "    {\n    \"data\": [\n       {\n       \"id\": 1,\n       \"hotel_id\": \"1\",\n       \"name\": \"shop name\",\n       \"type_id\": \"4\",\n       \"color\": \"gold\",\n       \"pdf_file\": \"menu.pdf\",\n       \"menu\": \"shop menu\",\n       \"startTime\": \"09:00:00\",\n       \"endTime\": \"16:00:00\",\n       \"description\": \"shop description\",\n       \"sequence\": \"1\",\n     }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../app/Http/Controllers/ShopController.php",
    "groupTitle": "shops"
  },
  {
    "type": "put",
    "url": "/shops/1",
    "title": "Update shop",
    "name": "Update_shop",
    "group": "shops",
    "version": "1.0.0",
    "description": "<p>Update shop.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "unsignedBigInteger",
            "optional": false,
            "field": "hotel_id",
            "description": "<p>hotel_id of the shop.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "name",
            "description": "<p>name of the shop.</p>"
          },
          {
            "group": "Success 200",
            "type": "unsignedBigInteger",
            "optional": false,
            "field": "type_id",
            "description": "<p>type of the shop.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "color",
            "description": "<p>type of the shop.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "pdf_file",
            "description": "<p>type of the shop.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "menu",
            "description": "<p>menu of the shop.</p>"
          },
          {
            "group": "Success 200",
            "type": "time",
            "optional": false,
            "field": "startTime",
            "description": "<p>startTime of the shop.</p>"
          },
          {
            "group": "Success 200",
            "type": "time",
            "optional": false,
            "field": "endTime",
            "description": "<p>endTime of the shop.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "description",
            "description": "<p>description of the shop.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "sequence",
            "description": "<p>sequence of the shop.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "    {\n    \"data\": [\n       {\n       \"id\": 1,\n       \"hotel_id\": \"1\",\n       \"name\": \"shop name\",\n       \"type_id\": \"4\",\n       \"color\": \"gold\",\n       \"pdf_file\": \"menu.pdf\",\n       \"menu\": \"shop menu\",\n       \"startTime\": \"09:00:00\",\n       \"endTime\": \"16:00:00\",\n       \"description\": \"shop description\",\n       \"sequence\": \"1\",\n     }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../app/Http/Controllers/ShopController.php",
    "groupTitle": "shops"
  },
  {
    "type": "get",
    "url": "/shops",
    "title": "List of shops",
    "name": "shops_index",
    "group": "shops",
    "version": "1.0.0",
    "description": "<p>List all shops. It is possible to add some filters for more accuracy.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "unsignedBigInteger",
            "optional": false,
            "field": "hotel_id",
            "description": "<p>hotel_id of the shop.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "name",
            "description": "<p>name of the shop.</p>"
          },
          {
            "group": "Success 200",
            "type": "unsignedBigInteger",
            "optional": false,
            "field": "type_id",
            "description": "<p>type of the shop.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "color",
            "description": "<p>type of the shop.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "pdf_file",
            "description": "<p>type of the shop.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "menu",
            "description": "<p>menu of the shop.</p>"
          },
          {
            "group": "Success 200",
            "type": "time",
            "optional": false,
            "field": "startTime",
            "description": "<p>startTime of the shop.</p>"
          },
          {
            "group": "Success 200",
            "type": "time",
            "optional": false,
            "field": "endTime",
            "description": "<p>endTime of the shop.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "description",
            "description": "<p>description of the shop.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "sequence",
            "description": "<p>sequence of the shop.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "    {\n    \"data\": [\n       {\n       \"id\": 1,\n       \"hotel_id\": \"1\",\n       \"name\": \"shop name\",\n       \"type_id\": \"4\",\n       \"color\": \"gold\",\n       \"pdf_file\": \"menu.pdf\",\n       \"menu\": \"shop menu\",\n       \"startTime\": \"09:00:00\",\n       \"endTime\": \"16:00:00\",\n       \"description\": \"shop description\",\n       \"sequence\": \"1\",\n     }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../app/Http/Controllers/ShopController.php",
    "groupTitle": "shops"
  },
  {
    "type": "delete",
    "url": "/types/1",
    "title": "Delete a category",
    "name": "Delete_a_type",
    "group": "types",
    "version": "1.0.0",
    "description": "<p>Delete a type.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "unsignedBigInteger",
            "optional": false,
            "field": "hotel_id",
            "description": "<p>hotel_id of the type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "name",
            "description": "<p>name of the type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "gold_img",
            "description": "<p>gold_img of the type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "purple_img",
            "description": "<p>purple_img of the type.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "1",
          "type": "json"
        }
      ]
    },
    "filename": "../app/Http/Controllers/TypeController.php",
    "groupTitle": "types"
  },
  {
    "type": "get",
    "url": "/types",
    "title": "List of types",
    "name": "types_index",
    "group": "types",
    "version": "1.0.0",
    "description": "<p>List all types. It is possible to add some filters for more accuracy.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "unsignedBigInteger",
            "optional": false,
            "field": "hotel_id",
            "description": "<p>hotel_id of the type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "name",
            "description": "<p>name of the type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "gold_img",
            "description": "<p>gold_img of the type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "purple_img",
            "description": "<p>purple_img of the type.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "{\n    \"data\": [\n       {\n       \"id\": 1,\n       \"hotel_id\": \"1\",\n       \"name\": \"Type1\",\n       \"gold_img\": \"icon_1619185986.jpeg\",\n       \"purple_img\": \"icon_161917585986.jpeg\",\n     }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../app/Http/Controllers/TypeController.php",
    "groupTitle": "types"
  },
  {
    "type": "post",
    "url": "/types",
    "title": "store type",
    "name": "types_index",
    "group": "types",
    "version": "1.0.0",
    "description": "<p>List all types. It is possible to add some filters for more accuracy.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "unsignedBigInteger",
            "optional": false,
            "field": "hotel_id",
            "description": "<p>hotel_id of the type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "name",
            "description": "<p>name of the type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "gold_img",
            "description": "<p>gold_img of the type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "purple_img",
            "description": "<p>purple_img of the type.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "{\n    \"data\": [\n       {\n       \"id\": 1,\n       \"hotel_id\": \"1\",\n       \"name\": \"Type1\",\n       \"gold_img\": \"icon_1619185986.jpeg\",\n       \"purple_img\": \"icon_161917585986.jpeg\",\n     }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../app/Http/Controllers/TypeController.php",
    "groupTitle": "types"
  },
  {
    "type": "put",
    "url": "/types/1",
    "title": "update type",
    "name": "types_index",
    "group": "types",
    "version": "1.0.0",
    "description": "<p>List all types. It is possible to add some filters for more accuracy.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "unsignedBigInteger",
            "optional": false,
            "field": "hotel_id",
            "description": "<p>hotel_id of the type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "name",
            "description": "<p>name of the type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "gold_img",
            "description": "<p>gold_img of the type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "size": "..150",
            "optional": false,
            "field": "purple_img",
            "description": "<p>purple_img of the type.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example",
          "content": "{\n    \"data\": [\n       {\n       \"id\": 1,\n       \"hotel_id\": \"1\",\n       \"name\": \"Type1\",\n       \"gold_img\": \"icon_1619185986.jpeg\",\n       \"purple_img\": \"icon_161917585986.jpeg\",\n     }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../app/Http/Controllers/TypeController.php",
    "groupTitle": "types"
  }
] });
