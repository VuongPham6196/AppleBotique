import { Fragment, useEffect, useState } from 'react';
import Auth from '../components/Auth/Auth';
import { useNavigate } from 'react-router-dom';

const LoginPage = props => {
  const navigate = useNavigate();

  //Lấy thông tin đã đăng nhập hay chưa từ LocalStorage
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('currentUser')
  );

  // Nếu đã đăng nhập thì chuyển về trang chủ.
  useEffect(() => {
    if (isLoggedIn) {
      navigate('/home');
    }
  }, []);

  return (
    <Fragment>
      <Auth />
    </Fragment>
  );
};

export default LoginPage;
