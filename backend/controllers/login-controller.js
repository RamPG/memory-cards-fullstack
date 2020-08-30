const Login = require('../models/login');

module.exports.login = async function (request, response) {
  const userLogin = new Login();
  const status = await userLogin.loginUser(request.body.email, request.body.password);
};
