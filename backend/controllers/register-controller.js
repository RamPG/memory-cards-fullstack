const Registration = require('../models/registration');

module.exports.register = async function (request, response) {
  const userRegister = new Registration();
  const status = await userRegister.registrationsUser(request.body.email, request.body.password);
  response.status(status[0]).json({
    message: status[1],
  });
};
