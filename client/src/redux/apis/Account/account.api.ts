import baseApi from '../baseQuery';
import { apiUrls } from '../../../Constants/constants';
import {
  LoginRequest,
  LoginRegisterResponse,
  LogoutResponse,
  RegisterRequest,
  DeactivateRequest,
  GeneralResponse,
  RefreshResponse,
  RefreshRequest,
} from './account.interface';

export const AccountApis = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<LoginRegisterResponse, LoginRequest>({
      query: (params) => ({
        url: apiUrls.account.login,
        method: 'POST',
        body: params,
      }),
    }),
    logout: build.query<GeneralResponse, LogoutResponse>({
      query: () => ({
        url: apiUrls.account.logout,
        method: 'GET',
      }),
    }),
    register: build.mutation<LoginRegisterResponse, RegisterRequest>({
      query: (params) => ({
        url: apiUrls.account.register,
        method: 'POST',
        body: params,
      }),
    }),
    deactivateAccount: build.mutation<GeneralResponse, DeactivateRequest>({
      query: (params) => ({
        url: apiUrls.account.deleteAccount,
        method: 'POST',
        body: params,
        credentials: 'include',
      }),
    }),
    refreshToken: build.mutation<RefreshResponse, RefreshRequest>({
      query: (params) => ({
        url: apiUrls.account.refreshToken,
        method: 'POST',
        body: params,
      }),
    }),
  }),
});

export default AccountApis;
