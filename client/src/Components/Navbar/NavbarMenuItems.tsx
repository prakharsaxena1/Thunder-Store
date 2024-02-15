import React, { FC, useState, useRef } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Badge, BadgeProps, styled } from '@mui/material';
import { useAppSelector } from '../../redux/hooks';
import { userSelector } from '../../redux/slices/user/user.selector';
import { cartSelector } from '../../redux/slices/cart/cart.selector';
import NavBtn from './NavBtn';
import ProfileDropdown from './ProfileDropdown';

interface INavbarMenuItemsProps {
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
}

const CartBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const NavbarMenuItems: FC<INavbarMenuItemsProps> = ({ setShowCart }) => {
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
              icon={<AccountCircleIcon sx={{ fontSize: '1rem' }} />}
              onClick={handleToggle}
            />
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
      <CartBadge badgeContent={cartData.cartItemCount} color="warning">
        <NavBtn
          type="Popup"
          title="Cart"
          onClick={() => setShowCart(true)}
          icon={<ShoppingCartIcon sx={{ fontSize: '1rem' }} />}
        />
      </CartBadge>
    </>
  );
};

export default NavbarMenuItems;
