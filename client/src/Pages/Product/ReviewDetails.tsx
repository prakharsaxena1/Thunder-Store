/* eslint-disable max-len */
import React, { FC } from 'react';
import {
  Stack, Typography, Button, Divider,
} from '@mui/material';
import Review from '../../Components/Review';

const ReviewDetails: FC<any> = ({ reviews }) => {
  return (
    <>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h4">Reviews</Typography>
        <Button variant="text" color="primary" size="small">Write a review</Button>
      </Stack>
      <Divider />
      <Stack direction="column" spacing={1} alignItems="stretch">
        {reviews.map((review: any, i: number) => (
          <Review data={review} key={i} />
        ))}
      </Stack>
    </>
  );
};

export default ReviewDetails;
