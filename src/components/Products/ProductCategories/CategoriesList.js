import classes from './CategoriesList.module.css';

import { useNavigate } from 'react-router-dom';

import product_1 from '../../../assets/images/product_1.png';
import product_2 from '../../../assets/images/product_2.png';
import product_3 from '../../../assets/images/product_3.png';
import product_4 from '../../../assets/images/product_4.png';
import product_5 from '../../../assets/images/product_5.png';

const CategoriesList = () => {
  const navigate = useNavigate();

  const GoToShopHandler = event => {
    navigate(`/shop/?type=${event.target.alt}`);
  };

  return (
    <div className={classes.categories}>
      <div className={classes['categories-header']}>
        <p>CAREFULLY CREATED COLLECTIONS</p>
        <h2>BROWSE OUR CATEGORIES</h2>
      </div>
      <div className={classes['categories-row-1']}>
        <img src={product_1} onClick={GoToShopHandler} alt="iphone" />
        <img src={product_2} onClick={GoToShopHandler} alt="macbook" />
      </div>
      <div className={classes['categories-row-2']}>
        <img src={product_3} onClick={GoToShopHandler} alt="ipad" />
        <img src={product_4} onClick={GoToShopHandler} alt="watch" />
        <img src={product_5} onClick={GoToShopHandler} alt="airpod" />
      </div>
    </div>
  );
};

export default CategoriesList;
