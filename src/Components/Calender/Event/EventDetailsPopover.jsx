import React from "react";
import { format } from "date-fns";

/*
 *.##.....##.##.....##.####
 *.###...###.##.....##..##.
 *.####.####.##.....##..##.
 *.##.###.##.##.....##..##.
 *.##.....##.##.....##..##.
 *.##.....##.##.....##..##.
 *.##.....##..#######..####
 */
import NotesIcon from "@mui/icons-material/Notes";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { Stack, Slide, Popover, Typography, IconButton } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import InsertInvitationOutlinedIcon from "@mui/icons-material/InsertInvitationOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

const EventDetailsPopover = ({ id, open, event, anchor, onClose }) => {
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
          height: "auto",
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
      <Stack
        gap={2}
        sx={{ p: 2 }}
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Stack
          gap={0.5}
          sx={{ width: "100%" }}
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
        >
          <IconButton>
            <EditOutlinedIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <DeleteOutlineOutlinedIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <MoreVertOutlinedIcon fontSize="small" />
          </IconButton>
          <IconButton onClick={onClose}>
            <CloseOutlinedIcon fontSize="small" />
          </IconButton>
        </Stack>
        <Stack
          gap={3}
          sx={{ px: 2 }}
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <div
            style={{
              width: "20px",
              flexShrink: 0,
              marginTop: 10,
              height: "20px",
              borderRadius: 5,
              backgroundColor: "#ff000070",
            }}
          />
          <Stack
            gap={0.5}
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <Typography variant="h6">{event?.title}</Typography>
            <Typography variant="body1" sx={{ fontSize: "14px" }}>
              {format(event.startTime, "EEEE, MMMM dd, yyyy, hh:mm aa")} -{" "}
              {format(event.endTime, "hh:mm aa")}
            </Typography>
          </Stack>
        </Stack>
        <Typography
          sx={{
            gap: 3,
            display: "flex",
            fontSize: "14px",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <NotificationsNoneOutlinedIcon />
          {`${event?.description?.length > 40 ? `${event?.description?.substring(0, 40)}...` : event?.description || ""}`}
        </Typography>
        <Typography
          sx={{
            gap: 3,
            display: "flex",
            fontSize: "14px",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <NotesIcon />
          30 minutes before
        </Typography>
        <Typography
          sx={{
            gap: 3,
            display: "flex",
            fontSize: "14px",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <InsertInvitationOutlinedIcon />
          Narayana Lvsaln
        </Typography>
      </Stack>
    </Popover>
  );
};

export default EventDetailsPopover;
