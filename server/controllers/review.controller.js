const Review = require('../models/Review.model');
const Product = require('../models/Product.model');

const getReviews = async (req, res) => {
  const { productId } = req.params;
  let reviews = [];
  if (productId) {
    reviews = await Review.find({ productID: productId }).populate({
      path: 'userID',
      select: '-password -cart -address -createdAt -updatedAt -__v'
    });
  }
  return res.status(200).json({ status: 'success', reviews });
};

const addReview = async (req, res) => {
  const { productId } = req.params;
  const productData = await Product.findById(productId);
  const review = await Review.create({
    rating: req.body.rating,
    title: req.body.title,
    description: req.body.description,
    userID: req.user._id,
    productID: productId,
  });
  return res.status(200).json({ status: 'success', review });
};

const getReviewWithID = async (req, res) => {
  const { reviewId } = req.query;
  const review = await Review.findById(reviewId);
  return res.status(200).json({ status: 'success', review });
};

const editReviewWithID = async (req, res) => {
  const { reviewId } = req.query;
  const review = await Review.findByIdAndUpdate(reviewId, {
    rating: req.body.rating,
    title: req.body.title,
    description: req.body.description,
  });
  return res.status(200).json({ status: 'success', review });
};

const deleteReviewWithID = async (req, res) => {
  const { reviewId } = req.query;
  const review = await Review.findByIdAndDelete(reviewId);
  return res.status(200).json({ status: 'success' });
};

module.exports = {
  getReviews,
  addReview,
  getReviewWithID,
  editReviewWithID,
  deleteReviewWithID,
};
