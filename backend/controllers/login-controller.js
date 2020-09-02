const Login = require('../models/login');

module.exports.login = async function (request, response) {
  const userLogin = new Login();
  const result = await userLogin.loginUser(request.body.email, request.body.password);
  response.status(result.status).json({
    message: result.message,
    token: result.token,
  });
};
