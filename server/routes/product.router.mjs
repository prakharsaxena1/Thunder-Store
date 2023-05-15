// Dependencies
import express from "express";
import productController from '../controllers/product.controller.mjs';
const router = express.Router();

// Routes
router.route('/').get(productController.getProducts);
router.route('/:id').get(productController.getProductWithID);

// Exports
export default router;
