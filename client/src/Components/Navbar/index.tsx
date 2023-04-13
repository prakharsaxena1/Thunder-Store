import React, { FC, useState } from 'react';
import {
  AppBar, Stack, Toolbar, Container, TextField, IconButton,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { BrandText } from '../BrandText';
import RouterBtn from '../RouterLink';
import { colors } from '../../Constants/constants';

const SearchBar: FC = () => {
  const [text, setText] = useState('');
  return (
    <div style={{ position: 'relative', flexGrow: 1 }}>
      <TextField
        value={text}
        onChange={(e) => setText(e.target.value)}
        size="small"
        variant="outlined"
        sx={{
          width: '100%',
          backgroundColor: '#fff',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
        }}
      >
        <IconButton>
          <SearchIcon />
        </IconButton>
      </div>
    </div>
  );
};

const Navbar: FC = () => {
  const [showCart, setShowCart] = useState(false);
  return (
    <AppBar
      position="static"
      component="nav"
      style={{
        background: colors.primary,
        boxShadow: 'none',
        color: '#000',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Stack
            direction="row"
            spacing={3}
            justifyContent="space-evenly"
            sx={{ width: '100%', alignItems: 'center' }}
          >
            <BrandText />
            <SearchBar />
            <RouterBtn href="/login" title="Login" />
            <IconButton
              sx={{ width: '40px', height: '40px' }}
              onClick={() => {
                setShowCart(!showCart);
              }}
            >
              <ShoppingCartIcon sx={{ width: '20px' }} />
            </IconButton>
          </Stack>
        </Toolbar>
        <Toolbar disableGutters>
          <Stack
            direction="row"
            spacing={3}
            justifyContent="space-around"
            sx={{ width: '100%', alignItems: 'center' }}
          >
            <RouterBtn href="/top-sellers/books" title="Books" />
            <RouterBtn href="/top-sellers/games" title="Games" />
            <RouterBtn href="/top-sellers/electronics" title="Electronics" />
            <RouterBtn href="/top-sellers/clothes" title="Clothes" />
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
