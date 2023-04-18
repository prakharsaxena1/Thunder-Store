/* eslint-disable max-len */
import React, { FC, useState } from 'react';
import {
  Stack, Typography, Button, Divider, Rating, TextField, TextareaAutosize,
} from '@mui/material';
import Review from '../../Components/Review';
import PopupModal from '../../Components/PopupModal';

const ReviewDetails: FC<any> = ({ reviews }) => {
  const [showModal, setShowModal] = useState(false);
  const [rating, setRating] = useState(0);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  return (
    <>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h4">Reviews</Typography>
        <Button variant="text" color="primary" size="small" onClick={() => setShowModal(true)}>Write a review</Button>
      </Stack>
      <Divider />
      <Stack direction="column" spacing={1} alignItems="stretch">
        {reviews.map((review: any, i: number) => (
          <Review data={review} key={i} />
        ))}
      </Stack>
      {showModal && (
        <PopupModal
          showModal={showModal}
          setShowModal={setShowModal}
          title="Write a review"
        >
          <Stack direction="column" justifyContent="center">
            <div>
              <Typography variant="h5">Rating</Typography>
              <Rating
                value={rating}
                onChange={(event, newValue) => {
                  setRating(newValue || 0);
                }}
              />
            </div>
            <div>
              <Typography variant="h5">Title</Typography>
              <TextField label="Outlined" variant="outlined" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
              <Typography variant="h5">Description</Typography>
              <TextareaAutosize
                maxRows={5}
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                style={{ width: '100%' }}
              />
            </div>
            <Button variant="contained">Submit</Button>
          </Stack>
        </PopupModal>
      )}
    </>
  );
};

export default ReviewDetails;
