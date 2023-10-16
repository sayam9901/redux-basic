import { configureStore } from '@reduxjs/toolkit';
import countReducer from './Reducer';

const store = configureStore({
    reducer: {countReducer}
  });
export default store ;