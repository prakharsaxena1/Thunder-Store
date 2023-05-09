/* eslint-disable max-len */
import React, { FC, useState, useEffect } from 'react';
import {
  Button, Rating, Stack, TextField, Typography,
} from '@mui/material';
import PopupModal from '../PopupModal';
import ReviewApis from '../../redux/apis/Review/review.api';
import Loader from '../Loader';

const ReviewPopup: FC<any> = ({
  showModal, setShowModal, id, data,
}) => {
  const [rating, setRating] = useState(0);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState({
    ratingError: false,
    titleError: false,
    descriptionError: false,
  });
  useEffect(() => {
    if (data) {
      setRating(data.rating);
      setTitle(data.title);
      setDescription(data.description);
    }
  }, [data]);

  // APIs
  const [AddReviewTrigger, { isLoading: addReviewLoading }] = ReviewApis.useAddReviewMutation();
  const [UpdateReviewTrigger, { isLoading: updateReviewLoading }] = ReviewApis.useUpdateReviewMutation();

  const handleReviewSubmit = () => {
    const errObj = {
      ratingError: rating === 0,
      titleError: title.trim() === '',
      descriptionError: description.trim() === '',
    };
    setError(errObj);
    if (!errObj.ratingError && !errObj.titleError && !errObj.descriptionError) {
      if (data) {
        UpdateReviewTrigger({
          rating, title, description, reviewId: data._id,
        }).unwrap().then(() => {
          setRating(0);
          setTitle('');
          setDescription('');
          setShowModal(false);
        });
      } else {
        AddReviewTrigger({
          rating, title, description, productID: id,
        }).unwrap().then(() => {
          setRating(0);
          setTitle('');
          setDescription('');
          setShowModal(false);
        });
      }
    }
  };
  return (
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
      {(addReviewLoading || updateReviewLoading) && <Loader />}
    </PopupModal>
  );
};

export default ReviewPopup;
