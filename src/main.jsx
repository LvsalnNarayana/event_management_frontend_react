/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { CssBaseline, createTheme, ThemeProvider } from "@mui/material";

import "./index.css";
import App from "./App";
import { store } from "./store";
import { generateThemeOptions } from "./Theme";

const theme = createTheme(
  generateThemeOptions({
    mode: "light",
  }),
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <App />
          <CssBaseline />
        </LocalizationProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
);
