/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import ReactJson from "react-json-view";
import { useSelector } from "react-redux";

import { Stack } from "@mui/material";

import Day from "./Day/Day";
import Year from "./Year/Year";
import Month from "./Month/Month";
import EventForm from "../Event/EventForm";
import { AppState } from "../../State/appState";
import { DateState } from "../../State/dateState";
import { selectEvent } from "../../State/createEventState";

const Calender = () => {
  const { currentView } = useSelector(AppState);
  const { selectedDate } = useSelector(DateState);
  const event = useSelector(selectEvent);

  return (
    <Stack
      width="100%"
      sx={{ overflowY: "auto", maxHeight: "calc(100vh - 55px)" }}
    >
      {currentView === "month" && <Month selectedDate={selectedDate} />}
      {currentView === "day" && <Day selectedDate={selectedDate} />}
      {currentView === "year" && <Year />}
      {currentView === "event" && (
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Stack width="50%">
            <EventForm />
          </Stack>
          <Stack width="50%">
            <ReactJson
              src={event}
              name="Event Form"
              collapsed={false}
              enableClipboard={false}
              displayDataTypes={false}
              displayObjectSize={false}
              collapseStringsAfterLength={60}
            />
          </Stack>
        </Stack>
      )}
    </Stack>
  );
};

export default Calender;
