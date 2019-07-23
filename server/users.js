var express = require('express');
var router = express.Router();
var models = require('./models');
var User = models.User;

var returnMessage = (data, message, success) => {
  return { success, message, data };
};
var returnUser = data => {
  return {
    name: data.name,
    email: data.email,
    password: data.password,
    id: data.id
  };
};

router.post('/signUp', async (req, res) => {
  var userData = req.body;

  if (
    userData.hasOwnProperty('name') &&
    userData.hasOwnProperty('email') &&
    userData.hasOwnProperty('password')
  ) {
    var user1 = new User(userData);
    var createdUser = await user1.save();
    if (createdUser) {
      var user = returnUser(createdUser);
      res.status(200).json(returnMessage(user, 'user created', true));
    } else {
      res
        .status(200)
        .json(returnMessage({}, 'some details are missing', false));
    }
  } else {
    res.status(200).json(returnMessage({}, 'some details are missing', false));
  }
});

router.post('/loginIn', async (req, res) => {
  var userData = req.body;
  var user1 = User;
  var obtainedUser = await user1.findOne(userData);
  if (obtainedUser) {
    var user = returnUser(obtainedUser);
    res.status(200).json(returnMessage(user, 'Login success', true));
  } else {
    res.status(200).json(returnMessage({}, 'User does not exist', false));
  }
});

module.exports = router;
