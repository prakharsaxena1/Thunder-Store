import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export const userState = (state: RootState) => state.user;

export const userSelector = createSelector(userState, (data) => data);
