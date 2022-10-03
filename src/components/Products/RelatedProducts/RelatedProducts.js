import { useParams } from 'react-router-dom';
import { Fragment, useEffect, useState } from 'react';

import classes from './RelatedProducts.module.css';

import ShopProductsItem from '../ShopProducts/ShopProductsItem';

const RelatedProducts = () => {
  const [relatedProduct, setRelatedProduct] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();
  const { id } = params;

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
        const currentIdIndex = data.findIndex(
          product => product._id.$oid.toString() === id
        );
        const currentCategory = data[currentIdIndex].category;

        setRelatedProduct(
          data.filter(
            product =>
              product._id.$oid.toString() !== id &&
              product.category === currentCategory
          )
        );
        setIsLoading(false);
      })
      .catch(err => {
        setErrorMsg(err.message);
      });
  }, [id]);

  if (errorMsg) {
    return <p className="centered">{errorMsg}</p>;
  }

  let relatedContent;

  if (relatedProduct.length > 0) {
    relatedContent = relatedProduct.map((item, index) => {
      return (
        <div key={index} className={classes['product-item']}>
          <ShopProductsItem product={item} />
        </div>
      );
    });
  } else {
    relatedContent = !isLoading && (
      <p className="centered">There are no related products !</p>
    );
  }

  return (
    <Fragment>
      <h4 className={classes['related-products-header']}>RELATED PRODUCTS</h4>
      <div className={classes['related-products-container']}>
        {relatedContent}
      </div>
    </Fragment>
  );
};

export default RelatedProducts;
