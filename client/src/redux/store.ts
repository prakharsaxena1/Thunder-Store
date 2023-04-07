import { configureStore } from '@reduxjs/toolkit';
import baseApi from './apis/baseQuery';
// import userSlice from './slices/userSlice';

const middleware: any[] = [];
middleware.push(baseApi.middleware);

export const store = configureStore({
  reducer: {},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat(middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
