/* eslint-disable max-len */
import React, { FC } from 'react';
import {
  Stack, Grid, Typography, Button,
} from '@mui/material';
import ImageSwiper from '../../Components/ImageSwiper';
import PriceDisplay from '../../Components/Product/PriceDisplay';
import RatingWrapper from '../../Components/RatingWrapper';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { addItemToCart } from '../../redux/slices/cart/cartSlice';
import { cartSelector } from '../../redux/slices/cart/cart.selector';

const ProductDetails: FC<any> = ({ product }) => {
  const dispatch = useAppDispatch();
  const cartData = useAppSelector(cartSelector);
  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={10} sm={6} md={5}>
        <ImageSwiper items={product.images || []} />
      </Grid>
      <Grid item xs={10} sm={6} md={7}>
        <Stack direction="column" spacing={1}>
          <Typography variant="h5">{product.title}</Typography>
          <Stack direction="row" alignItems="center" spacing={1}>
            <RatingWrapper rateValue={product.rating.rate} />
            <Typography variant="body2">{`(${product.rating.count})`}</Typography>
          </Stack>
          <Stack direction="row" spacing={2} justifyContent="flex-start" alignItems="center">
            <PriceDisplay price={product.price} discount={product.discount} />
            <Button
              variant="contained"
              color="warning"
              size="small"
              disabled={cartData.cartId[product.productID] >= 1}
              onClick={() => dispatch(addItemToCart({
                productID: product.productID,
                title: product.title,
                price: product.price,
                discount: product.discount,
                image: product.image,
              }))}
            >
              Add to cart
            </Button>
          </Stack>
          <Typography variant="body1">{product.description}</Typography>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default ProductDetails;
