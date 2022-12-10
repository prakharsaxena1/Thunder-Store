const express = require('express');
const router = express.Router();

router.use('/api/user/', require("./user.router"))
// router.use('/api/product/', require("./product.router"))
// router.use('/api/review/', require("./review.router"))
// router.use('/api/address/', require("./address.router"))
// router.use('/api/order/', require("./order.router"))
// router.use('/api/cart/', require("./cart.router"))

module.exports = router;