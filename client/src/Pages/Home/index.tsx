/* eslint-disable arrow-body-style */
import React, { FC } from 'react';
import { Typography } from '@mui/material';
import ImageSwiper from '../../Components/ImageSwiper';

const items = [
  {
    image: '/imgs/gadgetGames.svg',
    text: 'Gadgets, games, and more!',
    imgAlign: 'left',
  },
  {
    image: '/imgs/books.svg',
    text: 'Tech, games, books - all here!',
    imgAlign: 'right',
  },
  {
    image: '/imgs/endless.svg',
    text: 'Endless possibilities, just a click away!',
    imgAlign: 'left',
  },
  {
    image: '/imgs/window.svg',
    text: 'Embrace the future of online shopping!',
    imgAlign: 'right',
  },
];
const Home: FC = () => {
  return (
    <div>
      <ImageSwiper items={items} />
      <Typography>How we work</Typography>
    </div>
  );
};

export default Home;
