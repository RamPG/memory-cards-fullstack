const { Router } = require('express');
const registerController = require('../controllers/register-controller')

const registerRouter = Router();
registerRouter.post('/', registerController.registerGetData);

module.exports = registerRouter;
