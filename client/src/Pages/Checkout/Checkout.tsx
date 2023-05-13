/* eslint-disable max-len */
import React, { FC, useState } from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import { Navigate } from 'react-router-dom';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import { useAppSelector } from '../../redux/hooks';
import { userSelector } from '../../redux/slices/user/user.selector';
import { IAddress } from '../../redux/apis/User/user.interface';
import { IPayment } from './checkout.interface';

const steps = ['Shipping address', 'Payment details', 'Review your order'];

const Checkout: FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [ID, setID] = useState('');
  const [address, setAddress] = useState<IAddress>({
    name: '',
    address: '',
    city: '',
    state: '',
    pin: 0,
    country: '',
  });
  const [payment, setPayment] = useState({
    name: '',
    number: '',
    expiry: '',
    cvv: '',
  });
  const userData = useAppSelector(userSelector);

  const addressHandler = (obj: IAddress) => {
    setAddress(obj);
  };

  const paymentHandler = (obj: IPayment) => {
    setPayment(obj);
  };

  const handleNext = (id: string = '') => {
    if (id !== '') {
      setID(id);
    }
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  if (!userData.id) {
    return (
      <Navigate to="/login" />
    );
  }
  return (
    <div>
      <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length ? (
        <>
          <Typography variant="h5" gutterBottom>
            Thank you for your order!!
          </Typography>
          <Typography variant="subtitle1">
            {`Your order number is #${ID}. We have emailed your order confirmation, and will send you an update when your order has shipped.`}
          </Typography>
        </>
      ) : (
        <>
          {activeStep === 0 && <AddressForm addressHandler={addressHandler} handleNext={handleNext} />}
          {activeStep === 1 && <PaymentForm paymentHandler={paymentHandler} handleBack={handleBack} handleNext={handleNext} />}
          {activeStep === 2 && <Review data={{ address, payment }} handleBack={handleBack} handleNext={handleNext} />}
        </>
      )}
    </div>
  );
};

export default Checkout;
