import {
  Box, Tab, Tabs,
} from '@mui/material';
import React, { FC } from 'react';
import ImageBox from './ImageBox';
import UserDetails from './UserDetails';
import PaymentDetails from './PaymentDetails';
import DeliveryDetails from './DeliveryDetails';

const details = {
  username: 'Prakhar Saxena',
  email: 'prakharsaxena2806@gmail.com',
  profilePhoto: '/imgs/Gojo.jpg',
  address: [
    {
      name: 'Prakhar home 1',
      address: 'E1206 Ajnara Integrity',
      city: 'Ghaziabad',
      state: 'Uttar Pradesh',
      country: 'India',
      pin: '201017',
    },
    {
      name: 'Prakhar home 2',
      address: 'A2406 Charms castle',
      city: 'Ghaziabad',
      state: 'Uttar Pradesh',
      country: 'India',
      pin: '201018',
    },
  ],
  card: [
    {
      name: 'HDFC card',
      number: '1249-1209-4094-2123',
      'expiry date': '12/25',
    },
    {
      name: 'ICICI card',
      number: '1202-9419-1294-9124',
      'expiry date': '08/24',
    },
  ],
};

const UserProfile: FC = () => {
  const [currentTab, setCurrentTab] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
  };

  return (
    <>
      <ImageBox photo={details.profilePhoto} />
      <Box>
        <Tabs value={currentTab} onChange={handleChange} centered>
          <Tab label="User details" />
          <Tab label="Delivery details" />
          <Tab label="Payment details" />
        </Tabs>
        {currentTab === 0 && (
          <UserDetails details={details} />
        )}
        {currentTab === 1 && (
          <DeliveryDetails addresses={details.address} />
        )}
        {currentTab === 2 && (
          <PaymentDetails cards={details.card} />
        )}
      </Box>
    </>
  );
};

export default UserProfile;
