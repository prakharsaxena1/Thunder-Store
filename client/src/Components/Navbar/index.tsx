import * as React from 'react';
import {
  AppBar, Box, Toolbar, Container, Button,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { BrandText } from '../BrandText';

const Navbar = () => (
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
        <BrandText />
        <Box sx={{ ml: 'auto' }}>
          <Button
            sx={{ mx: 1 }}
            variant="text"
            color="inherit"
            component={Link}
            to="/login"
          >
            Login
          </Button>
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
);

export default Navbar;
