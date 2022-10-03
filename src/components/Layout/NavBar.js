import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Fragment, useEffect, useState } from 'react';

import CartIcon from '../Icon/CartIcon';
import UserIcon from '../Icon/UserIcon';
import DropDownIcon from '../Icon/DropDownIcon';
import classes from './NavBar.module.css';

import { authActions } from '../../store/auth';

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [cartIsBump, setCartIsBump] = useState(false);

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const cartList = useSelector(state => state.cart.items);

  const logoutHandler = () => {
    dispatch(authActions.logout());
    navigate('/login');
  };

  const numberOfCartItems = cartList.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  let numberOfCartClasses = `${classes['number-of-items']} ${
    cartIsBump ? classes.bump : ''
  }`;

  useEffect(() => {
    if (cartList.length === 0) {
      return;
    }
    setCartIsBump(true);
    const timer = setTimeout(() => {
      setCartIsBump(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [cartList]);

  return (
    <div className={classes.navbar}>
      <ul>
        <li>
          <NavLink
            className={navData => (navData.isActive ? classes.active : '')}
            to="/home"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={navData => (navData.isActive ? classes.active : '')}
            to="/shop?type=all"
          >
            Shop
          </NavLink>
        </li>
      </ul>
      <h1>BOUTIQUE</h1>
      <ul>
        <li>
          <span className={numberOfCartClasses}>{numberOfCartItems}</span>
          <NavLink
            className={navData => (navData.isActive ? classes.active : '')}
            to="/cart"
          >
            <CartIcon />
            Cart
          </NavLink>
        </li>
        {isLoggedIn && (
          <Fragment>
            <li>
              <NavLink
                className={navData => (navData.isActive ? classes.active : '')}
                to={'/'}
              >
                <UserIcon />
                {JSON.parse(localStorage.getItem('currentUser')).name
                  ? JSON.parse(localStorage.getItem('currentUser')).name
                  : ''}
                <DropDownIcon />
              </NavLink>
            </li>
            <li onClick={logoutHandler}>
              <p>(Logout)</p>
            </li>
          </Fragment>
        )}
        {!isLoggedIn && (
          <li>
            <NavLink
              className={navData => (navData.isActive ? classes.active : '')}
              to="/login"
            >
              Login
            </NavLink>
          </li>
        )}
      </ul>
    </div>
  );
};

export default NavBar;
