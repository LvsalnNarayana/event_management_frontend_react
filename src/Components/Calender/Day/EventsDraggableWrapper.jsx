/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
import { addMinutes } from "date-fns";
/* eslint-disable import/no-extraneous-dependencies */
import React, { useMemo } from "react";
import { useDispatch } from "react-redux";
import { useSensor, useSensors, DndContext, MouseSensor } from "@dnd-kit/core";
import {
  createSnapModifier,
  restrictToVerticalAxis,
  restrictToParentElement,
} from "@dnd-kit/modifiers";

import { Stack } from "@mui/material";

import DayHoursLayout from "./DayHoursLayout";
import { updateEvent } from "../../../State/eventsState";

const EventsDraggableWrapper = ({ children }) => {
  const dispatch = useDispatch();
  const snapToGrid = useMemo(() => {
    return createSnapModifier(12);
  }, []);
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 1,
    },
  });
  const sensors = useSensors(mouseSensor);

  return (
    <Stack
      component="div"
      width="100%"
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      sx={{ position: "relative" }}
    >
      <DndContext
        onDragEnd={(event) => {
          dispatch(
            updateEvent({
              ...event?.active?.data?.current?.event,
              endTime: addMinutes(
                event.active.data.current.event.endTime,
                Math.round((event.delta.y * 60) / 48 / 15) * 15
              ).toUTCString(),
              startTime: addMinutes(
                event.active.data.current.event.startTime,
                Math.round((event.delta.y * 60) / 48 / 15) * 15
              ).toUTCString(),
            })
          );
        }}
        modifiers={[
          snapToGrid,
          restrictToParentElement,
          restrictToVerticalAxis,
        ]}
        sensors={sensors}
      >
        <DayHoursLayout>{children}</DayHoursLayout>
      </DndContext>
    </Stack>
  );
};

export default EventsDraggableWrapper;
