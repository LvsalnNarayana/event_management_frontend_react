/* eslint-disable operator-linebreak */
/* eslint-disable max-statements */
import React, { useMemo } from "react";
import { useSensor, useSensors, DndContext, MouseSensor } from "@dnd-kit/core";
import {
  createSnapModifier,
  restrictToVerticalAxis,
  restrictToFirstScrollableAncestor,
} from "@dnd-kit/modifiers";

import { Stack } from "@mui/material";

import DayHoursLayout from "./DayHoursLayout";

const EventsDraggableWrapper = ({ children }) => {
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
      flexGrow={1}
      height="100%  "
      maxHeight="100%"
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      sx={{
        overflowX: "hidden",
        position: "relative",
      }}
    >
      <DndContext
        autoScroll={{
          acceleration: 2,
          layoutShiftCompensation: true,
        }}
        modifiers={[
          snapToGrid,
          restrictToFirstScrollableAncestor,
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
