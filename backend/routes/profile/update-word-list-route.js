const { Router } = require('express');
const profileController = require('../../controllers/profile-controller');
const withAuth = require('../../middlewares/with-auth');

const updateWordListRouter = Router();
updateWordListRouter.post('/', withAuth, profileController.updateWordList);

module.exports = updateWordListRouter;
