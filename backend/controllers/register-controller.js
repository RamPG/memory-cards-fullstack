const Register = require('../models/register-model');

module.exports.register = async function (request, response) {
  const userRegister = new Register();
  const { message, status } = await userRegister.registrationsUser(request.body.email, request.body.password);
  response.status(status).json({
    message,
  });
};
