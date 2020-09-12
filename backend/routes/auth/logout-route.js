const { Router } = require('express');
const authController = require('../../controllers/auth-controller');

const logoutRouter = Router();
logoutRouter.get('/', authController.logout);

module.exports = logoutRouter;
