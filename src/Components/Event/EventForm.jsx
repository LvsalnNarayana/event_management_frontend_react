/* eslint-disable operator-linebreak */
/* eslint-disable no-console */
/* eslint-disable max-lines */
/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
/* eslint-disable multiline-ternary */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setHours, setSeconds, setMinutes } from "date-fns";

import EventIcon from "@mui/icons-material/Event";
import RepeatIcon from "@mui/icons-material/Repeat";
import GroupsIcon from "@mui/icons-material/Groups";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Stack, TextField, Typography } from "@mui/material";

import UserTag from "./UserTag";
import TagUsers from "./TagUsers";
import SetReminder from "./SetReminder";
import StatusSelector from "./StatusSelector";
import { DateState } from "../../State/dateState";
import RecurrenceSelector from "./RecurrenceSelector";
import CustomDatePicker from "../Shared/CustomDatePicker";
import OrganizerColorSelector from "./OrganizerColorSelector";
import CustomeTimeRangePicker from "../Shared/CustomeTimeRangePicker";
import {
  setTitle,
  setEndTime,
  selectEvent,
  setStartTime,
} from "../../State/createEventState";

const EventForm = () => {
  const dispatch = useDispatch();
  const { selectedDate } = useSelector(DateState);
  const event = useSelector(selectEvent);
  const [organizerMenuOpen, setOrganizerMenuOpen] = useState(false);
  const [eventDetails, setEventDetails] = useState({
    title: "",
    location: "",
    description: "",
    timezone: "utc",
    endDateTime: setSeconds(
      setMinutes(setHours(selectedDate, 10), 0),
      0
    ).toUTCString(),
    startDateTime: setSeconds(
      setMinutes(setHours(selectedDate, 9), 0),
      0
    ).toUTCString(),
  });

  return (
    <Stack gap={2} sx={{ p:2,width: "100%" }}>
      <TextField
        type="text"
        onChange={(e) => {
          dispatch(setTitle(e.target.value));
        }}
        id="event_title_input"
        placeholder="Add title and time"
        variant="outlined"
        fullWidth
        margin="normal"
        size="small"
        value={event.title}
        sx={{
          p: 0.2,
          my: 0.5,
          "& .MuiInputBase-root": {
            fontSize: "18px !important",
          },
        }}
      />
      <CustomDatePicker
        id="event_date_input"
        format="dd MMMM yyyy, EEEE"
        value={new Date(event.startTime)}
        changeValue={(value) => {
          dispatch(setStartTime(value.toUTCString()));
        }}
      />
      <CustomeTimeRangePicker
        startDate={event.startTime}
        endDate={event.endTime}
        changeStartTime={(value) => {
          dispatch(
            setStartTime(
              setMinutes(
                setHours(event.startTime, value.hour),
                value.minutes
              ).toUTCString()
            )
          );
        }}
        changeEndTime={(value) => {
          dispatch(
            setEndTime(
              setMinutes(
                setHours(event.endTime, value.hour),
                value.minutes
              ).toUTCString()
            )
          );
        }}
      />
      <Stack
        gap={2}
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        sx={{ width: "100%" }}
      >
        <RepeatIcon sx={{ fontSize: "30px", color: "#00000080" }} />
        <RecurrenceSelector
          id="event_recurrence_selector"
          value="daily"
          date={eventDetails.startDateTime}
          changeValue={(value) => {
            console.log(value);
          }}
        />
      </Stack>
      <Stack
        gap={2}
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={{ width: "100%" }}
      >
        <GroupsIcon sx={{ fontSize: "30px", color: "#00000080" }} />
        <Stack
          gap={2}
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          sx={{ width: "100%" }}
        >
          <TagUsers />
          <UserTag
            user={{
              id: "user_1235",
              lastname: "Smith",
              firstname: "Jane",
              username: "jane_smith",
              mutual_friends_count: 10,
              friendship_status: "friends",
              profile_picture: "https://example.com/profile2.jpg",
            }}
          />
        </Stack>
      </Stack>

      <Stack
        gap={2}
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        sx={{ width: "100%" }}
      >
        <LocationOnIcon sx={{ fontSize: "30px", color: "#00000080" }} />
        <TextField
          type="text"
          onChange={() => {}}
          id="add_event_location"
          placeholder="Add location"
          variant="outlined"
          fullWidth
          margin="normal"
          size="small"
          value={eventDetails.title}
          sx={{
            p: 0.2,
            my: 0.5,
            "& .MuiInputBase-root": {
              fontSize: "13px !important",
            },
          }}
        />
      </Stack>
      {!organizerMenuOpen && (
        <Stack
          gap={2}
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          sx={{ width: "100%" }}
        >
          <EventIcon sx={{ fontSize: "30px", color: "#00000080" }} />
          <Stack
            component="div"
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            gap={0.5}
            sx={{
              py: 1,
              px: 2,
              width: "100%",
              borderRadius: 3,
              cursor: "pointer",
              "&:hover": { backgroundColor: "#00000008" },
            }}
            onClick={() => {
              setOrganizerMenuOpen(true);
            }}
          >
            <Typography variant="body1" sx={{ fontSize: "14px" }}>
              Narayana Lvsaln
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "12px", color: "#00000080" }}
            >
              Free . The day before at 11:30pm
            </Typography>
          </Stack>
        </Stack>
      )}
      {organizerMenuOpen && (
        <Stack
          gap={2}
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          sx={{ width: "100%" }}
        >
          <EventIcon sx={{ mt: 1.5, fontSize: "30px", color: "#00000080" }} />
          <Stack
            component="div"
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            gap={2}
            sx={{
              py: 1,
              width: "100%",
            }}
          >
            <OrganizerColorSelector />
            <StatusSelector />
            <SetReminder />
          </Stack>
        </Stack>
      )}
    </Stack>
  );
};

export default EventForm;
