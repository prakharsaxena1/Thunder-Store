/* eslint-disable max-len */
import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Stack } from '@mui/material';
import ProductApis from '../../redux/apis/Product/product.api';
import Loader from '../../Components/Loader';
import ProductDetails from './ProductDetails';
import ReviewDetails from './ReviewDetails';

const Product: FC = () => {
  const { id } = useParams();
  const [ProductTrigger, { data, isLoading, isFetching }] = ProductApis.useLazyGetProductWithIDQuery();
  useEffect(() => {
    ProductTrigger({
      id,
    }, true);
  }, [id]);
  if (isLoading || isFetching || !data) {
    return <Loader />;
  }
  return (
    <Stack spacing={3} sx={{ p: '1.5rem' }}>
      {/* PRODUCT DETAILS */}
      <ProductDetails product={data?.product} />
      {/* REVIEWS */}
      <ReviewDetails reviews={[]} />
    </Stack>
  );
};

export default Product;
