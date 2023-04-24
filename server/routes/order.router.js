// Dependencies
const express = require("express");
const passport = require("passport");
const router = express.Router();
const orderController = require('../controllers/order.controller.js');
const authMiddleware = passport.authenticate('jwt', { session: false });

// Routes
router.route('/').post(authMiddleware, orderController.addOrder);
router.route('/user/:userId').get(authMiddleware, orderController.getOrdersByUser);
router.route('/:orderId').get(authMiddleware, orderController.getOrderById);

// Exports
module.exports = router;