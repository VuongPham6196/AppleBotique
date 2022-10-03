import classes from './CartTotal.module.css';
import { useSelector } from 'react-redux';

import GiftIcon from '../Icon/GiftIcon';

const CartTotal = () => {
  const totalAmount = useSelector(state => state.cart.totalAmount); // nhập tổng giá tiền từ store.

  return (
    <div className={classes['total-container']}>
      <h2>CART TOTAL</h2>
      <div className={classes.total}>
        <div className={classes['total-item']}>
          <span>SUBTOTAL</span>
          <span className={classes['sub-total']}>
            {Number(totalAmount).toLocaleString({ minimumFractionDigits: 0 })}{' '}
            VND
          </span>
        </div>
        <hr />
        <div className={classes['total-item']}>
          <span>TOTAL</span>
          <span className={classes['last-total']}>
            {Number(totalAmount).toLocaleString({ minimumFractionDigits: 0 })}{' '}
            VND
          </span>
        </div>
      </div>
      <input type="text" placeholder="Enter your coupon" />
      <button>
        <GiftIcon /> Apply coupon
      </button>
    </div>
  );
};

export default CartTotal;
