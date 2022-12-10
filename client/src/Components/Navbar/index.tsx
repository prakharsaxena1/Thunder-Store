import * as React from 'react';
import { AppBar, Box, Toolbar, Container, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { BrandText } from '../BrandText';


const Navbar = () => {
  return (
    <AppBar position="static" style={{ background: 'rgb(241 241 241 / 34%)', boxShadow: 'none', color: '#000' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <BrandText />
          <Box sx={{ ml: 'auto' }}>
            <Button sx={{ mx: 1 }} variant="text" color="inherit" component={Link} to="/top-selling">Top selling</Button>
            <Button sx={{ mx: 1 }} variant="text" color="inherit" component={Link} to="/products">Products</Button>
            <Button sx={{ mx: 1 }} variant="text" color="inherit" component={Link} to="/cart">Cart</Button>
            <Button sx={{ mx: 1 }} variant="text" color="inherit" component={Link} to="/login">Login</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;