const VerifyToken = require('../models/verify-token-model');

module.exports.verifyToken = function (request, response) {
  const verifyToken = new VerifyToken();
  verifyToken.verifyToken(request.cookies.token, request.cookies.email, ({ status, message, pass }) => {
    response.status(status).json({
      message,
    });
  });
};
