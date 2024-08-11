/* eslint-disable operator-linebreak */
/* eslint-disable no-shadow */
/* eslint-disable no-negated-condition */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from "react";
import { restrictToParentElement } from "@dnd-kit/modifiers";
import {
  useSensor,
  DndContext,
  useSensors,
  MouseSensor,
  TouchSensor,
  useDraggable,
  KeyboardSensor,
} from "@dnd-kit/core";

import { Stack } from "@mui/material";

import Draggable from "./Draggable/Draggable";

const DraggableItem = ({
  top,
  axis,
  left,
  label,
  style,
  handle,
  buttonStyle,
}) => {
  const { listeners, transform, attributes, isDragging, setNodeRef } =
    useDraggable({
      id: "draggable",
    });

  return (
    <Draggable
      ref={setNodeRef}
      dragging={isDragging}
      handle={handle}
      label={label}
      listeners={listeners}
      style={{
        ...style,
        top,
        left,
      }}
      buttonStyle={buttonStyle}
      transform={transform}
      axis={axis}
      {...attributes}
    />
  );
};

const Playground = ({
  style,
  handle,
  modifiers,
  buttonStyle,
  activationConstraint,
  label = "Go ahead, drag me.",
}) => {
  const [{ x, y }, setCoordinates] = useState({ x: 0, y: 0 });

  // Set up sensors for mouse, touch, and keyboard interactions
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint,
  });
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint,
  });
  const keyboardSensor = useSensor(KeyboardSensor, {});
  const sensors = useSensors(mouseSensor, touchSensor, keyboardSensor);

  // Handle the end of a drag action
  const handleDragEnd = ({ delta }) => {
    setCoordinates(({ x, y }) => {
      return {
        x: x + delta.x,
        y: y + delta.y,
      };
    });
  };

  return (
    <Stack
      sx={{
        width: "500px",
        height: "500px",
        borderRadius: 3,
        border: "1px solid #ccc",
      }}
    >
      <DndContext
        sensors={sensors}
        onDragEnd={handleDragEnd}
        modifiers={[restrictToParentElement]}
      >
        <DraggableItem
          axis="both"
          label={label}
          handle={handle}
          top={y}
          left={x}
          style={style}
          buttonStyle={buttonStyle}
        />
      </DndContext>
    </Stack>
  );
};

export default Playground;
