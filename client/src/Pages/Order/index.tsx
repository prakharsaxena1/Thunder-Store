import React from 'react';
import {
  Box, Typography,
} from '@mui/material';
import OrderItem from './OrderItem';

const orders = [
  {
    id: '12',
    image: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'Some good product #12',
    price: 4999,
    dateOrdered: new Date().toDateString(),
    dateDelivered: new Date().toDateString(),
  },
  {
    id: '42',
    image: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'Pc parts',
    price: 1940,
    dateOrdered: new Date().toDateString(),
    // dateDelivered: new Date().toDateString(),
  },
  {
    id: '42',
    image: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'Pc parts',
    price: 1940,
    dateOrdered: new Date().toDateString(),
    // dateDelivered: new Date().toDateString(),
  },
];

const Order: React.FC = () => {
  return (
    <Box
      sx={{
        p: 2,
        width: { sm: '90%', md: '80%', lg: '70%' },
        m: '1rem auto',
      }}
    >
      <Typography variant="h3" component="h3">Orders</Typography>
      <Box sx={{ p: 2 }}>
        {orders.map((order) => (
          <OrderItem order={order} />
        ))}
      </Box>
    </Box>
  );
};

export default Order;
