import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  product: {
    name: '',
    price: '',
    desc: '',
  },
  showModal: false,
};

const detailModalSlice = createSlice({
  name: 'detailModal',
  initialState: initialState,
  reducers: {
    show_popup(state, action) {
      state.product = action.payload.clickedProduct;
      state.showModal = true;
    },
    hide_popup() {
      return initialState;
    },
  },
});

export const detailModalActions = detailModalSlice.actions;

export default detailModalSlice.reducer;
