import React, { FC } from 'react';
import {
  Box, Typography, Stack, Button,
  Accordion, AccordionSummary, AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';
import AccountApis from '../../redux/apis/Account/account.api';
import Loader from '../../Components/Loader';
import { useAppDispatch } from '../../redux/hooks';
import { logoutUser } from '../../redux/slices/user/userSlice';
import { emptyCart } from '../../redux/slices/cart/cartSlice';
import { writeLS } from '../../utils/helper';

const UserDetails: FC<any> = ({ details }) => {
  const [DeleteTrigger, { isLoading }] = AccountApis.useDeactivateAccountMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleDeleteAccount = () => {
    DeleteTrigger({ id: details.id })
      .unwrap().then(() => {
        dispatch(logoutUser());
        dispatch(emptyCart());
        window.localStorage.clear();
        writeLS('cart', []);
        navigate('/', { replace: true });
      });
  };

  if (isLoading) {
    return <Loader />;
  }
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
          <Typography variant="body1" component="p">Basic details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack direction="column" spacing={3} sx={{ mb: 2 }}>
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="body1">Name:</Typography>
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
          <Typography variant="body1" component="p">Danger zone</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="body1">Delete account:</Typography>
            <Button variant="contained" color="error" onClick={handleDeleteAccount}>Delete account</Button>
          </Stack>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default UserDetails;
