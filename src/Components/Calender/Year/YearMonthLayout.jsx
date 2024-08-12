/* eslint-disable max-statements */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
/* eslint-disable multiline-ternary */
/* eslint-disable no-negated-condition */
/* eslint-disable react/no-array-index-key */
import React, { useState } from "react";
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

import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import {
  Box,
  Slide,
  Stack,
  Popover,
  Typography,
  IconButton,
} from "@mui/material";

const YearMonthLayout = ({ generatorDate }) => {
  const [popoverDate, setPopoverDate] = useState(null);
  const [eventsListAnchor, setEventsListAnchor] = useState(null);
  const eventsListOpen = Boolean(eventsListAnchor);

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
        <Typography sx={{ fontWeight: 600, fontSize: "12px" }}>
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

  const handleClick = (event, date) => {
    if (format(date, "MM") === format(generatorDate, "MM")) {
      setEventsListAnchor(event.currentTarget);
      setPopoverDate(date);
    }
  };

  const handleClose = () => {
    setEventsListAnchor(null);
    setPopoverDate(null);
  };

  return (
    <Stack spacing={2}>
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
        gap={0.7}
        sx={{ py: 1 }}
      >
        {dayNames}
      </Stack>
      <Box
        component="div"
        sx={{
          py: 1,
          gap: 0.7,
          display: "grid",
          backgroundColor: "#fff",
          gridTemplateColumns: "repeat(7, 1fr)",
          gridTemplateRows: `repeat(${days.length > 35 ? 6 : 5}, 1fr)`,
        }}
      >
        {days.map((date) => {
          return (
            <Stack
              component="div"
              key={date.toISOString()}
              onClick={(event) => {
                return handleClick(event, date);
              }}
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
                  color:
                    format(date, "MM") === format(generatorDate, "MM")
                      ? "black"
                      : "#00000040",
                }}
              >
                {format(date, "d")}
              </Typography>
            </Stack>
          );
        })}
      </Box>
      <Popover
        disablePortal
        TransitionComponent={Slide}
        TransitionProps={{ direction: "up" }}
        open={eventsListOpen}
        anchorEl={eventsListAnchor}
        onClose={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            width: "200px",
            height: "auto",
            backgroundColor: "white",
            border: "1px solid #ccc",
          },
        }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        {popoverDate && (
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            gap={1}
            sx={{ p: 2 }}
          >
            <Stack
              width="100%"
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography
                variant="body1"
                sx={{ fontSize: "16px", textTransform: "uppercase" }}
              >
                {format(popoverDate, "EEEE")}
              </Typography>
              <IconButton onClick={handleClose}>
                <CloseOutlinedIcon />
              </IconButton>
            </Stack>
            <Typography
              variant="body1"
              sx={{
                width: "50px",
                height: "50px",
                color: "white",
                display: "flex",
                fontSize: "26px",
                alignItems: "center",
                borderRadius: "100%",
                justifyContent: "center",
                backgroundColor: "indigo",
              }}
            >
              {format(popoverDate, "d")}
            </Typography>
          </Stack>
        )}
      </Popover>
    </Stack>
  );
};

export default YearMonthLayout;
