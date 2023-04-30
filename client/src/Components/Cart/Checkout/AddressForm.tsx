import React, { FC } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const AddressForm: FC = () => {
  return (
    <>
      <Typography variant="h6" gutterBottom>Shipping address</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField required label="Full name" fullWidth variant="standard" />
        </Grid>
        <Grid item xs={12}>
          <TextField required label="Address" fullWidth variant="standard" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField required label="City" fullWidth variant="standard" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField required label="State/Province/Region" fullWidth variant="standard" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField required label="Zip / Postal code" fullWidth variant="standard" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField required label="Country" fullWidth variant="standard" />
        </Grid>
      </Grid>
    </>
  );
};

export default AddressForm;
