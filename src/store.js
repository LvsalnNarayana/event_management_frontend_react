/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */
import { configureStore } from "@reduxjs/toolkit";

import { appSlice } from "./State/appState";
import { dateSlice } from "./State/dateState";
import { eventsState } from "./State/eventsState";
import { createEventSlice } from "./State/createEventState";

export const store = configureStore({
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
  reducer: {
    app: appSlice.reducer,
    date: dateSlice.reducer,
    events: eventsState.reducer,
    event: createEventSlice.reducer,
  },
});
