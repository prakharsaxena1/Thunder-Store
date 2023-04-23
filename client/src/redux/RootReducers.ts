import { combineReducers } from '@reduxjs/toolkit';
import userSlice from './slices/user/userSlice';
import baseApi from './apis/baseQuery';
import cartSlice from './slices/cart/cartSlice';

const RootReducers = combineReducers({
  user: userSlice,
  cart: cartSlice,
  [baseApi.reducerPath]: baseApi.reducer,
});

export default RootReducers;
