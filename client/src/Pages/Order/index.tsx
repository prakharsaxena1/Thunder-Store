import React from 'react';
import {
  Grid, Typography, Paper,
} from '@mui/material';

const orders = [
  {
    id: '12',
    image: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'Some good product #12',
    price: 4999,
    dateOrdered: new Date().toDateString(),
    dateReceived: new Date().toDateString(),
  },
  {
    id: '42',
    image: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'Pc parts',
    price: 1940,
    dateOrdered: new Date().toDateString(),
    dateReceived: new Date().toDateString(),
  },
];

const Order: React.FC = () => {
  return (
    <Grid container spacing={2} justifyContent="center" sx={{ p: 3 }}>
      {orders.map((order: any) => (
        <Grid item sm={12} md={11} lg={10} component={Paper}>
          <Grid container spacing={2} justifyContent="space-around">
            <Grid item sm={2} md={2} lg={2}>
              <div style={{ width: '90px', height: '120px', margin: 'auto' }}>
                <img src={order.image} alt="first" style={{ maxHeight: '100%', width: '100%' }} />
              </div>
            </Grid>
            <Grid item sm={5} md={4} lg={4}>
              <Typography variant="body1" component="p">{order.title}</Typography>
            </Grid>
            <Grid item sm={1} md={2} lg={2}>
              <Typography variant="body1" component="p">{order.price}</Typography>
            </Grid>
            <Grid item sm={1.5} md={2} lg={2}>
              <Typography variant="body1" component="p">{order.dateOrdered}</Typography>
            </Grid>
            <Grid item sm={1.5} md={2} lg={2}>
              <Typography variant="body1" component="p">{order.dateReceived}</Typography>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default Order;
