var User = require('./schema.js');

var bob = new User({
  name: 'Bob',
  username: 'bobBob',
  password: 'password'
});

bob.save((err) => {
  if (err) throw err;

  console.log('user saved successfully');
})