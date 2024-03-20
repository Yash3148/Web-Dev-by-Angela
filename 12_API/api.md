API --> Application Programming Interface

--------------------------------------------------------------------------------------------------------------------

Bored API Documentation
Welcome to the Bored API by the App Brewery. This is a teaching tool for students of the App Brewery. API Requests are rate limited to 100 requests every 15 minutes.

Get a Random Activity
Returns a randomly selected activity from the available activities.

Example Request:

GET https://bored-api.appbrewery.com/random
Example Response:

{
  "activity": "Learn Express.js",
  "availability": 0.25,
  "type": "education",
  "participants": 1,
  "price": 0.1,
  "accessibility": "Few to no challenges",
  "duration": "hours",
  "kidFriendly": true,
  "link": "https://expressjs.com/",
  "key": "3943506"
}
Filter Activities
Returns a list of activities filtered by type and/or participants.

Query Parameters:

type (optional): The type of activity to filter by. Choice of education, recreational, social, charity, cooking, relaxation, busywork.
participants (optional): The number of participants to filter by. Choice of 1, 2, 3, 4, 5, 6, 8.
Example Request:

GET https://bored-api.appbrewery.com/filter?type=education
Example Response:

[
  {
    "activity": "Learn Express.js",
    "availability": 0.25,
    "type": "education",
    "participants": 1,
    "price": 0.1,
    "accessibility": "Few to no challenges",
    "duration": "hours",
    "kidFriendly": true,
    "link": "https://expressjs.com/",
    "key": "3943506"
  },
  {
    "activity": "Learn React.js",
    "availability": 0.5,
    "type": "education",
    "participants": 1,
    "price": 0.2,
    "accessibility": "Some challenges",
    "duration": "hours",
    "kidFriendly": true,
    "link": "https://reactjs.org/",
    "key": "7890123"
  }
]
Get Activity by Key
Returns the activity with the specified key.

URL Parameters:

key: The unique key of the activity.
Example Request:

GET https://bored-api.appbrewery.com/activity/3943506
Example Response:

{
  "activity": "Learn Express.js",
  "availability": 0.25,
  "type": "education",
  "participants": 1,
  "price": 0.1,
  "accessibility": "Few to no challenges",
  "duration": "hours",
  "kidFriendly": true,
  "link": "https://expressjs.com/",
  "key": "3943506"
}