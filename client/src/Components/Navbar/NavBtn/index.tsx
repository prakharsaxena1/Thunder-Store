/* eslint-disable react/jsx-props-no-spreading */
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

interface RouterLinkProps {
  title: string;
  href?: string;
  type?: 'Menu' | 'Link' | 'Popup';
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  icon?: React.ReactNode;
  refference?: ((instance: HTMLButtonElement | null) => void)
  | React.RefObject<HTMLButtonElement> | null | undefined;
}

const NavBtn: FC<RouterLinkProps> = ({
  refference, title, href = '/', type = 'Link', onClick = () => {}, icon,
}) => {
  if (type === 'Menu' || type === 'Popup') {
    return (
      <Button variant="text" color="inherit" onClick={onClick} ref={refference}>
        {title}
        &nbsp;
        {icon}
      </Button>
    );
  }
  return <Button variant="text" color="inherit" component={Link} to={href}>{title}</Button>;
};

export default NavBtn;
