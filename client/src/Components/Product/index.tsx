import React, { FC } from 'react';
import {
  Stack, Typography, Grid,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PriceDisplay from './PriceDisplay';
import RatingWrapper from '../RatingWrapper';
import TitleBrandDisplay from './TitleBrandDisplay';
import ImageDisplay from './ImageDisplay';
import { IProductList } from '../../redux/apis/Product/product.interface';
import { IErrorProductResponse } from '../../redux/apis/Order/orders.interface';

interface IProductItem {
  product: IProductList | IErrorProductResponse;
}

const ProductItem: FC<IProductItem> = ({ product }) => {
  const image = product.images.length !== 0 ? product.images[0] : '/imgs/No-Image-Placeholder.png';
  const navigate = useNavigate();
  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      spacing={2}
      sx={{
        overflow: 'hidden',
        borderRadius: '0.5rem',
        cursor: 'pointer',
      }}
      onClick={() => navigate(`/product/${product._id}`)}
    >
      <Grid container spacing={2}>
        <Grid item xs={3} sm={3} md={3} lg={2}>
          <ImageDisplay image={image} />
        </Grid>
        <Grid item xs={9} sm={9} md={9} lg={10}>
          <Stack direction="column" spacing={1}>
            <TitleBrandDisplay productTitle={product.title} />
            <Stack direction="row" alignItems="center" spacing={1}>
              <RatingWrapper rateValue={product.rating.rate / product.rating.count} />
              <Typography variant="body2">{`(${product.rating.count})`}</Typography>
            </Stack>
            <PriceDisplay price={product.price} discount={product.discount} />
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default ProductItem;
