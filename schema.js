module.exports = function (mongoose) {
  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var userSchema = new Schema({
    name: String,
    username: String,
    password: String
  });
  
  mongoose.model('User', userSchema);
}