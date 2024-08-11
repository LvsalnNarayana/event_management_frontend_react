/* eslint-disable multiline-ternary */
/* eslint-disable prefer-arrow-callback */
import React, { forwardRef } from "react";

import { Stack, Typography } from "@mui/material";

const Draggable = forwardRef(function Draggable(
  { label, style, handle, dragging, listeners, transform, ...props },
  ref
) {
  return (
    <Stack
      role="button"
      {...listeners}
      {...props}
      ref={ref}
      tabIndex={0}
      style={{
        ...style,
        cursor: "grabbing",
        position: "relative",
        width: "fit-content",
        transition: "transform 250ms ease",
        "--translate-x": `${transform?.x ?? 0}px`,
        "--translate-y": `${transform?.y ?? 0}px`,
      }}
    >
      <Typography
        variant="body2"
        sx={{
          transition: "box-shadow 300ms ease",
          transform: `
          translate3d(var(--translate-x, 0), var(--translate-y, 0), 0)
          scale(var(--scale, 1))
        `,
        }}
      >
        This is a draggable text
      </Typography>
    </Stack>
  );
});

export default Draggable;
