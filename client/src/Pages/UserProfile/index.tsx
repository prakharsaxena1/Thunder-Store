import React, { FC } from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import ImageBox from './ImageBox';
import UserDetails from './UserDetails';
import AddressDetails from './AddressDetails';
import { useAppSelector } from '../../redux/hooks';
import { userSelector } from '../../redux/slices/user/user.selector';

const UserProfile: FC = () => {
  const [currentTab, setCurrentTab] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
  };
  const userData = useAppSelector(userSelector);
  return (
    <>
      <ImageBox photo={userData?.profilePhoto} username={userData?.username} />
      <Box>
        <Tabs value={currentTab} onChange={handleChange} centered>
          <Tab label="User details" />
          <Tab label="Delivery details" />
        </Tabs>
        {currentTab === 0 && (
          <UserDetails />
        )}
        {currentTab === 1 && (
          <AddressDetails />
        )}
      </Box>
    </>
  );
};

export default UserProfile;
