// Require Dependencies
require('dotenv').config()
var fetch = require('isomorphic-fetch')
var express = require('express')
var app = express()

var baseURL = `http://api.openweathermap.org/data/2.5/forecast?APPID=${process.env.API_KEY}`

app.get('/weather/:city', function(req, res) {
  fetch(`${baseURL}&q=${req.params.city},us`)
    .then(response => response.json())
    .then(weather => res.send(weather))
    .catch(error => res.send(error))
})

app.listen(3030, function() {
  console.log('Express server spinning on port 3000')
})
