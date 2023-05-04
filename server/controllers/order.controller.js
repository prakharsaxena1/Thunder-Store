const Order = require('../models/Order.model');

const addOrder = async (req, res) => {
  if (req.body.products.length > 0 && req.body.totalAmount > 0) {
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
