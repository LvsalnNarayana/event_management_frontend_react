/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-lines */
/* eslint-disable multiline-ternary */
/* eslint-disable operator-linebreak */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
/* eslint-disable no-negated-condition */
/* eslint-disable no-shadow */
/* eslint-disable max-statements */
/* eslint-disable complexity */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import { useDispatch } from "react-redux";
import { ResizableBox } from "react-resizable";
import { DragOverlay, useDraggable } from "@dnd-kit/core";
import React, { useRef, useState, useEffect } from "react";
import {
  format,
  getHours,
  getMinutes,
  addMinutes,
  differenceInMinutes,
} from "date-fns";

import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import InsertInvitationOutlinedIcon from "@mui/icons-material/InsertInvitationOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import {
  Stack,
  Slide,
  Button,
  Popover,
  Typography,
  IconButton,
} from "@mui/material";

import { updateEvent } from "../../../State/eventsSlice";

const DayEvent = ({ event }) => {
  const resizeRef = useRef(null);
  const dispatch = useDispatch();
  const [top, setTop] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [resizing, setResizing] = useState(false);
  const [handleActive, setHandleActive] = useState(false);
  const [eventPopupAnchor, setEventPopupAnchor] = useState(null);
  const [eventColorAnchor, setEventColorAnchor] = useState(null);
  const eventPopupOpen = Boolean(eventPopupAnchor);
  const eventColorOpen = Boolean(eventColorAnchor);

  const { listeners, transform, attributes, isDragging, setNodeRef } =
    useDraggable({
      id: event?.eventId,
      data: event,
    });

  useEffect(() => {
    if (resizeRef.current) {
      setWidth(resizeRef.current.clientWidth || 0);
    }
  }, []);

  useEffect(() => {
    if (resizeRef.current) {
      const pixelsPerMinute = 48 / 60;

      setHeight(
        differenceInMinutes(event.endTime, event.startTime) * pixelsPerMinute
      );
    }
  }, [event?.endTime, event?.startTime]);

  useEffect(() => {
    if (resizeRef.current) {
      const pixelsPerMinute = 48 / 60;
      const totalMinutes =
        getHours(event.startTime) * 60 + getMinutes(event.startTime);

      setTop(totalMinutes * pixelsPerMinute || 0);
    }
  }, [event.startTime]);

  const handleResizeStart = () => {
    return setResizing(true);
  };

  const handleResize = (eventData, { size }) => {
    eventData.stopPropagation();
    eventData.preventDefault();
    setHeight(size.height > 20 ? size.height : 12);
  };

  const handleResizeStop = (eventData, { size }) => {
    const newEndTime = addMinutes(
      event.startTime,
      Math.round(((size.height > 20 ? size.height : 15) * 60) / 48 / 15) * 15
    ).toUTCString();

    dispatch(
      updateEvent({
        ...event,
        endTime: newEndTime,
      })
    );

    setTimeout(() => {
      setResizing(false);
    }, 500);
  };

  const handlePopoverClose = () => {
    return setEventPopupAnchor(null);
  };
  const handleColorPopoverClose = () => {
    return setEventColorAnchor(null);
  };

  return (
    <>
      {!isDragging && (
        <Stack
          component="div"
          ref={(elemNode) => {
            setNodeRef(elemNode);
            resizeRef.current = elemNode;
          }}
          {...(!handleActive ? listeners : {})}
          {...attributes}
          onClick={(event) => {
            if (!handleActive && !resizing && !isDragging) {
              setEventPopupAnchor(event.currentTarget);
            }
          }}
          onContextMenu={(event) => {
            event.preventDefault();
            if (!handleActive && !resizing && !isDragging) {
              setEventColorAnchor(event.currentTarget);
            }
          }}
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          width="92.5%"
          sx={{
            height,
            left: "85px",
            borderRadius: 1,
            overflow: "hidden",
            position: "absolute",
            backgroundColor: "indigo",
            transition: "box-shadow 300ms ease",
            cursor: isDragging ? "move" : resizing ? "n-resize" : "pointer",
            boxShadow: resizing
              ? "0px 0px 15px 0px rgba(0, 0, 0, 0.2)"
              : "none",
            transform: `translate3d(${transform?.x ?? 0}px, ${transform?.y ?? 0}px, 0) scale(var(--scale, 1))`,
            top: `${((getHours(event.startTime) * 60 + getMinutes(event.startTime)) * 48) / 60 + (transform?.y ?? 0)}px`,
          }}
        >
          <ResizableBox
            axis="y"
            height={height}
            width={width}
            maxConstraints={[width, 1440 - top]}
            draggableOpts={{
              grid: [width, 12],
            }}
            onResizeStart={handleResizeStart}
            onResize={handleResize}
            onResizeStop={handleResizeStop}
            resizeHandles={["se"]}
            handle={
              <span
                onClick={(event) => {
                  event.stopPropagation();
                  event.preventDefault();
                }}
                onMouseOver={(event) => {
                  event.stopPropagation();
                  event.preventDefault();

                  return setHandleActive(true);
                }}
                onMouseOut={(event) => {
                  event.stopPropagation();
                  event.preventDefault();

                  return setHandleActive(false);
                }}
                onMouseDown={(event) => {
                  event.stopPropagation();
                  event.preventDefault();

                  return setHandleActive(true);
                }}
                onMouseUp={(event) => {
                  event.stopPropagation();
                  event.preventDefault();

                  return setHandleActive(false);
                }}
                style={{
                  right: 0,
                  bottom: 0,
                  zIndex: 9999,
                  width: "100%",
                  cursor: "s-resize",
                  marginBottom: "5px",
                  position: "absolute",
                  height: "min(30%,20px)",
                  backgroundColor: "transparent",
                }}
              />
            }
          >
            <Typography
              variant="body1"
              onClick={(event) => {
                if (!handleActive) {
                  setEventPopupAnchor(event.currentTarget);
                }
              }}
              sx={{
                left: 10,
                flexGrow: 1,
                color: "white",
                position: "absolute",
                top: height > 48 ? 20 : "50%",
                transform: "translateY(-50%)",
                fontSize: height > 20 ? "12px" : "10px",
              }}
            >
              {event?.title} - (
              {format(
                addMinutes(event.startTime, ((transform?.y ?? 0) * 60) / 48),
                "hh:mm aa"
              )}
              to{" "}
              {format(
                addMinutes(event.startTime, (height * 60) / 48),
                "hh:mm aa"
              )}
              )
            </Typography>
          </ResizableBox>
        </Stack>
      )}
      <DragOverlay
        dropAnimation={{
          duration: 500,
          easing: "cubic-bezier(0.18, 0.67, 0.6, 1.22)",
        }}
      >
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          width="92.5%"
          onClick={(event) => {
            if (!handleActive) {
              setEventPopupAnchor(event.currentTarget);
            }
          }}
          sx={{
            width,
            height,
            borderRadius: 1,
            overflow: "hidden",
            position: "absolute",
            backgroundColor: "indigo",
            transition: "box-shadow 300ms ease",
            cursor: isDragging ? "move" : "pointer",
          }}
        >
          <Typography
            variant="body1"
            onClick={(event) => {
              if (!handleActive) {
                setEventPopupAnchor(event.currentTarget);
              }
            }}
            sx={{
              left: 10,
              flexGrow: 1,
              color: "white",
              position: "absolute",
              top: height > 48 ? 20 : "50%",
              transform: "translateY(-50%)",
              fontSize: height > 20 ? "12px" : "10px",
            }}
          >
            {event?.title} - (
            {format(
              addMinutes(event.startTime, ((transform?.y ?? 0) * 60) / 48),
              "hh:mm aa"
            )}
            to{" "}
            {format(
              addMinutes(event.endTime, ((transform?.y ?? 0) * 60) / 48),
              "hh:mm aa"
            )}
            )
          </Typography>
        </Stack>
      </DragOverlay>
      {isDragging && (
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          width="92.5%"
          sx={{
            zIndex: -1,
            opacity: 0.5,
            left: "85px",
            borderRadius: 1,
            top: `${top}px`,
            cursor: "pointer",
            position: "absolute",
            height: `${height}px`,
            backgroundColor: "indigo",
            transition: "box-shadow 300ms ease",
          }}
        >
          <Typography
            variant="body1"
            onClick={(event) => {
              if (!handleActive) {
                setEventPopupAnchor(event.currentTarget);
              }
            }}
            sx={{
              left: 10,
              flexGrow: 1,
              color: "white",
              position: "absolute",
              top: height > 48 ? 20 : "50%",
              transform: "translateY(-50%)",
              fontSize: height > 20 ? "12px" : "10px",
            }}
          >
            {event?.title} - ({format(event.startTime, "hh:mm aa")}
            to {format(event.endTime, "hh:mm aa")})
          </Typography>
        </Stack>
      )}
      <Popover
        disablePortal
        TransitionComponent={Slide}
        TransitionProps={{ direction: "up" }}
        id={`${event.eventId}_popper`}
        open={eventPopupOpen}
        anchorEl={eventPopupAnchor}
        onClose={handlePopoverClose}
        PaperProps={{
          elevation: 2,
          sx: {
            width: "400px",
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
            <IconButton>
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
              <Typography variant="body1" sx={{ fontSize: "12px" }}>
                {event?.description}
              </Typography>
            </Stack>
          </Stack>
          <Typography
            sx={{
              gap: 3,
              display: "flex",
              fontSize: "14px",
              lineHeight: "120%",
              alignItems: "center",
              justifyContent: "flex",
            }}
          >
            <strong>Start Time :</strong>{" "}
            {format(event.startTime, "MMMM, dd, yyyy, hh:mm aa")}
          </Typography>
          <Typography
            sx={{
              gap: 3,
              display: "flex",
              fontSize: "14px",
              lineHeight: "120%",
              alignItems: "center",
              justifyContent: "flex",
            }}
          >
            <strong>End Time :</strong>{" "}
            {format(event.endTime, "MMMM, dd, yyyy, hh:mm aa")}
          </Typography>
          <Typography
            sx={{
              gap: 3,
              display: "flex",
              fontSize: "14px",
              alignItems: "center",
              justifyContent: "flex",
            }}
          >
            <NotificationsNoneOutlinedIcon />
            30 minutes before
          </Typography>
          <Typography
            sx={{
              gap: 3,
              display: "flex",
              fontSize: "14px",
              alignItems: "center",
              justifyContent: "flex",
            }}
          >
            <InsertInvitationOutlinedIcon />
            Narayana Lvsaln
          </Typography>
        </Stack>
      </Popover>
      <Popover
        disablePortal
        TransitionComponent={Slide}
        TransitionProps={{ direction: "up" }}
        id={`${event.eventId}_color_popper`}
        open={eventColorOpen}
        anchorEl={eventColorAnchor}
        onClose={handleColorPopoverClose}
        PaperProps={{
          elevation: 2,
          sx: {
            width: "200px",
            height: "auto",
            backgroundColor: "white",
            border: "1px solid #ccc",
          },
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
      >
        <Stack
          gap={2}
          sx={{ p: 0.5, backgroundColor: "#cccccc80" }}
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Button
            size="small"
            disableElevation
            disableRipple
            startIcon={<DeleteOutlineOutlinedIcon />}
            sx={{
              color: "black",
              "&:hover": { backgroundColor: "transparent" },
            }}
          >
            Delete
          </Button>
        </Stack>
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          flexWrap="wrap"
          gap={2}
          sx={{ p: 2 }}
        >
          <div
            style={{
              width: "20px",
              height: "20px",
              borderRadius: 5,
              cursor: "pointer",
              backgroundColor: "blue",
            }}
          />
          <div
            style={{
              width: "20px",
              height: "20px",
              borderRadius: 5,
              cursor: "pointer",
              backgroundColor: "red",
            }}
          />
          <div
            style={{
              width: "20px",
              height: "20px",
              borderRadius: 5,
              cursor: "pointer",
              backgroundColor: "yellow",
            }}
          />
          <div
            style={{
              width: "20px",
              height: "20px",
              borderRadius: 5,
              cursor: "pointer",
              backgroundColor: "indigo",
            }}
          />
          <div
            style={{
              width: "20px",
              height: "20px",
              borderRadius: 5,
              cursor: "pointer",
              backgroundColor: "green",
            }}
          />
          <div
            style={{
              width: "20px",
              height: "20px",
              borderRadius: 5,
              cursor: "pointer",
              backgroundColor: "orange",
            }}
          />
        </Stack>
      </Popover>
    </>
  );
};

export default DayEvent;
