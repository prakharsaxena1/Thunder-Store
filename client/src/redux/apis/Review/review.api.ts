import baseApi from '../baseQuery';
import { apiUrls } from '../../../Constants/constants';

export const ReviewApis = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addReview: build.mutation<any, any>({
      query: ({ productID, ...rest }) => ({
        url: `${apiUrls.reviews.productReview}/${productID}`,
        method: 'POST',
        body: rest,
      }),
      invalidatesTags: ['productReview'],
    }),
    updateReview: build.mutation<any, any>({
      query: ({ reviewId, ...rest }) => ({
        url: `${apiUrls.reviews.review}/${reviewId}`,
        method: 'PUT',
        body: rest,
      }),
      invalidatesTags: ['productReview'],
    }),
    deleteReview: build.mutation<any, any>({
      query: ({ reviewId }) => ({
        url: `${apiUrls.reviews.review}/${reviewId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['productReview'],
    }),
    getAllReview: build.query<any, any>({
      query: ({ productID }) => ({
        url: `${apiUrls.reviews.productReview}/${productID}`,
        method: 'GET',
      }),
      providesTags: ['productReview'],
    }),
    getOneReview: build.query<any, any>({
      query: ({ reviewId }) => ({
        url: `${apiUrls.reviews.review}/${reviewId}`,
        method: 'GET',
      }),
      providesTags: ['productReview'],
    }),
  }),
});

export default ReviewApis;
