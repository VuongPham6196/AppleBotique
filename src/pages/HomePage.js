import { Fragment } from 'react';
import HomeBanner from '../components/PagesBanner/HomeBanner';
import CategoriesList from '../components/Products/ProductCategories/CategoriesList';
import OtherInfors from '../components/OtherInfors/OtherInfors';
import PopupModal from '../components/PopupModal/PopupModal';
import TrendingProductsList from '../components/Products/TrendingProducts/TrendingProductsList';
import { useSelector, useDispatch } from 'react-redux';
import { detailModalActions } from '../store/detail-modal';

const HomePage = props => {
  const dispatch = useDispatch();
  const showModal = useSelector(state => state.detailModal.showModal);

  //Ẩn popup_modal khi click ra phía ngoài modal
  const closeModalHandler = event => {
    event.stopPropagation();
    dispatch(detailModalActions.hide_popup());
  };

  //Ẩn popup_modal khi nhấn phím ESC
  window.onkeydown = function (e) {
    if (e.keyCode === 27) {
      dispatch(detailModalActions.hide_popup());
    }
  };

  return (
    <Fragment>
      <HomeBanner />
      <CategoriesList />
      <TrendingProductsList />
      <OtherInfors />
      {showModal && <PopupModal onClose={closeModalHandler} />}
    </Fragment>
  );
};

export default HomePage;
