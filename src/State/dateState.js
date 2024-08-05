/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  date: new Date(),
  selectedDate: new Date(),
};

export const dateSlice = createSlice({
  name: "date",
  initialState,
  reducers: {
    setDate: (state, action) => {
      state.selectedDate = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setDate } = dateSlice.actions;
export const DateState = (state) => {
  return state.date;
};
export default dateSlice.reducer;
