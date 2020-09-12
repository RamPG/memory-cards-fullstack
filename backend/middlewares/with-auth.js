const jwt = require('jsonwebtoken');
const path = require('path');
const fs = require('fs');

module.exports = function (request, response, next) {
  const { token, email } = request.cookies;
  if (!token) {
    response.status(401).json({
      message: 'Unauthorized',
    });
  } else {
    const { jwtSecret } = JSON.parse(
      fs.readFileSync(path.resolve(__dirname, '../config/default.json'), 'utf8'),
    );
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
