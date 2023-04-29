import {
  Box, Tab, Tabs,
} from '@mui/material';
import React, { FC } from 'react';
import ImageBox from './ImageBox';
import UserDetails from './UserDetails';
import PaymentDetails from './PaymentDetails';
import DeliveryDetails from './DeliveryDetails';

const UserProfile: FC = () => {
  const [currentTab, setCurrentTab] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
  };

  return (
    <>
      <ImageBox />
      <Box>
        <Tabs value={currentTab} onChange={handleChange} centered>
          <Tab label="User details" />
          <Tab label="Payment details" />
          <Tab label="Delivery details" />
        </Tabs>
        {currentTab === 0 && (
          <UserDetails />
        )}
        {currentTab === 1 && (
          <PaymentDetails />
        )}
        {currentTab === 2 && (
          <DeliveryDetails />
        )}
      </Box>
    </>
  );
};

export default UserProfile;
