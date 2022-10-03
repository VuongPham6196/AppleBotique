import classes from './CartTable.module.css';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import BackIcon from '../Icon/BackIcon';
import NextIcon from '../Icon/NextIcon';

const CartTable = props => {
  const cartList = useSelector(state => state.cart.items); // nhập mảng các sản phẩm có trong giỏ hàng từ store.

  // lặp mảng cartList để trả về các item
  let cartListContent = cartList.map((item, index) => {
    return <CartItem key={index} data={item} />;
  });

  // nếu không có sản phẩm trong giỏ hàng thì trả về thẻ <p> no products
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
