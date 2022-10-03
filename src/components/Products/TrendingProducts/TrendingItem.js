import classes from './TrendingItem.module.css';
import { useDispatch } from 'react-redux';
import { detailModalActions } from '../../../store/detail-modal';

const TrendingItem = props => {
  const dispatch = useDispatch();

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
