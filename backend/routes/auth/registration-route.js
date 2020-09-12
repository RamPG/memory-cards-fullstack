const { Router } = require('express');
const authController = require('../../controllers/auth-controller');

const registrationRoute = Router();
registrationRoute.post('/', authController.registration);

module.exports = registrationRoute;
