import classes from './PagesBanner.module.css';

import { useLocation, NavLink } from 'react-router-dom';

const PagesBanner = props => {
  const location = useLocation();

  return (
    <div className={classes['pages-banner']}>
      <h2>{location.pathname.replaceAll('/', '')}</h2>
      <div>
        {props.pages.map((page, index) => {
          return (
            <NavLink
              key={index}
              className={navData => (navData.isActive ? classes.active : '')}
              to={`/${page}${page === 'shop' ? '?type=all' : ''}`}
            >
              {`${page}${index < props.pages.length - 1 ? ' / ' : ''}`}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default PagesBanner;
