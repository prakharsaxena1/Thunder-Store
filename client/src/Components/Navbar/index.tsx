/* eslint-disable max-len */
import React, { FC, useState } from 'react';
import {
  AppBar, Toolbar, TextField, Menu, Button, MenuItem, Grid, InputAdornment, Box, Typography, Divider,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import { BrandText } from '../BrandText';
import RouterBtn from '../RouterLink';
import { colors } from '../../Constants/constants';
import PopupModal from '../PopupModal';

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
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [showCart, setShowCart] = useState<boolean>(false);
  const navigate = useNavigate();
  const cartItems = Math.random();
  const cartValue = 10;
  const navigateTo = (link: string) => {
    navigate(link);
    setAnchorEl(null);
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
            <RouterBtn href="/user" title="User" />
            <RouterBtn href="/login" title="Login" />
            <Button variant="text" color="inherit" onClick={() => setShowCart(true)}>
              Cart
              <ShoppingCartIcon sx={{ fontSize: '1rem' }} />
            </Button>
            <Button
              variant="text"
              color="inherit"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget)}
            >
              Categories
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={() => setAnchorEl(null)}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={() => navigateTo('/top-sellers/books')}>Books</MenuItem>
              <MenuItem onClick={() => navigateTo('/top-sellers/games')}>Games</MenuItem>
              <MenuItem onClick={() => navigateTo('/top-sellers/electronics')}>Electronics</MenuItem>
              <MenuItem onClick={() => navigateTo('/top-sellers/clothes')}>Clothes</MenuItem>
            </Menu>
          </Grid>
        </Grid>
      </Toolbar>
      {showCart && (
        <PopupModal showModal={showCart} setShowModal={setShowCart} title="Your cart">
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
        </PopupModal>
      )}
    </AppBar>
  );
};

export default Navbar;
