import React, { FC } from 'react';
import {
  Box, Button, Grid, Paper, Step, StepContent, StepLabel, Stepper, Typography,
} from '@mui/material';
import ImageSwiper from '../../Components/ImageSwiper';

const items = [
  {
    image: '/imgs/gadgetGames.svg',
    text: 'Gadgets, games, and more!',
    imgAlign: 'left',
  },
  {
    image: '/imgs/books.svg',
    text: 'Tech, games, books - all here!',
    imgAlign: 'right',
  },
  {
    image: '/imgs/endless.svg',
    text: 'Endless possibilities, just a click away!',
    imgAlign: 'left',
  },
  {
    image: '/imgs/window.svg',
    text: 'Embrace the future of online shopping!',
    imgAlign: 'right',
  },
];

const steps = [
  {
    label: 'Add the product to your cart',
    description: 'Browse through the available products, and select the desired product by adding it to your cart. You can also apply any applicable discounts or promotional codes at this stage',
  },
  {
    label: 'Proceed to Checkout',
    description: 'Click on the checkout button to proceed to the checkout page. Enter your shipping address, contact information, and payment details. Review the information for accuracy.',
  },
  {
    label: 'Shipment and Tracking',
    description: 'Once your order is processed, we will ship the product to your provided shipping address. You will receive a tracking number to track the shipment\'s progress.',
  },
  {
    label: 'Delivery',
    description: 'The shipping carrier will deliver the product to your doorstep and will call to inform you about the delivery. Make sure to be available to receive the package or provide delivery instructions if needed.',
  },
  {
    label: 'Enjoy Your Purchase',
    description: ' If you are satisfied with the product, you can now enjoy your purchase!',
  },
];

const ProjectWorking: FC = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ padding: '1rem' }}>
      <Typography
        align="center"
        variant="h2"
        gutterBottom
        sx={{ mt: 3 }}
      >
        How we work?
      </Typography>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={10} md={5}>
          <div style={{ height: '100%' }}>
            <img
              src="/imgs/how.svg"
              alt="how"
              style={{
                maxWidth: '100%',
                maxHeight: '400px',
              }}
            />
          </div>
        </Grid>
        <Grid item xs={10} md={5}>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
              <Step key={step.label}>
                <StepLabel>
                  <Typography variant="h6" component="h6">{step.label}</Typography>
                </StepLabel>
                <StepContent>
                  <Typography>{step.description}</Typography>
                  <Box sx={{ mb: 2 }}>
                    <div>
                      <Button
                        variant="contained"
                        onClick={handleNext}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        {index === steps.length - 1 ? 'Finish' : 'Continue'}
                      </Button>
                      <Button
                        disabled={index === 0}
                        onClick={handleBack}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        Back
                      </Button>
                    </div>
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length && (
            <Paper square elevation={0} sx={{ p: 3 }}>
              <Typography>Wanna go again?</Typography>
              <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                Reset
              </Button>
            </Paper>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

const Home: FC = () => {
  return (
    <div>
      <ImageSwiper items={items} swiperType="cover" />
      <ProjectWorking />
    </div>
  );
};

export default Home;
