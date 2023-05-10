import React, { FC, useState } from 'react';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import {
  MenuItem, ListItemIcon, Divider, Badge,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { logoutUser } from '../../redux/slices/user/userSlice';
import AccountApis from '../../redux/apis/Account/account.api';
import CustomMenu from '../CustomMenu';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { userSelector } from '../../redux/slices/user/user.selector';
import NavBtn from './NavBtn';
import { emptyCart } from '../../redux/slices/cart/cartSlice';
import { writeLS } from '../../utils/helper';
import { cartSelector } from '../../redux/slices/cart/cart.selector';

const NavbarMenuItems: FC<any> = ({ setShowCart }) => {
  const [userMenu, setUserMenu] = useState<null | HTMLElement>(null);
  const userData = useAppSelector(userSelector);
  const cartData = useAppSelector(cartSelector);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [LogoutTrigger] = AccountApis.useLazyLogoutQuery();
  const navigateTo = (link: string) => {
    navigate(link);
    setUserMenu(null);
  };
  return (
    <>
      {userData && userData.username !== ''
        ? (
          <>
            <NavBtn
              type="Menu"
              title={userData.username}
              onClick={(event: React.MouseEvent<HTMLElement>) => setUserMenu(event.currentTarget)}
              icon={<AccountCircleIcon />}
            />
            <CustomMenu anchor={userMenu} setAnchor={setUserMenu}>
              <MenuItem onClick={() => navigateTo('/orders')}>
                <ListItemIcon><LocalShippingIcon fontSize="small" /></ListItemIcon>
                Your orders
              </MenuItem>
              <MenuItem onClick={() => navigateTo('/settings')}>
                <ListItemIcon><Settings fontSize="small" /></ListItemIcon>
                Settings
              </MenuItem>
              <Divider />
              <MenuItem onClick={() => {
                LogoutTrigger({}).unwrap().then(() => {
                  dispatch(logoutUser());
                  dispatch(emptyCart());
                  setUserMenu(null);
                  window.localStorage.clear();
                  writeLS('cart', []);
                  navigate('/', { replace: true });
                });
              }}
              >
                <ListItemIcon><Logout fontSize="small" /></ListItemIcon>
                Logout
              </MenuItem>
            </CustomMenu>
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
