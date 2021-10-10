import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/redux/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
