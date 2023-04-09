import { createSlice } from '@reduxjs/toolkit';

const initialStates = {
  isSidebarOpen: false,
  isLoading: false,
};

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: initialStates,
  reducers: {
    toggleSidebar: (state, action) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    loading: (state) => {
      state.isLoading = true;
    },
    offLoading: (state) => {
      state.isLoading = false;
    },
    closeMenu: (state) => {
      state.isSidebarOpen = false;
    },
  },
});

export const { toggleSidebar, loading, offLoading, closeMenu } =
  sidebarSlice.actions;
export default sidebarSlice;
