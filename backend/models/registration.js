const mongoose = require('mongoose');
const argon2 = require('argon2');

const userRegisterSchema = new mongoose.Schema({
  email: String,
  password: String,
  wordsList: Array,
});
const User = mongoose.model('User', userRegisterSchema);

module.exports = class Register {
  async registrationsUser(email, password) {
    const passwordHashed = await argon2.hash(password);
    const findEmail = await User.findOne({ email });
    if (findEmail) {
      return [200, 'Email is already registered'];
    }
    const createUser = await User.create({ email, password: passwordHashed, wordsList: [] });
    if (createUser) {
      return [200, 'The account is created'];
    }
    return [500, 'Error on server'];
  }
};
