import React, { FC } from 'react';
import { Stack, Typography } from '@mui/material';
import { getPrice } from '../../utils/helper';

const PriceDisplay: FC<any> = ({ price, discount }) => {
  return (
    <Stack spacing={1} direction="row">
      <Typography variant="body1" component="p" sx={{ fontWeight: '600' }}>{`Rs. ${getPrice(price, discount)}`}</Typography>
      <Typography variant="body2" component="p" style={{ textDecorationLine: 'line-through' }}>{price}</Typography>
      <Typography variant="body2" component="p" style={{ fontWeight: '700', fontStyle: 'italic', color: 'red' }}>{`${discount}% off`}</Typography>
    </Stack>
  );
};

export default PriceDisplay;
