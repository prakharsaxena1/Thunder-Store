/* eslint-disable max-len */
import { Stack, Typography } from '@mui/material';
import React, { FC } from 'react';
import Carousel from 'react-material-ui-carousel';

const CoverCarouselItem: FC<any> = ({ image, text, imgAlign }) => (
  <div style={{ width: '100vw' }}>
    <Stack
      direction={imgAlign === 'right' ? 'row-reverse' : 'row'}
      justifyContent="space-around"
      alignItems="center"
      spacing={2}
      sx={{
        height: '700px',
      }}
    >
      <Typography variant="h3" component="h3" sx={{ width: '460px' }}>{text}</Typography>
      <div>
        <img
          src={image}
          alt="cover"
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
          }}
        />
      </div>
    </Stack>
  </div>
);

const ImageSwiper: FC<any> = ({ items }) => (
  <Carousel
    next={() => null}
    prev={() => null}
  >
    {
      items.map((item: any) => <CoverCarouselItem image={item.image} text={item.text} imgAlign={item.imgAlign} />)
    }
  </Carousel>
);

export default ImageSwiper;
