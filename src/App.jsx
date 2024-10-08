import React from "react";

import { Stack, Divider } from "@mui/material";

import Calender from "./Components/Calender/Calender";
import Header from "./Components/Shared/Header/Header";
import Sidebar from "./Components/Shared/Sidebar/Sidebar";

const App = () => {
  return (
    <>
      <Header />
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Sidebar />
        <Divider orientation="vertical" flexItem />
        <Calender />
      </Stack>
    </>
  );
};

export default App;
