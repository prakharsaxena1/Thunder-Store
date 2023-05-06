/* eslint-disable max-len */
import React, { useEffect } from 'react';
import {
  Box, Typography,
} from '@mui/material';
import OrderItem from './OrderItem';
import OrderApis from '../../redux/apis/Order/orders.api';
import Loader from '../../Components/Loader';

const Order: React.FC = () => {
  const [OrderListTrigger, { data, isLoading, isFetching }] = OrderApis.useLazyGetOrdersByUserQuery();
  useEffect(() => {
    OrderListTrigger({}, true);
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
        {data && data?.orders?.map((order: any, i: number) => <OrderItem key={i} order={order} />)}
        {data && data?.orders.length === 0 && (
          <Typography variant="h4" component="h4" align="center">No orders available</Typography>
        )}
      </Box>
    </Box>
  );
};

export default Order;
