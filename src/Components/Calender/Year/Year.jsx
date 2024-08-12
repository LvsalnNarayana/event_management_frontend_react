/* eslint-disable react/jsx-no-useless-fragment */
import React from "react";
import { useSelector } from "react-redux";
import { addMonths, startOfYear } from "date-fns";

import { Stack } from "@mui/material";
import { DateCalendar } from "@mui/x-date-pickers";

import { DateState } from "../../../State/dateState";
import YearLayout from "./YearLayout";

const Year = () => {
  const { selectedDate } = useSelector(DateState);

  return (
    <Stack
      gap={3}
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      flexWrap="wrap"
      sx={{ height: "calc(100vh - 136px)" }}
    >
      {Array.from({ length: 12 }, (_, i) => {
        // Calculate the month for each DateCalendar
        return (
          <YearLayout
            key={i}
            generatorDate={
              new Date(addMonths(startOfYear(selectedDate), i).toString())
            }
          />
        );
      })}
    </Stack>
  );
};

export default Year;
