import baseApi from '../baseQuery';
import { apiUrls } from '../../../Constants/constants';

export const UserApis = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAddresses: build.query<any, any>({
      query: () => ({
        url: apiUrls.user.address,
        method: 'GET',
        credentials: 'include',
      }),
    }),
    deleteAddress: build.mutation<any, any>({
      query: (params) => ({
        url: apiUrls.user.address,
        method: 'DELETE',
        body: params,
        credentials: 'include',
      }),
    }),
    addAddress: build.mutation<any, any>({
      query: (params) => ({
        url: apiUrls.user.address,
        method: 'POST',
        body: params,
        credentials: 'include',
      }),
    }),
  }),
});

export default UserApis;
