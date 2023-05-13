import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Stack, Box } from '@mui/material';
import ProductApis from '../../redux/apis/Product/product.api';
import Loader from '../../Components/Loader';
import ProductDetails from './ProductDetails';
import ReviewDetails from './ReviewDetails';
import ReviewApis from '../../redux/apis/Review/review.api';

const Product: FC = () => {
  const { id } = useParams();
  const [GetReviewTrigger,
    { data: reviewData, isLoading: reviewLoading, isFetching: reviewFetch },
  ] = ReviewApis.useLazyGetAllReviewQuery();
  const [ProductTrigger,
    { data, isLoading, isFetching },
  ] = ProductApis.useLazyGetProductWithIDQuery();

  useEffect(() => {
    ProductTrigger({ id: (id as string) }, true);
    GetReviewTrigger({ productID: (id as string) }, true);
  }, [id]);

  if (reviewLoading || reviewFetch || isLoading || isFetching || !data || !reviewData) {
    return <Loader />;
  }
  return (
    <Box
      sx={{
        p: 2,
        width: { sm: '90%', md: '80%', lg: '70%' },
        m: '1rem auto',
      }}
    >
      <Stack spacing={3}>
        {/* PRODUCT DETAILS */}
        <ProductDetails product={data.product} />
        {/* REVIEWS */}
        <ReviewDetails reviews={reviewData.reviews || []} />
      </Stack>
    </Box>
  );
};

export default Product;
