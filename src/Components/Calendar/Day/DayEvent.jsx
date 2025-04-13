/* eslint-disable max-lines */
/* eslint-disable complexity */
/* eslint-disable max-statements */
/* eslint-disable multiline-ternary */
/* eslint-disable operator-linebreak */
/* eslint-disable no-negated-condition */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import { ResizableBox } from "react-resizable";
import { useDispatch, useSelector } from "react-redux";
import { useDraggable, useDndMonitor } from "@dnd-kit/core";
import React, { useRef, useState, useEffect, forwardRef } from "react";
import {
  format,
  getHours,
  getMinutes,
  addMinutes,
  differenceInMinutes,
} from "date-fns";

import { Stack, Typography } from "@mui/material";

import { AppState } from "../../../State/appState";
import { updateEvent } from "../../../State/eventsState";
import getEventTimes from "../../../Utils/getEventTimeStrings";

const DayEvent = forwardRef(
  (
    {
      event,
      containerTop,
      popoverMethods,
      setActiveEvent,
      containerScrollValue,
    },
    ref,
  ) => {
    const eventElement = useRef(null);
    const dispatch = useDispatch();

    // Computed values from the event’s times
    const [top, setTop] = useState(0);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [draggableTimeString, setDraggableTimeString] = useState("");
    const [resizing, setResizing] = useState(false);
    const [handleActive, setHandleActive] = useState(false);
    const { timeToPixel, pixelToTime } = useSelector(AppState);

    const {
      listeners,
      transform,
      attributes,
      isDragging,
      setNodeRef,
      activeNodeRect,
    } = useDraggable({
      id: event?.eventId,
      data: event,
    });

    // DndMonitor callbacks –set handle active during drag if needed.
    useDndMonitor({
      onDragStart: () => {
        setHandleActive(true);
      },
      onDragEnd: (monitorEvent) => {
        const minutesChange =
          Math.round((monitorEvent.delta.y * 60) / 48 / 15) * 15;

        dispatch(
          updateEvent({
            ...monitorEvent.active.data.current,
            endTime: addMinutes(
              monitorEvent.active.data.current.endTime,
              minutesChange,
            ).toUTCString(),
            startTime: addMinutes(
              monitorEvent.active.data.current.startTime,
              minutesChange,
            ).toUTCString(),
          }),
        );
        setHandleActive(false);
      },
    });

    useEffect(() => {
      setActiveEvent({
        event,
        height,
        containerTop,
        draggableTimeString,
        eventId: event?.eventId,
      });
    }, [containerTop, draggableTimeString, event, height, setActiveEvent]);

    useEffect(() => {
      // Calculate the offset values only if we are dragging.
      const nodeRect =
        isDragging && typeof activeNodeRect?.top === "number"
          ? activeNodeRect.top - containerTop
          : 0;
      const transformY =
        isDragging && typeof transform?.y === "number" ? transform.y : 0;

      // Convert the total vertical displacement (in pixels) to hours on a 48px-per-hour grid.
      const rawHours = (containerScrollValue + nodeRect + transformY) / 48;
      const hourPart = Math.floor(rawHours);
      const minuteFraction = rawHours - hourPart;
      const rawMinutes = minuteFraction * 60;
      let roundedMinutes = Math.round(rawMinutes / 15) * 15;
      let finalHour = hourPart;

      if (roundedMinutes === 60) {
        finalHour += 1;
        roundedMinutes = 0;
      }
      // Compute the new start time in minutes from midnight.
      const computedStartMinutes = finalHour * 60 + roundedMinutes;

      // Calculate the event's duration (in minutes).
      const eventDuration = differenceInMinutes(event.endTime, event.startTime);
      const computedEndMinutes = computedStartMinutes + eventDuration;

      // Create a base date (today at midnight) to add the computed minutes.
      const baseDate = new Date();

      baseDate.setHours(0, 0, 0, 0);

      const computedStartDate = addMinutes(baseDate, computedStartMinutes);
      const computedEndDate = addMinutes(baseDate, computedEndMinutes);

      // Format in 12-hour AM/PM format.
      const currentStartTimeFormatted = format(computedStartDate, "hh:mm aa");
      const currentEndTimeFormatted = format(computedEndDate, "hh:mm aa");

      const timeString = `${currentStartTimeFormatted} to ${currentEndTimeFormatted}`;

      setDraggableTimeString(timeString);
    }, [
      containerTop,
      activeNodeRect?.top,
      containerScrollValue,
      isDragging,
      transform?.y,
      event,
    ]);

    // Determine width on mount.
    useEffect(() => {
      if (eventElement.current) {
        setWidth(eventElement.current.clientWidth || 0);
      }
    }, []);

    // Compute event height from its duration.
    useEffect(() => {
      if (eventElement.current && event?.startTime && event?.endTime) {
        const newHeight =
          differenceInMinutes(event.endTime, event.startTime) * timeToPixel;

        setHeight(newHeight);
      }
    }, [event.endTime, event.startTime, timeToPixel]);

    // Compute top based on the event’s start time.
    useEffect(() => {
      if (event?.startTime) {
        const totalMinutes =
          getHours(event.startTime) * 60 + getMinutes(event.startTime);

        setTop(totalMinutes * timeToPixel);
      }
    }, [event.startTime, timeToPixel]);

    const handleResizeStart = () => {
      setResizing(true);
    };

    const handleResize = (eventData, { size }) => {
      eventData.stopPropagation();
      eventData.preventDefault();
      // Adjust height as the user resizes.
      setHeight(size.height > 20 ? size.height : 12);
    };

    const handleResizeStop = (eventData, { size }) => {
      eventData.stopPropagation();
      eventData.preventDefault();
      const newEndTime = addMinutes(
        event.startTime,
        Math.round(((size.height > 20 ? size.height : 15) * 60) / 48 / 15) * 15,
      ).toUTCString();

      dispatch(
        updateEvent({
          ...event,
          endTime: newEndTime,
        }),
      );

      setTimeout(() => {
        setResizing(false);
      }, 500);
    };

    return (
      <Stack
        id={event?.eventId}
        component="div"
        ref={(elemNode) => {
          setNodeRef(elemNode);
          eventElement.current = elemNode;
          if (ref) {
            // eslint-disable-next-line no-param-reassign
            ref.current = elemNode;
          }
        }}
        {...(!handleActive ? listeners : {})}
        {...attributes}
        onClick={(clickEvent) => {
          if (!handleActive && !resizing && !isDragging) {
            popoverMethods?.handlePopoverOpen(clickEvent.currentTarget);
          }
        }}
        onContextMenu={(contextEvent) => {
          contextEvent.preventDefault();
          if (!handleActive && !resizing && !isDragging) {
            popoverMethods?.handleColorPopoverOpen(contextEvent.currentTarget);
          }
        }}
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        width="92%"
        sx={{
          top,
          height,
          opacity: 1,
          left: "85px",
          borderRadius: 1,
          overflow: "hidden",
          position: "absolute",
          backgroundColor: event?.eventColor,
          cursor: isDragging ? "move" : resizing ? "n-resize" : "pointer",
          boxShadow: resizing ? "0px 0px 15px 0px rgba(0, 0, 0, 0.2)" : "none",
        }}
      >
        {!isDragging && (
          <ResizableBox
            axis="y"
            height={height}
            width={width}
            maxConstraints={[width, 24 * 48 - top]}
            draggableOpts={{
              grid: [width, 12],
            }}
            onResizeStart={handleResizeStart}
            onResize={handleResize}
            onResizeStop={handleResizeStop}
            resizeHandles={["se"]}
            handle={
              <span
                onMouseOver={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  setHandleActive(true);
                }}
                onMouseOut={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  setHandleActive(false);
                }}
                style={{
                  right: 0,
                  bottom: 0,
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
              onClick={(e) => {
                if (!handleActive && !resizing && !isDragging) {
                  popoverMethods?.handlePopoverOpen(e.currentTarget);
                }
              }}
              onContextMenu={(e) => {
                e.preventDefault();
                if (!handleActive && !resizing && !isDragging) {
                  popoverMethods?.handleColorPopoverOpen(e.currentTarget);
                }
              }}
              sx={{
                left: 10,
                flexGrow: 1,
                color: "white",
                position: "absolute",
                transform: "translateY(-50%)",
                top: height > 48 ? 20 : "50%",
                fontSize: height > 20 ? "12px" : "10px",
              }}
            >
              {`${event?.title} - (${
                getEventTimes({
                  event,
                  transform,
                  pixelToTime,
                }).currenttime
              })`}
            </Typography>
          </ResizableBox>
        )}
        {isDragging && (
          <Typography
            variant="body1"
            sx={{
              left: 10,
              flexGrow: 1,
              color: "white",
              position: "absolute",
              transform: "translateY(-50%)",
              top: height > 48 ? 20 : "50%",
              fontSize: height > 20 ? "12px" : "10px",
            }}
          >
            {`${event?.title} - (${
              getEventTimes({
                event,
                transform,
                pixelToTime,
              }).currenttime
            })`}
          </Typography>
        )}
      </Stack>
    );
  },
);

DayEvent.displayName = "DayEvent";

// export default as forward as parent is accessing its ref
export default DayEvent;
