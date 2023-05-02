/* eslint-disable max-len */
import React, { useEffect } from 'react';
import {
  Box, Typography,
} from '@mui/material';
import OrderItem from './OrderItem';
import OrderApis from '../../redux/apis/Order/orders.api';
import Loader from '../../Components/Loader';

// const orders = [
//   {
//     id: '12',
//     image: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1600',
//     title: 'Some good product #12',
//     price: 4999,
//     dateOrdered: new Date().toDateString(),
//     dateDelivered: new Date().toDateString(),
//   },
// ];

const Order: React.FC = () => {
  const [OrderListTrigger, { data, isLoading, isFetching }] = OrderApis.useLazyGetOrdersByUserQuery();
  useEffect(() => {
    OrderListTrigger({});
  }, []);
  if (isLoading || isFetching) {
    return <Loader />;
  }
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
        {data && data?.orders?.map((order: any) => <OrderItem order={order} />)}
      </Box>
    </Box>
  );
};

export default Order;
