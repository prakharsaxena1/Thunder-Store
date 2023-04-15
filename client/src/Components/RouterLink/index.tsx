/* eslint-disable react/jsx-props-no-spreading */
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

interface RouterLinkProps {
  href: string;
  title: string;
  icon?: any;
}

const RouterBtn: FC<RouterLinkProps> = ({ href, title, icon }) => {
  if (icon) {
    return (
      <Button variant="text" color="inherit" component={Link} to={href}>
        {title}
        &nbsp;
        {icon}
      </Button>
    );
  }
  return <Button variant="text" color="inherit" component={Link} to={href}>{title}</Button>;
};

export default RouterBtn;
