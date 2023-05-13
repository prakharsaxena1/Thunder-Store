import React, { FC } from 'react';
import {
  Accordion, AccordionDetails, AccordionSummary, Box, Grid, Table,
  TableBody, TableCell, TableContainer, TableHead, TableRow, Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import dayjs from 'dayjs';
import { maskCardNumber } from '../../utils/helper';
import TitleBrandDisplay from '../../Components/Product/TitleBrandDisplay';
import ImageDisplay from '../../Components/Product/ImageDisplay';
import { IOrder } from '../../redux/apis/Order/orders.interface';
import { dateFormat } from '../../Constants/constants';
import { IProductList } from '../../redux/apis/Product/product.interface';

interface IOrderItem {
  order: IOrder;
}

const OrderItem: FC<IOrderItem> = ({ order }) => {
  const deliveryStatus = order.status === 'delivered' ? `Delivered ${dayjs(order.updatedAt).format(dateFormat.full)}` : 'Not delivered';
  const { products } = order;
  return (
    <Box sx={{ m: 1 }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12} md={5} lg={5}>
              <Typography variant="body2" component="p">{`Order #${order._id}`}</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={5} lg={5}>
              <Typography variant="body2" component="p">{`Ordered on ${dayjs(order.createdAt).format(dateFormat.full)}`}</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={2} lg={3}>
              <Typography variant="body2" component="p">{deliveryStatus}</Typography>
            </Grid>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" component="p" gutterBottom>
            {`Address: ${order.shipTo}`}
          </Typography>
          <Typography variant="body2" component="p" gutterBottom>
            {`Total: ${order.totalAmount}`}
          </Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell component="th" scope="row">Product</TableCell>
                  <TableCell align="center">Quantity</TableCell>
                  <TableCell align="center">Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((prod, i: number) => {
                  const product = (prod.product as IProductList);
                  return (
                    <TableRow key={i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell>
                        <Grid container spacing={2}>
                          <Grid item xs={12} sm={12} md={2} lg={2}>
                            <ImageDisplay image={product.images[0]} />
                          </Grid>
                          <Grid item xs={12} sm={12} md={10} lg={10}>
                            <TitleBrandDisplay productTitle={product.title} />
                          </Grid>
                        </Grid>
                      </TableCell>
                      <TableCell align="center">{prod.qty}</TableCell>
                      <TableCell align="center">{prod.pricePaid}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <Typography variant="body2" component="p" gutterBottom>
            {`Paid by ${order.payment.cardName} with card ${maskCardNumber(order.payment.cardNumber.toString())}`}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default OrderItem;
