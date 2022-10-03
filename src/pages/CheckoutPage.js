import { Fragment } from 'react';

import Card from '../components/UI/Card';
import CheckOut from '../components/CheckOut/UserInforForm';
import PagesBanner from '../components/PagesBanner/PagesBanner';
import OrderInfor from '../components/CheckOut/OrderInfor';

const CheckoutPage = props => {
  return (
    <Fragment>
      <PagesBanner pages={['shop', 'cart', 'checkout']} />
      <Card>
        <CheckOut />
        <OrderInfor />
      </Card>
    </Fragment>
  );
};

export default CheckoutPage;
