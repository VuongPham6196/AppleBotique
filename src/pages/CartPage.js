import CartTable from '../components/Cart/CartTable';
import CartTotal from '../components/Cart/CartTotal';
import PagesBanner from '../components/PagesBanner/PagesBanner';
import Card from '../components/UI/Card';

const CartPage = props => {
  return (
    <div>
      <PagesBanner pages={['cart']} />
      <Card>
        <CartTable />
        <CartTotal />
      </Card>
    </div>
  );
};

export default CartPage;
