const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const path = require('path');
const fs = require('fs');
const User = require('./user-model');

module.exports = class Login {
  async loginUser(email, password) {
    const findEmail = await User.findOne({ email });
    if (findEmail) {
      if (await argon2.verify(findEmail.password, password)) {
        const { jwtSecret } = JSON.parse(
          fs.readFileSync(path.resolve(__dirname, '../config/default.json'), 'utf8'),
        );
        const token = jwt.sign({ email }, jwtSecret);
        return {
          status: 200,
          email,
          message: '',
          wordList: findEmail.wordList,
          token,
        };
      }
      return {
        status: 401,
        message: 'Wrong password!',
        wordList: '',
        email: '',
        token: '',
      };
    }
    return {
      status: 404,
      message: 'User not found',
      wordList: '',
      email: '',
      token: '',
    };
  }
};
