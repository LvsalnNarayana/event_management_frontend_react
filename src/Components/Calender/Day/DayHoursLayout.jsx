/* eslint-disable max-statements */
/* eslint-disable operator-linebreak */
import { setHours, setMinutes } from "date-fns";
/* eslint-disable react/no-array-index-key */
import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Stack, Divider, Typography } from "@mui/material";

import useData from "../../../Data/useData";
import { DateState } from "../../../State/dateState";
import { addEvent } from "../../../State/eventsState";

const DayHoursLayout = ({ children }) => {
  const { hours } = useData();
  const containerRef = useRef(null);
  const dispatch = useDispatch();
  const { selectedDate } = useSelector(DateState);

  const nineAmRef = useRef(null);

  useEffect(() => {
    if (containerRef.current && nineAmRef.current) {
      containerRef.current.scrollTop =
        nineAmRef.current.offsetTop - containerRef.current.offsetTop + 5;
    }
  }, [selectedDate]);

  return (
    <Stack
      ref={containerRef}
      width="100%"
      sx={{
        pr: 3,
        overflowY: "auto",
        position: "relative",
        height: "calc(100vh - 137px)",
      }}
    >
      {hours.map((hour, index) => {
        const isNineAm = hour === "9 AM";

        return (
          <Stack
            key={index}
            gap={0}
            component="div"
            onClick={(event) => {
              const target = event.currentTarget;
              const rect = target.getBoundingClientRect();
              const yPosition = event.clientY - rect.top;

              let hourInt = parseInt(hour.split(" ")[0], 10);

              if (hour.split(" ")[1].toLowerCase() === "pm") {
                hourInt += 12;
              }

              let startMinutes = 0;

              if (yPosition < 12) {
                startMinutes = 0;
              } else if (yPosition < 24) {
                startMinutes = 15;
              } else if (yPosition < 36) {
                startMinutes = 30;
              } else if (yPosition < 48) {
                startMinutes = 45;
              }

              dispatch(
                addEvent({
                  title: "",
                  description: "",
                  endTime: setMinutes(
                    setHours(selectedDate, hourInt),
                    startMinutes,
                  ).toUTCString(),
                  startTime: setMinutes(
                    setHours(selectedDate, hourInt - 1),
                    startMinutes,
                  ).toUTCString(),
                }),
              );
            }}
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
      <>{children}</>
    </Stack>
  );
};

export default DayHoursLayout;
