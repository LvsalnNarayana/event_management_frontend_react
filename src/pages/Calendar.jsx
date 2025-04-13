/* eslint-disable operator-linebreak */
import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";

import { Stack } from "@mui/system";

import { AppState } from "../State/appState";
import { DateState } from "../State/dateState";
import Day from "../Components/Calendar/Day/Day";
import Year from "../Components/Calendar/Year/Year";
import Week from "../Components/Calendar/Week/Week";
import Month from "../Components/Calendar/Month/Month";

const isValidDate = ({ day, year, month }) => {
  if (!year || !month || !day) return false;

  if (
    year.length !== 4 ||
    (Number.isNaN(Number(year)) && month.length !== 2) ||
    (Number.isNaN(Number(month)) && day.length !== 2) ||
    Number.isNaN(Number(day))
  ) {
    return false;
  }

  const numYear = parseInt(year, 10);
  const numMonth = parseInt(month, 10);
  const numDay = parseInt(day, 10);

  if (numMonth < 1 || numMonth > 12 || numDay < 1 || numDay > 31) {
    return false;
  }

  const date = new Date(numYear, numMonth - 1, numDay);

  return (
    date.getFullYear() === numYear &&
    date.getMonth() === numMonth - 1 &&
    date.getDate() === numDay
  );
};

const Calendar = () => {
  const { day, year, month } = useParams();

  const { currentView } = useSelector(AppState);
  const { selectedDate } = useSelector(DateState);

  if (!isValidDate({ day, year, month })) {
    return <Navigate replace to="/not-found" />;
  }

  return (
    <Stack
      width="100%"
      height="100%"
      sx={{ maxHeight: "100%", overflow: "hidden" }}
    >
      {currentView === "month" && <Month selectedDate={selectedDate} />}
      {currentView === "day" && <Day selectedDate={selectedDate} />}
      {currentView === "week" && <Week selectedDate={selectedDate} />}
      {currentView === "year" && <Year />}
      {/* {currentView === "event" && (
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
      )} */}
    </Stack>
  );
};

export default Calendar;
