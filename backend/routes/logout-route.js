const { Router } = require('express');
const logoutController = require('../controllers/logout-controller');

const logoutRouter = Router();
logoutRouter.get('/', logoutController.logout);

module.exports = logoutRouter;
