import classes from './CartTable.module.css';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import BackIcon from '../Icon/BackIcon';
import NextIcon from '../Icon/NextIcon';

const CartTable = props => {
  const cartList = useSelector(state => state.cart.items);

  let cartListContent = cartList.map((item, index) => {
    return <CartItem key={index} data={item} />;
  });

  let noProductsContent;
  if (cartList.length === 0) {
    noProductsContent = (
      <p className="centered" style={{ height: '50px' }}>
        There's no products in your cart!{' '}
      </p>
    );
  }

  return (
    <div className={classes['cart-table']}>
      <h2>SHOPPING CART</h2>
      <table className={classes['cart-list']}>
        <thead>
          <tr>
            <th>IMAGE</th>
            <th>PROCUCT</th>
            <th>PRICE</th>
            <th>QUANTITY</th>
            <th>TOTAL</th>
            <th>REMOVE</th>
          </tr>
        </thead>
        <tbody>{cartListContent}</tbody>
      </table>
      {noProductsContent}
      <div className={classes['cart-table-footer']}>
        <Link to="/shop?type=all">
          <BackIcon />
          Continue shoping
        </Link>
        <Link
          className={classes['checkout-btn']}
          style={{
            pointerEvents: cartList.length === 0 ? 'none' : '',
          }}
          to="/checkout?type=all"
        >
          Proceed to checkout <NextIcon />
        </Link>
      </div>
    </div>
  );
};

export default CartTable;
