import baseApi from '../baseQuery';
import { apiUrls } from '../../../Constants/constants';

export const OrderApis = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addOrder: build.mutation<any, any>({
      query: (params) => ({
        url: apiUrls.orders.order,
        method: 'POST',
        body: params,
      }),
      invalidatesTags: ['order'],
    }),
    getOrdersByUser: build.query<any, any>({
      query: () => ({
        url: apiUrls.orders.order,
      }),
      providesTags: ['order'],
    }),
    getOrderById: build.query<any, any>({
      query: ({ orderID }) => ({
        url: `${apiUrls.orders.order}/${orderID}`,
      }),
    }),
  }),
});

export default OrderApis;
