import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

const TopSelling: FC = () => {
  const { category } = useParams();
  return (
    <div>
      TopSelling -&nbsp;
      {category}
    </div>
  );
};

export default TopSelling;
