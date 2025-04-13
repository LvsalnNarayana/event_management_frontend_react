import React from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import { Stack } from "@mui/system";
import { Divider } from "@mui/material";

import { DateState } from "../State/dateState";
import Header from "../Components/Shared/Header/Header";
import Sidebar from "../Components/Shared/Sidebar/Sidebar";

const MainLayout = () => {
  const { selectedDate } = useSelector(DateState);

  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      width="100%"
      height="100vh"
      sx={{
        overflowX: "hidden",
        overflowY: "hidden",
        backgroundColor: "#F5F5F5",
      }}
    >
      <Header />
      <Stack
        direction="row"
        width="100%"
        height="100%"
        sx={{
          overflowX: "hidden",
          overflowY: "hidden",
        }}
      >
        <Sidebar />
        <Divider flexItem orientation="vertical" />
        <Stack
          p={2}
          height="100%"
          width="100%"
          sx={{
            overflowY: "auto",
            overflowX: "hidden",
          }}
        >
          <Outlet />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default MainLayout;
