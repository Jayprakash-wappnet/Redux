import { createSlice, createSelector } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
   
    clearCart: state => {
      // Handle clearing cart
      state.length = 0;
    },
    removeItem: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    
    
  },
});

export const getItemsSelector = createSelector(
  (state) => state.cart,
  (state) => state
);

export const { addItem, clearCart, removeItem } = cartSlice.actions;

export default cartSlice.reducer;