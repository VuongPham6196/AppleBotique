import { createSlice } from '@reduxjs/toolkit';

const cartList = JSON.parse(localStorage.getItem('cart')) || [];
console.log(cartList);

const initialState = {
  items: JSON.parse(localStorage.getItem('cart')) || [],
  totalAmount: JSON.parse(localStorage.getItem('totalAmount')) || 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    add(state, action) {
      let isExistingItem = false;
      const updatedTotalAmount =
        state.totalAmount + action.payload.data.price * action.payload.amount;

      state.items.map(item => {
        if (item._id.$oid === action.payload.data._id.$oid) {
          isExistingItem = true;
        }
      });

      // if adding's item has already exist in CartList
      if (isExistingItem) {
        const existingItemIndex = state.items.findIndex(
          item => item._id.$oid === action.payload.data._id.$oid
        );

        let updatedItem = {
          ...state.items[existingItemIndex],
          amount: state.items[existingItemIndex].amount + action.payload.amount,
        };
        let updatedItems = [...state.items];
        updatedItems[existingItemIndex] = updatedItem;
        state.items = updatedItems;
      }
      // if does not exist then concat it to CartList
      else {
        state.items = state.items.concat(action.payload.data);
      }
      state.totalAmount = updatedTotalAmount;
      localStorage.setItem('cart', JSON.stringify(state.items));
      localStorage.setItem('totalAmount', JSON.stringify(state.totalAmount));
    },
    remove(state, action) {
      const existingItemIndex = state.items.findIndex(
        item => item._id.$oid === action.payload.id
      );
      let updatedTotalAmount =
        state.totalAmount - state.items[existingItemIndex].price;
      if (state.items[existingItemIndex].amount > 1) {
        let updatedItem = {
          ...state.items[existingItemIndex],
          amount: state.items[existingItemIndex].amount - 1,
        };
        let updatedItems = [...state.items];
        updatedItems[existingItemIndex] = updatedItem;
        state.items = updatedItems;
        state.totalAmount = updatedTotalAmount;
      } else if (window.confirm('Are you sure to delete?')) {
        let updatedTotalAmount =
          state.totalAmount - state.items[existingItemIndex].price;
        let updatedItems = state.items.filter(
          item => item._id.$oid !== action.payload.id
        );
        state.items = updatedItems;
        state.totalAmount = updatedTotalAmount;
      }

      localStorage.setItem('cart', JSON.stringify(state.items));
      localStorage.setItem('totalAmount', JSON.stringify(state.totalAmount));
    },
    delete(state, action) {
      if (window.confirm('Are you sure to delete?')) {
        const existingItemIndex = state.items.findIndex(
          item => item._id.$oid === action.payload.id
        );

        const updatedTotalAmount =
          state.totalAmount -
          state.items[existingItemIndex].price *
            state.items[existingItemIndex].amount;

        let updatedItems = state.items.filter(
          item => item._id.$oid !== action.payload.id
        );
        state.items = updatedItems;
        state.totalAmount = updatedTotalAmount;
        localStorage.setItem('cart', JSON.stringify(state.items));
        localStorage.setItem('totalAmount', JSON.stringify(state.totalAmount));
      }
    },
    clear(state) {
      state = initialState;
      localStorage.setItem('cart', JSON.stringify(state.items));
      localStorage.setItem('totalAmount', JSON.stringify(state.totalAmount));
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
