import React, { FC } from 'react'
import { Box } from '@mui/material';
import Navbar from '../../Components/Navbar';

type IAppBox = {
  children: JSX.Element | JSX.Element[],
}


const AppBox: FC<IAppBox> = ({ children }) => {
  return (
    <Box sx={{
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
      padding: '0px',
      margin: '0px',
    }}>
      <Navbar />
      {children}
    </Box>
  )
}

export default AppBox