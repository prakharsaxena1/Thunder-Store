import React, { FC, useState } from 'react';
import {
  Box, TextField, Typography, Button, Divider,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import AccountsBox from '../../Components/AccountsBox';
import AccountApis from '../../redux/apis/Account/account.api';

const Register: FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const [registerTrigger, { isLoading }] = AccountApis.useRegisterMutation();
  const attemptRegister = () => {
    if (username && email && password && password === repeatPassword) {
      registerTrigger({
        username: username.trim(),
        email: email.trim(),
        password: password.trim(),
      }).unwrap().then((res) => {
        if (res.status === 'success') {
          enqueueSnackbar(res.message, { variant: 'success', preventDuplicate: true });
          navigate('/', { replace: true });
        }
        enqueueSnackbar(res.message, { variant: 'error', preventDuplicate: true });
      }).catch(() => {
        enqueueSnackbar('Provided incomplete or wrong credentials', { variant: 'error', preventDuplicate: true });
      });
    }
  };
  return (
    <AccountsBox isLoading={isLoading}>
      <Typography variant="h5" component="h5" align="center" sx={{ mb: 3 }}>Create an account</Typography>
      {/* Name */}
      <TextField
        sx={{ m: 1 }}
        required
        id="username"
        type="text"
        label="Name"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
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
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      {/* Confirm Password */}
      <TextField
        sx={{ m: 1 }}
        required
        id="repeatPassword"
        type="password"
        label="Repeat Password"
        value={repeatPassword}
        onChange={(e) => {
          setRepeatPassword(e.target.value);
        }}
      />
      {/* Button */}
      <Button
        variant="contained"
        sx={{ width: '200px', mx: 'auto', my: 3 }}
        onClick={attemptRegister}
      >
        Create an account
      </Button>
      {/* Others */}
      <Divider />
      <Box sx={{ mt: 2 }}>
        <Typography variant="body2" align="center" component="p">
          Have an account?
          <Link to="/login">Login</Link>
        </Typography>
      </Box>
    </AccountsBox>
  );
};

export default Register;
