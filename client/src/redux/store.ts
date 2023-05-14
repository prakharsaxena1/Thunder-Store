import { configureStore, Middleware } from '@reduxjs/toolkit';
import baseApi from './apis/baseQuery';
import RootReducers from './RootReducers';

const middleware: Middleware[] = [];
middleware.push(baseApi.middleware);

export const store = configureStore({
  reducer: RootReducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat(middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
