/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
import { createSlice } from "@reduxjs/toolkit";

const event = {
  guestCount: 2,
  status: "confirmed",
  visibility: "public",
  eventColor: "#FF5733",
  seriesId: "series_id_1",
  title: "Project Meeting",
  timezone: "America/New_York",
  categories: ["Work", "Team Meeting"],
  endTime: new Date("2024-08-03T15:00:00"),
  link: "https://example.com/meeting-link",
  startTime: new Date("2024-08-03T14:00:00"),
  description: "Discussing the upcoming project milestones and deadlines.",
  recurrence: {
    interval: 1,
    frequency: "weekly",
    until: new Date("2024-12-31"),
    daysOfWeek: ["Monday", "Wednesday"],
  },
  location: {
    room: "Conference Room B",
    address: "123 Main St, Anytown, USA",
    coordinates: {
      latitude: 40.712776,
      longitude: -74.005974,
    },
  },
  attachments: [
    {
      id: "attachment_1",
      name: "Project Plan.pdf",
      mimeType: "application/pdf",
      url: "https://example.com/project_plan.pdf",
    },
  ],
  organizer: {
    id: "user_id_1",
    lastname: "Doe",
    firstname: "John",
    phone: "+1-555-123-4567",
    email: "john.doe@example.com",
    username: "organizer_username",
    settings: {
      status: "active",
      reminders: [
        {
          id: "event_reminder_id_1",
          label: "Email Reminder",
          value: "10 minutes before",
          date_time: new Date().toISOString(),
        },
      ],
    },
  },
  guests: [
    {
      id: "user_id_2",
      rsvp: "accepted",
      role: "attendee",
      firstname: "Jane",
      lastname: "Smith",
      username: "jane_smith",
      phone: "+1-555-234-5678",
      email: "jane.smith@example.com",
      settings: {
        canModify: true,
        canInviteOthers: true,
        canSeeGuestList: true,
      },

      reminders: [
        {
          type: "email",
          time: "15 minutes before",
        },
        {
          type: "popup",
          time: "10 minutes before",
        },
      ],
    },
    {
      id: "user_id_3",
      rsvp: "declined",
      role: "optional",
      lastname: "Brown",
      firstname: "Michael",
      phone: "+1-555-345-6789",
      username: "michael_brown",
      email: "michael.brown@example.com",
      settings: {
        canModify: false,
        canSeeGuestList: true,
        canInviteOthers: false,
      },

      reminders: [
        {
          type: "email",
          time: "15 minutes before",
        },
        {
          type: "popup",
          time: "10 minutes before",
        },
      ],
    },
  ],
};

// Initial state for the event slice
const initialState = {
  link: "",
  title: "",
  guests: [],
  status: "0",
  seriesId: "",
  guestCount: 0,
  reminders: [],
  timezone: "utc",
  description: "",
  attachments: [],
  visibility: "public",
  eventColor: "#FF5733",
  endTime: new Date("2024", "08", "16", "10", "00"),
  startTime: new Date("2024", "08", "16", "09", "00"),
  permissions: {
    modify: false,
    invite: false,
    seeGuests: false,
  },
  location: {
    address: "123 Main St, Anytown, USA",
    coordinates: {
      latitude: 40.712776,
      longitude: -74.005974,
    },
  },
  organizer: {
    id: "",
    email: "",
    phone: "",
    username: "",
    lastname: "",
    firstname: "",
    settings: {
      status: "active",
    },
  },
  recurrence: {
    frequency: 2,
    daysOfWeek: [],
    interval: "month",
    until: new Date("2024", "12", "31"),
    monthlyOn: {
      value: "1",
      type: "day",
    },
  },
};

// Slice creation with actions and reducers
export const createEventSlice = createSlice({
  initialState,
  name: "event",
  reducers: {
    // Reset the event state to initial state
    resetEvent: () => {
      return { ...initialState };
    },
    // Set the event link
    setLink: (state, action) => {
      state.link = action.payload;
    },
    // Set the title of the event
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    // Set event status
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    // Set the end time of the event
    setEndTime: (state, action) => {
      state.endTime = action.payload;
    },
    // Set the event's location details
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    // Set the start time of the event
    setStartTime: (state, action) => {
      state.startTime = action.payload;
    },
    // Set the event visibility
    setVisibility: (state, action) => {
      state.visibility = action.payload;
    },
    // Set the event color
    setEventColor: (state, action) => {
      state.eventColor = action.payload;
    },
    // Set the event categories
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    // Set the description of the event
    setDescription: (state, action) => {
      state.description = action.payload;
    },
    // Add an attachment to the event
    addAttachment: (state, action) => {
      state.attachments.push(action.payload);
    },
    // Set the organizer's information
    setOrganizer: (state, action) => {
      state.organizer = { ...state.organizer, ...action.payload };
    },
    // Set the recurrence details of the event
    setRecurrence: (state, action) => {
      state.recurrence = { ...state.recurrence, ...action.payload };
    },
    // Add a guest to the event
    addGuest: (state, action) => {
      state.guests.push(action.payload);
      state.guestCount = state.guests.length;
    },
    // Remove an attachment from the event
    removeAttachment: (state, action) => {
      state.attachments = state.attachments.filter((attachment) => {
        return attachment.id !== action.payload;
      });
    },
    // Remove a guest from the event
    removeGuest: (state, action) => {
      state.guests = state.guests.filter((guest) => {
        return guest.id !== action.payload;
      });
      state.guestCount = state.guests.length;
    },
    // Update an existing guest's information
    updateGuest: (state, action) => {
      const index = state.guests.findIndex((guest) => {
        return guest.id === action.payload.id;
      });

      if (index !== -1) {
        state.guests[index] = { ...state.guests[index], ...action.payload };
      }
    },
  },
});

// Export actions to be used in components
export const {
  setLink,
  setTitle,
  addGuest,
  setStatus,
  setEndTime,
  resetEvent,
  setLocation,
  removeGuest,
  updateGuest,
  setStartTime,
  setOrganizer,
  addAttachment,
  setRecurrence,
  setVisibility,
  setEventColor,
  setCategories,
  setDescription,
  removeAttachment,
} = createEventSlice.actions;

// Selector to get the event state
export const selectEvent = (state) => {
  return state.event;
};

// Export the reducer to be used in the store
export default createEventSlice.reducer;
