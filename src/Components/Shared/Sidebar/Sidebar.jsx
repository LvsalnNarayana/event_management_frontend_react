/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { useSelector } from "react-redux";

import { Stack, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

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
      <Button
        disableElevation
        variant="contained"
        sx={{
          my: 2,
          mx: "auto",
          width: "90%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AddIcon />
        &nbsp;Create
      </Button>
      <DatePicker />
    </Stack>
  );
};

export default Sidebar;
