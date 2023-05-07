const Order = require('../models/Order.model');
const Product = require('../models/Product.model');

const addOrder = async (req, res) => {
  if (req.body.products.length > 0 && req.body.totalAmount > 0) {
    // Add to a array then response
    const errorOrderProducts = [];
    for (let orderProduct of req.body.products) {
      const productData = await Product.findById(orderProduct.product)
        .select('-category -description -discount -keywords -rating');
      if (orderProduct.qty > productData.stock) {
        errorOrderProducts.push(productData);
      }
    }
    if (errorOrderProducts.length > 0) {
      return res.status(200).json({ status: 'failed', message: 'Some products are not available', data: errorOrderProducts });
    }
    // Else
    for (let orderProduct of req.body.products) {
      const productData = await Product.findById(orderProduct.product);
      productData.stock -= orderProduct.qty;
      productData.save();
    }
    const order = await Order.create({
      user: req.user._id,
      shipTo: req.body.shipTo,
      products: req.body.products,
      payment: req.body.payment,
      totalAmount: req.body.totalAmount,
      status: "otw",
    });
    return res.status(201).json({ status: 'success', order });
  }
  return res.status(400).json({ status: 'failed', message: 'Invalid data provided' });
};

const getOrdersByUser = async (req, res) => {
  const user = req.user._id;
  if (user) {
    const orders = await Order.find({ user }).populate('products.product');
    return res.status(200).json({ status: 'success', orders });
  }
  return res.status(400).json({ status: 'failed', message: 'Invalid user' });
};

const getOrderById = async (req, res) => {
  const orderID = req.params.id;
  if (orderID) {
    const order = await Order.findById(orderID);
    if (order) {
      return res.status(200).json({ status: 'success', order });
    }
    return res.status(400).json({ status: 'failed', message: 'Order not found' });
  }
  return res.status(400).json({ status: 'failed', message: 'Invalid order id' });
};

module.exports = {
  addOrder,
  getOrdersByUser,
  getOrderById,
};
