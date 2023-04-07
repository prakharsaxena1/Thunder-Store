import React, { FC } from 'react';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

type IText = {
  styles?: Record<string, string | number>,
  size?: number,
}

const defaultStyles = {
  fontFamily: '\'Dancing Script\', cursive',
  textDecoration: 'none',
  color: 'inherit',
};

export const BrandText: FC<IText> = ({
  styles,
  size = 28,
}) => (
  <Typography
    variant="h6"
    component={Link}
    to="/"
    sx={{
      ...defaultStyles,
      ...styles,
      fontSize: size,
    }}
  >
    Thunder Store
  </Typography>
);

export const CopyrightText: FC<IText> = ({
  styles,
  size = 16,
}) => (
  <Typography
    variant="body1"
    sx={{
      ...defaultStyles,
      ...styles,
      fontSize: size,
    }}
  >
    Thunder Store &copy; 2022
  </Typography>
);
