/* eslint-disable react/jsx-no-useless-fragment */
import React, { FC } from 'react';
import {
  Typography, IconButton, Grid, Paper,
} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import styles from './cart.module.css';
import { cartSelector } from '../../redux/slices/cart/cart.selector';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { decrementQuantity, incrementQuantity } from '../../redux/slices/cart/cartSlice';
import { getPrice } from '../../utils/helper';
import UserApis from '../../redux/apis/User/user.api';

const CartItem: FC<any> = ({ data }) => {
  const cartData = useAppSelector(cartSelector);
  const dispatch = useAppDispatch();
  const [CartTrigger] = UserApis.useAddItemToCartMutation();
  const handleQtyIncrement = () => {
    CartTrigger({
      productId: data.productID,
      operation: 'add',
    });
    dispatch(incrementQuantity(data));
  };
  const handleQtyDecrement = () => {
    CartTrigger({
      productId: data.productID,
      operation: 'delete',
    });
    dispatch(decrementQuantity(data));
  };
  return (
    <Paper sx={{ p: 1, m: 1 }}>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item sm={3} md={2} lg={2}>
          <div style={{ width: '90px', height: '120px', margin: 'auto' }}>
            <img src={data.image} alt="first" style={{ maxHeight: '100%', width: '100%' }} />
          </div>
        </Grid>
        {/* Text */}
        <Grid item sm={8} md={6} lg={7}>
          <Typography
            variant="h6"
            component="h6"
            align="center"
          >
            {data.title}
          </Typography>
        </Grid>
        {/* Price */}
        <Grid item sm={3} md={1} lg={1}>
          <Typography
            variant="h6"
            component="h6"
            sx={{ fontWeight: 700 }}
            align="center"
          >
            {getPrice(data.price, data.discount)}
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
            <input name="quantity" type="text" className={styles.quantity__input} value={cartData.cartId[data.productID]} readOnly />
            <IconButton
              className={styles.quantity__plus}
              onClick={handleQtyIncrement}
              disabled={cartData.cartId[data.productID] + 1 > data.stock}
            >
              <AddCircleOutlineIcon />
            </IconButton>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CartItem;
