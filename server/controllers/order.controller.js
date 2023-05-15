import Order from '../models/Order.model.js';
import Product from '../models/Product.model.js';

const addOrder = async (req, res) => {
  if (req.body.products.length > 0 && req.body.totalAmount > 0) {
    // Add to a array then response
    const errorOrderProducts = [];
    for (let orderProduct of req.body.products) {
      const productData = await Product.findById(orderProduct.product)
        .select('-category -description -keywords');
      if (orderProduct.qty > productData.stock) {
        errorOrderProducts.push(productData);
      }
    }
    if (errorOrderProducts.length > 0) {
      return res.status(200).json({ success: false, data: errorOrderProducts });
    }
    // Else
    for (let orderProduct of req.body.products) {
      const productData = await Product.findById(orderProduct.product);
      productData.stock -= orderProduct.qty;
      await productData.save();
    }
    const order = await Order.create({
      user: req.user._id,
      shipTo: req.body.shipTo,
      products: req.body.products,
      payment: req.body.payment,
      totalAmount: req.body.totalAmount,
      status: "otw",
    });
    return res.status(201).json({ success: true, order });
  }
  return res.status(400).json({ success: false, message: 'Invalid data provided' });
};

const getOrdersByUser = async (req, res) => {
  const user = req.user._id;
  let orders = [];
  orders = await Order.find({ user })
    .populate({
      path: 'products.product',
      select: '-price -description -category -stock -discount -rating -keywords'
    })
  return res.status(200).json({ success: true, orders });
};

export default {
  addOrder,
  getOrdersByUser,
};
