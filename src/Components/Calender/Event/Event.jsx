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

import { Stack, Typography } from "@mui/material";

import ColorPopover from "./ColorPopover";
import EventDetailsPopover from "./EventDetailsPopover";
import { updateEvent } from "../../../State/eventsState";

const Event = ({ event, eventType }) => {
  const dispatch = useDispatch();
  const resizeRef = useRef(null);
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
      data: {
        event,
        type: "dayEvent",
      },
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

  useEffect(() => {
    if (event?.title === "" && resizeRef?.current !== null) {
      setEventPopupAnchor(resizeRef.current);
    }
  }, [event?.title]);

  const dayEvent = () => {
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
              transform: `translate3d(${transform?.x ?? 0}px, ${transform?.y ?? 0}px, 0) scale(var(--scale, 1))`,
              boxShadow: resizing
                ? "0px 0px 15px 0px rgba(0, 0, 0, 0.2)"
                : "none",
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
                {event?.title !== "" ? event?.title : "[No Title]"} - (
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
        {eventPopupOpen && (
          <EventDetailsPopover
            event={event}
            id={event?.eventId}
            open={eventPopupOpen}
            anchor={eventPopupAnchor}
            onClose={handlePopoverClose}
          />
        )}
        {eventColorOpen && (
          <ColorPopover
            id={event?.eventId}
            open={eventColorOpen}
            anchor={eventColorAnchor}
            onClose={handleColorPopoverClose}
          />
        )}
      </>
    );
  };
  const monthEvent = () => {
    return <></>;
  };
  const yearEvent = () => {
    return <></>;
  };
  const weekEvent = () => {
    return <></>;
  };

  return (
    <>
      {eventType === "day" && dayEvent()}
      {eventType === "month" && monthEvent()}
      {eventType === "year" && yearEvent()}
      {eventType === "week" && weekEvent()}
    </>
  );
};

export default Event;
