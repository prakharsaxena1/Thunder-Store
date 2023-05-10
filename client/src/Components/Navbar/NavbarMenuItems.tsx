import React, {
  FC, useState, useRef,
} from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {
  Badge,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {
  useAppSelector,
} from '../../redux/hooks';
import { userSelector } from '../../redux/slices/user/user.selector';
import NavBtn from './NavBtn';
import { cartSelector } from '../../redux/slices/cart/cart.selector';
import ProfileDropdown from './ProfileDropdown';

const NavbarMenuItems: FC<any> = ({ setShowCart }) => {
  const userData = useAppSelector(userSelector);
  const cartData = useAppSelector(cartSelector);
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <>
      {userData && userData.username !== ''
        ? (
          <>
            <NavBtn
              type="Menu"
              title={userData.username}
              refference={anchorRef}
              icon={<AccountCircleIcon />}
              onClick={handleToggle}
            />
            {/* <Button ref={anchorRef} onClick={handleToggle}>
              {userData.username}
              &nbsp;
              <AccountCircleIcon />
            </Button> */}
            <ProfileDropdown
              open={open}
              setOpen={setOpen}
              anchorRef={anchorRef}
            />
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
