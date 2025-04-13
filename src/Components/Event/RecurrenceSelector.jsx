/* eslint-disable max-lines */
/* eslint-disable react/display-name */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-plusplus */
/* eslint-disable max-statements */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from "react";
import { getDay, format, startOfMonth, eachDayOfInterval } from "date-fns";

import RepeatIcon from "@mui/icons-material/Repeat";

import CustomRecurrenceForm from "./CustomRecurrenceForm";
import CustomSelectInput from "../Shared/inputs/CustomSelectInput";

const RecurrenceSelector = ({ id, date, value, changeValue }) => {
  const [recurrenceDialogOpen, setRecurrenceDialogOpen] = useState(false);
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
      <CustomSelectInput
        name={id}
        value={value}
        changeValue={changeValue}
        options={[
          {
            value: "no-repeat",
            name: "Does not repeat",
          },
          {
            name: "Daily",
            value: "daily",
          },
          {
            value: "weekly",
            name: `Weekly on ${format(date, "EEEE")}`,
          },
          {
            value: "monthly",
            name: `Monthly on ${getOrdinalDayOfMonth(date)}`,
          },
          {
            value: "yearly",
            name: `Yearly on ${format(date, "MMM d")}`,
          },
        ]}
        icon={<RepeatIcon fontSize="small" />}
      />
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
