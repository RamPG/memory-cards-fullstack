const Register = require('../models/register');

module.exports.register = async function (request, response) {
  const userRegister = new Register();
  const result = await userRegister.registrationsUser(request.body.email, request.body.password);
  response.status(result.status).json({
    message: result.message,
  });
};
