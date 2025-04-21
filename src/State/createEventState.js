/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
import { createSlice } from "@reduxjs/toolkit";

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
  guestPermissions: {
    modify: true,
    invite: true,
    seeGuests: true,
  },
  recurrence: {
    until: "",
    interval: 1,
    daysOfMonth: [],
    endType: "never",
    frequency: "WEEK",
    occurrenceCount: null,
    daysOfWeek: ["MON", "WED", "FRI"],
  },
  location: {
    zip: "",
    city: "",
    state: "",
    street: "",
    country: "",
    address: "Online",
    coordinates: {
      latitude: null,
      longitude: null,
    },
  },
  organizer: {
    id: "",
    phone: "",
    email: "",
    lastname: "",
    username: "",
    firstname: "",
    reminders: [],
    settings: {
      color: "",
      status: "",
      timezone: "UTC",
      notifications: [],
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
    setEventState: (state, action) => {
      return { ...state, ...action.payload };
    },
    // Set the event's location details
    setLocationAddress: (state, action) => {
      state.location.address = action.payload;
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
    // Set the guest permissions for the event
    setGuestPermissions: (state, action) => {
      state.guestPermissions = { ...state.guestPermissions, ...action.payload };
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
  removeGuest,
  updateGuest,
  setStartTime,
  setOrganizer,
  setEventState,
  addAttachment,
  setRecurrence,
  setVisibility,
  setEventColor,
  setCategories,
  setDescription,
  removeAttachment,
  setLocationAddress,

  setGuestPermissions,
} = createEventSlice.actions;

// Selector to get the event state
export const selectCreateEventForm = (state) => {
  return state.event;
};

// Export the reducer to be used in the store
export default createEventSlice.reducer;
