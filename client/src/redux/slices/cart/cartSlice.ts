/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit';
import { getFromLS, getPrice, writeLS } from '../../../utils/helper';

interface CartI {
  productID: string;
  title: string;
  price: number;
  discount: number;
  image: string;
}

interface InitialStateType {
  cart: CartI[];
  cartId: Record<string, number>;
  cartValue: number;
}

const initialState: InitialStateType = {
  cart: [],
  cartId: {},
  cartValue: 0,
};

const cartItemLS = (item: CartI, action = 'add', id = null) => {
  const cartItems = getFromLS('cart', []);
  if (action === 'add') {
    cartItems.push(item);
  } else {
    const objWithIdIndex = cartItems.findIndex(
      (obj: CartI) => obj.productID === id,
    );
    if (objWithIdIndex > -1) {
      cartItems.splice(objWithIdIndex, 1);
    }
  }
  writeLS('cart', cartItems);
};

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    setCartItems: (state, action) => {
      const tempCart = [...getFromLS('cart', []), ...action.payload];
      let temp = 0;
      const cartID: Record<string, number> = {};
      for (let i = 0; i < tempCart.length; i++) {
        temp += getPrice(tempCart[i].price, tempCart[i].discount);
        if (cartID[tempCart[i].productID]) {
          cartID[tempCart[i].productID] += 1;
        } else {
          cartID[tempCart[i].productID] = 1;
        }
      }
      state.cartId = cartID;
      state.cart = tempCart.filter((product, index, self) => index === self.findIndex((p) => p.productID === product.productID));
      state.cartValue = temp;
      writeLS('cart', tempCart);
    },
    addItemToCart: (state, action) => {
      state.cartId[action.payload.productID] = 1;
      state.cart.push(action.payload);
      state.cartValue += getPrice(action.payload.price, action.payload.discount);
      cartItemLS(action.payload);
    },
    incrementQuantity: (state, action) => {
      state.cartId[action.payload.productID] += 1;
      state.cartValue += getPrice(action.payload.price, action.payload.discount);
      cartItemLS(action.payload);
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
      cartItemLS(action.payload, 'remove', action.payload.productID);
      state.cartValue -= getPrice(action.payload.price, action.payload.discount);
    },
    emptyCart: () => initialState,
  },
});

export const {
  setCartItems,
  addItemToCart,
  incrementQuantity,
  decrementQuantity,
  emptyCart,
} = cartSlice.actions;
export default cartSlice.reducer;
