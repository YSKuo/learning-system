/* eslint-disable no-param-reassign */
/* eslint-disable import/no-unresolved */
import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    list: [],
    
  },
  reducers: {
    setList: (state, action) => {
      const { key } = action.payload;
      let isAdded = false;
      state.list.forEach((el, i)=>{
        if (el.key === key) {
          isAdded = true;
          return
        }
      })
      if (!isAdded) {
        state.list.push(action.payload);
      }
    },

  },
});

// action
export const {
  setList,

} = cartSlice.actions;

// redux thunk function


// selector
export const selectList = (store) => store.cart.list;

export default cartSlice.reducer;