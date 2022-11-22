// Dependencies
const express = require("express");
const router = express.Router();
const userController = require('../controllers/user.controller')

// Routes
router.route('/login').post(userController.userLogin);
router.route('/register').post(userController.userRegister);
router.route('/logout').post(userController.userLogout);
router.route('/delete-account').post(userController.deleteUser);

// Exports
module.exports = router;