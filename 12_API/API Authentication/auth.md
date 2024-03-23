1. No Authentication can have rate limit
2. Basic Authentication
3. API key Authorisation
4. Token Based Authentication


Secrets API Documentation
Welcome to the Secrets API. This API allows you to manage and retrieve secrets anonymously. Please refer to the documentation below for details on how to interact with the API.

The API is rate limited to 100 requests every 15 minutes.
All user submitted data (including registration, tokens, usernames, passwords, secrets) are erased on a regular basis.
This API is just for education purposes, please don't rely on it for production.
Authentication
Basic Authentication is required for some endpoints. Use your username and password to authenticate.
An API Key is requred to Authorize certain endpoints. Use the API key obtained from the /generate-api-key endpoint.
Bearer Token Authentication is required for some endpoints. Use your username and password to get a token obtained from the /get-auth-token endpoint.

POST /register
Registers a new user. If the username is already taken, it will return an error.

Request Body:

{
  "username": "The username of the new user.",
  "password": "The password of the new user."
}
Example Request:

POST https://secrets-api.appbrewery.com/register
{
  "username": "jackbauer",
  "password": "IAmTheBest"
}
Example Response:

{
  "success": "Successfully registered."
}
GET /generate-api-key
Generates a new API key.

Example Request:

GET https://secrets-api.appbrewery.com/generate-api-key
Example Response:

{
  "apiKey": "generated-api-key"
}
POST /get-auth-token
Generates an authentication token for a user. If the user does not exist or the password is incorrect, it will return an error.

Request Body:

{
  "username": "The username of the registered user.",
  "password": "The password of the registered user."
}
Example Request:

POST https://secrets-api.appbrewery.com/get-auth-token
{
  "username": "jackbauer",
  "password": "IAmTheBest"
}
Example Response:

{
  "token": "generated-auth-token"
}

REST API
GET /random
Returns a random secret. No authentication is required.

Example Request:

GET https://secrets-api.appbrewery.com/random
Example Response:

{
    "id": "random-id",
    "secret": "This is a random secret.",
    "emScore": 3,
    "username": "user123",
    "timestamp": "2022-10-01T12:34:56Z"
}
GET /all
Returns all secrets, paginated. Basic authentication is required.

Query Parameters:

page: The page number to retrieve.
Example Request:

GET https://secrets-api.appbrewery.com/all?page=1
Example Response:

[
    {
      "id": "1",
      "secret": "This is a secret.",
      "emScore": 3,
      "username": "user123",
      "timestamp": "2022-10-01T12:34:56Z"
    },
    {
      "id": "2",
      "secret": "Another secret.",
      "emScore": 3,
      "username": "user123",
      "timestamp": "2022-10-02T10:11:12Z"
    }
    // ... more secrets ...
  ]
GET /filter
Returns a random secret with a particular embarrassment score or higher. API key authentication is required.

Query Parameters:

apiKey: Your API Key generated from the /generate-api-key endpoint.
score: The minimum embarrassment score to filter by.
Example Request:

GET https://secrets-api.appbrewery.com/filter?score=5&apiKey=b886c845-9989-43aa-8c60-ea4a669bb587
Example Response:

[
    {
      "id": "1",
      "secret": "This is a secret with embarrassment score 5 or higher.",
      "emScore": 5,
      "username": "user123",
      "timestamp": "2022-10-01T12:34:56Z"
    },
    {
      "id": "2",
      "secret": "Another secret with embarrassment score 5 or higher.",
      "emScore": 7,
      "username": "user123",
      "timestamp": "2022-10-02T10:11:12Z"
    }
    // ... more secrets ...
  ]
GET /user-secrets
Returns all the secrets of the authenticated user. Bearer token authentication is required.

Example Request:

GET https://secrets-api.appbrewery.com/user-secrets
Example Response:

[
    {
      "id": "1",
      "secret": "This is a secret of the user.",
      "emScore": 3,
      "username": "user123",
      "timestamp": "2022-10-01T12:34:56Z"
    },
    {
      "id": "2",
      "secret": "Another secret of the user.",
      "emScore": 3,
      "username": "user123",
      "timestamp": "2022-10-02T10:11:12Z"
    }
    // ... more secrets ...
  ]
GET /secrets/{id}
Returns the secret with the specified ID. Bearer token authentication is required.

URL Parameters:

id: The ID of the secret to retrieve.
Example Request:

GET https://secrets-api.appbrewery.com/secrets/1
Example Response:

{
  "id": "1",
  "secret": "This is a secret.",
  "emScore": 3,
  "username": "user123",
  "timestamp": "2022-10-01T12:34:56Z"
}
POST /secrets
Adds a new secret. Bearer token authentication is required.

Request Body:

{
  "secret": "This is a new secret.",
  "score": "Embarrassment score"
}
Example Request:

POST https://secrets-api.appbrewery.com/secrets
{
  "secret": "This is a new secret.",
  "score": "Updated embarrassment score"
}
Example Response:

{
  "id": "3",
  "secret": "This is a new secret.",
  "emScore": 3,
  "username": "user123",
  "timestamp": "2022-10-03T08:15:00Z"
}
PUT /secrets/{id}
Updates the content of the secret with the specified ID. Bearer token authentication is required.

URL Parameters:

id: The ID of the secret to update.
Request Body:

{
  "secret": "Updated secret content.",
  "score": 5
}
Example Request:

PUT https://secrets-api.appbrewery.com/secrets/1
{
  "secret": "Updated secret content",
  "score": "Updated embarrassment score"
}
Example Response:

{
  "id": "1",
  "secret": "Updated secret content.",
  "emScore": 3,
  "username": "user123",
  "timestamp": "2022-10-01T12:34:56Z"
}
PATCH /secrets/{id}
Partially updates the content of the secret with the specified ID. Bearer token authentication is required.

URL Parameters:

id: The ID of the secret to update.
Request Body:

{
  "secret": "Updated secret content",
  "score": "Updated embarrassment score"
}
Example Request:

PATCH https://secrets-api.appbrewery.com/secrets/1
{
  "score": 2
}
Example Response:

{
  "id": "1",
  "secret": "Partially updated secret content.",
  "emScore": 3,
  "username": "user123",
  "timestamp": "2022-10-01T12:34:56Z"
}
DELETE /secrets/{id}
Deletes the secret with the specified ID. Bearer token authentication is required.

URL Parameters:

id: The ID of the secret to delete.
Example Request:

DELETE https://secrets-api.appbrewery.com/secrets/1
Example Response:

{
  "message": "Secret with ID 1 has been deleted successfully."
}