import baseApi from '../baseQuery';
import { urls } from '../../../Constants/constants';

export const OrdersApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.query<any, any>({
      query: (params) => ({
        url: urls.orders,
        method: 'POST',
        body: params,
      }),
    }),
  }),
});

export default OrdersApi;
