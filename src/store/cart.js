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
    //Hành động thêm số lượng sản phẩm
    add(state, action) {
      let isExistingItem = false; //Giả sử sản phẩm chưa có trong giỏ hàng
      const updatedTotalAmount =
        state.totalAmount + action.payload.data.price * action.payload.amount; // update tổng giá tiền

      //Lặp mảng, nếu sản phẩm đã có thì isExistingItem = true.
      state.items.map(item => {
        if (item._id.$oid === action.payload.data._id.$oid) {
          isExistingItem = true;
        }
      });

      // Nếu sản phẩm đã có trong giỏ hàng thì update lại số lượng của nó
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
      // Nếu sản phẩm chưa có trong giỏ hàng thì thêm sản phẩm đó vào.
      else {
        state.items = state.items.concat(action.payload.data);
      }
      state.totalAmount = updatedTotalAmount;
      localStorage.setItem('cart', JSON.stringify(state.items));
      localStorage.setItem('totalAmount', JSON.stringify(state.totalAmount));
    },
    //Hành động xóa bớt số lượng sản phẩm
    remove(state, action) {
      const existingItemIndex = state.items.findIndex(
        item => item._id.$oid === action.payload.id
      );

      //update tổng giá tiền
      let updatedTotalAmount =
        state.totalAmount - state.items[existingItemIndex].price;

      //Nếu số lượng sản phẩm hiện tại lớn hơn 1 thì xóa bớt 1.
      if (state.items[existingItemIndex].amount > 1) {
        let updatedItem = {
          ...state.items[existingItemIndex],
          amount: state.items[existingItemIndex].amount - 1,
        };
        let updatedItems = [...state.items];
        updatedItems[existingItemIndex] = updatedItem;
        state.items = updatedItems;
        state.totalAmount = updatedTotalAmount;
      }
      //Ngược lại nếu số lượng sản phẩm =1 thì xác nhận có muốn xóa luôn sản phẩm không ?
      else if (window.confirm('Are you sure to delete?')) {
        let updatedTotalAmount =
          state.totalAmount - state.items[existingItemIndex].price;
        let updatedItems = state.items.filter(
          item => item._id.$oid !== action.payload.id
        );
        state.items = updatedItems;
        state.totalAmount = updatedTotalAmount;
      }
      // Lưu thông tin giỏ hàng và tổng giá tiền vào LocalStorage
      localStorage.setItem('cart', JSON.stringify(state.items));
      localStorage.setItem('totalAmount', JSON.stringify(state.totalAmount));
    },

    // Hành động xóa item khỏi giỏ hàng
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
