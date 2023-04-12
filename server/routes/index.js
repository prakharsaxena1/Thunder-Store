const express = require('express');
const router = express.Router();

router.use('/api/user/', require("./user.router"));
router.use('/api/product/', require("./product.router.js"))
// router.use('/api/review/', require("./review.router"))
// router.use('/api/order/', require("./order.router"))

module.exports = router;