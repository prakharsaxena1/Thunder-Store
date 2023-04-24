import baseApi from '../baseQuery';
import { apiUrls } from '../../../Constants/constants';

export const OrderApis = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addOrder: build.mutation<any, any>({
      query: (params) => ({
        url: apiUrls.orders.addOrder,
        method: 'POST',
        body: params,
      }),
    }),
    getOrdersByUser: build.mutation<any, any>({
      query: ({ userID }) => ({
        url: `${apiUrls.orders.getOrdersByUser}/${userID}`,
        method: 'GET',
      }),
    }),
    getOrderById: build.mutation<any, any>({
      query: ({ orderID }) => ({
        url: `${apiUrls.orders.getOrderById}/${orderID}`,
        method: 'GET',
      }),
    }),
  }),
});

export default OrderApis;
