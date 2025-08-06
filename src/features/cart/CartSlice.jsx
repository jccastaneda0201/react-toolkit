import { createSlice } from '@reduxjs/toolkit';
import CartItems from '../../cartItems';

const initialState = {
  cartItems: CartItems,
  amount: 4,
  total: 0,
  isLoading: true,
};

const CartSlice = createSlice({
  name: 'cart',
  initialState,
});

export default CartSlice.reducer;
