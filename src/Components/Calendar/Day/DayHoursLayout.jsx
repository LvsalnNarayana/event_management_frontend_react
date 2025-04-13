/* eslint-disable max-statements */
import { DragOverlay } from "@dnd-kit/core";
import { setHours, setMinutes } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
/* eslint-disable react/no-array-index-key */
import React, { useRef, useState, useEffect } from "react";

import { Stack, Divider, Typography } from "@mui/material";

import useData from "../../../Data/useData";
import { DateState } from "../../../State/dateState";
import { addEvent } from "../../../State/eventsState";
import { selectEvent } from "../../../State/createEventState";

const DayHoursLayout = ({ children }) => {
  const { hours } = useData();
  const dispatch = useDispatch();
  const containerRef = useRef(null);
  const { selectedDate } = useSelector(DateState);
  const newEventState = useSelector(selectEvent);

  const [containerTop, setContainerTop] = useState(0);
  const [activeEvent, setActiveEvent] = useState(null);
  const [containerScrollValue, setContainerScrollValue] = useState(0);

  const nineAmRef = useRef(null);

  // Set up a scroll listener that updates containerScrollValue
  useEffect(() => {
    const handleScroll = (event) => {
      const container = event.target;
      const currentlyScrolled = container.scrollTop;

      setContainerScrollValue(currentlyScrolled);
    };

    // Copy the ref so it doesn’t change during cleanup.
    const container = containerRef.current;

    if (container) {
      // Save container's top once on mount.
      setContainerTop(container.getBoundingClientRect().top);
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    if (nineAmRef.current) {
      nineAmRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <Stack
      ref={containerRef}
      width="100%"
      sx={{
        pr: 1,
        height: "100%",
        overflowY: "auto",
        overflowX: "hidden",
        position: "relative",
      }}
    >
      {hours.map((hour, index) => {
        const isNineAm = hour === "9 AM";

        return (
          <Stack
            key={index}
            gap={0}
            flexShrink={0}
            component="div"
            onClick={(event) => {
              const target = event.currentTarget;
              const rect = target.getBoundingClientRect();
              const yPosition = event.clientY - rect.top;
              let hourInt = parseInt(hour.split(" ")[0], 10);

              if (hour.split(" ")[1].toLowerCase() === "pm") {
                hourInt += 12;
              }
              let startMinutes = 0;

              if (yPosition < 12) {
                startMinutes = 0;
              } else if (yPosition < 24) {
                startMinutes = 15;
              } else if (yPosition < 36) {
                startMinutes = 30;
              } else if (yPosition < 48) {
                startMinutes = 45;
              }

              dispatch(
                addEvent({
                  ...newEventState,
                  title: "",
                  description: "",
                  endTime: setMinutes(
                    setHours(selectedDate, hourInt),
                    startMinutes,
                  ).toUTCString(),
                  startTime: setMinutes(
                    setHours(selectedDate, hourInt - 1),
                    startMinutes,
                  ).toUTCString(),
                }),
              );
            }}
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-end"
            width="100%"
            sx={{ userSelect: "none", position: "relative" }}
            ref={isNineAm ? nineAmRef : null}
          >
            <Typography
              variant="body1"
              sx={{
                flexShrink: 0,
                width: "53px",
                fontWeight: 600,
                display: "flex",
                fontSize: "10px",
                textAlign: "right",
                color: "#00000080",
                alignItems: "center",
                justifyContent: "flex-end",
                mb: index === (hours?.length || 0) - 1 ? 0 : -1,
              }}
            >
              {hour}
            </Typography>
            <Divider orientation="vertical" sx={{ ml: 3, height: "48px" }} />
            <Divider sx={{ ml: -2.5, flexGrow: 1 }} />
          </Stack>
        );
      })}
      <>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              containerTop,
              setActiveEvent,
              containerScrollValue,
            });
          }

          return child;
        })}
      </>
      <DragOverlay
        dropAnimation={{
          duration: 0,
          easing: "cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        style={{
          zIndex: 100,
        }}
        cursor="move"
        wrapperElement="div"
        className="drag-overlay"
        id="drag-overlay"
      >
        <Stack
          id={activeEvent?.eventId}
          component="div"
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          width="100%"
          sx={{
            opacity: 0.5,
            borderRadius: 1,
            overflow: "hidden",
            position: "absolute",
            height: activeEvent?.height,
            backgroundColor: activeEvent?.event?.eventColor,
          }}
        >
          <Typography
            variant="body1"
            sx={{
              left: 10,
              flexGrow: 1,
              color: "white",
              position: "absolute",
              transform: "translateY(-50%)",
              fontSize: activeEvent?.height > 20 ? "12px" : "10px",
            }}
          >
            {`${activeEvent?.event?.title} - (${activeEvent?.draggableTimeString})`}
          </Typography>
        </Stack>
      </DragOverlay>
    </Stack>
  );
};

export default DayHoursLayout;
