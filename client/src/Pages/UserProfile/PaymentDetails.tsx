import React, { FC, useState } from 'react';
import {
  Box, Typography, Button, Grid, TextField, Tooltip, Fab,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ObjStrWrapper from '../../Components/ObjStrWrapper';
import PopupModal from '../../Components/PopupModal';

const PaymentDetails: FC<any> = ({ cards }) => {
  const [showAddCard, setShowAddCard] = useState(false);
  return (
    <Box
      sx={{
        p: 1,
        width: { sm: '90%', md: '50%', lg: '40%' },
        m: '1rem auto',
        position: 'relative',
      }}
    >
      {cards && cards.length > 0
        ? (cards.map((card: any, i: number) => (<ObjStrWrapper data={card} key={i} />)))
        : (<Typography variant="h5" align="center">You have not saved any card yet</Typography>)}
      <Tooltip title="Add card">
        <Fab
          color="warning"
          onClick={() => setShowAddCard(true)}
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
      {showAddCard && (
        <PopupModal showModal={showAddCard} setShowModal={setShowAddCard} title="Add a card">
          <Grid container spacing={3} sx={{ p: 2 }}>
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
            <Grid item xs={12} md={12}>
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

export default PaymentDetails;
