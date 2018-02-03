var express = require('express')
var app = express()
var bodyParser = require('body-parser')

var PORT = process.env.port || 3000

// parse application/x-www-form-urlencoded and application/JSON
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// routes
require('./routing/apiRoutes')(app)
require('./routing/htmlRoutes')(router)

app.listen(PORT, () => {
  console.log('Listening on port ' + PORT)
})
