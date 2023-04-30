import React, { FC, useState } from 'react';
import {
  Box, Typography, Button, Grid, TextField, Tooltip, Fab,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ObjStrWrapper from '../../Components/ObjStrWrapper';
import PopupModal from '../../Components/PopupModal';

const DeliveryDetails: FC<any> = ({ addresses }) => {
  const [showAddAddress, setShowAddAddress] = useState(false);
  return (
    <Box
      sx={{
        p: 1,
        width: { sm: '90%', md: '50%', lg: '40%' },
        m: '1rem auto',
        position: 'relative',
      }}
    >
      <Box>
        {addresses && addresses.length > 0
          ? (addresses.map((address: any, i: number) => (<ObjStrWrapper data={address} key={i} />)))
          : (
            <Typography variant="h5" align="center">You don&apos;t have any addresses saved in your account</Typography>
          )}
      </Box>
      <Tooltip title="Add address<">
        <Fab
          color="warning"
          onClick={() => setShowAddAddress(true)}
          sx={{
            zIndex: 10,
            position: 'absolute',
            bottom: -10,
            right: 40,
          }}
        >
          <AddIcon />
        </Fab>
      </Tooltip>
      {showAddAddress && (
        <PopupModal showModal={showAddAddress} setShowModal={setShowAddAddress} title="Add an address">
          <Grid container spacing={3} sx={{ p: 2 }}>
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
            <Grid item xs={12}>
              <div style={{ width: '100%', textAlign: 'end' }}>
                <Button variant="contained">Add</Button>
              </div>
            </Grid>
          </Grid>
        </PopupModal>
      )}
    </Box>
  );
};

export default DeliveryDetails;
