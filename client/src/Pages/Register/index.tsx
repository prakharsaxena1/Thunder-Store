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

const Register: FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const dispatch = useAppDispatch();
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
          // Set state of user
          dispatch(setUserDetails(res.data));
          // set token in local storage
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
      <Stack spacing={2}>
        {/* Name */}
        <TextField required label="Name" value={username} onChange={(e) => { setUsername(e.target.value); }} />
        {/* Email */}
        <TextField required type="email" label="Email" value={email} onChange={(e) => { setEmail(e.target.value); }} />
        {/* Password */}
        <TextField required type="password" label="Password" value={password} onChange={(e) => { setPassword(e.target.value); }} />
        {/* Confirm Password */}
        <TextField required type="password" label="Repeat Password" value={repeatPassword} onChange={(e) => { setRepeatPassword(e.target.value); }} />
      </Stack>
      {/* Button */}
      <Button variant="contained" sx={{ width: '200px', mx: 'auto', my: 3 }} onClick={attemptRegister}>
        Create an account
      </Button>
      {/* Others */}
      <Divider />
      <Box sx={{ mt: 2 }}>
        <Typography variant="body2" align="center" component="p">
          Have an account?&nbsp;
          <Link to="/login">Login</Link>
        </Typography>
      </Box>
    </AccountsBox>
  );
};

export default Register;
