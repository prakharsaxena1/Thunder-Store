import baseApi from '../baseQuery';
import { apiUrls } from '../../../Constants/constants';

export const ProductApis = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query<any, any>({
      query: (params) => ({
        url: `${apiUrls.products.product}?search=${params.searchQuery}`,
        method: 'GET',
      }),
    }),
    getProductWithID: build.query<any, any>({
      query: (params) => ({
        url: `${apiUrls.products.product}/${params.id}`,
        method: 'GET',
      }),
    }),
    getProductsByCategory: build.query<any, any>({
      query: (params) => ({
        url: `${apiUrls.products.productByCategory}/${params.category}`,
        method: 'GET',
      }),
    }),
  }),
});

export default ProductApis;
