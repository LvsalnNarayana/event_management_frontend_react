/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-no-useless-fragment */
import React from "react";
import { useSelector } from "react-redux";
import { addMonths, startOfYear } from "date-fns";

import { Stack } from "@mui/material";

import YearLayout from "./YearMonthLayout";
import { DateState } from "../../../State/dateState";

const Year = () => {
  const { selectedDate } = useSelector(DateState);

  return (
    <Stack
      gap={4}
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      flexWrap="wrap"
      sx={{ p: 2, height: "100%" }}
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
