const mongoose = require('mongoose');

const test = new mongoose.Schema({
  email: String,
  password: String,
  confirmPassword: String,
});

exports.registerGetData = function (request, response) {
  const User = mongoose.model('User', test);
  const user = new User({
    email: request.body.email,
    password: request.body.password,
    confirmPassword: request.body.confirmPassword,
  });
  user.save(() => {
    response.sendStatus(200);
  });
};
