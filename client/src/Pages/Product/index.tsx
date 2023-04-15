/* eslint-disable max-len */
import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductApis from '../../redux/apis/Product/product.api';
import Loader from '../../Components/Loader';

const Product: FC = () => {
  const { id } = useParams();
  const [ProductTrigger, { data, isLoading, isFetching }] = ProductApis.useLazyGetProductWithIDQuery();
  useEffect(() => {
    ProductTrigger({
      id,
    }, true);
  }, [id]);
  if (isLoading || isFetching) {
    return <Loader />;
  }
  return (
    <div>
      {JSON.stringify(data)}
    </div>
  );
};

export default Product;
