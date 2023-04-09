import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
  email: '',
  cart: [],
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload.usename;
      state.email = action.payload.email;
      state.cart = action.payload.cart;
    },
    logoutUser: () => initialState,
  },
});

export const { setUsername } = userSlice.actions;
export default userSlice.reducer;
