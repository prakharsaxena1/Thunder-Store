import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box, Grid, Paper, Typography,
} from '@mui/material';
import ProductApis from '../../redux/apis/Product/product.api';
import Loader from '../../Components/Loader';
import ProductItem from '../../Components/Product';

const Search = () => {
  const { searchQuery } = useParams();
  const [searchTrigger, { data, isLoading, isFetching }] = ProductApis.useLazyGetProductsQuery();
  useEffect(() => {
    searchTrigger({
      searchQuery: (searchQuery as string),
    }, true);
  }, [searchQuery]);

  if (isLoading || isFetching || !data) {
    return <Loader />;
  }

  return (
    <Box sx={{ p: 2 }}>
      <Grid
        container
        gap={1}
        justifyContent="center"
        sx={{
          width: '90vw',
          margin: 'auto',
          height: '100%',
        }}
      >
        {data && data.total !== 0
          ? data.products.map((product, i: number) => (
            <Grid item xs={12} sm={12} md={9} lg={8} key={i} component={Paper}>
              <ProductItem product={product} />
            </Grid>
          ))
          : (
            <Typography variant="h2" sx={{ margin: '5rem auto' }}>Sorry, your search didn&apos;t return any results</Typography>
          )}
      </Grid>
    </Box>
  );
};

export default Search;
