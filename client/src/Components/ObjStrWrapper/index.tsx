import React, { FC } from 'react';
import { Box, TextField } from '@mui/material';

const dataToString = (data: any) => {
  let str = '';
  const keys = Object.keys(data);
  keys.forEach((key: string) => {
    if (key !== '_id' && key !== 'name') {
      str += `${key.toUpperCase()}: ${data[key]}\n`;
    }
  });
  return [str.trimEnd(), keys.length];
};

const RadioSelectWrapper: FC<any> = ({ data }) => {
  const [stringData, maxRows] = dataToString(data);
  return (
    <Box sx={{ p: 1 }}>
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
          minWidth: '300px',
        }}
      />
    </Box>
  );
};

export default RadioSelectWrapper;
