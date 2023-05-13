import React, { FC, useEffect, useState } from 'react';
import {
  Box, Typography, Tooltip, Fab, IconButton,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import ObjStrWrapper from '../../Components/ObjStrWrapper';
import PopupModal from '../../Components/PopupModal';
import AddressWrapper from '../../Components/AddressWrapper';
import UserApis from '../../redux/apis/User/user.api';
import Loader from '../../Components/Loader';
import { IAddress, IAddressReturn } from '../../redux/apis/User/user.interface';

const AddressDetails: FC = () => {
  const [show, setShow] = useState(false);
  const [deleteAddressTrigger, { isLoading: deleteLoading }] = UserApis.useDeleteAddressMutation();
  const [addressTrigger, { isLoading, isFetching }] = UserApis.useLazyGetAddressesQuery();
  const [addAddressTrigger, { isLoading: addLoading }] = UserApis.useAddAddressMutation();

  const [dataList, setDataList] = useState<IAddressReturn[]>([]);

  const handleDeleteAddress = (data: IAddressReturn) => {
    deleteAddressTrigger({ addressID: data._id })
      .unwrap().then(() => {
        if (dataList.length !== 0) {
          setDataList((prev) => prev.filter((item) => item._id !== data._id));
        }
      });
  };

  useEffect(() => {
    addressTrigger(null, true)
      .unwrap().then((res) => {
        setDataList([...res.data!]);
        setShow(false);
      });
  }, []);

  const actionHandler = (data: IAddress) => {
    addAddressTrigger(data)
      .unwrap().then((res) => {
        setDataList(res.data);
      });
    setShow(false);
  };

  return (
    <>
      {(deleteLoading || addLoading || isLoading || isFetching) && <Loader />}
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
            ? (dataList.map((data, i: number) => (
              <Box sx={{ position: 'relative' }} key={i}>
                <IconButton
                  onClick={() => handleDeleteAddress(data)}
                  sx={{
                    position: 'absolute',
                    top: 10,
                    right: 10,
                    zIndex: 11,
                  }}
                >
                  <DeleteIcon />
                </IconButton>
                <ObjStrWrapper data={data} />
              </Box>
            )))
            : (<Typography variant="h5" align="center">You don&apos;t have any addresses saved in your account</Typography>)}
        </Box>
        <Tooltip title="Add address">
          <Fab
            color="warning"
            onClick={() => {
              setShow(true);
            }}
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
    </>
  );
};

export default AddressDetails;
