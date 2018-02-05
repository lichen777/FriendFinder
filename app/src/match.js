var friends = require('../data/friends')

var findMatch = function (input) {
  var index = 0
  var result = friends[index]
  var min = 100
  var len = friends.length
  for (var i = 0; i < len; i++) {
    var sum = 0
    for (var j = 0; j < 10; j++) {
      sum += Math.abs(parseInt(friends[i]['scores'][j]) - parseInt(input['scores'][j]))
    }
    if (sum < min) {
      index = i
      min = sum
    }
  }
  return friends[index]
}

module.exports = findMatch
