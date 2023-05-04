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
import { colors } from '../../Constants/constants';
import UserApis from '../../redux/apis/User/user.api';
// import Loader from '../../Components/Loader';

const ProductDetails: FC<any> = ({ product }) => {
  const dispatch = useAppDispatch();
  const cartData = useAppSelector(cartSelector);
  const [CartTrigger] = UserApis.useAddItemToCartMutation();
  const addToCart = () => {
    CartTrigger({
      productId: product._id,
      operation: 'add',
    });
    dispatch(addItemToCart({
      productID: product._id,
      title: product.title,
      price: product.price,
      discount: product.discount,
      image: product.images[0],
      stock: product.stock,
    }));
  };

  // if (isLoading) {
  //   return <Loader />;
  // }
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
                <Typography variant="body1" sx={{ color: colors.outOfStock }}>
                  Out of stock
                </Typography>
              )
              : (
                <PriceDisplay price={product.price} discount={product.discount} />
              )}
            {product.stock <= 10 && product.stock > 0 && (
              <Typography variant="body2" sx={{ color: colors.stockLeft }}>
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
