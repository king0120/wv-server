var express = require('express')
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/weathervain');
require('./schema')(mongoose);
const db = mongoose.connection;

var User = mongoose.model('User');

db.on('error', (err) => {
  console.error(`connection error: ${err}`);
  process.exit(1);
})

db.on('open', () => {
  console.log('Connected to MongoDb')
})



app.get('/', function (req, res) {
  var bob = new User({
    name: 'Booob',
    username: 'ffd',
    password: 'password'
  });

  bob.save((err) => {
    if (err) {
      console.log(err)
      throw err
    };

    console.log('user saved successfully');
    User.find({}, (err, users) => {
      if (err) throw err;
      res.json(users);
    });
  })


})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})