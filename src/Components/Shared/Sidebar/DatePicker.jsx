/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { DateCalendar } from "@mui/x-date-pickers";

import { setDate, DateState } from "../../../State/dateState";

const DatePicker = () => {
  const dispatch = useDispatch();
  const { selectedDate } = useSelector(DateState);

  const handleChange = (event) => {
    dispatch(setDate(event));
  };

  return (
    <DateCalendar
      value={selectedDate}
      onChange={(event) => {
        return handleChange(event);
      }}
      onMonthChange={(event) => {
        console.log("month change", event);
      }}
      sx={{
        width: "280px",
        "& .Mui-selected": {
          color: "black !important",
          backgroundColor: "#1434A420 !important",
        },
        "& .Mui-selected:hover": {
          color: "black !important",
          backgroundColor: "#1434A430 !important",
        },
        "& .MuiPickersDay-today": {
          border: "none",
          color: "white",
          backgroundColor: "#1434A4",
        },
        "& .MuiPickersDay-today:hover": {
          border: "none",
          color: "white",
          backgroundColor: "#1434A4",
        },
      }}
      views={["day"]}
    />
  );
};

export default DatePicker;
