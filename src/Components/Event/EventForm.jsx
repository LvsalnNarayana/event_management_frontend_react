/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable operator-linebreak */
/* eslint-disable no-console */
/* eslint-disable max-lines */
/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
/* eslint-disable multiline-ternary */
import { setHours, setMinutes } from "date-fns";
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { width } from "@mui/system";
import LinkIcon from "@mui/icons-material/Link";
import EventIcon from "@mui/icons-material/Event";
import CloseIcon from "@mui/icons-material/Close";
import GroupsIcon from "@mui/icons-material/Groups";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import NotificationAddIcon from "@mui/icons-material/NotificationAdd";
import {
  Stack,
  Button,
  Divider,
  Checkbox,
  Collapse,
  Typography,
  IconButton,
  FormControlLabel,
} from "@mui/material";

import UserTag from "./UserTag";
import TagUsers from "./TagUsers";
import UserAvatar from "../Shared/UserAvatar";
import ColorPicker from "../Shared/ColorPicker";
import RecurrenceSelector from "./RecurrenceSelector";
// import { updateEvent } from "../../State/eventsState";
import CustomTextInput from "../Shared/inputs/CustomTextInput";
import CustomDatePicker from "../Shared/inputs/CustomDatePicker";
import CustomSelectInput from "../Shared/inputs/CustomSelectInput";
import CustomeTimeRangePicker from "../Shared/inputs/CustomeTimeRangePicker";
import {
  setLink,
  setTitle,
  addGuest,
  setEndTime,
  setStartTime,
  setOrganizer,
  setEventState,
  setLocationAddress,
  setGuestPermissions,
  selectCreateEventForm,
} from "../../State/createEventState";

