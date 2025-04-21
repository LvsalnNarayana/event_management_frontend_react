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
import React, { useRef, useState, useEffect } from "react";

import DayEvent from "../Day/DayEvent";
import ColorPopover from "./ColorPopover";
import EventDetails from "./EventDetails";
import EventPopover from "./EventPopover";
import EventCreationForm from "./EventCreationForm";

const Event = ({ event, eventType, ...additionalProps }) => {
  const [eventPopupAnchor, setEventPopupAnchor] = useState(null);
  const [eventColorAnchor, setEventColorAnchor] = useState(null);
  const eventPopupOpen = Boolean(eventPopupAnchor);
  const eventColorOpen = Boolean(eventColorAnchor);
  const dayEventRef = useRef(null);

  const monthEvent = () => {
    return <></>;
  };
  const yearEvent = () => {
    return <></>;
  };
  const weekEvent = () => {
    return <></>;
  };

  const handlePopoverClose = () => {
    return setEventPopupAnchor(null);
  };
  const handleColorPopoverClose = () => {
    return setEventColorAnchor(null);
  };
  const handlePopoverOpen = (eventPopoverRef) => {
    return setEventPopupAnchor(eventPopoverRef);
  };
  const handleColorPopoverOpen = (eventColorPopoverRef) => {
    return setEventColorAnchor(eventColorPopoverRef);
  };

  useEffect(() => {
    if (!event?.saved) {
      setEventPopupAnchor(dayEventRef?.current);
    }
  }, [dayEventRef, event]);

  return (
    <div>
      {eventType === "day" && (
        <DayEvent
          ref={dayEventRef}
          {...additionalProps}
          event={event}
          popoverMethods={{
            handlePopoverOpen,
            handlePopoverClose,
            handleColorPopoverOpen,
            handleColorPopoverClose,
          }}
        />
      )}
      {eventType === "month" && monthEvent()}
      {eventType === "year" && yearEvent()}
      {eventType === "week" && weekEvent()}
      {eventPopupOpen && (
        <EventPopover
          id={event?.eventId}
          open={eventPopupOpen}
          anchor={eventPopupAnchor}
          onClose={handlePopoverClose}
        >
          {event?.saved ? (
            <EventDetails
              event={event}
              onClose={() => {
                handlePopoverClose();
              }}
            />
          ) : (
            <EventCreationForm
              eventState={event}
              onClose={() => {
                handlePopoverClose();
              }}
            />
          )}
        </EventPopover>
      )}
      {eventColorOpen && (
        <ColorPopover
          id={event?.eventId}
          open={eventColorOpen}
          anchor={eventColorAnchor}
          onClose={handleColorPopoverClose}
        />
      )}
    </div>
  );
};

export default Event;
