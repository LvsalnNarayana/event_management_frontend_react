import React from "react";

import { Grid } from "@mui/material";

import Calender from "./Components/Calender/Calender";
import Header from "./Components/Shared/Header/Header";
import Sidebar from "./Components/Shared/Sidebar/Sidebar";

const App = () => {
  return (
    <>
      <Header />
      <Grid container>
        <Grid item xs={12} sm={3} style={{ maxWidth: 300 }}>
          <Sidebar />
        </Grid>
        <Grid item xs={12} sm={9}>
          <Calender />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
