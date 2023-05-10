import React, { FC } from 'react';
import { Typography } from '@mui/material';
import ProductItem from '../../Components/Product';

const FailedOrder: FC<any> = ({ errorItems }) => {
  return (
    <>
      <Typography variant="body1">Following are the items that not available in the requested quantity. Remove them and place the order again</Typography>
      {errorItems.map((item: any, index: number) => (
        <ProductItem product={item} key={index} />
      ))}
    </>
  );
};

export default FailedOrder;
