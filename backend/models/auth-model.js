const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const path = require('path');
const fs = require('fs');
const User = require('./user-model');

module.exports = class Auth {
  async registrationsUser(email, password) {
    const passwordHashed = await argon2.hash(password);
    const findEmail = await User.findOne({ email });
    if (findEmail) {
      return {
        status: 400,
        message: 'Email is already registered',
      };
    }
    const createUser = await User.create({ email, password: passwordHashed, wordsList: [] });
    if (createUser) {
      return {
        status: 200,
        message: 'The account is created',
      };
    }
    return {
      status: 500,
      message: 'Error on server',
    };
  }

  async loginUser(email, password) {
    const user = await User.findOne({ email });
    if (user) {
      if (await argon2.verify(user.password, password)) {
        const { jwtSecret } = JSON.parse(
          fs.readFileSync(path.resolve(__dirname, '../config/default.json'), 'utf8'),
        );
        const token = jwt.sign({ email }, jwtSecret);
        return {
          status: 200,
          message: '',
          email,
          token,
        };
      }
      return {
        status: 401,
        message: 'Wrong password!',
        email: '',
        token: '',
      };
    }
    return {
      status: 404,
      message: 'User not found',
      email: '',
      token: '',
    };
  }
};
