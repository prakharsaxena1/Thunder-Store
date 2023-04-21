import React, { FC, useState } from 'react';
import {
  Box, TextField, Typography, Button, Divider, Stack,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import AccountsBox from '../../Components/AccountsBox';
import AccountApis from '../../redux/apis/Account/account.api';
import { useAppDispatch } from '../../redux/hooks';
import { setUserDetails } from '../../redux/slices/userSlice';

const Login: FC = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const [loginTrigger, { isLoading }] = AccountApis.useLoginMutation();
  const attemptLogin = () => {
    if (email && pass) {
      loginTrigger({
        email: email.trim(),
        password: pass.trim(),
      }).unwrap().then((res) => {
        if (res.status === 'success') {
          enqueueSnackbar(res.message, { variant: 'success', preventDuplicate: true });
          navigate('/', { replace: true });
          // Set state of user
          dispatch(setUserDetails({
            id: res.data.id,
            username: res.data.username,
            email: res.data.email,
            cart: res.data.cart,
          }));
          // set token in local storage
        }
        enqueueSnackbar(res.message, { variant: 'error', preventDuplicate: true });
      }).catch(() => {
        enqueueSnackbar('Provided wrong credentials', { variant: 'error', preventDuplicate: true });
      });
    }
  };
  return (
    <AccountsBox isLoading={isLoading}>
      <Typography variant="h5" component="h5" align="center" sx={{ mb: 3 }}>Sign-in to your account</Typography>
      <Stack spacing={2}>
        {/* Email */}
        <TextField required type="email" label="Email" value={email} onChange={(e) => { setEmail(e.target.value); }} />
        {/* Password */}
        <TextField required type="password" label="Password" value={pass} onChange={(e) => { setPass(e.target.value); }} />
      </Stack>
      {/* Button */}
      <Button variant="contained" sx={{ width: '200px', mx: 'auto', my: 3 }} onClick={attemptLogin}>
        Login
      </Button>
      {/* Others */}
      <Divider />
      <Box sx={{ mt: 2 }}>
        <Typography variant="body2" align="center" component="p">
          Forgot password? Click
          {' '}
          <Link to="/reset-password">here</Link>
          {' '}
          to reset
        </Typography>
        <Typography variant="body2" align="center" component="p">
          New here?
          {' '}
          <Link to="/register">Register</Link>
          {' '}
          an account
        </Typography>
      </Box>
    </AccountsBox>
  );
};

export default Login;
