/* eslint-disable max-len */
import React, { FC, useState } from 'react';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import {
  Button, MenuItem, ListItemIcon, Divider,
} from '@mui/material';
import { logoutUser } from '../../redux/slices/user/userSlice';
import AccountApis from '../../redux/apis/Account/account.api';
import CustomMenu from '../CustomMenu';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { userSelector } from '../../redux/slices/user/user.selector';
import RouterBtn from '../RouterLink';

const NavbarMenuItems: FC<any> = ({ setShowCart }) => {
  const [userMenu, setUserMenu] = useState<null | HTMLElement>(null);
  const [categoriesMenu, setCategoriesMenu] = useState<null | HTMLElement>(null);
  const userData = useAppSelector(userSelector);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [LogoutTrigger] = AccountApis.useLazyLogoutQuery();
  const navigateTo = (link: string) => {
    navigate(link);
    setUserMenu(null);
    setCategoriesMenu(null);
  };
  return (
    <>
      {userData && userData.username !== ''
        ? (
          <>
            <Button
              variant="text"
              color="inherit"
              size="small"
              onClick={(event: React.MouseEvent<HTMLElement>) => setUserMenu(event.currentTarget)}
            >
              {userData.username}
            </Button>
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
                  setUserMenu(null);
                  window.localStorage.clear();
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
          <RouterBtn href="/login" title="Login" />
        )}
      <Button variant="text" color="inherit" onClick={() => setShowCart(true)}>
        Cart
        <ShoppingCartIcon sx={{ fontSize: '1rem' }} />
      </Button>
      <Button
        variant="text"
        color="inherit"
        onClick={(event: React.MouseEvent<HTMLButtonElement>) => setCategoriesMenu(event.currentTarget)}
      >
        Top selling
      </Button>
      <CustomMenu anchor={categoriesMenu} setAnchor={setCategoriesMenu}>
        <MenuItem onClick={() => navigateTo('/top-sellers/books')}>Books</MenuItem>
        <MenuItem onClick={() => navigateTo('/top-sellers/games')}>Games</MenuItem>
        <MenuItem onClick={() => navigateTo('/top-sellers/electronics')}>Electronics</MenuItem>
        <MenuItem onClick={() => navigateTo('/top-sellers/clothes')}>Clothes</MenuItem>
      </CustomMenu>
    </>
  );
};

export default NavbarMenuItems;
