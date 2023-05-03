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
  const addToCart = () => dispatch(addItemToCart({
    productID: product._id,
    title: product.title,
    price: product.price,
    discount: product.discount,
    image: product.images[0],
    stock: product.stock,
  }));
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
          <Stack spacing={1} justifyContent="flex-start" alignItems="flex-start">
            {product.stock === 0
              ? (
                <Typography variant="body1" sx={{ color: '#CF000F' }}>
                  Out of stock
                </Typography>
              )
              : (
                <PriceDisplay price={product.price} discount={product.discount} />
              )}
            {product.stock <= 10 && product.stock > 0 && (
              <Typography variant="body2" sx={{ color: '#FFA400' }}>
                {`Only ${product.stock} left in stock!`}
              </Typography>
            )}
            <Button
              variant="contained"
              color="warning"
              disabled={Boolean(cartData.cartId[product._id]) || product.stock === 0}
              onClick={addToCart}
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
