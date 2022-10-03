import { Fragment, useEffect, useState } from 'react';
import TrendingItem from './TrendingItem';
import classes from './TrendingProductsList.module.css';

const TrendingProductsList = () => {
  const [productsData, setProductsData] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);

  // Fecth lấy dữ liệu sản phẩm trending.
  useEffect(() => {
    fetch(
      'https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74'
    )
      .then(respone => {
        if (!respone.ok) {
          throw new Error('Something went wrong!');
        } else {
          return respone.json();
        }
      })
      .then(data => {
        console.log(data);
        setProductsData(data);
      })
      .catch(err => {
        setErrorMsg(err.message);
      });
  }, []);

  // lặp mảng và trả về trending item
  let trendingContent = (
    <Fragment>
      <div className={classes['trending-list']}>
        {productsData.map((product, index) => {
          return <TrendingItem key={index} product={product} />;
        })}
      </div>
    </Fragment>
  );

  if (errorMsg) {
    console.log(errorMsg);
    trendingContent = <p>{errorMsg}</p>;
  }

  return (
    <div className={classes.trending}>
      <div className={classes['trending-header']}>
        <p>MADE THE HARD WAY</p>
        <h2>TOP TRENDING PRODUCTS</h2>
      </div>
      {trendingContent}
    </div>
  );
};

export default TrendingProductsList;
