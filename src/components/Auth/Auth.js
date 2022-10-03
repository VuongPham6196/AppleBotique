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

  //nếu đang ở trang login thì set trạng thái isLogin=true. Sau khi click vào nút submit thì sẽ dispatch hành động đăng nhập (if true) hoặc đăng kí (if false)
  const [isLogin, setIsLogin] = useState(location.pathname === '/login');

  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const nameInputRef = useRef();
  const phoneInputRef = useRef();

  const onFormSubmitHandler = event => {
    event.preventDefault();

    const userArr = JSON.parse(localStorage.getItem('userArr')) || []; //Nhập dữ liệu danh sách tài khoản từ localstorage, nếu ko có thì sẽ là mảng trống.

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    //Nếu true thì đăng nhập
    if (isLogin) {
      let isExist = false; //Giả sử tài khoản chưa tồn tại trong store

      const userEnteredData = {
        email: enteredEmail,
        password: enteredPassword,
      };

      //Lặp mảng để duyệt xem thông tin tài khoản có tồn tại trong Store hay ko ?
      userArr.map(user => {
        if (user.email === enteredEmail && user.password === enteredPassword) {
          isExist = true;
          userEnteredData.name = user.name;
        }
      });

      //nếu tồn tại thì dispatch hành động login, ngược lại thì thông báo lỗi cho người dùng
      if (isExist) {
        dispatch(authActions.login({ userDataObj: userEnteredData }));
        navigate('/home');
      } else {
        alert('Email or Password is incorrect!');
      }
    }

    //Ngược lại thì thực hiện đăng kí
    else {
      let isNotUnique; // Biến để xác định email đã nhập đã được đăng kí hay chưa.

      const enteredName = nameInputRef.current.value;
      const enteredPhone = phoneInputRef.current.value;

      // Điều kiện password phải trên 8 kí tự.
      if (enteredPassword.length < 8) {
        alert('Password must have at least 8 characters!');
      }
      // nếu thỏa dk hơn 8 kí tự thì duyệt mảng userArr để xem email có tồn tại chưa ?
      else {
        userArr.map(user => {
          if (user.email === enteredEmail) {
            isNotUnique = true; //true tức là email đã tồn tại.
          }
        });
        if (isNotUnique) {
          alert('Email has already been registered!');
        }
        // nếu email chưa tồn tại thì lưu thông tin người dùng đã nhập vào mảng và lưu vào LocalStorage.Sau đó Chuyển đến trang login.
        else {
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
