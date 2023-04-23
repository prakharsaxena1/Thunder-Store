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

const getPrice = (price: number, discount: number) => Math.round(price * (1 - discount / 100));

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    setCartItems: (state, action) => {
      state.cart += action.payload.cart;
      let temp = 0;
      for (let i = 0; i < state.cart.length; i++) {
        temp += getPrice(state.cart[i].price, state.cart[i].discount);
      }
      state.cartValue = temp;
    },
    addItemToCart: (state, action) => {
      state.cartId[action.payload.productID] = 1;
      state.cart.push(action.payload);
      state.cartValue += getPrice(action.payload.price, action.payload.discount);
    },
    incrementQuantity: (state, action) => {
      state.cartId[action.payload.productID] += 1;
      state.cartValue += getPrice(action.payload.price, action.payload.discount);
    },
    decrementQuantity: (state, action) => {
      if (state.cartId[action.payload.productID] === 1) {
        const index = state.cart.findIndex(
          (product: CartI) => product.productID === action.payload.productID,
        );
        state.cart.splice(index, 1);
        delete state.cartId[action.payload.productID];
      } else {
        state.cartId[action.payload.productID] -= 1;
      }
      state.cartValue -= getPrice(action.payload.price, action.payload.discount);
    },
  },
});

export const {
  setCartItems, addItemToCart, incrementQuantity, decrementQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
