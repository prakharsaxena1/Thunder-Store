import React, { FC, useState } from 'react';
import {
  Box, TextField, Typography, Button, Divider,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import AccountsBox from '../../Components/AccountsBox';
import AccountApis from '../../redux/apis/Account/account.api';

const Login: FC = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [loginTrigger, { isLoading, isFetching }] = AccountApis.useLazyLoginQuery();
  const attemptLogin = () => {
    loginTrigger({
      email: email.trim(),
      password: pass.trim(),
    }).unwrap().then((res) => {
      enqueueSnackbar(res.message, {
        variant: 'success',
        preventDuplicate: true,
      });
      if (res.status === 'success') {
        navigate('/');
      } else if (res.status === 'failed') {
        navigate('/login');
      }
    });
  };
  return (
    <AccountsBox isLoading={isLoading || isFetching}>
      <Typography variant="h5" component="h5" align="center" sx={{ mb: 3 }}>Sign-in to your account</Typography>
      {/* Email */}
      <TextField
        sx={{ m: 1 }}
        required
        id="email"
        type="email"
        label="Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      {/* Password */}
      <TextField
        sx={{ m: 1 }}
        required
        id="password"
        type="password"
        label="Password"
        value={pass}
        onChange={(e) => {
          setPass(e.target.value);
        }}
      />
      {/* Button */}
      <Button
        variant="contained"
        sx={{ width: '200px', mx: 'auto', my: 3 }}
        onClick={attemptLogin}
      >
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
