import classes from './CartItem.module.css';
import RemoveIcon from '../Icon/RemoveIcon';
import { useDispatch } from 'react-redux';

import { cartActions } from '../../store/cart';

const CartItem = props => {
  const dispatch = useDispatch();

  // Hàm tăng số lượng khi click vào nút xóa trong giỏ hàng, truyền vào id của item cần bớt, amout:1
  const addHandler = () => {
    dispatch(cartActions.add({ data: props.data, amount: 1 }));
  };

  // Hàm giảm số lượng khi click vào nút xóa trong giỏ hàng, truyền vào id của item cần bớt, mặc định giảm 1 mỗi lần click
  const removeHandler = () => {
    dispatch(cartActions.remove({ id: props.data._id.$oid }));
  };

  // Hàm xóa item khi click vào nút xóa trong giỏ hàng, truyền vào id của item cần xóa
  const deleteItemHandler = () => {
    dispatch(cartActions.delete({ id: props.data._id.$oid }));
  };

  return (
    <tr className={classes['cart-item-row']}>
      <td className={classes['image-col']}>
        <img src={props.data.img1} />
      </td>
      <td className={classes['product-col']}>{props.data.name}</td>
      <td>
        {Number(props.data.price).toLocaleString({
          minimumFractionDigits: 0,
        })}{' '}
        VND
      </td>
      <td className={classes['quantity-col']}>
        <button onClick={removeHandler}>◂</button>
        <span>{props.data.amount}</span>
        <button onClick={addHandler}>▸</button>
      </td>
      <td>
        {(props.data.price * props.data.amount).toLocaleString({
          minimumFractionDigits: 0,
        })}{' '}
        VND
      </td>
      <td className={classes['remove-col']}>
        <button onClick={deleteItemHandler}>
          <RemoveIcon />
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
