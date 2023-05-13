import React, { FC } from 'react';
import ImageSwiper from '../../Components/ImageSwiper';
import ProjectWorking from './ProjectWorking';
import { CoverCarouselItemProps } from '../../Components/ImageSwiper/ImageSwiper.interface';

const items: CoverCarouselItemProps[] = [
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
    <>
      <ImageSwiper items={items} swiperType="cover" />
      <ProjectWorking />
    </>
  );
};

export default Home;
