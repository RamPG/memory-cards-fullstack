const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const path = require('path');
const fs = require('fs');
const User = require('./user');

module.exports = class Login {
  async loginUser(email, password) {
    const findEmail = await User.findOne({ email });
    if (findEmail) {
      if (await argon2.verify(findEmail.password, password)) {
        const { jwtSecret } = JSON.parse(
          fs.readFileSync(path.resolve(__dirname, '../config/default.json'), 'utf8'),
        );
        const token = jwt.sign({ email, password }, jwtSecret, { expiresIn: '6h' });
      } else {
        console.log('Wrong password!');
      }
    } else {
      console.log('User not found');
    }
  }
};
