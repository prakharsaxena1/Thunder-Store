import React, { FC, useRef } from 'react';
import {
  Grid, TextField, Button,
} from '@mui/material';

const AddressWrapper: FC<any> = ({ action }) => {
  const name = useRef<HTMLInputElement>(null);
  const address = useRef<HTMLInputElement>(null);
  const city = useRef<HTMLInputElement>(null);
  const state = useRef<HTMLInputElement>(null);
  const pin = useRef<HTMLInputElement>(null);
  const country = useRef<HTMLInputElement>(null);
  const handleAddAddress = () => {
    action({
      name: name.current!.value,
      address: address.current!.value,
      city: city.current!.value,
      state: state.current!.value,
      pin: pin.current!.value,
      country: country.current!.value,
    });
  };
  return (
    <Grid container spacing={3} sx={{ p: 2 }}>
      <Grid item xs={12}>
        <TextField required inputRef={name} label="Full name" fullWidth variant="standard" />
      </Grid>
      <Grid item xs={12}>
        <TextField required inputRef={address} label="Address" fullWidth variant="standard" />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField required inputRef={city} label="City" fullWidth variant="standard" />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField required inputRef={state} label="State/Province/Region" fullWidth variant="standard" />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField required inputRef={pin} label="Zip / Postal code" fullWidth variant="standard" />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField required inputRef={country} label="Country" fullWidth variant="standard" />
      </Grid>
      <Grid item xs={12}>
        <div style={{ width: '100%', textAlign: 'end' }}>
          <Button variant="contained" onClick={handleAddAddress}>Add</Button>
        </div>
      </Grid>
    </Grid>
  );
};

export default AddressWrapper;
