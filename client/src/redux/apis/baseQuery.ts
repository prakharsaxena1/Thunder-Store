import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

const baseApi = createApi({
  reducerPath: 'ThunderStoreAPIs',
  baseQuery: fetchBaseQuery({
    mode: 'cors',
    baseUrl: 'http://localhost:4000/api',
    // prepareHeaders: (headers) => {
    //   if (token) {
    //     headers.set('Authorization', `Bearer ${token}`);
    //   }
    //   return headers;
    // },
  }),
  endpoints: () => ({}),
});

export default baseApi;
