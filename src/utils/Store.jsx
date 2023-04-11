import { configureStore } from '@reduxjs/toolkit';
import sidebarSlice from './sidebarSlice';
import searchSlice from './searchSlice';

const store = configureStore({
  reducer: {
    sidebar: sidebarSlice.reducer,
    searchSlice: searchSlice.reducer,
  },
});

export default store;
