var friends = require('../data/friends')
var database = require('../data/friendsDB')
var findMatch = require('../src/match')
var match = {
  'name': 'Not Found',
  'Photo': 'https://juststickers.in/wp-content/uploads/2016/12/404-error-not-found.png'
}

module.exports = function (app) {
  app.route('/api/friends')
    .get(function (req, res) {
      res.json(friends)
      database.sync()
    })
    .post(function (req, res) {
      res.send('POST request to api')
      match = findMatch(req.body)
      console.log('Match: ' + match['name'])
      friends.push(req.body)
    })

  app.get('/api/match', function (req, res) {
    res.json(match)
  })
}
