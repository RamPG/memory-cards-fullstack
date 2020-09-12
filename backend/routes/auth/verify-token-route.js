const { Router } = require('express');
const withAuth = require('../../middlewares/with-auth');

const verifyTokenRouter = Router();
verifyTokenRouter.get('/', withAuth, (request, response) => {
  response.status(200).json({
    message: 'Authorized',
  });
});

module.exports = verifyTokenRouter;
