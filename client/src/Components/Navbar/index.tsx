import React, { FC, useState } from 'react';
import { AppBar, Toolbar, Grid } from '@mui/material';
import { BrandText } from '../BrandText';
import { colors } from '../../Constants/constants';
import PopupModal from '../PopupModal';
import NavbarMenuItems from './NavbarMenuItems';
import Checkout from '../../Pages/Checkout/Checkout';
import SearchBar from './SearchBar';
import Cart from '../../Pages/Cart/Cart';

const Navbar: FC = () => {
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
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
        <Grid container direction="row" spacing={2} justifyContent="center">
          <Grid item xs={12} sm={12} md={3} lg={2} sx={{ textAlign: 'center' }}>
            <BrandText styles={{ margin: '0 1.5rem' }} />
          </Grid>
          <Grid item xs={12} sm={10} md={5} lg={6}>
            <div style={{ width: 'fit-content', margin: 'auto' }}>
              <SearchBar />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={2} sx={{ display: 'flex', justifyContent: 'space-around' }}>
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
