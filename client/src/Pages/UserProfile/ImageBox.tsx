import React, { FC } from 'react';
import {
  Box, Stack, Typography,
} from '@mui/material';

const imgWrapperStyles = {
  height: '15vh',
  width: '15vh',
  borderRadius: '50%',
  overflow: 'hidden',
  border: '0.5rem solid #F2F1EF',
};

const ImageBox: FC<any> = ({ photo }) => {
  return (
    <Box
      sx={{
        p: 2,
        backgroundColor: '#D2D7D3',
      }}
    >
      <Stack
        direction="column"
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{ width: 'fit-content', m: 'auto' }}
      >
        <Box sx={imgWrapperStyles}>
          <img
            src={photo}
            alt=""
            style={{
              width: '100%',
              height: '100%',
            }}
          />
        </Box>
        <Typography variant="h5">Username</Typography>
      </Stack>
    </Box>
  );
};

export default ImageBox;
