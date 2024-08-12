/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
/* eslint-disable multiline-ternary */
/* eslint-disable no-negated-condition */
/* eslint-disable react/no-array-index-key */
import React from "react";
import {
  format,
  addDays,
  isEqual,
  endOfWeek,
  endOfMonth,
  startOfDay,
  startOfWeek,
  startOfMonth,
} from "date-fns";

import { Box, Stack, Typography } from "@mui/material";

const YearLayout = ({ generatorDate }) => {
  const startDate = startOfWeek(startOfMonth(generatorDate), {
    weekStartsOn: 0,
  });
  const endDate = endOfWeek(endOfMonth(generatorDate), { weekStartsOn: 0 });
  const days = [];
  let day = startDate;

  // Generate all days from startDate to endDate
  while (day <= endDate) {
    days.push(day);
    day = addDays(day, 1);
  }

  // Define day names using date-fns format function
  const dayNames = Array.from({ length: 7 }).map((_, i) => {
    return (
      <Stack
        key={i}
        sx={{ width: "30px", height: "30px" }}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Typography sx={{ fontSize: "12px" }}>
          {
            format(
              addDays(startOfWeek(new Date(), { weekStartsOn: 0 }), i),
              "E"
            )[0]
          }
        </Typography>
      </Stack>
    );
  });

  return (
    <Stack>
      <Typography
        variant="body1"
        sx={{ px: 1, fontWeight: 600, fontSize: "16px" }}
      >
        {format(generatorDate, "MMMM")}
      </Typography>
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        gap={1}
        sx={{ py: 1 }}
      >
        {dayNames}
      </Stack>
      <Box
        component="div"
        sx={{
          py: 1,
          gap: 1,
          display: "grid",
          backgroundColor: "#fff",
          gridTemplateColumns: "repeat(7, 1fr)",
          gridTemplateRows: `repeat(${days.length > 35 ? 6 : 5}, 1fr)`,
        }}
      >
        {days.map((date) => {
          return (
            <Stack
              key={date.toISOString()}
              sx={{
                width: "30px",
                height: "30px",
                borderRadius: "100%",
                "&:hover": {
                  backgroundColor: "#00000020",
                },
                cursor:
                  format(date, "MM") === format(generatorDate, "MM")
                    ? "pointer"
                    : "not-allowed",
                backgroundColor: isEqual(
                  startOfDay(new Date()),
                  startOfDay(date)
                )
                  ? "#bde0fe"
                  : "none",
              }}
              direction="row"
              justifyContent="center"
              alignItems="center"
              flexShrink={0}
            >
              <Typography
                sx={{
                  fontSize: "12px",
                  color: !(format(date, "MM") === format(generatorDate, "MM"))
                    ? "#00000040"
                    : "none",
                }}
              >
                {format(date, "d")}
              </Typography>
            </Stack>
          );
        })}
      </Box>
    </Stack>
  );
};

export default YearLayout;
