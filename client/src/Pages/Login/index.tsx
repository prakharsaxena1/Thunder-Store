import React, { FC, useState } from 'react';
import {
  Box, TextField, Typography, Button, Divider, Stack,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import AccountsBox from '../../Components/AccountsBox';
import AccountApis from '../../redux/apis/Account/account.api';
import { useAppDispatch } from '../../redux/hooks';
import { setUserDetails } from '../../redux/slices/user/userSlice';
import { setCartItems } from '../../redux/slices/cart/cartSlice';
import { writeLS } from '../../utils/helper';
import { profileURL } from '../../Constants/constants';

const Login: FC = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const [loginTrigger, { isLoading }] = AccountApis.useLoginMutation();

  const doDemoLogin = () => {
    loginTrigger({ email: 'demo@thunderstore.com', password: 'demo' })
      .unwrap().then((res) => {
        if (res.success) {
          navigate('/', { replace: true });
          const userDetails = {
            id: res.data.id,
            username: res.data.username,
            email: res.data.email,
            profilePhoto: res.data.profilePhoto || profileURL,
          };
          dispatch(setUserDetails(userDetails));
          dispatch(setCartItems(res.data.cart));
          writeLS('user', { ...userDetails, token: res.token });
          return enqueueSnackbar(res.message, { variant: 'success', preventDuplicate: true });
        }
        return enqueueSnackbar(res.message, { variant: 'error', preventDuplicate: true });
      }).catch(() => {
        return enqueueSnackbar('Provided wrong credentials', { variant: 'error', preventDuplicate: true });
      });
  };

  const attemptLogin = () => {
    if (email && pass) {
      loginTrigger({ email: email.trim(), password: pass.trim() })
        .unwrap().then((res) => {
          if (res.success) {
            navigate('/', { replace: true });
            const userDetails = {
              id: res.data.id,
              username: res.data.username,
              email: res.data.email,
              profilePhoto: res.data.profilePhoto || profileURL,
            };
            dispatch(setUserDetails(userDetails));
            dispatch(setCartItems(res.data.cart));
            writeLS('user', { ...userDetails, token: res.token });
            return enqueueSnackbar(res.message, { variant: 'success', preventDuplicate: true });
          }
          return enqueueSnackbar(res.message, { variant: 'error', preventDuplicate: true });
        }).catch(() => {
          return enqueueSnackbar('Provided wrong credentials', { variant: 'error', preventDuplicate: true });
        });
    }
  };
  return (
    <AccountsBox isLoading={isLoading}>
      <Typography variant="h5" component="h5" align="center" sx={{ mb: 3 }}>Sign-in to your account</Typography>
      <Stack spacing={2}>
        <TextField
          required
          type="email"
          label="Email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); }}
        />
        <TextField
          required
          type="password"
          label="Password"
          value={pass}
          onChange={(e) => { setPass(e.target.value); }}
        />
      </Stack>
      <Stack direction="row" justifyContent="center" spacing={2} sx={{ m: 1 }}>
        <Button
          variant="contained"
          onClick={doDemoLogin}
        >
          Demo Login
        </Button>
        <Button
          variant="contained"
          onClick={attemptLogin}
        >
          Login
        </Button>
      </Stack>
      <Divider />
      <Box sx={{ mt: 2 }}>
        <Typography variant="body2" align="center" component="p">
          New here?&nbsp;
          <Link to="/register">Register</Link>
          &nbsp;an account
        </Typography>
      </Box>
    </AccountsBox>
  );
};

export default Login;
