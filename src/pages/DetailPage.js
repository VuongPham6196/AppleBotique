import { Fragment } from 'react';
import { useParams } from 'react-router-dom';

import ProductDetail from '../components/Products/ProductDetail/ProductDetail';
import RelatedProducts from '../components/Products/RelatedProducts/RelatedProducts';

const DetailPage = props => {
  return (
    <Fragment>
      <ProductDetail />
      <RelatedProducts />
    </Fragment>
  );
};

export default DetailPage;
