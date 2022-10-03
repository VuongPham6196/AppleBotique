import classes from './HomeBanner.module.css';

import bannerImage from '../../assets/images/banner.jpg';
import { Link } from 'react-router-dom';

const HomeBanner = () => {
  return (
    <div className={classes.banner}>
      <img src={bannerImage} alt="product" />
      <div className={classes['banner-content']}>
        <p>NEW INSPIRATION 2020</p>
        <h2>20% OFF ON NEW SEASON</h2>
        <Link to="/shop?type=all">Browse collections</Link>
      </div>
    </div>
  );
};

export default HomeBanner;
