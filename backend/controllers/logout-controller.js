module.exports.logout = function (request, response) {
  response.clearCookie('email');
  response.clearCookie('token');
  response.status(200).json({
    message: 'Success',
  });
};
