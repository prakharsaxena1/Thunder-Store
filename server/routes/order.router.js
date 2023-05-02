// Dependencies
const express = require("express");
const passport = require("passport");
const router = express.Router();
const orderController = require('../controllers/order.controller.js');
const authMiddleware = passport.authenticate('jwt', { session: false });

// Routes
router.route('/')
  .get(authMiddleware, orderController.getOrdersByUser)
  .post(authMiddleware, orderController.addOrder);
router.route('/:orderId').get(authMiddleware, orderController.getOrderById);

// Exports
module.exports = router;