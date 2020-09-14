const Auth = require('../models/auth-model');

const auth = new Auth();
module.exports.login = async function (request, response) {
  const {
    status, message, token, email,
  } = await auth.loginUser(request.body.email, request.body.password);
  if (token) {
    response.cookie('email', email, { httpOnly: true, secure: true, sameSite: 'strict' });
    response.cookie('token', token, { httpOnly: true, secure: true, sameSite: 'strict' });
  }
  response.status(status).json({
    message,
  });
};

module.exports.logout = function (request, response) {
  let status = 500;
  let message = 'Failure';
  if (request.cookies) {
    response.clearCookie('email');
    response.clearCookie('token');
    status = 200;
    message = 'Success';
  }
  response.status(status).json({
    message,
  });
};

module.exports.registration = async function (request, response) {
  const { message, status } = await auth.registrationsUser(request.body.email, request.body.password);
  response.status(status).json({
    message,
  });
};
