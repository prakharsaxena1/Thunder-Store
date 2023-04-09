/* eslint-disable react/jsx-props-no-spreading */
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

interface RouterLinkProps {
  href: string;
  title: string;
}

const RouterBtn: FC<RouterLinkProps> = (props) => {
  const { href, title } = props;
  return <Button variant="text" color="inherit" component={Link} to={href}>{title}</Button>;
};

export default RouterBtn;
