var path = require('path')
var express = require('express')

module.exports = function (router) {
  // middleware that is specific to this router
  router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
  })
  
  // define the survey route
  router.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/survey.html'))
  })
  // define the home page route
  router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/home.html'))
  })

  router.get('/*', function (req, res) {
    res.redirect('/')
  })
}
