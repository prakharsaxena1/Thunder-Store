import React, { FC } from 'react';
import ReactDom from 'react-dom';
import {
  Typography, Paper, Divider, Button, Grid, ClickAwayListener,
} from '@mui/material';

const portal: HTMLElement = document.getElementById('portal')!;
const CartModal: FC<any> = ({ setShowCart }) => {
  const cartItems = 0;
  const cartValue = 10;
  return ReactDom.createPortal(
    <ClickAwayListener onClickAway={() => setShowCart(false)}>
      <div style={{ backgroundColor: '#fff' }}>
        <Paper
          elevation={8}
          sx={{
            width: '500px',
            minHeight: '180px',
            maxHeight: '500px',
            zIndex: 100,
            position: 'absolute',
            top: '64px',
            right: '64px',
          }}
        >
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
        </Paper>
      </div>
    </ClickAwayListener>,
    portal,
  );
};

export default CartModal;
