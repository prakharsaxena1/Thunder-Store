import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

const PaymentForm = () => {
  return (
    <>
      <Typography variant="h6" gutterBottom>Payment method</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField required label="Name on card" fullWidth variant="standard" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required label="Card number" fullWidth variant="standard" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required label="Expiry date" fullWidth variant="standard" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required label="CVV" fullWidth variant="standard" />
        </Grid>
      </Grid>
    </>
  );
};

export default PaymentForm;
