import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: '',
    email: '',
    cart: [],
  },
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload.usename;
      state.email = action.payload.email;
      state.cart = action.payload.cart;
    },
    logoutUser: (state) => {
      state.username = '';
      state.email = '';
      state.cart = [];
    },
  },
});

export const { setUsername } = userSlice.actions;
export default userSlice.reducer;
