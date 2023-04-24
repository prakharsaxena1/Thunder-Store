import React, { FC, useState } from 'react';
import {
  AppBar, Toolbar, Button, Grid, Typography, Divider,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { BrandText } from '../BrandText';
import { colors } from '../../Constants/constants';
import PopupModal from '../PopupModal';
import { cartSelector } from '../../redux/slices/cart/cart.selector';
import SearchBar from './SearchBar';
import NavbarMenuItems from './NavbarMenuItems';

const Navbar: FC = () => {
  const [showCart, setShowCart] = useState<boolean>(false);
  const cartData = useSelector(cartSelector);
  const cartItems = cartData.cart.length;
  return (
    <AppBar
      position="relative"
      component="nav"
      style={{
        background: colors.primary,
        boxShadow: 'none',
        color: '#000',
      }}
    >
      <Toolbar disableGutters>
        <Grid container direction="row" spacing={2} justifyContent="space-evenly" alignItems="center">
          <Grid item xs={12} sm={12} md={3} lg={2} sx={{ textAlign: 'center' }}>
            <BrandText styles={{ margin: '0 1.5rem' }} />
          </Grid>
          <Grid item xs={10} sm={10} md={5} lg={7}>
            <SearchBar />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={3} sx={{ justifyContent: 'space-around', display: 'flex' }}>
            <NavbarMenuItems setShowCart={setShowCart} />
          </Grid>
        </Grid>
      </Toolbar>
      {showCart && (
        <PopupModal showModal={showCart} setShowModal={setShowCart} title="Your cart">
          <div>
            <Grid container spacing={2} alignItems="center" justifyContent="center" sx={{ padding: '0.5rem' }}>
              <Grid item xs={8}>
                <Typography variant="body1" component="h4">{`Cart items: ${cartItems}`}</Typography>
                <Typography variant="body1" component="h4">Cart value: 0</Typography>
              </Grid>
              <Grid item xs={3.4}>
                <Button variant="contained" disabled={cartItems === 0}>Checkout</Button>
              </Grid>
            </Grid>
            <Divider />
            {
              cartItems === 0
                ? <Typography variant="h4" component="h4" align="center" sx={{ mt: 5 }}>Cart is empty</Typography>
                : JSON.stringify(cartData.cart)
            }
          </div>
        </PopupModal>
      )}
    </AppBar>
  );
};

export default Navbar;
