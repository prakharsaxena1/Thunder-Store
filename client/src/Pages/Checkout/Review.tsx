import React, { FC } from 'react';
import {
  Button, Typography, List, ListItem, ListItemText, Grid, Box,
} from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { cartSelector } from '../../redux/slices/cart/cart.selector';
import OrderApis from '../../redux/apis/Order/orders.api';
import Loader from '../../Components/Loader';
import { emptyCart } from '../../redux/slices/cart/cartSlice';
import { getPrice, maskCardNumber } from '../../utils/helper';

const getAddressString = (addressObj: Record<string, string>) => {
  return `${addressObj?.name},\n${addressObj?.address},\n${addressObj?.city}, ${addressObj?.state}, ${addressObj?.country}\n${addressObj?.pin}`;
};

const Review: FC<any> = ({ data, handleBack, handleNext }) => {
  const { address, payment } = data;
  const cartData = useAppSelector(cartSelector);
  const dispatch = useAppDispatch();
  const [orderTrigger, { isLoading }] = OrderApis.useAddOrderMutation();
  const placeOrder = () => {
    const uniqueKeys = Object.keys(cartData.cartId);
    const products = uniqueKeys.map((key) => {
      const seletedProduct = cartData.cart.find((item) => item.productID === key);
      return {
        product: key,
        pricePaid: getPrice(seletedProduct?.price || 0, seletedProduct?.discount || 0),
        qty: cartData.cartId[key],
      };
    });
    const order = {
      shipTo: getAddressString(address),
      products,
      payment: {
        cardName: payment.name,
        cardNumber: payment.number,
      },
      totalAmount: cartData.cartValue,
    };
    orderTrigger(order)
      .unwrap().then(() => {
        dispatch(emptyCart());
        handleNext();
      });
  };
  return (
    <>
      {isLoading && <Loader />}
      <Typography variant="h6" gutterBottom>Order summary</Typography>
      <List disablePadding>
        {cartData.cart.map((product) => (
          <ListItem key={product.title} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.title} secondary={`Qty: ${cartData.cartId[product.productID]}`} />
            <Typography variant="body2">{cartData.cartId[product.productID] * product.price}</Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {`Rs ${cartData.cartValue}`}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>{address.name.toUpperCase()}</Typography>
          <Typography gutterBottom>{getAddressString(address)}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payment && (
              <div>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{maskCardNumber(payment.number)}</Typography>
                </Grid>
              </div>
            )}
          </Grid>
        </Grid>
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>Back</Button>
        <Button variant="contained" onClick={placeOrder} sx={{ mt: 3, ml: 1 }}>Place Order</Button>
      </Box>
    </>
  );
};

export default Review;
