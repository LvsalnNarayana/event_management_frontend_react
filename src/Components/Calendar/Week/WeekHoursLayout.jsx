/* eslint-disable multiline-ternary */
/* eslint-disable max-statements */
/* eslint-disable react/no-array-index-key */
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { format, addDays, getDate, isSameDay, startOfWeek } from "date-fns";

import { Stack, Divider, Typography } from "@mui/material";

import useData from "../../../Data/useData";
import { DateState } from "../../../State/dateState";

const WeekHoursLayout = () => {
  const { hours } = useData();
  const { selectedDate } = useSelector(DateState);
  // Compute the week days (starting from Sunday) from selectedDate
  const weekDays = useMemo(() => {
    const start = startOfWeek(new Date(selectedDate), { weekStartsOn: 0 });

    return Array.from({ length: 7 }, (_, i) => {
      return addDays(start, i);
    });
  }, [selectedDate]);

  return (
    <Stack width="100%" height="100%">
      <Stack
        pl="40px"
        ml={1}
        pr={2}
        width="100%"
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        height="fit-content"
      >
        {weekDays?.map((week, index) => {
          return (
            <Stack
              gap={1}
              width="100%"
              justifyContent="center"
              alignItems="center"
              key={index}
            >
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                flexShrink={0}
                sx={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "100%",
                  backgroundColor: isSameDay(selectedDate, week)
                    ? "#1434A4"
                    : "transparent",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "20px",
                    color: isSameDay(selectedDate, week) ? "#fff" : "black",
                  }}
                >
                  {getDate(week)}
                </Typography>
              </Stack>
              <Typography textAlign="center">{format(week, "eee")}</Typography>
            </Stack>
          );
        })}
      </Stack>
      <Stack
        direction="row"
        width="100%"
        sx={{
          pr: 1,
          height: "100%",
          overflowY: "auto",
          overflowX: "hidden",
          position: "relative",
        }}
      >
        <Stack width="fit-content">
          {hours.map((hour, index) => {
            return (
              <Stack
                key={index}
                gap={0}
                flexShrink={0}
                component="div"
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-end"
                width="100%"
                height={48}
                mr={1}
                sx={{ userSelect: "none", position: "relative" }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    flexShrink: 0,
                    width: "40px",
                    fontWeight: 600,
                    display: "flex",
                    fontSize: "10px",
                    textAlign: "right",
                    color: "#00000080",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    mb: index === (hours?.length || 0) - 0.5 ? 0 : -0.5,
                  }}
                >
                  {hour}
                </Typography>
              </Stack>
            );
          })}
        </Stack>
        {weekDays?.map((week, weekIndex) => {
          return (
            <Stack width="100%" key={weekIndex}>
              {hours.map((hour, index) => {
                return (
                  <Stack
                    key={index}
                    gap={0}
                    flexShrink={0}
                    component="div"
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="flex-end"
                    width="100%"
                    sx={{ userSelect: "none", position: "relative" }}
                  >
                    <Divider
                      orientation="vertical"
                      sx={{ ml: 0, height: "48px" }}
                    />
                    <Divider sx={{ ml: 0, flexGrow: 1 }} />
                  </Stack>
                );
              })}
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default WeekHoursLayout;
