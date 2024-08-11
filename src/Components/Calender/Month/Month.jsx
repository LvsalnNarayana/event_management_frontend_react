/* eslint-disable import/no-unresolved */
/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import {
  format,
  addDays,
  endOfWeek,
  endOfMonth,
  startOfWeek,
  startOfMonth,
} from "date-fns";

import MonthDay from "./MonthDay";

const Month = ({ selectedDate }) => {
  const startDate = startOfWeek(startOfMonth(selectedDate), {
    weekStartsOn: 0,
  });
  const endDate = endOfWeek(endOfMonth(selectedDate), { weekStartsOn: 0 });
  const days = [];
  let day = startDate;

  while (day <= endDate) {
    days.push(day);
    day = addDays(day, 1);
  }

  return (
    <section
      className="content"
      style={{
        gridGap: "0px",
        display: "grid",
        backgroundColor: "#fff",
        padding: " 0px 7px 7px 0px",
        width: "calc(100vw - 300px)",
        height: "calc(100vh - 60px)",
        gridTemplateColumns: "repeat(7, 1fr)",
        gridTemplateRows: `repeat(${days.length > 35 ? 6 : 5}, 1fr)`,
      }}
    >
      {days.map((date, index) => {
        return (
          <MonthDay
            key={index}
            index={index}
            date={date}
            isTopRow={index < 7}
            isLeft={index % 7 === 0}
            isCurrentMonth={format(date, "MM") === format(selectedDate, "MM")}
          />
        );
      })}
    </section>
  );
};

export default Month;
