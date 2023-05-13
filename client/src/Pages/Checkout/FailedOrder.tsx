import React, { FC } from 'react';
import { Typography } from '@mui/material';
import ProductItem from '../../Components/Product';
import { IErrorProductResponse } from '../../redux/apis/Order/orders.interface';

interface IFailedOrder {
  errorItems: IErrorProductResponse[];
}

const FailedOrder: FC<IFailedOrder> = ({ errorItems }) => {
  return (
    <>
      <Typography variant="body1">Following are the items that not available in the requested quantity. Remove them and place the order again</Typography>
      {errorItems.map((item, index: number) => (
        <ProductItem product={item} key={index} />
      ))}
    </>
  );
};

export default FailedOrder;
