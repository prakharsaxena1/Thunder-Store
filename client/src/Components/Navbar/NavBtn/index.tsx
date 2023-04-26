/* eslint-disable react/jsx-props-no-spreading */
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

interface RouterLinkProps {
  title: string;
  href?: string;
  type?: 'Menu' | 'Link' | 'Popup';
  onClick?: any;
  icon?: React.ReactNode;
}

const NavBtn: FC<RouterLinkProps> = ({
  href = '/', title, type = 'Link', onClick = () => {}, icon,
}) => {
  if (type === 'Menu') {
    return (
      <Button variant="text" color="inherit" onClick={onClick}>
        {title}
        &nbsp;
        {icon}
      </Button>
    );
  }
  if (type === 'Popup') {
    return <Button variant="text" color="inherit" onClick={onClick}>{title}</Button>;
  }
  return <Button variant="text" color="inherit" component={Link} to={href}>{title}</Button>;
};

export default NavBtn;
