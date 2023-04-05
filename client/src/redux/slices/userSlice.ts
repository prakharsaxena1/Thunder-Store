import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: '',
  },
  reducers: {
    setUsername(state, action) {
      state.username = action.payload.usename;
    },
  },
});

export const { setUsername } = userSlice.actions;
export default userSlice.reducer;
