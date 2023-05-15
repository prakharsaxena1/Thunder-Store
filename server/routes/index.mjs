import express from 'express';
import user from "./user.router.mjs";
import product from "./product.router.mjs";
import review from "./review.router.mjs";
import order from "./order.router.mjs";
const router = express.Router();

router.use('/api/user', user);
router.use('/api/product', product);
router.use('/api/review', review);
router.use('/api/order', order);

export default router;
