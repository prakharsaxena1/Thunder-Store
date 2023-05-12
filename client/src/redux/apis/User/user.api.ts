import baseApi from '../baseQuery';
import { apiUrls } from '../../../Constants/constants';
import {
  AddAddressResponse,
  AddToCartRequest,
  AddToCartResponse,
  DeleteAddressResponse,
  GetAddressesResponse, IAddress,
} from './user.interface';

export const UserApis = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAddresses: build.query<GetAddressesResponse, null>({
      query: () => ({
        url: apiUrls.user.address,
      }),
      providesTags: ['address'],
    }),
    deleteAddress: build.mutation<null, DeleteAddressResponse>({
      query: (params) => ({
        url: apiUrls.user.address,
        method: 'DELETE',
        body: params,
      }),
      invalidatesTags: ['address'],
    }),
    addAddress: build.mutation<AddAddressResponse, IAddress>({
      query: (params) => ({
        url: apiUrls.user.address,
        method: 'POST',
        body: params,
      }),
      invalidatesTags: ['address'],
    }),
    addItemToCart: build.mutation<AddToCartResponse, AddToCartRequest>({
      query: (params) => ({
        url: apiUrls.user.cart,
        method: 'PUT',
        body: params,
      }),
    }),
  }),
});

export default UserApis;
