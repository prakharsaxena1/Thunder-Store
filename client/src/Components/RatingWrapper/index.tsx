import React, { FC } from 'react';
import { Rating, Stack, Typography } from '@mui/material';

interface RatingWrapperProps {
  rateValue: number;
}

const RatingWrapper: FC<RatingWrapperProps> = ({ rateValue }) => {
  let cleanValue = Math.floor(rateValue);
  if (rateValue - cleanValue >= 0.25) {
    cleanValue += 0.5;
  }
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Typography variant="body2">{cleanValue}</Typography>
      <Rating value={rateValue} readOnly precision={0.5} />
    </Stack>
  );
};

export default RatingWrapper;
