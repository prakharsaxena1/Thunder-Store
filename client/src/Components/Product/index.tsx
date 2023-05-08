import React, { FC } from 'react';
import {
  Stack, Typography, Grid,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PriceDisplay from './PriceDisplay';
import RatingWrapper from '../RatingWrapper';

const imgStyles = {
  maxHeight: '100%',
  maxWidth: '100%',
};

const ProductItem: FC<any> = ({ product }) => {
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
        border: '1px solid #D1D1D1',
        borderRadius: '0.5rem',
        cursor: 'pointer',
      }}
      onClick={() => navigate(`/product/${product._id}`)}
    >
      <Grid container>
        <Grid item xs={3} sm={3} md={3} lg={2}>
          <div style={{ maxWidth: '120px', height: '180px' }}>
            <img src={image} alt="first" style={imgStyles} />
          </div>
        </Grid>
        <Grid item xs={9} sm={9} md={9} lg={10}>
          <Stack direction="column" spacing={1}>
            <Typography variant="body1">{product.title}</Typography>
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
