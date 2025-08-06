import { configureStore } from '@reduxjs/toolkit';
import CartReducer from './features/cart/CartSlice';

const Store = configureStore({
  reducer: {
    cart: CartReducer,
  },
});

export default Store;
