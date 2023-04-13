import baseApi from '../baseQuery';
import { apiUrls } from '../../../Constants/constants';

export const AccountApis = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<any, any>({
      query: (params) => ({
        url: apiUrls.account.login,
        method: 'POST',
        body: params,
      }),
    }),
    register: build.mutation<any, any>({
      query: (params) => ({
        url: apiUrls.account.register,
        method: 'POST',
        body: params,
      }),
    }),
    deactivateAccount: build.mutation<any, any>({
      query: (params) => ({
        url: apiUrls.account.deleteAccount,
        method: 'POST',
        body: params,
        credentials: 'include',
      }),
    }),
  }),
});

export default AccountApis;
