import baseApi from '../baseQuery';
import { apiUrls } from '../../../Constants/constants';
import {
  OneReviewResponse,
  ReviewsRequest,
  ReviewsResponse,
  ReviewIDRequest,
  UpdateReviewRequest,
  AddReviewRequest,
} from './review.interface';

export const ReviewApis = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addReview: build.mutation<OneReviewResponse, AddReviewRequest>({
      query: ({ productID, ...rest }) => ({
        url: `${apiUrls.reviews.productReview}/${productID}`,
        method: 'POST',
        body: rest,
      }),
      invalidatesTags: ['productReview'],
    }),
    updateReview: build.mutation<OneReviewResponse, UpdateReviewRequest>({
      query: ({ reviewId, ...rest }) => ({
        url: `${apiUrls.reviews.review}/${reviewId}`,
        method: 'PUT',
        body: rest,
      }),
      invalidatesTags: ['productReview'],
    }),
    deleteReview: build.mutation<null, ReviewIDRequest>({
      query: ({ reviewId }) => ({
        url: `${apiUrls.reviews.review}/${reviewId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['productReview'],
    }),
    getAllReview: build.query<ReviewsResponse, ReviewsRequest>({
      query: ({ productID }) => ({
        url: `${apiUrls.reviews.productReview}/${productID}`,
        method: 'GET',
      }),
      providesTags: ['productReview'],
    }),
    getOneReview: build.query<OneReviewResponse, ReviewIDRequest>({
      query: ({ reviewId }) => ({
        url: `${apiUrls.reviews.review}/${reviewId}`,
        method: 'GET',
      }),
      providesTags: ['productReview'],
    }),
  }),
});

export default ReviewApis;
