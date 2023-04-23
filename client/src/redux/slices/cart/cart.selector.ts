import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export const cartState = (state: RootState) => state.cart;

export const cartSelector = createSelector(cartState, (data) => data);
