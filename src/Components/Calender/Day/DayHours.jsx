/* eslint-disable operator-linebreak */
import { useSelector } from "react-redux";
/* eslint-disable react/no-array-index-key */
import React, { useRef, useEffect } from "react";
import { getDate, getYear, getMonth } from "date-fns";

import { Stack, Divider, Typography } from "@mui/material";

import DayEvent from "./DayEvent";
import useData from "../../../Data/useData";
import { DateState } from "../../../State/dateState";
import { selectEvents } from "../../../State/eventsSlice";

const DayHours = () => {
  const { hours } = useData();
  const containerRef = useRef(null);
  const { selectedDate } = useSelector(DateState);

  const nineAmRef = useRef(null);

  const events = useSelector(selectEvents);

  useEffect(() => {
    if (containerRef.current && nineAmRef.current) {
      containerRef.current.scrollTop =
        nineAmRef.current.offsetTop - containerRef.current.offsetTop + 5;
    }
  }, []);

  return (
    <Stack
      ref={containerRef}
      width="100%"
      sx={{
        pr: 3,
        overflowY: "auto",
        position: "relative",
        height: "calc(100vh - 136px)",
      }}
    >
      {hours.map((hour, index) => {
        const isNineAm = hour === "9 AM";

        return (
          <Stack
            key={index}
            gap={0}
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-end"
            width="100%"
            sx={{ userSelect: "none", position: "relative" }}
            ref={isNineAm ? nineAmRef : null}
          >
            <Typography
              variant="body1"
              sx={{
                mb: -1,
                flexShrink: 0,
                width: "53px",
                fontWeight: 600,
                display: "flex",
                fontSize: "10px",
                textAlign: "right",
                color: "#00000080",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              {hour}
            </Typography>
            <Divider orientation="vertical" sx={{ ml: 3, height: "48px" }} />
            <Divider sx={{ ml: -2.5, flexGrow: 1 }} />
          </Stack>
        );
      })}
      {events
        ?.filter((event) => {
          return (
            getMonth(event.startTime) === getMonth(selectedDate) &&
            getDate(event.startTime) === getDate(selectedDate) &&
            getYear(event.startTime) === getYear(selectedDate)
          );
        })
        ?.map((event, index) => {
          return <DayEvent key={index} event={event} />;
        })}
    </Stack>
  );
};

export default DayHours;
