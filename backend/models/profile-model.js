const User = require('./user-model');

module.exports = class Profile {
  async getWordList(email) {
    const user = await User.findOne({ email });
    if (user) {
      return user.wordList;
    }
    return '';
  }

  async updateWordList(email, wordList) {
    const result = await User.updateOne({ email }, { $set: { wordList } });
    return result;
  }
};
