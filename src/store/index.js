import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth';
import detailModalSlice from './detail-modal';
import cartSlice from './cart';

const store = configureStore({
  reducer: {
    detailModal: detailModalSlice,
    auth: authSlice,
    cart: cartSlice,
  },
});

export default store;
