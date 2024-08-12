import React from "react";
import { useSelector } from "react-redux";

import { Stack } from "@mui/material";

import Day from "./Day/Day";
import Year from "./Year/Year";
import Month from "./Month/Month";
import { AppState } from "../../State/appState";
import { DateState } from "../../State/dateState";

const Calender = () => {
  const { currentView } = useSelector(AppState);
  const { selectedDate } = useSelector(DateState);

  return (
    <Stack
      width="100%"
      sx={{ overflowY: "auto", maxHeight: "calc(100vh - 55px)" }}
    >
      {currentView === "month" && <Month selectedDate={selectedDate} />}
      {currentView === "day" && <Day selectedDate={selectedDate} />}
      {currentView === "year" && <Year />}
    </Stack>
  );
};

export default Calender;
