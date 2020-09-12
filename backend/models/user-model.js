const { Schema, model } = require('mongoose');

const userRegisterSchema = new Schema({
  email: String,
  password: String,
  wordList: Array,
});
module.exports = model('User', userRegisterSchema);
