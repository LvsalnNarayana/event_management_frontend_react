import React from "react";
import { useDispatch } from "react-redux";

import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Stack, Button, Divider, IconButton } from "@mui/material";

import EventForm from "../../Event/EventForm";

const EventCreationForm = ({ onClose }) => {
  const dispatch = useDispatch();

  return (
    <Stack
      sx={{
        height: "100%",
        display: "flex",
        maxHeight: "500px",
        overflowY: "hidden",
        flexDirection: "column",
      }}
    >
      <Stack
        p={1}
        gap={0.5}
        sx={{ width: "100%" }}
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
      >
        <IconButton onClick={onClose}>
          <CloseOutlinedIcon fontSize="small" />
        </IconButton>
      </Stack>

      <Stack
        sx={{
          py: 0.5,
          flexGrow: 1,
          width: "100%",
          overflowY: "auto",
        }}
      >
        <EventForm />
      </Stack>
      <Divider />
      <Stack
        p={1}
        gap={0.5}
        sx={{ width: "100%" }}
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
      >
        <Button
          variant="contained"
          size="small"
          disableElevation
          disableRipple
          disableFocusRipple
          disableTouchRipple
          onClick={onClose}
        >
          Save
        </Button>
      </Stack>
    </Stack>
  );
};

export default EventCreationForm;
