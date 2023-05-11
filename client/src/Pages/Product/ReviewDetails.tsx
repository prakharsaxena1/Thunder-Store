/* eslint-disable max-len */
import React, { FC, useEffect, useState } from 'react';
import {
  Stack, Typography, Button, Divider, Box, Paper,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import Review from '../../Components/Review';
import ReviewPopup from '../../Components/Review/ReviewPopup';
import { useAppSelector } from '../../redux/hooks';
import { userSelector } from '../../redux/slices/user/user.selector';

const EmptyReviews: FC<any> = () => {
  return (
    <Box sx={{ p: 2 }} component={Paper}>
      <Typography variant="h5" align="center">No reviews</Typography>
    </Box>
  );
};

const ReviewDetails: FC<any> = ({ reviews }) => {
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [canReview, setCanReview] = useState(false);
  const [data, setData] = useState<any>(null);
  const [sortedReviews, setSortedReviews] = useState<any>([]);
  const userData = useAppSelector(userSelector);
  useEffect(() => {
    if (reviews && userData.id) {
      const userReview = reviews.find((item: any) => item.userID._id === userData.id);
      const filteredReviews = reviews.filter((item: any) => item.userID._id !== userData.id);
      if (userReview !== null && userReview !== undefined) {
        setSortedReviews([userReview, ...filteredReviews]);
      } else {
        setSortedReviews([...filteredReviews]);
      }
      setCanReview(userReview === undefined);
    }
  }, [reviews]);

  return (
    <>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h4">Reviews</Typography>
        {canReview && (
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={() => setShowModal(true)}
          >
            Add a review
          </Button>
        )}
      </Stack>
      <Divider />
      <Stack direction="column" spacing={1} alignItems="stretch">
        {sortedReviews.length > 0
          ? sortedReviews.map((review: any, i: number) => (
            <Review data={review} key={i} setData={setData} setShowModal={setShowModal} />
          ))
          : <EmptyReviews />}
      </Stack>
      {showModal && (
        <ReviewPopup
          showModal={showModal}
          setShowModal={setShowModal}
          id={id}
          data={data?.review || undefined}
        />
      )}
    </>
  );
};

export default ReviewDetails;
