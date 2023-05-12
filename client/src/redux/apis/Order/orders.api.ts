/* eslint-disable max-len */
import baseApi from '../baseQuery';
import { apiUrls } from '../../../Constants/constants';
import {
  AddOrderRequest,
  AddOrderResponse,
  GetOrderResponse,
} from './orders.interface';

export const OrderApis = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addOrder: build.mutation<AddOrderResponse, AddOrderRequest>({
      query: (params) => ({
        url: apiUrls.orders.order,
        method: 'POST',
        body: params,
      }),
      invalidatesTags: ['order'],
    }),
    getOrdersByUser: build.query<GetOrderResponse, null>({
      query: () => ({
        url: apiUrls.orders.order,
      }),
      providesTags: ['order'],
    }),
  }),
});

export default OrderApis;
