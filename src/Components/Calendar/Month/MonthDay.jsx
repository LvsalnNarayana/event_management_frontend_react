/* eslint-disable multiline-ternary */
/* eslint-disable no-negated-condition */
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { isEqual, startOfDay } from "date-fns";

import { CloseOutlined } from "@mui/icons-material";
import { Stack, Popover, Typography, IconButton } from "@mui/material";

import EventForm from "../../Event/EventForm";
import { DateState } from "../../../State/dateState";
import { getRandomColor } from "../../../Utils/generateEventColor";

// Create an array of day names
const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const MonthDay = ({ date, index, isLeft, isTopRow, isCurrentMonth }) => {
  const [eventMenuAnchor, setEventMenuAnchor] = useState(null);
  const eventMenuOpen = Boolean(eventMenuAnchor);

  const handleEventMenuClick = (event) => {
    setEventMenuAnchor(event.currentTarget);
  };
  const handleEventMenuClose = () => {
    setEventMenuAnchor(null);
  };
  const { selectedDate } = useSelector(DateState);
  const isSelectedDate = isEqual(startOfDay(selectedDate), startOfDay(date));
  const events = [
    { id: 1, title: "Travel to somewhere" },
    { id: 2, title: "Meeting with Team" },
    { id: 3, title: "Doctor Appointment" },
    { id: 4, title: "Lunch with Sarah" },
    { id: 5, title: "Grocery Shopping" },
    { id: 6, title: "Workout Session" },
    { id: 7, title: "Read a Book" },
    { id: 8, title: "Project Deadline" },
  ];

  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      sx={{
        p: 0.5,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        borderRight: "1px solid #dadce0",
        borderBottom: "1px solid #dadce0",
        borderLeft: isLeft ? "1px solid #dadce0" : "none",
        backgroundColor: !isCurrentMonth
          ? "#00000010"
          : isSelectedDate
            ? "#bde0fe70"
            : "none",
      }}
    >
      {isTopRow && (
        <Typography
          variant="caption"
          sx={{
            width: "100%",
            fontWeight: 500,
            fontSize: "12px",
            textAlign: "center",
            paddingBottom: "5px",
          }}
        >
          {dayNames[index % 7]}
        </Typography>
      )}
      <Typography
        variant="body1"
        sx={{ width: "100%", fontSize: "12px", textAlign: "center" }}
      >
        <span>{date.getDate()}</span>
      </Typography>
      {date.getDate() === 15 && (
        <Stack
          flexGrow={1}
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          width="100%"
          sx={{ overflowY: "auto" }}
        >
          {events.slice(0, 2).map((event) => {
            return (
              <Typography
                onClick={(e) => {
                  return handleEventMenuClick(e);
                }}
                key={event.id}
                sx={{
                  px: 2,
                  py: 0.5,
                  mb: 0.5,
                  width: "100%",
                  borderRadius: 1,
                  fontSize: "11px",
                  cursor: "pointer",
                  color: `#${getRandomColor().text}`,
                  backgroundColor: `#${getRandomColor().background}`,
                }}
              >
                {event.title}
              </Typography>
            );
          })}
        </Stack>
      )}
      <Popover
        open={eventMenuOpen}
        anchorEl={eventMenuAnchor}
        onClose={handleEventMenuClose}
        anchorOrigin={{
          vertical: "center",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "right",
        }}
        PaperProps={{
          elevation: 5,
          sx: {
            p: 2,
            ml: -2,
            width: "400px",
            borderRadius: 2,
            backgroundColor: "#fff",
            border: "1px solid #ccc",
          },
        }}
      >
        <Stack>
          <Stack direction="row" justifyContent="flex-end" alignItems="center">
            <IconButton onClick={handleEventMenuClose} disableRipple>
              <CloseOutlined fontSize="small" />
            </IconButton>
          </Stack>
          <EventForm />
        </Stack>
      </Popover>
    </Stack>
  );
};

export default MonthDay;
