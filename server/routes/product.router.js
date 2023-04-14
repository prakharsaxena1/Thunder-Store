// Dependencies
const express = require("express");
const passport = require("passport");
const router = express.Router();
const productController = require('../controllers/product.controller');

// Routes
router.route('/').get(productController.getProducts);
router.route('/:id').get(productController.getProductWithID);
router.route('/category/:category').get(productController.getTopSellingFromCategory);

// Exports
module.exports = router;