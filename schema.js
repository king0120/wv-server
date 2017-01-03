var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  admin: Boolean,
  created: Date
});

userSchema.pre('save', (next) => {
  var currentDate = new Date();

  this.created = currentDate;
})

var User = mongoose.model('User', userSchema);

module.exports = User;