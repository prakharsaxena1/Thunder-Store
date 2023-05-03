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
    res.status(200).json({
      products: productsArray,
      total: productsArray.length,
    });
  } catch (err) {
    return res.status(403).json({ err: err.message });
  }
};

const getProductWithID = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    res.status(200).json({
      product
    });
  } catch (err) {
    return res.status(403).json({ err });
  }
  
};

const getTopSellingFromCategory = async (req, res) => {
  const { category } = req.params;
  try {
    const productsArray = await Product.find({ category: category });
    res.status(200).json({
      products: productsArray,
      total: productsArray.length,
    });
  } catch (err) {
    return res.status(403).json({ err });
  }

};

module.exports = {
  getProducts,
  getProductWithID,
  getTopSellingFromCategory,
}