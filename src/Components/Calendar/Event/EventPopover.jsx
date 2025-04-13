import React from "react";

import { Slide, Popover } from "@mui/material";

const EventPopover = ({ id, open, anchor, onClose, children }) => {
  return (
    <Popover
      disablePortal
      TransitionComponent={Slide}
      TransitionProps={{ direction: "up" }}
      id={`${id}_popper`}
      open={open}
      anchorEl={anchor || null}
      onClose={onClose}
      BackdropProps={{
        autoFocus: false,
        sx: {
          backgroundColor: "transparent",
        },
      }}
      PaperProps={{
        elevation: 0,
        sx: {
          width: "450px",
          borderRadius: 2,
          overflow: "hidden",
          backgroundColor: "white",
          border: "1px solid #ccc",
        },
      }}
      anchorOrigin={{
        vertical: "center",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
    >
      {children}
    </Popover>
  );
};

export default EventPopover;
