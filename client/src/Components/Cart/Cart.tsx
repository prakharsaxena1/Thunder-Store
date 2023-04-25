/* eslint-disable react/jsx-no-useless-fragment */
import React, { FC } from 'react';
import {
  Stack, Typography, Button, Divider, Box,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { cartSelector } from '../../redux/slices/cart/cart.selector';
import CartItem from './CartItem';

const Cart: FC = () => {
  const cartData = useSelector(cartSelector);
  return (
    <div>
      <Stack direction="row" justifyContent="space-around" sx={{ p: 1 }} alignItems="center">
        <Typography variant="body1">{`Items: ${cartData.cart.length}`}</Typography>
        <Typography variant="body1">{`Amount: ${cartData.cartValue}`}</Typography>
        <Button variant="contained" size="small" disabled={cartData.cart.length === 0}>Checkout</Button>
      </Stack>
      <Divider />
      <Box sx={{ maxHeight: '60vh', overflow: 'auto' }}>
        {
        cartData.cart.length === 0
          ? (
            <Typography
              variant="h4"
              component="h4"
              align="center"
              sx={{ p: 3 }}
            >
              Cart is empty
            </Typography>
          )
          : cartData.cart.map((item: any) => <CartItem data={item} key={item.productID} />)
      }
      </Box>
    </div>
  );
};

export default Cart;
