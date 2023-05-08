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
  return res.status(200).json({ success: true, reviews });
};

const addReview = async (req, res) => {
  const { productId } = req.params;
  const productData = await Product.findById(productId);
  productData.rating.rate += req.body.rating;
  productData.rating.count += 1;
  const review = await Review.create({
    rating: req.body.rating,
    title: req.body.title,
    description: req.body.description,
    userID: req.user._id,
    productID: productId,
  });
  await productData.save();
  return res.status(200).json({ success: true, review });
};

const getReviewWithID = async (req, res) => {
  const { reviewId } = req.params;
  const review = await Review.findById(reviewId);
  if (review) {
    return res.status(200).json({ success: true, review });
  }
  return res.status(200).json({ success: false, message: 'review not found' });
};

const editReviewWithID = async (req, res) => {
  const { reviewId } = req.params;
  const review = await Review.findById(reviewId);
  console.log({ review, reviewId });
  if (review && review.userID._id.equals(req.user._id)) {
    const ratingDiff = req.body.rating - review.rating;
    review.rating = req.body.rating;
    review.title = req.body.title;
    review.description = req.body.description;
    review.save();
    const productData = await Product.findById(review.productID);
    productData.rating.rate += ratingDiff;
    await productData.save();
    return res.status(200).json({ success: true, review });
  }
  return res.status(401).json({ success: false, message: 'Unauthorized' });
};

const deleteReviewWithID = async (req, res) => {
  try {
    const { reviewId } = req.params;
    const review = await Review.findById(reviewId);
    const productData = await Product.findById(review.productID);
    if (!review) {
      return res.status(404).json({ success: false, message: 'Review not found' });
    }
    if (review.userID._id.equals(req.user._id)) {
      productData.rating.rate -= review.rating;
      productData.rating.count -= 1;
      await productData.save();
      await review.remove();
      return res.status(204).json({ success: true, message: 'Review deleted' });
    }
    return res.status(401).json({ success: false, message: 'Unauthorized' });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

module.exports = {
  getReviews,
  addReview,
  getReviewWithID,
  editReviewWithID,
  deleteReviewWithID,
};
