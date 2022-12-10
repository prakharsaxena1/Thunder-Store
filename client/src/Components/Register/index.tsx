import React from 'react'
import { Box, TextField, Typography, Button, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import AccountsBox from '../../Comtainers/AccountsBox';
const Register = () => {
  return (
    <AccountsBox>
      <Typography variant='h5' component='h5' align="center" sx={{ mb: 3 }}>Create an account</Typography>
      {/* Name */}
      <TextField sx={{ m: 1 }} required id="user_name" type="text" label="Name" />
      {/* Email */}
      <TextField sx={{ m: 1 }} required id="email" type="email" label="Email" />
      {/* Password */}
      <TextField sx={{ m: 1 }} required id="password" type="password" label="Password" />
      {/* Confirm Password */}
      <TextField sx={{ m: 1 }} required id="password" type="password" label="Repeat Password" />
      {/* Button */}
      <Button variant="contained" sx={{ width: '200px', mx: 'auto', my: 3 }}>Create an account</Button>
      {/* Others */}
      <Divider />
      <Box sx={{ mt: 2 }}>
        <Typography variant='body2' align="center" component='p' >Have an account? <Link to="/login">Login</Link></Typography>
      </Box>
    </AccountsBox>
  )
}

export default Register;