const { Router } = require('express');
const profileController = require('../../controllers/profile-controller');
const withAuth = require('../../middlewares/with-auth');

const getWordListRouter = Router();
getWordListRouter.get('/', withAuth, profileController.getWordList);

module.exports = getWordListRouter;
