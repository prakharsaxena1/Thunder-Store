import React from 'react'
import { Box, TextField, Typography, Button, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import AccountsBox from '../../Comtainers/AccountsBox';

const Login = () => {
  return (
    <AccountsBox>
      <Typography variant='h5' component='h5' align="center" sx={{ mb: 3 }}>Sign-in to your account</Typography>
      {/* Email */}
      <TextField sx={{ m: 1 }} required id="email" type="email" label="Email" />
      {/* Password */}
      <TextField sx={{ m: 1 }} required id="password" type="password" label="Password" />
      {/* Button */}
      <Button variant="contained" sx={{ width: '200px', mx: 'auto', my: 3 }}>Login</Button>
      {/* Others */}
      <Divider />
      <Box sx={{ mt: 2 }}>
        <Typography variant='body2' align="center" component='p' >Forgot password? Click <Link to="/reset-password">here</Link> to reset</Typography>
        <Typography variant='body2' align="center" component='p' >New here? <Link to="/register">Register</Link> an account</Typography>
      </Box>
    </AccountsBox>
  )
}

export default Login