var express = require('express')
var app = express()
var path = require('path')
var bodyParser = require('body-parser')

var PORT = process.env.port || 3000

app.listen(PORT, () => {
  console.log('Listening on port ' + PORT)
})