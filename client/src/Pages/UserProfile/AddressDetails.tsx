import React, { FC, useState } from 'react';
import {
  Box, Typography, Tooltip, Fab,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ObjStrWrapper from '../../Components/ObjStrWrapper';
import PopupModal from '../../Components/PopupModal';
import AddressWrapper from '../../Components/AddressWrapper';

const AddressDetails: FC<any> = ({ dataList }) => {
  const [show, setShow] = useState(false);
  const actionHandler = (data: any) => {
    const keys = Object.keys(data);
    let allowRequest = true;
    keys.forEach((key) => {
      if (data[key] === '') {
        allowRequest = false;
      }
    });
    if (allowRequest) {
      console.log(data);
    }
  };
  const addBtnHandler = () => {
    setShow(true);
  };
  return (
    <Box
      sx={{
        p: 1,
        width: { sm: '90%', md: '50%', lg: '40%' },
        m: '1rem auto',
        position: 'relative',
      }}
    >
      <Box sx={{ height: '36vh', overflow: 'auto' }}>
        {dataList && dataList.length > 0
          ? (dataList.map((data: any, i: number) => (<ObjStrWrapper data={data} key={i} />)))
          : (<Typography variant="h5" align="center">You don&apos;t have any addresses saved in your account</Typography>)}
      </Box>
      <Tooltip title="Add address">
        <Fab
          color="warning"
          onClick={addBtnHandler}
          sx={{
            zIndex: 10,
            position: 'absolute',
            bottom: 50,
            right: 40,
          }}
        >
          <AddIcon />
        </Fab>
      </Tooltip>
      {show && (
        <PopupModal showModal={show} setShowModal={setShow} title="Add an address">
          <AddressWrapper action={actionHandler} />
        </PopupModal>
      )}
    </Box>
  );
};

export default AddressDetails;
