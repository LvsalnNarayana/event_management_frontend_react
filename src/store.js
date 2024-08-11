/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */
import { configureStore } from "@reduxjs/toolkit";

import { appSlice } from "./State/appState";
import { dateSlice } from "./State/dateState";
import { eventsSlice } from "./State/eventsSlice";

export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    date: dateSlice.reducer,
    events: eventsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});
