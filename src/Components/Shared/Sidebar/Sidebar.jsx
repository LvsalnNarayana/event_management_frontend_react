/* eslint-disable import/no-extraneous-dependencies */
import React from "react";

import { Stack } from "@mui/material";

import DatePicker from "./DatePicker";

const Sidebar = () => {
  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      width="100%"
    >
      <DatePicker />
    </Stack>
  );
};

export default Sidebar;
