import baseApi from '../baseQuery';
import { urls } from '../../../Constants/constants';

export const AccountApis = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.query<any, any>({
      query: (params) => ({
        url: urls.login,
        method: 'POST',
        body: params,
      }),
    }),
    register: build.query<any, any>({
      query: (params) => ({
        url: urls.register,
        method: 'POST',
        body: params,
      }),
    }),
    deactivateAccount: build.query<any, any>({
      query: (params) => ({
        url: urls.register,
        method: 'POST',
        body: params,
      }),
    }),
  }),
});

export default AccountApis;
