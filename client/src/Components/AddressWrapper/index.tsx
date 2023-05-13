import React, { FC, useRef, useState } from 'react';
import {
  Grid, TextField, Button,
} from '@mui/material';

interface IAddressWrapper {
  action: Function;
}

const AddressWrapper: FC<IAddressWrapper> = ({ action }) => {
  const name = useRef<HTMLInputElement>(null);
  const address = useRef<HTMLInputElement>(null);
  const city = useRef<HTMLInputElement>(null);
  const state = useRef<HTMLInputElement>(null);
  const pin = useRef<HTMLInputElement>(null);
  const country = useRef<HTMLInputElement>(null);
  const [error, setError] = useState({
    nameError: false,
    addressError: false,
    cityError: false,
    stateError: false,
    pinError: false,
    countryError: false,
  });
  const handleAddAddress = () => {
    const errObj = {
      nameError: name.current!.value.trim() === '',
      addressError: address.current!.value.trim() === '',
      cityError: city.current!.value.trim() === '',
      stateError: state.current!.value.trim() === '',
      pinError: pin.current!.value.trim() === '',
      countryError: country.current!.value.trim() === '',
    };
    setError(errObj);
    if (
      !errObj.nameError
      && !errObj.addressError
      && !errObj.cityError
      && !errObj.stateError
      && !errObj.pinError
      && !errObj.countryError
    ) {
      action({
        name: name.current!.value,
        address: address.current!.value,
        city: city.current!.value,
        state: state.current!.value,
        pin: pin.current!.value,
        country: country.current!.value,
      });
    }
  };
  return (
    <Grid container spacing={3} sx={{ p: 2 }}>
      <Grid item xs={12}>
        <TextField
          error={error.nameError}
          fullWidth
          required
          inputRef={name}
          label="Full name"
          variant="standard"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          error={error.addressError}
          required
          inputRef={address}
          label="Address"
          fullWidth
          variant="standard"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          error={error.cityError}
          required
          inputRef={city}
          label="City"
          fullWidth
          variant="standard"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          error={error.stateError}
          required
          inputRef={state}
          label="State/Province/Region"
          fullWidth
          variant="standard"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          error={error.pinError}
          required
          inputRef={pin}
          label="Zip / Postal code"
          fullWidth
          variant="standard"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          error={error.countryError}
          required
          inputRef={country}
          label="Country"
          fullWidth
          variant="standard"
        />
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
