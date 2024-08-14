/* eslint-disable max-lines */
/* eslint-disable react/display-name */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-plusplus */
/* eslint-disable max-statements */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from "react";
import { getDay, format, startOfMonth, eachDayOfInterval } from "date-fns";

import { Select, MenuItem, Typography } from "@mui/material";

import CustomRecurrenceForm from "./CustomRecurrenceForm";

const RecurrenceSelector = ({ id, date, value, changeValue }) => {
  const [recurrenceDialogOpen, setRecurrenceDialogOpen] = useState(true);
  const getOrdinalDayOfMonth = (givenDate) => {
    const year = new Date(givenDate).getFullYear();
    const month = new Date(givenDate).getMonth();
    const targetWeekday = new Date(givenDate).getDay();

    const firstDayOfMonth = startOfMonth(new Date(year, month));

    const daysOfMonth = eachDayOfInterval({
      end: givenDate,
      start: firstDayOfMonth,
    });

    let occurrenceCount = 0;

    for (const day of daysOfMonth) {
      if (getDay(day) === targetWeekday) {
        occurrenceCount++;
      }
      if (day.getDate() === new Date(givenDate).getDate()) {
        break;
      }
    }

    const ordinalSuffix = (n) => {
      if (n % 10 === 1 && n % 100 !== 11) return "st";
      if (n % 10 === 2 && n % 100 !== 12) return "nd";
      if (n % 10 === 3 && n % 100 !== 13) return "rd";

      return "th";
    };
    const weekdayName = format(givenDate, "EEEE");

    return `${occurrenceCount}${ordinalSuffix(occurrenceCount)} ${weekdayName}`;
  };

  return (
    <>
      <Select
        id={id}
        displayEmpty
        value={value}
        MenuProps={{
          PaperProps: {
            elevation: 0,
            sx: {
              mt: 1,
              py: 0.4,
              maxHeight: "400px",
              backgroundColor: "#fff",
              border: "1px solid #ccc",
            },
          },
        }}
        onChange={(event) => {
          changeValue(event?.target?.value);
        }}
        sx={{
          width: "100%",
          "& .MuiSelect-select": {
            p: 0.85,
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderWidth: "1px",
          },
        }}
        size="small"
      >
        <MenuItem sx={{ p: 0.8 }} value="">
          <Typography
            sx={{
              fontSize: "13px",
              textTransform: "capitalize",
            }}
          >
            Does not repeat
          </Typography>
        </MenuItem>
        <MenuItem sx={{ p: 0.8 }} value="daily">
          <Typography
            sx={{
              fontSize: "13px",
              textTransform: "capitalize",
            }}
          >
            Daily
          </Typography>
        </MenuItem>
        <MenuItem sx={{ p: 0.8 }} value="weekly">
          <Typography
            sx={{
              fontSize: "13px",
              textTransform: "capitalize",
            }}
          >
            Weekly on {format(date, "EEEE")}
          </Typography>
        </MenuItem>
        <MenuItem sx={{ p: 0.8 }} value="monthly">
          <Typography
            sx={{
              fontSize: "13px",
              textTransform: "capitalize",
            }}
          >
            Monthly on {getOrdinalDayOfMonth(date)}
          </Typography>
        </MenuItem>
        <MenuItem sx={{ p: 0.8 }} value="yearly">
          <Typography
            sx={{
              fontSize: "13px",
              textTransform: "capitalize",
            }}
          >
            Yearly on {format(date, "MMM d")}
          </Typography>
        </MenuItem>
        <MenuItem
          sx={{ p: 0.8 }}
          value="custom"
          onClick={() => {
            return setRecurrenceDialogOpen(true);
          }}
        >
          <Typography
            sx={{
              fontSize: "13px",
              textTransform: "capitalize",
            }}
          >
            Custom
          </Typography>
        </MenuItem>
      </Select>
      <CustomRecurrenceForm
        open={recurrenceDialogOpen}
        onClose={(eventValue) => {
          return setRecurrenceDialogOpen(eventValue);
        }}
      />
    </>
  );
};

export default RecurrenceSelector;
