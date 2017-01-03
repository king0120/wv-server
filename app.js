var express = require('express')
var app = express();
var mongoose = require('mongoose');
var User = require('./schema');

mongoose.connect('mongodb://localhost/weathervain');

app.get('/', function (req, res) {
  User.find({}, (err, users) => {
    res.json(users);
  })
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})