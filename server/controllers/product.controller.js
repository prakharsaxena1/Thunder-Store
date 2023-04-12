const Product = require('../models/Product.model');

const getProducts = async (req, res) => {
  try {
    const { searchQuery } = req.query();
    const productsArray = await Product.find({
      title: { $regex: searchQuery, $options: 'i' },
    });
    res.status(200).json({
      products: productsArray,
      total: productsArray.length,
    });
  } catch (err) {
    return res.status(403).json({ err });
  }
};

const getProductWithID = async (req, res) => {
  const { id } = req.query();
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
  const { category } = req.query();
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