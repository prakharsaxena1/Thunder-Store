import React, { FC } from 'react';
import { Stack, Typography } from '@mui/material';

const PriceDisplay: FC<any> = ({ price, discount }) => {
  const buyPrice = Math.round(price * (1 - (discount / 100)));
  return (
    <Stack spacing={1} direction="row">
      <Typography variant="body1" component="p" sx={{ fontWeight: '600' }}>{`Rs. ${buyPrice}`}</Typography>
      <Typography variant="body2" component="p" style={{ textDecorationLine: 'line-through' }}>{price}</Typography>
      <Typography variant="body2" component="p" style={{ fontWeight: '700', fontStyle: 'italic', color: 'red' }}>{`${discount}% off`}</Typography>
    </Stack>
  );
};

export default PriceDisplay;
