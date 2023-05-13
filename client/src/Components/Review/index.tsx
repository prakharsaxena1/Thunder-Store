/* eslint-disable max-len */
import React, { FC, useState } from 'react';
import {
  Grid, Typography, Stack, Paper, Box, IconButton,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import dayjs from 'dayjs';
import RatingWrapper from '../RatingWrapper';
import { colors, dateFormat } from '../../Constants/constants';
import ReviewApis from '../../redux/apis/Review/review.api';
import Loader from '../Loader';
import { useAppSelector } from '../../redux/hooks';
import { userSelector } from '../../redux/slices/user/user.selector';
import Confirmation from '../Confirmation';
import { IReviewProps } from './review.interface';

const Review: FC<IReviewProps> = ({ review, setData, setShowModal }) => {
  const [popupOpen, setPopupOpen] = useState(false);
  const userData = useAppSelector(userSelector);
  const [GetReviewTrigger, { isLoading: reviewLoading, isFetching: reviewFetching }] = ReviewApis.useLazyGetOneReviewQuery();
  const [DeleteReviewTrigger, { isLoading: reviewDeleting }] = ReviewApis.useDeleteReviewMutation();
  const handleEditOpen = () => {
    GetReviewTrigger({ reviewId: review._id }, true)
      .unwrap().then((res) => {
        setData(res);
        setShowModal(true);
      });
  };
  const handleDelete = () => {
    DeleteReviewTrigger({ reviewId: review._id })
      .unwrap().then(() => setData(null));
    setPopupOpen(false);
  };
  return (
    <Paper>
      <Grid container sx={{ position: 'relative' }}>
        <Grid item xs={12} sm={4} md={3} lg={3} sx={{ backgroundColor: colors.primary, p: '1rem' }}>
          <Stack direction="column">
            <Stack direction="row" spacing={1}>
              <AccountCircleIcon />
              <Typography variant="body1">{review?.userID.username}</Typography>
            </Stack>
            <RatingWrapper rateValue={review?.rating} />
            <Typography variant="body1">{dayjs(review?.updatedAt).format(dateFormat.dateOnly)}</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={8} md={9} lg={9}>
          <Stack direction="column" sx={{ maxWidth: '95%', m: '8px auto' }}>
            <Typography variant="h6">{review?.title}</Typography>
            <Typography variant="body2">{review?.description}</Typography>
          </Stack>
        </Grid>
        {userData.id === review?.userID._id && (
          <Box
            sx={{
              position: 'absolute',
              top: 10,
              right: 10,
            }}
          >
            <IconButton onClick={handleEditOpen}>
              <EditIcon fontSize="small" />
            </IconButton>
            <IconButton onClick={() => setPopupOpen(true)}>
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Box>
        )}
        {popupOpen && (
          <Confirmation
            open={popupOpen}
            onClose={() => setPopupOpen(false)}
            onConfirm={handleDelete}
            message="Are you sure you want to delete your review?"
            confirmLabel="Yes"
          />
        )}
      </Grid>
      {(reviewLoading || reviewFetching || reviewDeleting) && <Loader />}
    </Paper>
  );
};

export default Review;
