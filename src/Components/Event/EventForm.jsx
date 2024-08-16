/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable operator-linebreak */
/* eslint-disable no-console */
/* eslint-disable max-lines */
/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
/* eslint-disable multiline-ternary */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from "react";
import { setHours, setMinutes } from "date-fns";
import { useDispatch, useSelector } from "react-redux";

import LinkIcon from "@mui/icons-material/Link";
import EventIcon from "@mui/icons-material/Event";
import RepeatIcon from "@mui/icons-material/Repeat";
import GroupsIcon from "@mui/icons-material/Groups";
import { CloseOutlined } from "@mui/icons-material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import NotificationAddIcon from "@mui/icons-material/NotificationAdd";
import {
  Stack,
  Button,
  Divider,
  Checkbox,
  TextField,
  Typography,
  IconButton,
  FormControlLabel,
} from "@mui/material";

import UserTag from "./UserTag";
import TagUsers from "./TagUsers";
import SetReminder from "./SetReminder";
import StatusSelector from "./StatusSelector";
import RecurrenceSelector from "./RecurrenceSelector";
import CustomDatePicker from "../Shared/CustomDatePicker";
import OrganizerColorSelector from "./OrganizerColorSelector";
import CustomeTimeRangePicker from "../Shared/CustomeTimeRangePicker";
import {
  setLink,
  setTitle,
  addGuest,
  setEndTime,
  selectEvent,
  setStartTime,
} from "../../State/createEventState";

const EventForm = () => {
  const dispatch = useDispatch();

  const event = useSelector(selectEvent);
  const [organizerMenuOpen, setOrganizerMenuOpen] = useState(false);
  const [pemissionsMenuOpen, setPermissionsMenuOpen] = useState(false);

  return (
    <Stack gap={2} sx={{ p: 2, width: "100%" }}>
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
        value={new Date(event?.startTime || "")}
        changeValue={(value) => {
          dispatch(setStartTime(value.toUTCString()));
        }}
      />
      <CustomeTimeRangePicker
        startDate={event?.startTime}
        endDate={event?.endTime}
        changeStartTime={(value) => {
          dispatch(
            setStartTime(
              setMinutes(
                setHours(event?.startTime, value.hour),
                value.minutes
              ).toUTCString()
            )
          );
        }}
        changeEndTime={(value) => {
          dispatch(
            setEndTime(
              setMinutes(
                setHours(event?.endTime, value.hour),
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
        <LinkIcon sx={{ fontSize: "30px", color: "#00000080" }} />
        <TextField
          type="text"
          onChange={(e) => {
            dispatch(setLink(e.target.value));
          }}
          id="event_link_input"
          placeholder="Add meeting link"
          variant="outlined"
          fullWidth
          margin="normal"
          size="small"
          value={event.link}
          sx={{
            p: 0.2,
            my: 0.5,
            "& .MuiInputBase-root": {
              fontSize: "14px !important",
            },
          }}
        />
      </Stack>
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
          date={event.startTime}
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
          <TagUsers
            addGuest={(value) => {
              return dispatch(addGuest(value));
            }}
          />
          {event.guests?.slice(0, 3)?.map((user) => {
            return <UserTag key={user?.id} user={user} />;
          })}
          {event.guests?.length > 3 && (
            <Typography variant="body1" sx={{ fontSize: "14px" }}>
              +{event.guests?.length - 3} more
            </Typography>
          )}
          {event.guests?.length > 0 && !pemissionsMenuOpen && (
            <Stack
              component="div"
              onClick={() => {
                setPermissionsMenuOpen(true);
              }}
              width="100%"
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{
                p: 1,
                borderRadius: 2,
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#00000008",
                },
              }}
            >
              <Stack
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                gap={0}
              >
                <Typography variant="body1" sx={{ fontSize: "14px" }}>
                  Guest Permissions
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontSize: "12px", color: "#00000080" }}
                >
                  Invite Others
                </Typography>
              </Stack>
              <ExpandMoreIcon />
            </Stack>
          )}
          {pemissionsMenuOpen && (
            <Stack
              width="100%"
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              gap={0}
            >
              <Stack
                width="100%"
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="body1" sx={{ mb: 1, fontSize: "14px" }}>
                  Guest Permissions
                </Typography>
                <IconButton
                  onClick={() => {
                    return setPermissionsMenuOpen(false);
                  }}
                >
                  <CloseOutlined fontSize="small" />
                </IconButton>
              </Stack>
              <Divider sx={{ width: "100%" }} />
              <FormControlLabel
                label="Modify Event"
                sx={{ "& .MuiTypography-root": { fontSize: "12px" } }}
                control={<Checkbox size="small" />}
              />
              <FormControlLabel
                label="Invite Others"
                sx={{ "& .MuiTypography-root": { fontSize: "12px" } }}
                control={<Checkbox size="small" />}
              />
              <FormControlLabel
                label="See Guest List"
                sx={{ "& .MuiTypography-root": { fontSize: "12px" } }}
                control={<Checkbox size="small" />}
              />
            </Stack>
          )}
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
          value=""
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
        <>
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
            </Stack>
          </Stack>
          <Stack
            gap={2}
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            sx={{ width: "100%" }}
          >
            <NotificationAddIcon
              sx={{ mt: 1.5, fontSize: "30px", color: "#00000080" }}
            />
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
              <SetReminder />
              <Button
                size="small"
                variant="outlined"
                disableElevation
                disableRipple
              >
                Add Reminder
              </Button>
            </Stack>
          </Stack>
        </>
      )}
    </Stack>
  );
};

export default EventForm;
