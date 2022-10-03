import classes from './OrderInfor.module.css';
import { useSelector } from 'react-redux';

const OrderInfor = () => {
  // nhập dữ liệu giỏ hàng từ store
  const totalAmount = useSelector(state => state.cart.totalAmount);
  const listCart = useSelector(state => state.cart.items);

  const orderListContent = listCart.map(item => {
    return (
      <>
        <div className={classes['order-item']}>
          <span className={classes['order-name']}>{item.name}</span>
          <span className={classes['order-amount']}>
            {Number(item.price).toLocaleString({ minimumFractionDigits: 0 })}{' '}
            VND x <span>{item.amount}</span>
          </span>
        </div>
        <hr />
      </>
    );
  });

  return (
    <div className={classes['order-container']}>
      <h2>YOUR ORDER</h2>
      <div className={classes['order-list']}>{orderListContent}</div>
      <div className={classes['order-item']}>
        <span>TOTAL</span>
        <span className={classes['total-amount']}>
          {Number(totalAmount).toLocaleString({ minimumFractionDigits: 0 })} VND
        </span>
      </div>
    </div>
  );
};

export default OrderInfor;
