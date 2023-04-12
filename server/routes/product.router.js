// Dependencies
const express = require("express");
const passport = require("passport");
const router = express.Router();
const productController = require('../controllers/product.controller');
// const authMiddleware = passport.authenticate('jwt', { session: false });

// Routes
router.route('/products').get(productController.getProducts);
router.route('/product/:id').get(productController.getProductWithID);
router.route('/top-selling/:category').get(productController.getTopSellingFromCategory);

// Exports
module.exports = router;