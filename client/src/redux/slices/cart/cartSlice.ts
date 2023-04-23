/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit';

interface CartI {
  productID: string;
  title: string;
  price: number;
  discount: number;
  image: string;
}

interface InitialStateType {
  cart: CartI[] | any;
  cartId: Record<string, number>;
  cartValue: number;
}

const initialState: InitialStateType = {
  cart: [],
  cartId: {},
  cartValue: 0,
};

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    setCartItems: (state, action) => {
      state.cart += action.payload.cart;
    },
    addItemToCart: (state, action) => {
      if (state.cartId[action.payload.productID]) {
        state.cartId[action.payload.productID] += 1;
      } else {
        state.cartId[action.payload.productID] = 1;
      }
      state.cart.push(action.payload);
    },
    incrementQuantity: (state, action) => {
      state.cartId[action.payload.productID] += 1;
    },
    decrementQuantity: (state, action) => {
      if (state.cartId[action.payload.productID] === 1) {
        const index = state.cart.findIndex(
          (product: CartI) => product.productID === action.payload.productID,
        );
        state.cart.splice(index, 1);
      } else {
        state.cartId[action.payload.productID] -= 1;
      }
    },
    removeFromCart: (state, action) => {
      delete state.cartId[action.payload.productID];
      return state.cart.filter(
        (item: CartI) => item.productID !== action.payload.productID,
      );
    },
  },
});

export const {
  setCartItems, addItemToCart, incrementQuantity, decrementQuantity, removeFromCart,
} = cartSlice.actions;
export default cartSlice.reducer;
