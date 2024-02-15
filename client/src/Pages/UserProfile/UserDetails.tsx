import React, { FC, useState } from 'react';
import {
  Box, Typography, Stack, Button,
  Accordion, AccordionSummary, AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';
import AccountApis from '../../redux/apis/Account/account.api';
import Loader from '../../Components/Loader';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { logoutUser } from '../../redux/slices/user/userSlice';
import { emptyCart } from '../../redux/slices/cart/cartSlice';
import { writeLS } from '../../utils/helper';
import Confirmation from '../../Components/Confirmation';
import { userSelector } from '../../redux/slices/user/user.selector';

const UserDetails: FC = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const userData = useAppSelector(userSelector);
  const [DeleteTrigger, { isLoading }] = AccountApis.useDeactivateAccountMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleDeleteAccount = () => {
    setPopupOpen(false);
    DeleteTrigger({ id: userData.id })
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
              <Typography variant="body1">{userData.username}</Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="body1">Email:</Typography>
              <Typography variant="body1">{userData.email}</Typography>
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
            <Button variant="contained" color="error" onClick={() => setPopupOpen(true)} disabled={userData.username === 'Demo'}>Delete account</Button>
          </Stack>
          {userData.username === 'Demo' && <Typography variant="caption">Cannot delete demo account</Typography>}
        </AccordionDetails>
      </Accordion>
      {popupOpen && (
        <Confirmation
          open={popupOpen}
          onClose={() => setPopupOpen(false)}
          onConfirm={handleDeleteAccount}
          message="Are you sure you want to delete your account?"
          confirmLabel="Yes"
        >
          <Typography variant="caption" color="error">This action is permanent</Typography>
        </Confirmation>
      )}
    </Box>
  );
};

export default UserDetails;
