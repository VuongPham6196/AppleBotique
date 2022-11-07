import { Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import './App.css';
import Layout from './components/Layout/Layout';
import ShopPage from './pages/ShopPage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import DetailPage from './pages/DetailPage';
import CheckoutPage from './pages/CheckoutPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <Layout>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </Layout>
  </Fragment>
  );
}

export default App;
