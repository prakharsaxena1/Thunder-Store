/* eslint-disable max-len */
import { Grid, Typography } from '@mui/material';
import React, { FC } from 'react';
import Carousel from 'react-material-ui-carousel';
import {
  CarouselItemProps, CoverCarouselItemProps, ImageSwiperProps,
} from './ImageSwiper.interface';

const CoverCarouselItem: FC<CoverCarouselItemProps> = ({ image, text, imgAlign }) => (
  <div style={{ width: '100vw' }}>
    <Grid
      container
      direction={imgAlign === 'right' ? 'row-reverse' : 'row'}
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{
        height: '650px',
        padding: '1rem',
      }}
    >
      <Grid item xs={11} md={4}>
        <Typography sx={{ fontSize: '4rem', fontWeight: '700' }}>
          {text}
        </Typography>
      </Grid>
      <Grid item xs={11} md={6}>
        <div style={{ height: '100%' }}>
          <img src={image} alt="cover" style={{ maxWidth: '100%', maxHeight: '100%' }} />
        </div>
      </Grid>
    </Grid>
  </div>
);

const CarouselItem: FC<CarouselItemProps> = ({ image }) => (
  <div style={{ height: '550px', display: 'flex' }}>
    <img
      src={image}
      alt="cover"
      style={{
        maxWidth: '100%',
        maxHeight: '100%',
        margin: 'auto',
      }}
    />
  </div>
);

const ImageSwiper: FC<ImageSwiperProps> = ({ items, swiperType }) => {
  if (swiperType === 'cover') {
    return (
      <Carousel>
        {
          (items as CoverCarouselItemProps[]).map((item, i: number) => (
            <CoverCarouselItem
              image={item.image}
              text={item.text}
              imgAlign={item.imgAlign}
              key={i}
            />
          ))
        }
      </Carousel>
    );
  }
  return (
    <Carousel autoPlay={false} navButtonsAlwaysVisible>
      {
        items.map((item, i: number) => <CarouselItem image={item as string} key={i} />)
      }
    </Carousel>
  );
};

export default ImageSwiper;
