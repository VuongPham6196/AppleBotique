import classes from './OtherInfors.module.css';

const OtherInfors = () => {
  return (
    <div className={classes.other}>
      <div className={classes.endow}>
        <div className={classes['endow-item']}>
          <h3>FREE SHIPPING</h3>
          <p>Free shipping worldwide</p>
        </div>
        <div className={classes['endow-item']}>
          <h3>24 X 7 SERVICE</h3>
          <p>Free shipping worldwide</p>
        </div>
        <div className={classes['endow-item']}>
          <h3>FESTIVAL OFFERS</h3>
          <p>Free shipping worldwide</p>
        </div>
      </div>
      <div className={classes.emailSub}>
        <div className={classes['emailSub-header']}>
          <h3>LET'S BE FRIENDS!</h3>
          <p>Nisi nisi tempor consequat laboris nisi.</p>
        </div>
        <div>
          <input type="email" placeholder="Enter your email address" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default OtherInfors;
