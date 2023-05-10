/* eslint-disable react/jsx-props-no-spreading */
import React, { FC } from 'react';
import {
  Grow, Popper, Paper, ClickAwayListener,
  MenuList, MenuItem, ListItemIcon, Divider,
} from '@mui/material';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../redux/slices/user/userSlice';
import { emptyCart } from '../../redux/slices/cart/cartSlice';
import { writeLS } from '../../utils/helper';
import AccountApis from '../../redux/apis/Account/account.api';
import { useAppDispatch } from '../../redux/hooks';

const CustomMenu: FC<any> = ({ anchorEl, handleClose }) => {
  const open = Boolean(anchorEl);
  const dispatch = useAppDispatch();
  const [LogoutTrigger] = AccountApis.useLazyLogoutQuery();
  const navigate = useNavigate();
  const navigateTo = (link: string) => {
    navigate(link);
    handleClose(false);
  };
  return (
    <Popper
      sx={{ zIndex: '100' }}
      open={open}
      anchorEl={anchorEl}
      placement="bottom-start"
      transition
    >
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          style={{
            transformOrigin:
              placement === 'bottom-start' ? 'left top' : 'left bottom',
          }}
        >
          <Paper>
            <ClickAwayListener onClickAway={handleClose}>
              <MenuList autoFocusItem={open}>
                <MenuItem onClick={() => {
                  handleClose();
                  navigateTo('/orders');
                }}
                >
                  <ListItemIcon><LocalShippingIcon fontSize="small" /></ListItemIcon>
                  Your orders
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleClose();
                    navigateTo('/settings');
                  }}
                >
                  <ListItemIcon><Settings fontSize="small" /></ListItemIcon>
                  Settings
                </MenuItem>
                <Divider />
                <MenuItem onClick={() => {
                  LogoutTrigger({}).unwrap().then(() => {
                    dispatch(logoutUser());
                    dispatch(emptyCart());
                    handleClose(false);
                    window.localStorage.clear();
                    writeLS('cart', []);
                    navigate('/', { replace: true });
                  });
                }}
                >
                  <ListItemIcon><Logout fontSize="small" /></ListItemIcon>
                  Logout
                </MenuItem>
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  );
};

export default CustomMenu;
