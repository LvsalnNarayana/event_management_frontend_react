/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { useSelector } from "react-redux";

import { Stack } from "@mui/material";

import DatePicker from "./DatePicker";
import { AppState } from "../../../State/appState";

const Sidebar = () => {
  const { darwerWidth } = useSelector(AppState);

  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      width="100%"
      maxWidth={darwerWidth}
    >
      <DatePicker />
    </Stack>
  );
};

export default Sidebar;
