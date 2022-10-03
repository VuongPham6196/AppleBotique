import { Fragment, useEffect, useState } from 'react';
import Auth from '../components/Auth/Auth';
import { useNavigate } from 'react-router-dom';

const LoginPage = props => {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('currentUser')
  );

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
