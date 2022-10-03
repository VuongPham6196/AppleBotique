import { Fragment } from 'react';
import { useLocation } from 'react-router-dom';

import NavBar from './NavBar';
import Footer from './Footer';
import classes from './Layout.module.css';

const Layout = props => {
  return (
    <Fragment>
      <NavBar />
      <div className={classes.content}>{props.children}</div>
      <Footer />
    </Fragment>
  );
};

export default Layout;
