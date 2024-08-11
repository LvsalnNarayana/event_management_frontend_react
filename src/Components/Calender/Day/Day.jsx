/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-extraneous-dependencies */

import React from "react";

import { Stack, Divider, Typography } from "@mui/material";

import EventsDraggableWrapper from "./EventsDraggableWrapper";

const Day = ({ selectedDate }) => {
  return (
    <>
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        width="100%"
        sx={{
          pt: 1,
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
            {selectedDate.getDate()}
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
            GMT 5:30+
          </Typography>
          <Divider sx={{ flexGrow: 1 }} />
        </Stack>
      </Stack>
      <EventsDraggableWrapper />
    </>
  );
};

export default Day;
