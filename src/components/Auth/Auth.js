import classes from './Auth.module.css';

import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';

import backgroundImage from '../../assets/images/banner.jpg';

import { authActions } from '../../store/auth';

const Auth = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isLogin, setIsLogin] = useState(location.pathname === '/login');

  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const nameInputRef = useRef();
  const phoneInputRef = useRef();

  const onFormSubmitHandler = event => {
    event.preventDefault();

    const userArr = JSON.parse(localStorage.getItem('userArr')) || [];

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    //login submit
    if (isLogin) {
      let isExist = false;

      const userEnteredData = {
        email: enteredEmail,
        password: enteredPassword,
      };
      userArr.map(user => {
        if (user.email === enteredEmail && user.password === enteredPassword) {
          isExist = true;
          userEnteredData.name = user.name;
        }
      });

      if (isExist) {
        dispatch(authActions.login({ userDataObj: userEnteredData }));
        navigate('/home');
      } else {
        alert('Email or Password is incorrect!');
      }
    }

    //register submit
    else {
      let isNotUnique;

      const enteredName = nameInputRef.current.value;
      const enteredPhone = phoneInputRef.current.value;

      if (enteredPassword.length < 8) {
        alert('Password must have at least 8 characters!');
      } else {
        userArr.map(user => {
          if (user.email === enteredEmail) {
            isNotUnique = true;
          }
        });
        if (isNotUnique) {
          alert('Email has already been registered!');
        } else {
          const userEnteredData = {
            email: enteredEmail,
            password: enteredPassword,
            name: enteredName,
            phone: enteredPhone,
          };
          userArr.push(userEnteredData);
          localStorage.setItem('userArr', JSON.stringify(userArr));
          alert('Registration successful!');
          navigate('/login');
        }
      }
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'repeat',
        backgroundPosition: 'center',
      }}
      className={classes['auth-container']}
    >
      <form
        className={classes['auth-form-control']}
        onSubmit={onFormSubmitHandler}
      >
        <h2>{isLogin ? 'Sign In' : 'Sign Up'}</h2>
        <div className={classes['input-container']}>
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              ref={nameInputRef}
              required
            />
          )}
          <input
            type="email"
            placeholder="Email"
            ref={emailInputRef}
            required
          />
          <input
            type="password"
            placeholder="Password"
            ref={passwordInputRef}
            required
          />
          {!isLogin && (
            <input
              type="tel"
              placeholder="Phone"
              ref={phoneInputRef}
              required
            />
          )}
        </div>
        <button>{isLogin ? 'SIGN IN' : 'SIGN UP'}</button>
        <p>
          {isLogin ? 'Create an account? ' : 'Login? '}{' '}
          <Link to={isLogin ? '/register' : '/login'}>
            {isLogin ? 'Sign Up' : 'Click'}
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Auth;
