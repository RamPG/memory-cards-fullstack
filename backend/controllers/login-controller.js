const Login = require('../models/login-model');

module.exports.login = async function (request, response) {
  const userLogin = new Login();
  const {
    status, message, token, email, wordList,
  } = await userLogin.loginUser(request.body.email, request.body.password);
  response.cookie('email', email, { httpOnly: true, secure: true, sameSite: 'strict' });
  response.cookie('token', token, { httpOnly: true, secure: true, sameSite: 'strict' });
  response.status(status).json({
    message,
    email,
    wordList,
  });
};
