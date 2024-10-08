/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darwerWidth: 300,
  currentView: "event",
  pixelToTime: 60 / 48,
  timeToPixel: 48 / 60,
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
