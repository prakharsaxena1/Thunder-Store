/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit';

interface InitialStateType {
  profilePhoto: string;
  id: string,
  username: string,
  email: string,
}

const initialState: InitialStateType = {
  id: '',
  username: '',
  email: '',
  profilePhoto: '',
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUserDetails: (state, action) => action.payload,
    logoutUser: () => initialState,
  },
});

export const { setUserDetails, logoutUser } = userSlice.actions;
export default userSlice.reducer;
