/* eslint-disable max-len */
import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Stack } from '@mui/material';
import ProductApis from '../../redux/apis/Product/product.api';
import Loader from '../../Components/Loader';
import ProductDetails from './ProductDetails';
import ReviewDetails from './ReviewDetails';
import ReviewApis from '../../redux/apis/Review/review.api';

const Product: FC = () => {
  const { id } = useParams();
  const [GetReviewTrigger, { data: reviewData, isLoading: reviewLoading, isFetching: reviewFetch }] = ReviewApis.useLazyGetAllReviewQuery();
  const [ProductTrigger, { data, isLoading, isFetching }] = ProductApis.useLazyGetProductWithIDQuery();
  useEffect(() => {
    ProductTrigger({ id }, true);
    GetReviewTrigger({ productID: id }, true);
  }, [id]);
  if (reviewLoading || reviewFetch || isLoading || isFetching || !data) {
    return <Loader />;
  }
  return (
    <Stack spacing={3} sx={{ p: '1.5rem' }}>
      {/* PRODUCT DETAILS */}
      <ProductDetails product={data?.product} />
      {/* REVIEWS */}
      <ReviewDetails reviews={reviewData.reviews || []} canReview={reviewData.canReview || true} />
    </Stack>
  );
};

export default Product;
