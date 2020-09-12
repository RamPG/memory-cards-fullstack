const Profile = require('../models/profile-model');

const profile = new Profile();

module.exports.getWordList = async function (request, response) {
  const wordList = await profile.getWordList(request.cookies.email);
  let status = 500;
  if (wordList) {
    status = 200;
  }
  response.status(status).json({
    wordList,
  });
};

module.exports.updateWordList = async function (request, response) {
  let status = 500;
  let message = 'Failure';
  const wordList = await profile.updateWordList(request.cookies.email, request.body.wordList);
  if (wordList.n === 1) {
    status = 200;
    message = 'Success';
  }
  response.status(status).json({
    message,
  });
};
