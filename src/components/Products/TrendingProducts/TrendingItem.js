import classes from './TrendingItem.module.css';
import { useDispatch } from 'react-redux';
import { detailModalActions } from '../../../store/detail-modal';

const TrendingItem = props => {
  const dispatch = useDispatch();

  // Khi click vào 1 sản phẩm ở phần trending (trang chủ) thì dispatch hành động hiện popup_modal tới store, truyền vào 1 Obj chứa thông tin sản phẩm đó.
  const showModalHandler = () => {
    dispatch(detailModalActions.show_popup({ clickedProduct: props.product }));
  };

  return (
    <div className={classes.item} onClick={showModalHandler}>
      <img src={props.product.img1} alt="product" />
      <h3>{props.product.name}</h3>
      <p>
        {Number(props.product.price).toLocaleString({
          minimumFractionDigits: 0,
        })}{' '}
        VND
      </p>
    </div>
  );
};

export default TrendingItem;
