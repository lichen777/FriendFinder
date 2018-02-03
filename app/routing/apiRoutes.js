var friends = require('../data/friends')

module.exports = function (app) {
  app.route('/api/friends')
    .get(function (req, res) {
      res.json(friends)
    })
    .post(function (req, res) {
      friends.push(req.body)
    })
}
