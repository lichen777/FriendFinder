var express = require('express')
var app = express()

var friends = require('../data/friends')

app.route('/api/friends')
  .get(function (req, res) {
    res.json(friends)
  })
  .post(function (req, res) {
    friends.push(req.body)
  })

module.exports = app