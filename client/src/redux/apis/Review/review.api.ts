import baseApi from '../baseQuery';
import { apiUrls } from '../../../Constants/constants';

export const ReviewApis = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addReview: build.mutation<any, any>({
      query: (params) => ({
        url: `${apiUrls.reviews.productReview}/${params.productID}`,
        method: 'POST',
        body: params,
      }),
    }),
    updateReview: build.mutation<any, any>({
      query: ({ reviewId, ...rest }) => ({
        url: `${apiUrls.reviews.review}/${reviewId}`,
        method: 'PUT',
        body: rest,
      }),
    }),
    deleteReview: build.mutation<any, any>({
      query: ({ reviewId }) => ({
        url: `${apiUrls.reviews.review}/${reviewId}`,
        method: 'DELETE',
      }),
    }),
    getAllReview: build.query<any, any>({
      query: ({ productID }) => ({
        url: `${apiUrls.reviews.productReview}/${productID}`,
        method: 'GET',
      }),
    }),
    getOneReview: build.query<any, any>({
      query: ({ reviewId }) => ({
        url: `${apiUrls.reviews.review}/${reviewId}`,
        method: 'GET',
      }),
    }),
  }),
});

export default ReviewApis;
