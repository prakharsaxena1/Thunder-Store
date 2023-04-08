import React, { FC, useState } from 'react';
import {
  AppBar, Stack, Toolbar, Container, Button, TextField, Typography, IconButton,
} from '@mui/material';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { BrandText } from '../BrandText';

const SearchBar: FC = () => {
  const [text, setText] = useState('');
  return (
    <TextField
      value={text}
      onChange={(e) => setText(e.target.value)}
      size="small"
      variant="outlined"
      InputProps={{
        endAdornment: <SearchIcon />,
      }}
      sx={{
        width: '70%',
        backgroundColor: '#fff',
      }}
    />
  );
};

const Navbar: FC = () => (
  <AppBar
    position="static"
    component="nav"
    style={{
      background: 'rgb(241 241 241 / 34%)',
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
          <Button variant="text" color="inherit" component={Link} to="/login">
            Login
          </Button>
          <IconButton>
            <ShoppingCartIcon sx={{ width: '16px' }} />
          </IconButton>
        </Stack>
      </Toolbar>
      <Toolbar disableGutters>
        <div
          style={{
            alignContent: 'center', minWidth: '60%', display: 'flex', margin: 'auto',
          }}
        >
          <Typography variant="h6" gutterBottom sx={{ width: '210px' }}>Top&nbsp;sellers</Typography>
          <Stack
            direction="row"
            spacing={3}
            justifyContent="space-around"
            sx={{ width: '100%', alignItems: 'center' }}
          >
            <Button variant="text" color="inherit">Books</Button>
            <Button variant="text" color="inherit">Games</Button>
            <Button variant="text" color="inherit">Electronics</Button>
            <Button variant="text" color="inherit">Food</Button>
            <Button variant="text" color="inherit">Clothes</Button>
          </Stack>
        </div>
      </Toolbar>
    </Container>
  </AppBar>
);

export default Navbar;
