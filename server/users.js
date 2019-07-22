var express = require('express');
var router = express.Router();


users = [{ name: 's', email: 's', password: 's' }];

var returnMessage = (data, message, success) => {
  return { success, message, data };
};

router.post('/signUp', (req, res) => {
  users.push({ ...req.body, id: users.length + 1 });
  res.status(200).json(returnMessage(req.body, 'user created', true));
});

router.post('/loginIn', (req, res) => {
  var userData = req.body;
  var user = users.filter(user => {
    if (user.password === userData.password && user.email === userData.email) {
      return true;
    }
    return false;
  });
  if (user.length) {
    res.status(200).json(returnMessage(user[0], 'user got', true));
  } 
  res.status(200).json(returnMessage({}, 'User does not exist', false));
});

module.exports = router;