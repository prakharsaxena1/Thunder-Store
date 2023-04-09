// Dependencies
const express = require("express");
const passport = require("passport");
const router = express.Router();
const userController = require('../controllers/user.controller');
const authMiddleware = passport.authenticate('jwt', { session: false });

// Routes
router.route('/login').post(userController.userLogin);
router.route('/register').post(userController.userRegister);
router.route('/logout').get(authMiddleware, userController.userLogout);
router.route('/delete-account').post(authMiddleware, userController.deleteUser);
router.route('/isAuth').get(authMiddleware, userController.checkAuthUser);

// Exports
module.exports = router;