/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit';

interface CartI {
  productID: string,
  title: string,
  price: number,
  quantity: number,
  discount: number,
  image: string,
}

interface InitialStateType {
  id: string,
  username: string,
  email: string,
  cart: CartI[] | any,
}

const initialState: InitialStateType = {
  id: '',
  username: '',
  email: '',
  cart: [],
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
      state.id = action.payload.id;
      state.username = action.payload.usename;
      state.email = action.payload.email;
      state.cart = action.payload.cart;
    },
    addItemToCart: (state, action) => {
      const newCartItem = {
        productID: action.payload.productID,
        title: action.payload.title,
        price: action.payload.price,
        discount: action.payload.discount,
        image: action.payload.image,
      };
      state.cart.push({ ...newCartItem, quantity: 1 });
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((product: CartI) => product.productID === action.payload.productID);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((product: CartI) => product.productID === action.payload.productID);
      if (item.quantity === 1) {
        const index = state.cart.findIndex((product: CartI) => product.productID === action.payload.productID);
        state.cart.splice(index, 1);
      } else {
        item.quantity--;
      }
    },
    removeFromCart: (state, action) => {
      const removeItem = state.cart.filter((item: CartI) => item.productID !== action.payload.productID);
      return removeItem;
    },
    logoutUser: () => initialState,
  },
});

export const {
  setUserDetails, addItemToCart, incrementQuantity, decrementQuantity, removeFromCart, logoutUser,
} = userSlice.actions;
export default userSlice.reducer;
