import React, { FC } from 'react';
import { Typography } from '@mui/material';
import { colors } from '../../../Constants/constants';

const splitProductTitle = (title: string) => {
  const splitIndex = title.indexOf('[');
  if (splitIndex !== -1) {
    const gameTitle = title.slice(0, splitIndex).trim();
    const publisher = title.slice(splitIndex + 1, -1).trim();
    return [gameTitle, publisher];
  }
  return [title];
};

const TitleBrandDisplay: FC<any> = ({ productTitle, single }) => {
  const [title, brand] = splitProductTitle(productTitle);
  return (
    <>
      <Typography
        component="h1"
        variant="body1"
        fontSize={single ? 40 : 24}
      >
        {title}
      </Typography>
      <Typography
        component="p"
        variant={single ? 'body1' : 'caption'}
        sx={{
          color: colors.caption,
          fontStyle: 'italic',
        }}
      >
        {brand}
      </Typography>
    </>
  );
};

export default TitleBrandDisplay;
