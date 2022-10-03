import { Fragment } from 'react';

import PagesBanner from '../components/PagesBanner/PagesBanner';
import CategoriesNavbar from '../components/CategoriesNavbar/CategoriesNavbar';
import ShopProductsList from '../components/Products/ShopProducts/ShopProductsList';
import Card from '../components/UI/Card';

const ShopPage = () => {
  return (
    <Fragment>
      <PagesBanner pages={['shop']} />
      <Card>
        <CategoriesNavbar />
        <ShopProductsList />
      </Card>
    </Fragment>
  );
};

export default ShopPage;
