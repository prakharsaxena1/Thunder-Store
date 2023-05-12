import baseApi from '../baseQuery';
import { apiUrls } from '../../../Constants/constants';
import {
  GetProductWithIDRequest,
  GetProductWithIDResponse,
  GetProductsRequest,
  GetProductsResponse,
} from './product.interface';

export const ProductApis = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query<GetProductsResponse, GetProductsRequest>({
      query: ({ searchQuery }) => ({
        url: `${apiUrls.products.product}?search=${searchQuery}`,
        method: 'GET',
      }),
    }),
    getProductWithID: build.query<
      GetProductWithIDResponse,
      GetProductWithIDRequest
    >({
      query: ({ id }) => ({
        url: `${apiUrls.products.product}/${id}`,
        method: 'GET',
      }),
      providesTags: ['productReview'],
    }),
  }),
});

export default ProductApis;
