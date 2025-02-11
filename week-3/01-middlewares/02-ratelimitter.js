const request = require('supertest');
const assert = require('assert');
const express = require('express');
const app = express();
// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// rate limit the requests from a user to only 5 request per second
// If a user sends more than 5 requests in a single second, the server
// should block them with a 404.
// User will be sending in their user id in the header as 'user-id'
// You have been given a numberOfRequestsForUser object to start off with which
// clears every one second

let numberOfRequestsForUser = {};

setInterval(() => {
  numberOfRequestsForUser = {};
}, 1000)

function ratelimiter(req, res, next) {

  const userId = req.headers["user-id"]

  console.log("userId: ", userId)

  if (!userId) {
    res.status(404).json({ error: 'user-id is missing in the headers' })
    return
  }

  let existingUserAccessCount = numberOfRequestsForUser[userId] || 0;

  if (existingUserAccessCount >= 5) {
    res.status(404).json({ error: "Access limit exceeded" })
  } else {
    numberOfRequestsForUser[userId] = existingUserAccessCount + 1
    next()
  }
}

app.use(ratelimiter)

app.get('/user', function (req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user', function (req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});


//app.listen(3000, () => { console.log("app is listening on port 3000") })

module.exports = app;