import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { detailModalActions } from '../../store/detail-modal';

import CartIcon from '../Icon/CartIcon';

import classes from './PopupModal.module.css';

const PopupModal = props => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const product = useSelector(state => state.detailModal.product); // nhập dữ liệu sản phẩm được click từ store.

  //Khi click vào nút viewdetail thì sẽ đóng cửa sổ và chuyển đến trang Detail
  const onViewDetailHandler = () => {
    dispatch(detailModalActions.hide_popup());
    navigate(`/detail/${product._id.$oid}`);
  };

  return (
    <div className={classes.backdrop} onClick={props.onClose}>
      <div
        className={classes.modal}
        onClick={event => {
          event.stopPropagation();
        }}
      >
        <div className={classes['modal-image']}>
          <img src={product.img1} />
        </div>
        <div className={classes['modal-content']}>
          <h2>{product.name}</h2>
          <p>
            {Number(product.price).toLocaleString({
              minimumFractionDigits: 0,
            })}{' '}
            VND
          </p>
          <p>{product.short_desc}</p>
          <button onClick={onViewDetailHandler}>
            <CartIcon /> View Detail
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupModal;
