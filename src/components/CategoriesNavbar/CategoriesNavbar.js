import { useNavigate } from 'react-router-dom';

import CategoriesNavBarItem from './CategoriesNavBarItem';
import classes from './CategoriesNavbar.module.css';

const categoriesTitleData = [
  { category: '', type: ['All'] },
  { category: 'IPHONE & IMAC', type: ['Iphone', 'Ipad', 'Macbook'] },
  { category: 'WIRELESS', type: ['Airpod', 'Watch'] },
  { category: 'OTHERS', type: ['Mouse', 'Keyboard', 'Other'] },
];

const CategoriesNavbar = () => {
  const navigate = useNavigate();

  // hàm navigate đến trang filter theo loại sản phẩm.
  const onFilterHandler = type => {
    navigate(`/shop?type=${type}`);
  };

  return (
    <div className={classes['categories-navbar']}>
      <h3>CATEGORIES</h3>
      <p className={classes['categories-brand']}>APPLE</p>
      {categoriesTitleData.map(data => {
        return (
          <CategoriesNavBarItem
            key={data.category}
            items={data}
            onChangeFilter={onFilterHandler}
          />
        );
      })}
    </div>
  );
};

export default CategoriesNavbar;
