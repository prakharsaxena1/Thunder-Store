import React from 'react';
import { TextField, Typography, Button } from '@mui/material';
import AccountsBox from '../../Components/AccountsBox';

const ResetPassword = () => (
  <AccountsBox isLoading={false}>
    <Typography variant="h5" component="h5" align="center" sx={{ mb: 3 }}>Reset password</Typography>
    <TextField sx={{ m: 1 }} required id="email" type="email" label="Email" />
    <Button variant="contained" sx={{ width: '200px', mx: 'auto', my: 3 }}>Request OTP</Button>
  </AccountsBox>
);

export default ResetPassword;
