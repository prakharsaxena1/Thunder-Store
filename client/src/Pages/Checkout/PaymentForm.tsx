import React, { FC, useRef } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Box, Button } from '@mui/material';

const PaymentForm: FC<any> = ({
  paymentHandler, handleBack, handleNext,
}) => {
  const name = useRef<HTMLInputElement>(null);
  const number = useRef<HTMLInputElement>(null);
  const expiry = useRef<HTMLInputElement>(null);
  const cvv = useRef<HTMLInputElement>(null);
  const gotoNext = () => {
    const obj = {
      name: name.current!.value,
      number: number.current!.value,
      expiry: expiry.current!.value,
      cvv: cvv.current!.value,
    };
    paymentHandler(obj);
    handleNext();
  };

  return (
    <>
      <Typography variant="h6" gutterBottom>Payment method</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField required inputRef={name} label="Name on card" fullWidth variant="standard" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required inputRef={number} label="Card number" fullWidth variant="standard" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required inputRef={expiry} label="Expiry date" fullWidth variant="standard" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required inputRef={cvv} label="CVV" fullWidth variant="standard" />
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
