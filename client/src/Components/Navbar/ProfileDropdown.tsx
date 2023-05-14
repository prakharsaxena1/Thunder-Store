/* eslint-disable react/jsx-props-no-spreading */
import React, { FC, useEffect, useRef } from 'react';
import {
  ClickAwayListener, Grow, MenuItem, MenuList, Paper, Popper,
  ListItemIcon, Divider,
} from '@mui/material';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../redux/slices/user/userSlice';
import { emptyCart } from '../../redux/slices/cart/cartSlice';
import { getFromLS, writeLS } from '../../utils/helper';
import { useAppDispatch } from '../../redux/hooks';
import AccountApis from '../../redux/apis/Account/account.api';
import UserApis from '../../redux/apis/User/user.api';

interface IProfileDropdownProps {
  open: boolean;
  anchorRef: React.RefObject<HTMLButtonElement>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const ProfileDropdown: FC<IProfileDropdownProps> = ({
  open, anchorRef, setOpen,
}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [LogoutTrigger] = AccountApis.useLazyLogoutQuery();
  const [CartTrigger] = UserApis.useAddItemToCartMutation();
  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }
    setOpen(false);
  };
  const navigateTo = (link: string) => {
    navigate(link);
  };
  const prevOpen = useRef(open);

  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {anchorRef.current && (
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          placement="bottom-start"
          transition
          disablePortal
          sx={{ zIndex: 100 }}
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
                    <MenuItem
                      onClick={() => {
                        setOpen(false);
                        navigateTo('/orders');
                      }}
                    >
                      <ListItemIcon><LocalShippingIcon fontSize="small" /></ListItemIcon>
                      Your orders
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        setOpen(false);
                        navigateTo('/settings');
                      }}
                    >
                      <ListItemIcon><Settings fontSize="small" /></ListItemIcon>
                      Settings
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={() => {
                      const cart = getFromLS('cart', []);
                      if (cart.length !== 0) {
                        CartTrigger({
                          productId: cart.map((item: any) => item.productID),
                          operation: 'add',
                        });
                      }
                      LogoutTrigger(null).unwrap().then(() => {
                        dispatch(logoutUser());
                        dispatch(emptyCart());
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
      )}
    </>
  );
};

export default ProfileDropdown;
