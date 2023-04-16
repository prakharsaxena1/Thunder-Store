/* eslint-disable max-len */
import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Stack, Grid, Typography, Button,
} from '@mui/material';
import ProductApis from '../../redux/apis/Product/product.api';
import Loader from '../../Components/Loader';
import ImageSwiper from '../../Components/ImageSwiper';
import PriceDisplay from '../../Components/Product/PriceDisplay';
import RatingWrapper from '../../Components/RatingWrapper';
import Review from '../../Components/Review';

const reviewData = [
  {
    username: 'Harry Potter',
    rating: 2.4,
    date: '17 January 2023',
    review: {
      title: 'Broom stick ok ok....',
      description: 'The broom stick ok but not realy that fast, I remember one time I had to enchant it to make it fast, got me desquilified. The broom stick ok but not realy that fast, I remember one time I had to enchant it to make it fast, got me desquilified. The broom stick ok but not realy that fast, I remember one time I had to enchant it to make it fast, got me desquilified.The broom stick ok but not realy that fast, I remember one time I had to enchant it to make it fast, got me desquilified.The broom stick ok but not realy that fast, I remember one time I had to enchant it to make it fast, got me desquilified.The broom stick ok but not realy that fast, I remember one time I had to enchant it to make it fast, got me desquilified.The broom stick ok but not realy that fast, I remember one time I had to enchant it to make it fast, got me desquilified.The broom stick ok but not realy that fast, I remember one time I had to enchant it to make it fast, got me desquilified.The broom stick ok but not realy that fast, I remember one time I had to enchant it to make it fast, got me desquilified. The broom stick ok but not realy that fast, I remember one time I had to enchant it to make it fast, got me desquilified. The broom stick ok but not realy that fast, I remember one time I had to enchant it to make it fast, got me desquilified.The broom stick ok but not realy that fast, I remember one time I had to enchant it to make it fast, got me desquilified.The broom stick ok but not realy that fast, I remember one time I had to enchant it to make it fast, got me desquilified.The broom stick ok but not realy that fast, I remember one time I had to enchant it to make it fast, got me desquilified.The broom stick ok but not realy that fast, I remember one time I had to enchant it to make it fast, got me desquilified.The broom stick ok but not realy that fast, I remember one time I had to enchant it to make it fast, got me desquilified.The broom stick ok but not realy that fast, I remember one time I had to enchant it to make it fast, got me desquilified. The broom stick ok but not realy that fast, I remember one time I had to enchant it to make it fast, got me desquilified. The broom stick ok but not realy that fast, I remember one time I had to enchant it to make it fast, got me desquilified.The broom stick ok but not realy that fast, I remember one time I had to enchant it to make it fast, got me desquilified.The broom stick ok but not realy that fast, I remember one time I had to enchant it to make it fast, got me desquilified.The broom stick ok but not realy that fast, I remember one time I had to enchant it to make it fast, got me desquilified.The broom stick ok but not realy that fast, I remember one time I had to enchant it to make it fast, got me desquilified.The broom stick ok but not realy that fast, I remember one time I had to enchant it to make it fast, got me desquilified.The broom stick ok but not realy that fast, I remember one time I had to enchant it to make it fast, got me desquilified. The broom stick ok but not realy that fast, I remember one time I had to enchant it to make it fast, got me desquilified. The broom stick ok but not realy that fast, I remember one time I had to enchant it to make it fast, got me desquilified.The broom stick ok but not realy that fast, I remember one time I had to enchant it to make it fast, got me desquilified.The broom stick ok but not realy that fast, I remember one time I had to enchant it to make it fast, got me desquilified.The broom stick ok but not realy that fast, I remember one time I had to enchant it to make it fast, got me desquilified.The broom stick ok but not realy that fast, I remember one time I had to enchant it to make it fast, got me desquilified.The broom stick ok but not realy that fast, I remember one time I had to enchant it to make it fast, got me desquilified.The broom stick ok but not realy that fast, I remember one time I had to enchant it to make it fast, got me desquilified. The broom stick ok but not realy that fast, I remember one time I had to enchant it to make it fast, got me desquilified. The broom stick ok but not realy that fast, I remember one time I had to enchant it to make it fast, got me desquilified.The broom stick ok but not realy that fast, I remember one time I had to enchant it to make it fast, got me desquilified.The broom stick ok but not realy that fast, I remember one time I had to enchant it to make it fast, got me desquilified.The broom stick ok but not realy that fast, I remember one time I had to enchant it to make it fast, got me desquilified.The broom stick ok but not realy that fast, I remember one time I had to enchant it to make it fast, got me desquilified.The broom stick ok but not realy that fast, I remember one time I had to enchant it to make it fast, got me desquilified.',
    },
  },
  {
    username: 'Tom Riddle',
    rating: 5,
    date: '27 January 2023',
    review: {
      title: 'Broom is GOAT',
      description: 'Harry is stupid and he is saying this only because I was using this broom stick.',
    },
  },
];

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
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={10} sm={6} md={5}>
          <ImageSwiper items={data?.product?.images || []} />
        </Grid>
        <Grid item xs={10} sm={6} md={7}>
          <Stack direction="column" spacing={1}>
            <Typography variant="h5">{data?.product?.title}</Typography>
            <Stack direction="row" alignItems="center" spacing={1}>
              <RatingWrapper rateValue={data?.product?.rating.rate} />
              <Typography variant="body2">{`(${data?.product?.rating.count})`}</Typography>
            </Stack>
            <Stack direction="row" spacing={2} justifyContent="flex-start" alignItems="center">
              <PriceDisplay price={data?.product?.price} discount={data?.product?.discount} />
              <Button variant="contained" color="secondary">Add to cart</Button>
            </Stack>
            <Typography variant="body1">{data?.product?.description}</Typography>
          </Stack>
        </Grid>
      </Grid>
      <Stack direction="column" spacing={1} alignItems="stretch">
        {reviewData.map((review: any, i: number) => (
          <Review data={review} key={i} />
        ))}
      </Stack>
    </Stack>
  );
};

export default Product;
