import React, { FC, useState } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Box, Button } from '@mui/material';

const PaymentForm: FC<any> = ({
  paymentHandler, handleBack, handleNext,
}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [error, setError] = useState({
    nameError: false,
    numberError: false,
    expiryError: false,
    cvvError: false,
  });
  const gotoNext = () => {
    const obj = {
      name, number, expiry, cvv,
    };
    const errObj = {
      nameError: name.trim() === '',
      numberError: number.trim() === '' || number.trim().length !== 16,
      expiryError: expiry.trim() === '',
      cvvError: cvv.trim() === '' || cvv.trim().length !== 4,
    };
    setError(errObj);

    if (!errObj.nameError && !errObj.numberError && !errObj.expiryError && !errObj.cvvError) {
      paymentHandler(obj);
      handleNext();
    }
  };

  return (
    <>
      <Typography variant="h6" gutterBottom>Payment method</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            label="Name on card"
            fullWidth
            variant="standard"
            error={error.nameError}
            helperText={error.nameError ? 'This field is required' : ''}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            label="Card number"
            fullWidth
            variant="standard"
            error={error.numberError}
            helperText={error.numberError ? '16 character card number required' : ''}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            label="Expiry date"
            fullWidth
            variant="standard"
            error={error.expiryError}
            helperText={error.expiryError ? 'This field is required' : ''}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            label="CVV"
            fullWidth
            variant="standard"
            error={error.cvvError}
            helperText={error.cvvError ? '4 character card cvv required' : ''}
          />
        </Grid>
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>Back</Button>
        <Button variant="contained" onClick={gotoNext} sx={{ mt: 3, ml: 1 }}>Next</Button>
      </Box>
    </>
  );
};

export default PaymentForm;
