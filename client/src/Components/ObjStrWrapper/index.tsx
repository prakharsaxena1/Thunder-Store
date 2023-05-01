import React, { FC } from 'react';
import { Box, TextField } from '@mui/material';

const dataToString = (data: any) => {
  let str = '';
  const keys = Object.keys(data);
  keys.forEach((key: string) => {
    if (key !== '_id') {
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
      />
    </Box>
  );
};

export default RadioSelectWrapper;
