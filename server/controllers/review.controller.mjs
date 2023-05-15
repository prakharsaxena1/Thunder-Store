import Review from '../models/Review.model.mjs';
import Product from '../models/Product.model.mjs';

const userPopulate = {
  path: 'userID',
  select: '-password -cart -address -createdAt -updatedAt -__v -email -profilePhoto'
}

const getReviews = async (req, res) => {
  try {
    const { productId } = req.params;
    let reviews = [];
    if (productId) {
      reviews = await Review.find({ productID: productId })
        .select('-createdAt -__v')
        .populate(userPopulate);
    }
    return res.status(200).json({ success: true, reviews });
  } catch (err) {
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

const addReview = async (req, res) => {
  const { productId } = req.params;
  try {
    const productData = await Product.findById(productId);
    if (productData) {
      productData.rating.rate += req.body.rating;
      productData.rating.count += 1;
      const addReview = await Review.create({
        rating: req.body.rating,
        title: req.body.title,
        description: req.body.description,
        userID: req.user._id,
        productID: productId,
      });
      const review = await Review.findById(addReview._id)
        .select('-createdAt -__v')
        .populate(userPopulate);
        await productData.save();
        return res.status(200).json({ success: true, review });
    }
    return res.status(200).json({ success: false, message: 'Invalid Product' });
  } catch (err) {
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

const getReviewWithID = async (req, res) => {
  const { reviewId } = req.params;
  try {
    const review = await Review.findById(reviewId)
      .select('-createdAt -__v')
      .populate(userPopulate);
    if (review) {
      return res.status(200).json({ success: true, review });
    }
    return res.status(200).json({ success: false, review: {} });
  } catch (err) {
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

const editReviewWithID = async (req, res) => {
  try {
    const { reviewId } = req.params;
    const review = await Review.findById(reviewId)
      .select('-createdAt -__v')
      .populate(userPopulate);
    if (review && review.userID.equals(req.user._id)) {
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
    return res.status(401).json({ success: false, message: 'Invalid user' });
  } catch (err) {
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

const deleteReviewWithID = async (req, res) => {
  try {
    const { reviewId } = req.params;
    const review = await Review.findById(reviewId);
    const productData = await Product.findById(review.productID);
    if (!review) {
      return res.status(404).json({ success: false, message: 'Review not found' });
    }
    if (review.userID.equals(req.user._id)) {
      productData.rating.rate -= review.rating;
      productData.rating.count -= 1;
      await productData.save();
      await review.remove();
      return res.sendStatus(204);
    }
    return res.status(401).json({ success: false, message: 'Invalid user' });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

export default {
  getReviews,
  addReview,
  getReviewWithID,
  editReviewWithID,
  deleteReviewWithID,
};
