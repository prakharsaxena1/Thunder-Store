// Dependencies
import express from "express";
import passport from "passport";
import orderController from '../controllers/order.controller.js';
const router = express.Router();
const authMiddleware = passport.authenticate('jwt', { session: false });

// Routes
router.route('/')
  .get(authMiddleware, orderController.getOrdersByUser)
  .post(authMiddleware, orderController.addOrder);

// Exports
export default router;
