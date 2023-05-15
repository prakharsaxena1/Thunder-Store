import express from 'express';
import user from "./user.router.js";
import product from "./product.router.js";
import review from "./review.router.js";
import order from "./order.router.js";
const router = express.Router();

router.use('/api/user', user);
router.use('/api/product', product);
router.use('/api/review', review);
router.use('/api/order', order);

export default router;
