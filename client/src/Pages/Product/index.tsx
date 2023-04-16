/* eslint-disable max-len */
import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Stack, Grid, Typography, Rating,
} from '@mui/material';
import ProductApis from '../../redux/apis/Product/product.api';
import Loader from '../../Components/Loader';
import ImageSwiper from '../../Components/ImageSwiper';
import PriceDisplay from '../../Components/Product/PriceDisplay';

const Product: FC = () => {
  const { id } = useParams();
  const [ProductTrigger, { data, isLoading, isFetching }] = ProductApis.useLazyGetProductWithIDQuery();
  useEffect(() => {
    ProductTrigger({
      id,
    }, true);
  }, [id]);
  if (isLoading || isFetching) {
    return <Loader />;
  }
  return (
    <Stack spacing={3} sx={{ p: '1.5rem' }}>
      <Grid container>
        <Grid item xs={10} sm={6}>
          <ImageSwiper items={data?.product?.images || []} />
        </Grid>
        <Grid item xs={10} sm={6}>
          <Stack direction="column" spacing={1}>
            <Typography variant="h5">{data?.product?.title}</Typography>
            <Rating value={data?.product?.rating.rate} readOnly />
            <PriceDisplay price={data?.product?.price} discount={data?.product?.discount} />
            <Typography variant="body1">{data?.product?.description}</Typography>
          </Stack>
        </Grid>
      </Grid>
      <Stack>
        Reviews
      </Stack>
    </Stack>
  );
};

export default Product;
