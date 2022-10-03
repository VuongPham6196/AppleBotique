import { Fragment } from 'react';
import { useLocation } from 'react-router-dom';

import classes from './CategoriesNavBarItem.module.css';

const CategoriesNavBarItem = props => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const productType = queryParams.get('type');

  const onFilterHandler = event => {
    props.onChangeFilter(event.target.innerHTML.toLowerCase());
  };

  return (
    <Fragment>
      {props.items.category && (
        <p className={classes['categories-type']}>{props.items.category}</p>
      )}
      <div className={classes['categories-list']}>
        <ul>
          {props.items.type.map(item => {
            return (
              <li
                className={
                  productType === item.toLowerCase() ? classes.active : ''
                }
                key={item}
                onClick={onFilterHandler}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </Fragment>
  );
};

export default CategoriesNavBarItem;
