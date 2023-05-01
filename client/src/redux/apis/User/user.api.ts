import baseApi from '../baseQuery';
import { apiUrls } from '../../../Constants/constants';

export const UserApis = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAddresses: build.query<any, any>({
      query: () => ({
        url: apiUrls.user.address,
      }),
      providesTags: ['address'],
    }),
    deleteAddress: build.mutation<any, any>({
      query: (params) => ({
        url: apiUrls.user.address,
        method: 'DELETE',
        body: params,
      }),
      invalidatesTags: ['address'],
    }),
    addAddress: build.mutation<any, any>({
      query: (params) => ({
        url: apiUrls.user.address,
        method: 'POST',
        body: params,
      }),
      invalidatesTags: ['address'],
    }),
  }),
});

export default UserApis;
