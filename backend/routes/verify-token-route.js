const { Router } = require('express');
const verifyTokenController = require('../controllers/verify-token-controller')

const verifyTokenRouter = Router();
verifyTokenRouter.get('/', verifyTokenController.verifyToken);

module.exports = verifyTokenRouter;
