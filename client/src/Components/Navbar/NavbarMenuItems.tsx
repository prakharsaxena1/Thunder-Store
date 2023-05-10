/* eslint-disable max-len */
import React, { FC } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CustomMenu from '../CustomMenu';
import { useAppSelector } from '../../redux/hooks';
import { userSelector } from '../../redux/slices/user/user.selector';
import NavBtn from './NavBtn';

import { cartSelector } from '../../redux/slices/cart/cart.selector';

const NavbarMenuItems: FC<any> = ({ setShowCart }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const userData = useAppSelector(userSelector);
  const cartData = useAppSelector(cartSelector);

  return (
    <>
      {userData && userData.username !== ''
        ? (
          <>
            <NavBtn
              type="Menu"
              title={userData.username}
              onClick={handleClick}
              icon={<AccountCircleIcon />}
            />
            <CustomMenu anchorEl={anchorEl} handleClose={handleClose} />
          </>
        )
        : (
          <NavBtn href="/login" title="Login" />
        )}
      <Badge badgeContent={cartData.cart.length} color="secondary">
        <NavBtn
          type="Popup"
          title="Cart"
          onClick={() => setShowCart(true)}
          icon={<ShoppingCartIcon sx={{ fontSize: '1rem' }} />}
        />
      </Badge>

    </>
  );
};

export default NavbarMenuItems;
