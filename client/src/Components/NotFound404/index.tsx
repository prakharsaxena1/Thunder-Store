import React from 'react'
import { Box, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import AppBox from '../../Comtainers/AppBox';

const NotFound404 = () => {
  return (
    <AppBox>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={3}
      >
        <Box>
          <Typography
            variant='h1'
            component='h1'
            sx={{
              fontSize: 180,
            }}
          >404</Typography>
        </Box>
        <Box>
          <img src="./404_lost.png" alt="lost404" width="500px" />
        </Box>
        <Box>
          <Typography variant='h4' component='h4' align='center'>Looks like you are lost in space captain</Typography>
          <Typography variant='h4' component='h4' align='center'>Here, let me point you to the <Link to="/">home</Link> page</Typography>
        </Box>
      </Stack>
    </AppBox>
  )
}

export default NotFound404