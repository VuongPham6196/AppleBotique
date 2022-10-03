import classes from './ProductDetail.module.css';
import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Fragment } from 'react';
import { useDispatch } from 'react-redux';

import { cartActions } from '../../../store/cart';

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const [errorMsg, setErrorMsg] = useState(null);
  const [imageLink, setImageLink] = useState();

  const dispatch = useDispatch();

  const params = useParams();
  const { id } = params;

  const amountRef = useRef();

  const changeImageHandler = event => {
    setImageLink(event.target.src);
  };

  const increaseHandler = () => {
    if (Number(amountRef.current.value) < 5) {
      amountRef.current.value = Number(amountRef.current.value) + 1;
    }
  };

  const decreaseHandler = () => {
    if (Number(amountRef.current.value > 1)) {
      amountRef.current.value = Number(amountRef.current.value) - 1;
    }
  };

  const addToCartHandler = () => {
    const addItemObj = {
      ...product,
      amount: Number(amountRef.current.value),
    };
    dispatch(
      cartActions.add({
        data: addItemObj,
        amount: Number(amountRef.current.value),
      })
    );
  };

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
        setProduct(
          data.filter(product => product._id.$oid.toString() === id)[0]
        );
        setImageLink(
          data.filter(product => product._id.$oid.toString() === id)[0].img1
        );
      })
      .catch(err => {
        setErrorMsg(err.message);
      });
  }, [id]);

  if (errorMsg) {
    return <p className="centered">{errorMsg}</p>;
  }

  return (
    <Fragment>
      <div className={classes['main-detail']}>
        <div className={classes['detail-image']}>
          <div className={classes['mini-image-list']}>
            <img src={product.img2} onClick={changeImageHandler} />
            <img src={product.img3} onClick={changeImageHandler} />
            <img src={product.img4} onClick={changeImageHandler} />
            <img src={product.img1} onClick={changeImageHandler} />
          </div>
          <div className={classes['main-image']}>
            <img src={imageLink} />
          </div>
        </div>
        <div className={classes['detail-content']}>
          <h2>{product.name}</h2>
          <p className={classes['content-price']}>
            {Number(product.price).toLocaleString({
              minimumFractionDigits: 0,
            })}{' '}
            VND
          </p>
          <p
            style={{
              marginBottom: '20px',
            }}
          >
            {product.short_desc}
          </p>
          <span
            style={{
              color: 'black',
              fontWeight: '500',
            }}
          >
            CATEGORY:{' '}
          </span>
          <span>{product.category}</span>
          <div className={classes.quantity}>
            <div className={classes['quantity-counter']}>
              <span style={{ marginRight: '20px' }}>QUANTITY</span>
              <button onClick={decreaseHandler}>◂</button>
              <input
                ref={amountRef}
                defaultValue="1"
                type="text"
                disabled={true}
                style={{ fontSize: '20px', color: 'black' }}
              />
              <button onClick={increaseHandler}>▸</button>
            </div>
            <button
              className={classes['add-to-cart']}
              onClick={addToCartHandler}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div className={classes['detail-description']}>
        <h3>DESCRIPTION</h3>
        <h4 className={classes['description-header']}>PRODUCT DESCRIPTION</h4>

        <div dangerouslySetInnerHTML={{ __html: product.long_desc }} />
      </div>
    </Fragment>
  );
};

export default ProductDetail;
