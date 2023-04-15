import React, { FC } from 'react';
import {
  Typography, Divider, Button, Grid, Box,
} from '@mui/material';

const Cart: FC = () => {
  const cartItems = 0;
  const cartValue = 10;
  return (
    <Box>
      <Grid container spacing={2} alignItems="center" justifyContent="center" sx={{ padding: '0.5rem' }}>
        <Grid item xs={8}>
          <Typography variant="body1" component="h4">{`Cart items: ${cartItems}`}</Typography>
          <Typography variant="body1" component="h4">{`Cart value: ${cartValue}`}</Typography>
        </Grid>
        <Grid item xs={3.4}>
          <Button variant="contained" disabled={cartItems === 0}>Checkout</Button>
        </Grid>
      </Grid>
      <Divider />
      {
        cartItems === 0
          ? <Typography variant="h4" component="h4" align="center" sx={{ mt: 5 }}>Cart is empty</Typography>
          : <Typography variant="h4" component="h4" align="center" sx={{ mt: 5 }}>Will add later</Typography>
      }
    </Box>
  );
};

export default Cart;
