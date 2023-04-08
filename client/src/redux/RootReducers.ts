import { combineReducers } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import baseApi from './apis/baseQuery';

const RootReducers = combineReducers({
  user: userSlice,
  [baseApi.reducerPath]: baseApi.reducer,
});

export default RootReducers;
