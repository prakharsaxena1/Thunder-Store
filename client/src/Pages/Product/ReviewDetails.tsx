/* eslint-disable max-len */
import React, { FC, useState } from 'react';
import {
  Stack, Typography, Button, Divider, Rating, TextField,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import Review from '../../Components/Review';
import ReviewApis from '../../redux/apis/Review/review.api';
import PopupModal from '../../Components/PopupModal';
import Loader from '../../Components/Loader';

const ReviewDetails: FC<any> = ({ reviews, canReview }) => {
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [rating, setRating] = useState(0);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState({
    ratingError: false,
    titleError: false,
    descriptionError: false,
  });
  const [ReviewTrigger, { isLoading: addReviewLoading }] = ReviewApis.useAddReviewMutation();

  const handleReviewSubmit = () => {
    const errObj = {
      ratingError: rating === 0,
      titleError: title.trim() === '',
      descriptionError: description.trim() === '',
    };
    setError(errObj);
    if (!errObj.ratingError && !errObj.titleError && !errObj.descriptionError) {
      ReviewTrigger({
        rating, title, description, productID: id,
      }).unwrap().then(() => {
        setRating(0);
        setTitle('');
        setDescription('');
        setShowModal(false);
      });
    }
  };
  if (addReviewLoading) {
    return <Loader />;
  }
  return (
    <>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h4">Reviews</Typography>
        {canReview && (
          <Button
            variant="text"
            color="primary"
            size="small"
            onClick={() => setShowModal(true)}
          >
            Write a review
          </Button>
        )}
      </Stack>
      <Divider />
      <Stack direction="column" spacing={1} alignItems="stretch">
        {reviews.length > 0
          ? reviews.map((review: any, i: number) => (
            <Review data={review} key={i} />
          ))
          : <Typography variant="h6" align="center" gutterBottom sx={{ color: 'gray' }}>No reviews</Typography>}
      </Stack>
      {showModal && (
        <PopupModal showModal={showModal} setShowModal={setShowModal} title="Write a review">
          <Stack direction="column" justifyContent="space-around" spacing={3} sx={{ padding: '1rem' }}>
            <Rating size="large" value={rating} onChange={(event, newValue) => setRating(newValue || 0)} precision={0.5} />
            {error.ratingError && (
              <Typography variant="caption" display="block" color="error">Fill a rating</Typography>
            )}
            <TextField
              label="Title"
              variant="outlined"
              value={title}
              error={error.titleError}
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
              multiline
              minRows={5}
              maxRows={10}
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              error={error.descriptionError}
              style={{ width: '100%' }}
            />
            <Stack justifyContent="space-around" gap={3} sx={{ padding: '0.5rem 1rem' }}>
              <Button
                variant="contained"
                size="large"
                sx={{ width: '100px', margin: 'auto' }}
                onClick={handleReviewSubmit}
              >
                Submit
              </Button>
            </Stack>
          </Stack>
        </PopupModal>
      )}
    </>
  );
};

export default ReviewDetails;
