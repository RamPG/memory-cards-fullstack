const jwt = require('jsonwebtoken');
const config = require('../config/defaultDev');

module.exports = function (request, response, next) {
  const { token, email } = request.cookies;
  if (!token) {
    response.status(401).json({
      message: 'Unauthorized',
    });
  } else {
    const jwtSecret = config.JWT_TOKEN;
    jwt.verify(token, jwtSecret, (err, decoded) => {
      if (err) {
        response.status(401).json({
          message: 'Unauthorized',
        });
      } else if (decoded.email === email) {
        next();
      } else {
        response.status(401).json({
          message: 'Unauthorized',
        });
      }
    });
  }
};
