import React, { FC } from 'react';
import {
  Grid, Typography, Stack, Paper,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import RatingWrapper from '../RatingWrapper';
import { colors } from '../../Constants/constants';

const Review: FC<any> = ({ data }) => {
  return (
    <Paper>
      <Grid container>
        <Grid item xs={5} md={3} lg={1.5} sx={{ backgroundColor: colors.primary, p: '1rem' }}>
          <Stack direction="column">
            <Stack direction="row" spacing={1}>
              <AccountCircleIcon />
              <Typography variant="body1">{data?.username}</Typography>
            </Stack>
            <RatingWrapper rateValue={data?.rating} />
            <Typography variant="body1">{data?.date}</Typography>
          </Stack>
        </Grid>
        <Grid item xs={7} md={9} lg={10.5}>
          <Stack direction="column" sx={{ maxWidth: '95%', m: '8px auto' }}>
            <Typography variant="h6">{data?.review.title}</Typography>
            <Typography variant="body2">{data?.review.description}</Typography>
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Review;
