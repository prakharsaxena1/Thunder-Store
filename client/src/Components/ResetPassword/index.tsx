import React from 'react';
import { TextField, Typography, Button } from '@mui/material';
import AccountsBox from '../../Comtainers/AccountsBox';


const ResetPassword = () => {
  return (
    <AccountsBox>

      <Typography variant='h5' component='h5' align="center" sx={{ mb: 3 }}>Reset password</Typography>
      {/* Email */}
      <TextField sx={{ m: 1 }} required id="email" type="email" label="Email" />
      {/* Button */}
      <Button variant="contained" sx={{ width: '200px', mx: 'auto', my: 3 }}>Request OTP</Button>

    </AccountsBox>
  )
}

export default ResetPassword