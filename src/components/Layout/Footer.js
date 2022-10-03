import { Link } from 'react-router-dom';
import classes from './Footer.module.css';

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes['footer-col']}>
        <p>CUSTOMER SERVICES</p>
        <ul>
          <li>
            <Link to="#">Help & Contact Us</Link>
          </li>
          <li>
            <Link to="#">Returns & Refunds</Link>
          </li>
          <li>
            <Link to="#">Online Stores</Link>
          </li>
          <li>
            <Link to="#">Terms & Conditions</Link>
          </li>
        </ul>
      </div>
      <div className={classes['footer-col']}>
        <p>COMPANY</p>
        <ul>
          <li>
            <Link to="#">What We Do</Link>
          </li>
          <li>
            <Link to="#">Availible Services</Link>
          </li>
          <li>
            <Link to="#">Lastes Posts</Link>
          </li>
          <li>
            <Link to="#">FAQs</Link>
          </li>
        </ul>
      </div>
      <div className={classes['footer-col']}>
        <p>SOCIAL MEDIA</p>
        <ul>
          <li>
            <Link to="#">Twitter</Link>
          </li>
          <li>
            <Link to="#">Instagram</Link>
          </li>
          <li>
            <Link to="#">Facebook</Link>
          </li>
          <li>
            <Link to="#">Pinterest</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
