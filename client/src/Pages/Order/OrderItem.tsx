import React, { FC } from 'react';
import {
  Accordion, AccordionDetails, AccordionSummary, Box, Paper, Stack,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const OrderItem: FC<any> = ({ order }) => {
  const deliveryStatus = order.dateDelivered ? `Delivered ${order.dateDelivered}` : 'Not delivered';
  const { products } = order;
  return (
    <Box sx={{ m: 1 }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Stack direction="row" justifyContent="space-between" sx={{ width: '90%' }}>
            <Typography variant="body1" component="p">{`Order #${order._id}`}</Typography>
            <Typography variant="body1" component="p">{deliveryStatus}</Typography>
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Product</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((prod: any) => {
                  const { product } = prod;
                  return (
                    <TableRow>
                      <TableCell>
                        <Stack direction="column">
                          <div style={{ maxWidth: '100px', height: '120px' }}>
                            <img
                              src={product.images[0]}
                              alt="first"
                              style={{
                                maxHeight: '100%',
                                maxWidth: '100%',
                              }}
                            />
                          </div>
                          <Typography variant="body1" component="p">{product.title}</Typography>
                        </Stack>
                      </TableCell>
                      <TableCell>{prod.qty}</TableCell>
                      <TableCell>{prod.pricePaid}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default OrderItem;
