/* eslint-disable max-len */
import React, { FC, useState } from 'react';
import {
  AppBar, Toolbar, TextField, Button, MenuItem, Grid,
  InputAdornment, Box, Typography, Divider, ListItemIcon,
} from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SearchIcon from '@mui/icons-material/Search';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { useSelector } from 'react-redux';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import { BrandText } from '../BrandText';
import RouterBtn from '../RouterLink';
import { colors } from '../../Constants/constants';
import PopupModal from '../PopupModal';
import CustomMenu from '../CustomMenu';
import { useAppSelector } from '../../redux/hooks';
import { userSelector } from '../../redux/slices/user/user.selector';
import { cartSelector } from '../../redux/slices/cart/cart.selector';

const SearchBar: FC = () => {
  const [text, setText] = useState('');
  const navigate = useNavigate();
  return (
    <div style={{ flexGrow: 1 }}>
      <TextField
        value={text}
        onChange={(e) => setText(e.target.value)}
        size="small"
        variant="outlined"
        placeholder="Search"
        onKeyPress={(e: any) => {
          if (e.key === 'Enter') {
            navigate(`/search/${text}`);
          }
        }}
        sx={{
          width: '100%',
          backgroundColor: '#fff',
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

const Navbar: FC = () => {
  const [userMenu, setUserMenu] = useState<null | HTMLElement>(null);
  const [categoriesMenu, setCategoriesMenu] = useState<null | HTMLElement>(null);
  const userData = useAppSelector(userSelector);
  const [showCart, setShowCart] = useState<boolean>(false);
  const navigate = useNavigate();
  const cartData = useSelector(cartSelector);
  const cartItems = cartData.cart.length;

  const navigateTo = (link: string) => {
    navigate(link);
    setUserMenu(null);
    setCategoriesMenu(null);
  };

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
            {userData && userData.username !== ''
              ? (
                <>
                  <Button
                    variant="text"
                    color="inherit"
                    onClick={(event: React.MouseEvent<HTMLElement>) => setUserMenu(event.currentTarget)}
                    size="small"
                  >
                    {userData.username}
                  </Button>
                  <CustomMenu anchor={userMenu} setAnchor={setUserMenu}>
                    <MenuItem onClick={() => setUserMenu(null)}>
                      <ListItemIcon>
                        <LocalShippingIcon fontSize="small" />
                      </ListItemIcon>
                      Your orders
                    </MenuItem>
                    <MenuItem onClick={() => setUserMenu(null)}>
                      <ListItemIcon>
                        <Settings fontSize="small" />
                      </ListItemIcon>
                      Settings
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={() => setUserMenu(null)}>
                      <ListItemIcon>
                        <Logout fontSize="small" />
                      </ListItemIcon>
                      Logout
                    </MenuItem>
                  </CustomMenu>
                </>
              )
              : (
                <RouterBtn href="/login" title="Login" />
              )}
            <Button variant="text" color="inherit" onClick={() => setShowCart(true)}>
              Cart
              <ShoppingCartIcon sx={{ fontSize: '1rem' }} />
            </Button>
            <Button
              variant="text"
              color="inherit"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => setCategoriesMenu(event.currentTarget)}
            >
              Top selling
            </Button>
            <CustomMenu anchor={categoriesMenu} setAnchor={setCategoriesMenu}>
              <MenuItem onClick={() => navigateTo('/top-sellers/books')}>Books</MenuItem>
              <MenuItem onClick={() => navigateTo('/top-sellers/games')}>Games</MenuItem>
              <MenuItem onClick={() => navigateTo('/top-sellers/electronics')}>Electronics</MenuItem>
              <MenuItem onClick={() => navigateTo('/top-sellers/clothes')}>Clothes</MenuItem>
            </CustomMenu>
          </Grid>
        </Grid>
      </Toolbar>
      {showCart && (
        <PopupModal showModal={showCart} setShowModal={setShowCart} title="Your cart">
          <Box>
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
          </Box>
        </PopupModal>
      )}
    </AppBar>
  );
};

export default Navbar;
