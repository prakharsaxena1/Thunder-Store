/* eslint-disable react/jsx-no-useless-fragment */
import React, { FC } from 'react';
import {
  Typography, IconButton, Grid, Paper, Fade,
} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import styles from './cart.module.css';
import { cartSelector } from '../../redux/slices/cart/cart.selector';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { CartI, decrementQuantity, incrementQuantity } from '../../redux/slices/cart/cartSlice';
import { getPrice } from '../../utils/helper';
import UserApis from '../../redux/apis/User/user.api';
import TitleBrandDisplay from '../../Components/Product/TitleBrandDisplay';
import ImageDisplay from '../../Components/Product/ImageDisplay';
import { userSelector } from '../../redux/slices/user/user.selector';

interface ICartItem {
  item: CartI;
}

const CartItem: FC<ICartItem> = ({ item }) => {
  const cartData = useAppSelector(cartSelector);
  const userData = useAppSelector(userSelector);
  const dispatch = useAppDispatch();
  const [CartTrigger] = UserApis.useAddItemToCartMutation();
  const handleQtyIncrement = () => {
    if (userData.id) {
      CartTrigger({
        productId: item.productID,
        operation: 'add',
      });
    }
    dispatch(incrementQuantity(item));
  };
  const handleQtyDecrement = () => {
    if (userData.id) {
      CartTrigger({
        productId: item.productID,
        operation: 'delete',
      });
    }
    dispatch(decrementQuantity(item));
  };
  return (
    <Fade in={Boolean(cartData.cartId[item.productID])}>
      <Paper sx={{ p: 1, m: 1 }}>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item sm={3} md={2} lg={2}>
            <ImageDisplay image={item.image} />
          </Grid>
          {/* Text */}
          <Grid item sm={8} md={6} lg={7}>
            <TitleBrandDisplay productTitle={item.title} />
          </Grid>
          {/* Price */}
          <Grid item sm={3} md={1} lg={1}>
            <Typography
              variant="h6"
              component="h6"
              sx={{ fontWeight: 700 }}
              align="center"
            >
              {getPrice(item.price, item.discount)}
            </Typography>
          </Grid>
          {/* Qty */}
          <Grid item sm={3} md={2.5} lg={2}>
            <div className={styles.quantity}>
              <IconButton
                className={styles.quantity__minus}
                onClick={handleQtyDecrement}
              >
                <RemoveCircleOutlineIcon />
              </IconButton>
              <input name="quantity" type="text" className={styles.quantity__input} value={cartData.cartId[item.productID]} readOnly />
              <IconButton
                className={styles.quantity__plus}
                onClick={handleQtyIncrement}
                disabled={cartData.cartId[item.productID] + 1 > item.stock}
              >
                <AddCircleOutlineIcon />
              </IconButton>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </Fade>
  );
};

export default CartItem;
