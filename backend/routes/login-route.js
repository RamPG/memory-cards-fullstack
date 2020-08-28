const { Router } = require('express');
const loginController = require('../controllers/login-controller')

const loginRouter = Router();
loginRouter.post('/', loginController.loginGetData);

module.exports = loginRouter;
