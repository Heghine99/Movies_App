import {configureStore} from '@reduxjs/toolkit';
import moviesSlice from './moviesSlice';

const createDebugger = require('redux-flipper').default;

const configureCustomStore = () => {
  const store = configureStore({
    reducer: moviesSlice,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(createDebugger()),
  });
  return {store};
};

export const {store} = configureCustomStore();
