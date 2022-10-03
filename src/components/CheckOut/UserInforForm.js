import { Fragment } from 'react';
import classes from './UserInforForm.module.css';

const UserInforForm = () => {
  return (
    <div className={classes['infor-container']}>
      <h2>BILLING DETAILS</h2>
      <form className={classes['user-infor']}>
        <p>FULL NAME:</p>
        <input type="text" placeholder="Enter Your FullName Here!" />
        <p>EMAIL:</p>
        <input type="text" placeholder="Enter Your Email Here!" />
        <p>PHONE NUMBER:</p>
        <input type="text" placeholder="Enter Your Phone Number Here!" />
        <p>ADDRESS:</p>
        <input type="text" placeholder="Enter Your Address Here!" />
      </form>
      <button className={classes['order-btn']}>Place order</button>
    </div>
  );
};

export default UserInforForm;
