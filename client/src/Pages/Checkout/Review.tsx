import React, { FC, useState } from 'react';
import {
  Button, Typography, List, ListItem, ListItemText, Grid, Box, Stack,
} from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { cartSelector } from '../../redux/slices/cart/cart.selector';
import OrderApis from '../../redux/apis/Order/orders.api';
import Loader from '../../Components/Loader';
import { emptyCart } from '../../redux/slices/cart/cartSlice';
import { getPrice, maskCardNumber } from '../../utils/helper';
import FailedOrder from './FailedOrder';
import PopupModal from '../../Components/PopupModal';
import { colors } from '../../Constants/constants';
import { splitProductTitle } from '../../Components/Product/TitleBrandDisplay';
import { IErrorProductResponse } from '../../redux/apis/Order/orders.interface';

const getAddressString = (addressObj: Record<string, string>) => {
  return `${addressObj?.name},\n${addressObj?.address},\n${addressObj?.city}, ${addressObj?.state}, ${addressObj?.country}\n${addressObj?.pin}`;
};

const SecondaryInfo: FC<any> = ({ cartId, product }) => (
  <Stack spacing={2} direction="row">
    <Typography variant="caption">{`Qty: ${cartId[product.productID]}`}</Typography>
    <Typography variant="caption">{`Discount: ${product.discount}%`}</Typography>
  </Stack>
);

const Review: FC<any> = ({ data, handleBack, handleNext }) => {
  const { address, payment } = data;
  const [showModal, setShowModal] = useState(false);
  const [errorItems, setErrorItems] = useState<IErrorProductResponse[]>([]);
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
      .unwrap().then((res) => {
        if (res.success) {
          dispatch(emptyCart());
          handleNext(res.order!._id);
        } else {
          setShowModal(true);
          if (res.data) {
            setErrorItems(res.data);
          }
        }
      });
  };
  return (
    <>
      {isLoading && <Loader />}
      <Box>
        <Typography variant="h6" gutterBottom>Order summary</Typography>
        <List disablePadding>
          {cartData.cart.map((product) => (
            <ListItem key={product.title} sx={{ py: 1, px: 0 }}>
              <ListItemText
                primary={splitProductTitle(product.title)[0]}
                secondary={<SecondaryInfo cartId={cartData.cartId} product={product} />}
              />
              <Typography variant="body2">{cartData.cartId[product.productID] * product.price}</Typography>
            </ListItem>
          ))}
          <ListItem sx={{ border: `1px solid ${colors.caption}`, backgroundColor: colors.primary }}>
            <ListItemText primary="Price to pay" />
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
      </Box>
      {showModal && (
        <PopupModal showModal={showModal} setShowModal={setShowModal} title="Order failed">
          <FailedOrder errorItems={errorItems} />
        </PopupModal>
      )}
    </>
  );
};

export default Review;
