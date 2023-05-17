import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

const baseApi = createApi({
  reducerPath: 'ThunderStoreAPIs',
  tagTypes: ['address', 'order', 'review', 'productReview'],
  baseQuery: fetchBaseQuery({
    mode: 'cors',
    baseUrl: 'https://thunder-store-api.vercel.app/api/',
    credentials: 'include',
  }),
  endpoints: () => ({}),
});

export default baseApi;
