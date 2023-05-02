import React, { FC } from 'react';
import {
  Typography, Stack, Paper, Grid, Box,
} from '@mui/material';

const OrderItem: FC<any> = ({ order }) => {
  console.log(order);
  const deliveryStatus = order.dateDelivered ? `Delivered ${order.dateDelivered}` : 'pending';
  return (
    <Box sx={{ m: 1 }}>
      <Grid container component={Paper}>
        <Grid item xs={12} sm={3.5} md={2.5} lg={2} sx={{ p: 1, backgroundColor: '#ECF0F1' }}>
          <Stack direction="column" spacing={1}>
            {/* Ship */}
            <div>
              <Typography variant="body2">Ship to:</Typography>
              <Typography variant="body1">{order.shipTo.name}</Typography>
            </div>
            {/* Total $ */}
            <div>
              <Typography variant="body2">Total amount:</Typography>
              <Typography variant="body1">{order.totalAmount}</Typography>
            </div>
            {/* Order placed on */}
            <div>
              <Typography variant="body2">Order placed on:</Typography>
              <Typography variant="body1">{order.createdAt}</Typography>
            </div>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={8.5} md={9.5} lg={10}>
          <Stack direction="row" justifyContent="start" sx={{ m: 1 }} spacing={2}>
            <div style={{ maxWidth: '7rem', maxHeight: '80%' }}>
              <img src={order.image} alt="order" style={{ maxWidth: '100%', maxHeight: '100%' }} />
            </div>
            <Stack direction="column">
              <Typography variant="h6">{order.title}</Typography>
              <Stack direction="row" justifyContent="start" spacing={1}>
                <Typography variant="body2">Status:</Typography>
                <Typography variant="body2">{deliveryStatus}</Typography>
              </Stack>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OrderItem;
