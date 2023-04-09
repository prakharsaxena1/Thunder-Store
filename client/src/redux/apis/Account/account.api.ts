import baseApi from '../baseQuery';
import { urls } from '../../../Constants/constants';

export const AccountApis = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<any, any>({
      query: (params) => ({
        url: urls.login,
        method: 'POST',
        body: params,
      }),
    }),
    register: build.mutation<any, any>({
      query: (params) => ({
        url: urls.register,
        method: 'POST',
        body: params,
      }),
    }),
    deactivateAccount: build.mutation<any, any>({
      query: (params) => ({
        url: urls.deleteAccount,
        method: 'POST',
        body: params,
        credentials: 'include',
      }),
    }),
    isAuthAccount: build.query<any, any>({
      query: () => ({
        url: '/user/isAuth',
        method: 'GET',
        credentials: 'include',
      }),
    }),
  }),
});

export default AccountApis;
