import React, { FC } from 'react';
import {
  Box, TextField, Typography, Paper,
} from '@mui/material';
import { IRadioSelectWrapper } from './ObjWrapper.interface';
import { IAddressReturn } from '../../redux/apis/User/user.interface';

const dataToString = (data: IAddressReturn, textOnly = false) => {
  let str = '';
  const keys = Object.keys(data);
  keys.forEach((key) => {
    if (key !== '_id' && key !== 'name') {
      if (textOnly) {
        str += `${data[key]}, `;
      } else {
        str += `${key.toUpperCase()}: ${data[key] as string}\n`;
      }
    }
  });
  return [str.substring(0, str.length - 2), keys.length];
};

const textOnlyProps = {
  p: 1,
  m: 1,
  backgroundColor: 'whitesmoke',
  border: '1px solid grey',
};

const RadioSelectWrapper: FC<IRadioSelectWrapper> = ({ data, textOnly }) => {
  const [stringData, maxRows] = dataToString(data, textOnly);
  return (
    <Box
      sx={textOnly ? textOnlyProps : { p: 1, mb: 2 }}
      component={Paper}
    >
      {textOnly
        ? (<Typography variant="body1">{stringData}</Typography>)
        : (
          <TextField
            label={data.name}
            multiline
            disabled
            fullWidth
            maxRows={maxRows}
            value={stringData}
            size="small"
            sx={{
              '& .MuiInputBase-input.Mui-disabled': {
                WebkitTextFillColor: '#000000',
              },
            }}
          />
        )}
    </Box>
  );
};

export default RadioSelectWrapper;
