import React, { FC } from 'react';
import {
  Typography, Stack, Paper, Grid, Box,
} from '@mui/material';

const OrderItem: FC<any> = ({ order }) => {
  const deliveryStatus = order.dateDelivered ? `Delivered ${order.dateDelivered}` : 'pending';
  return (
    <Box sx={{ m: 1 }}>
      <Stack direction="row" spacing={2}>
        <Typography variant="body1">Delivery status:</Typography>
        <Typography variant="body1">{deliveryStatus}</Typography>
      </Stack>
      <Grid container component={Paper}>
        <Grid item xs={12} sm={3.5} md={2.5} lg={2} sx={{ p: 1, backgroundColor: '#ECF0F1' }}>
          {/* Ship */}
          <div>
            <Typography variant="body2">Ship to:</Typography>
            <Typography variant="body1">Prakhar Saxena</Typography>
          </div>
          {/* Total $ */}
          <div>
            <Typography variant="body2">Total amount:</Typography>
            <Typography variant="body1">6124</Typography>
          </div>
          {/* Order placed on */}
          <div>
            <Typography variant="body2">Order placed on:</Typography>
            <Typography variant="body1">21/02/2023</Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={8.5} md={9.5} lg={10}>
          <Stack direction="row" justifyContent="start" sx={{ m: 1 }} spacing={2}>
            <div style={{ maxWidth: '12vw', height: '80%' }}>
              <img src={order.image} alt="order" style={{ maxWidth: '100%', maxHeight: '100%' }} />
            </div>
            <Typography variant="h6">{order.title}</Typography>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OrderItem;
