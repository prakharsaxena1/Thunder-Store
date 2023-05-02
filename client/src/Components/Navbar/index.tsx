import React, { FC, useState } from 'react';
import { AppBar, Toolbar, Grid } from '@mui/material';
import { BrandText } from '../BrandText';
import { colors } from '../../Constants/constants';
import PopupModal from '../PopupModal';
import SearchBar from './SearchBar';
import NavbarMenuItems from './NavbarMenuItems';
import Cart from '../../Pages/Cart/Cart';
import Checkout from '../../Pages/Checkout/Checkout';

const Navbar: FC = () => {
  const [showCart, setShowCart] = useState<boolean>(false);
  const [showCheckout, setShowCheckout] = useState<boolean>(false);
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
          <Cart setShowCheckout={setShowCheckout} setShowCart={setShowCart} />
        </PopupModal>
      )}
      {showCheckout && (
        <PopupModal showModal={showCheckout} setShowModal={setShowCheckout} title="Checkout">
          <Checkout />
        </PopupModal>
      )}
    </AppBar>
  );
};

export default Navbar;
