const argon2 = require('argon2');
const User = require('./user');

module.exports = class Register {
  async registrationsUser(email, password) {
    console.log(1);
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
};
