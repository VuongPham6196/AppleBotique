import classes from './ShopProductsItem.module.css';

import { useNavigate } from 'react-router-dom';

const ShopProductsItem = props => {
  const navigate = useNavigate();

  const goToDetailHandler = () => {
    navigate(`/detail/${props.product._id.$oid}`);
  };

  return (
    <div className={classes.item} onClick={goToDetailHandler}>
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

export default ShopProductsItem;
