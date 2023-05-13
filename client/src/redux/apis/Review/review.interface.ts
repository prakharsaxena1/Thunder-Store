export interface IReview {
  _id: string;
  rating: number;
  title: string;
  description: string;
  userID: {
    _id: string;
    username: string;
  };
  productID: string;
  updatedAt: string;
}

export interface ReviewsResponse {
  success: boolean;
  reviews: IReview[];
}

export interface ReviewsRequest {
  productID: string;
}

export interface OneReviewResponse {
  success: boolean;
  review: IReview;
}

export interface ReviewIDRequest {
  reviewId: string;
}

export interface UpdateReviewRequest {
  title: string;
  description: string;
  rating: number;
  reviewId: string;
}

export interface AddReviewRequest {
  rating: number;
  title: string;
  description: string;
  productID: string;
}
