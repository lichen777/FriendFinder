var express = require('express')
var app = express()

app.route('/api/friends')
  .get(function (req, res) {
    res.send('Get a random book')
  })
  .post(function (req, res) {
    res.json()
  })

module.exports = app