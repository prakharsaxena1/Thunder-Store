/* eslint-disable max-len */
import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Stack } from '@mui/material';
import ProductApis from '../../redux/apis/Product/product.api';
import Loader from '../../Components/Loader';
import ProductDetails from './ProductDetails';
import ReviewDetails from './ReviewDetails';

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
      {/* PRODUCT DETAILS */}
      <ProductDetails product={data?.product} />
      {/* REVIEWS */}
      <ReviewDetails reviews={reviewData} />
    </Stack>
  );
};

export default Product;
