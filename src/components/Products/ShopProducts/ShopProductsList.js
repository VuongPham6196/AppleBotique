import { Fragment, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import ShopProductsItem from './ShopProductsItem';
import LoadingSpinner from '../../UI/LoadingSpinner';
import PageNumber from '../../PageNumber/PageNumber';
import classes from './ShopProductsList.module.css';

const ShopProductsList = () => {
  const [productsData, setProductsData] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const productType = queryParams.get('type'); // Lấy thông tin loại sản phẩm từ URL

  //Fecth lấy dữ liệu theo từng loại sản phẩm, tất cả (all) hoặc một loại theo biến producType.
  useEffect(() => {
    setIsLoading(true);
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
        if (productType === 'all') {
          setProductsData(data);
        } else {
          setProductsData(
            data.filter(product => product.category.toString() === productType)
          );
        }
        setIsLoading(false);
      })
      .catch(err => {
        setErrorMsg(err.message);
      });
  }, [productType]);

  // Nếu đang fetch thì render Loading spinner
  if (isLoading) {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (!isLoading && productsData.length === 0) {
    return <p className="centered">No Products Found!</p>;
  }

  let trendingContent = (
    <Fragment>
      <div className={classes['shop-list']}>
        {productsData.map((product, index) => {
          return (
            <div key={index} className={classes['product-item']}>
              <ShopProductsItem product={product} />
            </div>
          );
        })}
      </div>
    </Fragment>
  );

  if (errorMsg) {
    console.log(errorMsg);
    trendingContent = <p className="centered">{errorMsg}</p>;
  }

  return (
    <div className={classes['shop-products-container']}>
      <div className={classes['shop-header']}>
        <input type="text" placeholder="Enter Search Here!" />
        <select>
          <option>Default Sorting</option>
        </select>
      </div>
      {trendingContent}
      <PageNumber resultsList={productsData} />
    </div>
  );
};

export default ShopProductsList;
