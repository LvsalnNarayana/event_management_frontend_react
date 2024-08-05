/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darwerWidth: 300,
  currentView: "month",
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setDarwerWidth: (state, action) => {
      state.darwerWidth = action.payload;
    },
    setCurrentView: (state, action) => {
      state.currentView = action.payload;
    },
  },
});

export const { setDarwerWidth, setCurrentView } = appSlice.actions;
export const AppState = (state) => {
  return state.app;
};
export default appSlice.reducer;
