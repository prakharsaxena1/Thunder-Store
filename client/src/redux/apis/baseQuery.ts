import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

const baseApi = createApi({
  reducerPath: 'ThunderStoreAPIs',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000/api',
  }),
  endpoints: () => ({}),
});

export default baseApi;
