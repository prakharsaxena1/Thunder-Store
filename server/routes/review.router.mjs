// Dependencies
import express from "express";
import passport from "passport";
import reviewController from '../controllers/review.controller.mjs';
const router = express.Router();
const authMiddleware = passport.authenticate('jwt', { session: false });

// Routes
router.route('/product/:productId')
  .get(reviewController.getReviews) // Gets all reviews for a particular product
  .post(authMiddleware, reviewController.addReview); // Adds a review in a particular product
router.route('/:reviewId')
  .get(authMiddleware, reviewController.getReviewWithID) // Get single review
  .put(authMiddleware, reviewController.editReviewWithID) // Edit single review
  .delete(authMiddleware, reviewController.deleteReviewWithID); // Delete single review

// Exports
export default router;
