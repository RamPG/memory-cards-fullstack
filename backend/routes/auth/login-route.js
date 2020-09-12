const { Router } = require('express');
const authController = require('../../controllers/auth-controller');

const loginRouter = Router();
loginRouter.post('/', authController.login);

module.exports = loginRouter;
