import React, { FC } from 'react';
import {
  Box, Typography, Stack, Button,
  Accordion, AccordionSummary, AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const UserDetails: FC<any> = ({ details }) => {
  return (
    <Box
      sx={{
        p: 1,
        width: { sm: '90%', md: '50%', lg: '40%' },
        m: '1rem auto',
      }}
    >
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" component="h5">Basic details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack direction="column" spacing={3} sx={{ mb: 2 }}>
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="body1">Username:</Typography>
              <Typography variant="body1">{details.username}</Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="body1">Email:</Typography>
              <Typography variant="body1">{details.email}</Typography>
            </Stack>
          </Stack>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" component="h5">Danger zone</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="body1">Delete account:</Typography>
            <Button variant="contained" color="error">Delete account</Button>
          </Stack>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default UserDetails;
