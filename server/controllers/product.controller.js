const Product = require('../models/Product.model');

const getProducts = async (req, res) => {
  try {
    const { search } = req.query;
    const productsArray = await Product.find({
      $or: [
        { title: { $regex: search, $options: 'i' } },
        { category: { $regex: search, $options: 'i' } },
        { keywords: { $regex: search, $options: 'i' } },
      ],
    });
    return res.status(200).json({
      success: true, products: productsArray, total: productsArray.length,
    });
  } catch (err) {
    return res.status(403).json({ success: false, err: err.message });
  }
};

const getProductWithID = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    if (product) {
      return res.status(200).json({ success: true, product });
    } else {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }
  } catch (err) {
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
};
const getTopSellingFromCategory = async (req, res) => {
  const { category } = req.params;
  try {
    const productsArray = await Product.find({ category: category });
    return res.status(200).json({
      products: productsArray, total: productsArray.length,
    });
  } catch (err) {
    return res.status(403).json({ success: false, message: 'Internal server error' });
  }

};

module.exports = {
  getProducts,
  getProductWithID,
  getTopSellingFromCategory,
}