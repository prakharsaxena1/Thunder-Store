/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Grid, Typography,
} from '@mui/material';
import ProductApis from '../../redux/apis/Product/product.api';
import Loader from '../../Components/Loader';
import ProductItem from '../../Components/Product';
// import StarBorderIcon from '@mui/icons-material/StarBorder';
// import StarHalfIcon from '@mui/icons-material/StarHalf';

const Search = () => {
  const { searchQuery } = useParams();
  const [searchTrigger, { data, isLoading, isFetching }] = ProductApis.useLazyGetProductsQuery();
  useEffect(() => {
    searchTrigger({
      searchQuery,
    }, true);
  }, [searchQuery]);

  if (isLoading || isFetching) {
    return <Loader />;
  }

  return (
    <Grid
      container
      spacing={2}
      sx={{
        width: '90vw',
        margin: 'auto',
        height: '100%',
      }}
    >
      {data && data.total !== 0
        ? data.products.map((product: any, i: number) => (
          <Grid item xs={12} sm={12} md={6} lg={6} key={i}>
            <ProductItem product={product} />
          </Grid>
        ))
        : (
          <Typography>Sorry, your search didn&apos;t return any results</Typography>
        )}
    </Grid>
  );
};

export default Search;
