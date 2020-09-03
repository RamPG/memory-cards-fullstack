const jwt = require('jsonwebtoken');
const path = require('path');
const fs = require('fs');

module.exports = class VerifyTokenModel {
  verifyToken(token, email, callback) {
    const { jwtSecret } = JSON.parse(
      fs.readFileSync(path.resolve(__dirname, '../config/default.json'), 'utf8'),
    );
    jwt.verify(token, jwtSecret, (err, decoded) => {
      if (err) {
        callback({
          status: 401,
          message: 'Unauthorized',
        });
      } else if (decoded.email === email) {
        callback({
          status: 200,
          message: 'Valid token',
        });
      } else {
        callback({
          status: 401,
          message: 'Unauthorized',
        });
      }
    });
  }
};
