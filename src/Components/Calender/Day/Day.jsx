/* eslint-disable operator-linebreak */
/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-extraneous-dependencies */

import React from "react";
import { useSelector } from "react-redux";
import { getDate, getYear, getMonth } from "date-fns";

import { Stack, Divider, Typography } from "@mui/material";

import Event from "../Event/Event";
import { selectEvents } from "../../../State/eventsState";
import EventsDraggableWrapper from "./EventsDraggableWrapper";

const Day = ({ selectedDate }) => {
  const events = useSelector(selectEvents);

  return (
    <>
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        width="100%"
        sx={{
          pt: 1,
          px: 2,
          top: 0,
          zIndex: 1000,
          height: "100%",
          position: "sticky",
          backgroundColor: "white",
        }}
      >
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          flexShrink={0}
          sx={{
            mb: 1,
            ml: 11,
            width: "50px",
            height: "50px",
            borderRadius: "100%",
            backgroundColor: "#1434A4",
          }}
        >
          <Typography sx={{ color: "white", fontSize: "26px" }}>
            {getDate(selectedDate)}
          </Typography>
        </Stack>
        <Stack
          gap={0.5}
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          width="100%"
        >
          <Typography
            variant="body1"
            sx={{
              flexShrink: 0,
              width: "53px",
              fontSize: "10px",
              textAlign: "right",
              color: "#00000080",
            }}
          >
            GMT+5:30
          </Typography>
          <Divider sx={{ flexGrow: 1 }} />
        </Stack>
      </Stack>
      <EventsDraggableWrapper>
        {events
          ?.filter((event) => {
            return (
              getMonth(event.startTime) === getMonth(selectedDate) &&
              getDate(event.startTime) === getDate(selectedDate) &&
              getYear(event.startTime) === getYear(selectedDate)
            );
          })
          ?.map((event, index) => {
            return <Event key={index} event={event} eventType="day" />;
          })}
      </EventsDraggableWrapper>
    </>
  );
};

export default Day;
