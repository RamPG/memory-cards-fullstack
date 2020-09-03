const { Schema, model } = require('mongoose');

const userRegisterSchema = new Schema({
  email: String,
  password: String,
  wordsList: Array,
});
module.exports = model('User', userRegisterSchema);