const EventForm = ({ eventState }) => {
  const dispatch = useDispatch();

  const event = useSelector(selectCreateEventForm);

  useEffect(() => {
    dispatch(setEventState({ ...eventState }));
  }, []);

  const [organizerMenuOpen, setOrganizerMenuOpen] = useState(false);
  const [permissionsMenuOpen, setPermissionsMenuOpen] = useState(false);

  return (
    <Stack gap={2} sx={{ px: 2, width: "100%" }}>
      {/* //~- Event Title */}
      <CustomTextInput
        fontSize="18px"
        changeValue={(titleInputValue) => {
          dispatch(setTitle(titleInputValue));
        }}
        name="event_title"
        placeholder="Add title and time"
        value={event.title}
      />
      {/* //~- Event Date */}
      <CustomDatePicker
        id="event_date_input"
        format="dd MMMM yyyy, EEEE"
        value={new Date(event?.startTime || "")}
        changeValue={(value) => {
          dispatch(setStartTime(value.toUTCString()));
        }}
      />
      {/* //~- Event Time */}
      <CustomeTimeRangePicker
        startDate={event?.startTime}
        endDate={event?.endTime}
        changeStartTime={(value) => {
          dispatch(
            setStartTime(
              setMinutes(
                setHours(event?.startTime, value.hour),
                value.minutes,
              ).toUTCString(),
            ),
          );
        }}
        changeEndTime={(value) => {
          dispatch(
            setEndTime(
              setMinutes(
                setHours(event?.endTime, value.hour),
                value.minutes,
              ).toUTCString(),
            ),
          );
        }}
      />
      {/* //~- Event meeting link */}
      <CustomTextInput
        name="meeting_link"
        icon={<LinkIcon fontSize="small" />}
        value={event.link}
        fontSize="14px"
        changeValue={(e) => {
          dispatch(setLink(e.target.value));
        }}
        placeholder="Add meeting link"
      />
      {/* //~- Event recurrence */}
      <RecurrenceSelector
        id="event_recurrence_selector"
        value="daily"
        event={event}
        date={event.startTime}
        changeValue={(value) => {
          console.log(value);
        }}
      />
      {/* //~- Event guests */}
      <Stack gap={2} sx={{ width: "100%" }}>
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          gap={2}
        >
          <GroupsIcon fontSize="small" />
          <TagUsers
            addGuest={(value) => {
              return dispatch(addGuest(value));
            }}
          />
        </Stack>
        {event?.guests?.length > 0 && (
          <Stack
            gap={2}
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            sx={{ width: "100%" }}
          >
            {event.guests?.slice(0, 3)?.map((user) => {
              return <UserTag key={user?.id} user={user} />;
            })}
            {event.guests?.length > 3 && (
              <Typography variant="body1" sx={{ fontSize: "14px" }}>
                +{event.guests?.length - 3} more
              </Typography>
            )}
            {event.guests?.length > 0 && (
              <Stack
                width="100%"
                sx={{
                  px: 2,
                  py: 1.5,
                  borderRadius: 2,
                  userSelect: "none",
                  backgroundColor: "#00000008",
                }}
              >
                <Stack
                  component="div"
                  onClick={() => {
                    setPermissionsMenuOpen(!permissionsMenuOpen);
                  }}
                  width="100%"
                  direction="row"
                  justifyContent="space-between"
                  alignItems="flex-start"
                  sx={{
                    borderRadius: 2,
                    cursor: "pointer",
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
                    {!permissionsMenuOpen && (
                      <Typography
                        variant="body1"
                        sx={{ fontSize: "12px", color: "#00000080" }}
                      >
                        {event?.guestPermissions?.invite && (
                          <span>Invite Others</span>
                        )}
                        {event?.guestPermissions?.modify && (
                          <span>Modify Event</span>
                        )}
                        {event?.guestPermissions?.seeGuests && (
                          <span>See Guests</span>
                        )}
                      </Typography>
                    )}
                  </Stack>
                  <ExpandMoreIcon
                    sx={{
                      fontSize: "20px",
                      transition: "transform 0.2s ease-in-out",
                      transform: permissionsMenuOpen
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                    }}
                  />
                </Stack>
                {permissionsMenuOpen && (
                  <Divider sx={{ my: 2, width: "100%" }} />
                )}
                <Collapse in={permissionsMenuOpen}>
                  <Stack component="div" width="100%">
                    <FormControlLabel
                      id="modify_event_permission"
                      label="Modify Event"
                      sx={{ "& .MuiTypography-root": { fontSize: "12px" } }}
                      control={
                        <Checkbox
                          size="small"
                          checked={event?.guestPermissions?.modify}
                          onChange={() => {
                            dispatch(
                              setGuestPermissions({
                                modify: !event?.guestPermissions?.modify,
                              }),
                            );
                          }}
                        />
                      }
                    />
                    <FormControlLabel
                      id="invite_others_permission"
                      label="Invite Others"
                      sx={{ "& .MuiTypography-root": { fontSize: "12px" } }}
                      control={
                        <Checkbox
                          size="small"
                          checked={event?.guestPermissions?.invite}
                          onChange={() => {
                            dispatch(
                              setGuestPermissions({
                                invite: !event?.guestPermissions?.invite,
                              }),
                            );
                          }}
                        />
                      }
                    />
                    <FormControlLabel
                      id="see_guest_list_permission"
                      label="See Guest List"
                      sx={{ "& .MuiTypography-root": { fontSize: "12px" } }}
                      control={
                        <Checkbox
                          size="small"
                          checked={event?.guestPermissions?.seeGuests}
                          onChange={() => {
                            dispatch(
                              setGuestPermissions({
                                seeGuests: !event?.guestPermissions?.seeGuests,
                              }),
                            );
                          }}
                        />
                      }
                    />
                  </Stack>
                </Collapse>
              </Stack>
            )}
          </Stack>
        )}
      </Stack>
      {/* //~- Event location */}
      <CustomTextInput
        name="location"
        placeholder="Add Location"
        value={event.location.address}
        changeValue={(locationValue) => {
          dispatch(setLocationAddress(locationValue));
        }}
        icon={<LocationOnIcon fontSize="small" />}
      />
      {/* // ~- Event organizer with menu close */}
      {!organizerMenuOpen && (
        <Stack
          gap={2}
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          sx={{ width: "100%" }}
        >
          <EventIcon fontSize="small" />
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
            <Stack direction="row" gap={1} alignItems="center">
              <UserAvatar username={event?.organizer?.username} width={20} />
              <Typography variant="body1" sx={{ fontSize: "14px" }}>
                {event?.organizer?.firstname} {event?.organizer?.lastname}
              </Typography>
            </Stack>
            <Typography
              variant="body1"
              sx={{ fontSize: "12px", color: "#00000080" }}
            >
              <span style={{ textTransform: "capitalize" }}>
                {event?.organizer?.settings?.status}
              </span>{" "}
              . 30 Minutes before
            </Typography>
          </Stack>
        </Stack>
      )}
      {/* //~- Event organizer with menu open */}
      {organizerMenuOpen && (
        <>
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
            <Stack
              width="100%"
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              gap={1}
            >
              <EventIcon fontSize="small" sx={{ mr: 1.5 }} />
              <Stack
                flexShrink={0}
                direction="row"
                gap={1}
                alignItems="center"
                width="fit-content"
              >
                <UserAvatar username={event?.organizer?.username} width={20} />
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: 16,
                    color: "#000",
                    flexShrink: 0,
                    fontWeight: 500,
                  }}
                >
                  {event?.organizer?.firstname} {event?.organizer?.lastname}
                </Typography>
              </Stack>
              <ColorPicker
                sx={{
                  width: 20,
                  height: 20,
                }}
                color={event?.organizer?.settings?.color || "#000000"}
                setColor={(colorValue) => {
                  dispatch(setOrganizer({ settings: { color: colorValue } }));
                }}
              />
            </Stack>
            <Stack pl={4} width="100%">
              <CustomSelectInput
                value={event?.organizer?.settings?.status}
                name="organizer_status"
                changeValue={(statusValue) => {
                  dispatch(
                    setOrganizer({
                      settings: { status: statusValue },
                    }),
                  );
                }}
                options={[
                  {
                    name: "Free",
                    value: "free",
                  },
                  {
                    name: "Busy",
                    value: "busy",
                  },
                  {
                    name: "Active",
                    value: "active",
                  },
                ]}
              />
            </Stack>
          </Stack>
          <Stack
            direction="row"
            width="100%"
            justifyContent="flex-start"
            alignItems="flex-start"
            gap={2}
          >
            <NotificationAddIcon
              fontSize="small"
              sx={{
                mt: "12px",
              }}
            />
            <Stack width="100%" gap={2}>
              {event?.organizer?.settings?.notifications?.map((notification) => {
                return (
                  <Stack
                    key={notification.id}
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                  >
                    <CustomSelectInput
                      value="10"
                      name="reminder_timer"
                      options={[
                        {
                          value: "10",
                          name: "10 minutes before",
                        },
                        {
                          value: "30",
                          name: "30 minutes before",
                        },
                        {
                          value: "60",
                          name: "1 hour before",
                        },
                      ]}
                    />
                    <IconButton>
                      <CloseIcon
                        fontSize="small"
                        sx={{
                          fontSize: 18,
                        }}
                      />
                    </IconButton>
                  </Stack>
                );
              })}
            </Stack>
          </Stack>
          <Button
            size="small"
            variant="outlined"
            disableElevation
            disableRipple
            sx={{
              ml: "auto",
              width: "fit-content",
            }}
          >
            Add Reminder
          </Button>
        </>
      )}
    </Stack>
  );
};

export default EventForm;
