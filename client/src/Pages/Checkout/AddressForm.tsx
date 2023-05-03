import React, {
  FC, useEffect, useState,
} from 'react';
import {
  Button, RadioGroup, FormControlLabel,
  Radio, FormControl, FormLabel, Box,
} from '@mui/material';
import UserApis from '../../redux/apis/User/user.api';
import Loader from '../../Components/Loader';
import ObjStrWrapper from '../../Components/ObjStrWrapper';
import PopupModal from '../../Components/PopupModal';
import AddressWrapper from '../../Components/AddressWrapper';

const AddressForm: FC<any> = ({ addressHandler, handleNext }) => {
  const [show, setShow] = useState(false);
  const [addressValue, setAddressValue] = useState('');
  const [dataList, setDataList] = useState<any[]>();
  const [addressTrigger, { isLoading, isFetching }] = UserApis.useLazyGetAddressesQuery();
  const [addAddressTrigger, { isLoading: addLoading }] = UserApis.useAddAddressMutation();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddressValue((event.target as HTMLInputElement).value);
  };
  const gotoNext = () => {
    const address = dataList?.find((data) => data.name === addressValue);
    addressHandler(address);
    handleNext();
  };
  useEffect(() => {
    addressTrigger({}, true)
      .unwrap().then((res) => {
        setDataList([...res.data]);
      });
  }, []);

  const actionHandler = (data: any) => {
    const keys = Object.keys(data);
    let allowRequest = true;
    keys.forEach((key) => {
      if (data[key] === '') {
        allowRequest = false;
      }
    });
    if (allowRequest) {
      addAddressTrigger(data)
        .unwrap().then(() => {
          setDataList((prev: any) => [...prev, data]);
        });
      setShow(false);
    }
  };

  if (isLoading || isFetching || addLoading) {
    return <Loader />;
  }
  return (
    <>
      <FormControl sx={{ width: '100%' }}>
        <FormLabel>Where to deliver your order?</FormLabel>
        <RadioGroup
          name="address"
          sx={{ p: 1 }}
          value={addressValue}
          onChange={handleChange}
        >
          {dataList && dataList.map((data, i: number) => (
            <FormControlLabel
              key={i}
              value={data.name}
              control={<Radio />}
              label={<ObjStrWrapper data={data} textOnly />}
            />
          ))}
        </RadioGroup>
        <Button onClick={() => setShow(true)}>Add address</Button>
        {show && (
          <PopupModal showModal={show} setShowModal={setShow} title="Add an address">
            <AddressWrapper action={actionHandler} />
          </PopupModal>
        )}
      </FormControl>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button variant="contained" onClick={gotoNext} sx={{ mt: 3, ml: 1 }}>Next</Button>
      </Box>
    </>
  );
};

export default AddressForm;
