/* eslint-disable no-param-reassign */
import { addHours } from "date-fns";
import { createSlice } from "@reduxjs/toolkit";

import roundToNearest15Minutes from "../Utils/roundNearest15Min";

const initialState = [
  {
    saved: true,
    guestCount: 150,
    timezone: "UTC",
    status: "tentative",
    visibility: "public",
    eventId: "event_id_1",
    eventColor: "#1E90FF",
    seriesId: "series_456",
    title: "Tech Trends 2024 Webinar",
    categories: ["Webinar", "Technology"],
    link: "https://example.com/event/webinar-67890",
    endTime: roundToNearest15Minutes(addHours(new Date(), -3)).toUTCString(),
    startTime: roundToNearest15Minutes(addHours(new Date(), -4)).toUTCString(),
    description:
      "Join us for an insightful webinar on the latest technology trends for 2024.",
    recurrence: {
      until: "",
      interval: 1,
      frequency: "",
      daysOfWeek: [],
    },
    location: {
      room: "Virtual",
      address: "Online",
      coordinates: {
        latitude: null,
        longitude: null,
      },
    },
    attachments: [
      {
        id: "attachment_002",
        name: "Presentation.pptx",
        link: "https://example.com/attachments/presentation.pptx",
      },
    ],
    organizer: {
      id: "organizer_002",
      lastname: "Host",
      phone: "+0987654321",
      firstname: "Webinar",
      reminders: ["email"],
      username: "webinarhost",
      email: "webinarhost@example.com",
      settings: {
        status: "active",
        notifications: [
          {
            id: "notif_002",
            type: "popup",
            timeBeforeEvent: 30,
          },
        ],
      },
    },
    guests: [
      {
        id: "guest_003",
        reminders: [],
        lastname: "Brown",
        status: "declined",
        firstname: "Charlie",
        email: "charlie@example.com",
        settings: {
          canModifyEvent: false,
          canSeeGuestList: true,
          canInviteOthers: false,
        },
      },
      {
        id: "guest_004",
        firstname: "David",
        status: "accepted",
        lastname: "Williams",
        reminders: ["popup"],
        email: "david@example.com",
        settings: {
          canModifyEvent: true,
          canInviteOthers: true,
          canSeeGuestList: true,
        },
      },
    ],
  },
];
const test = {
  persisted: true,
  timezone: "UTC",
  status: "TENTATIVE",
  visibility: "PUBLIC",
  eventId: "event_id_1",
  eventColor: "#1E90FF",
  seriesId: "series_456",
  endTime: "2025-04-08T11:00:00Z",
  title: "Tech Trends 2024 Webinar",
  startTime: "2025-04-08T10:00:00Z",
  createdAt: "2025-04-01T09:00:00Z",
  updatedAt: "2025-04-08T09:00:00Z",
  categories: ["Webinar", "Technology"],
  link: "https://example.com/event/webinar-67890",
  recurrence: {
    recurrenceRule: "FREQ=DAILY;INTERVAL=1;UNTIL=2025-12-31T23:59:59Z",
  },
  description:
    "Join us for an insightful webinar on the latest technology trends for 2024.",
  location: {
    isVirtual: true,
    room: "Virtual",
    address: "Online",
    coordinates: {
      latitude: null,
      longitude: null,
    },
  },
  attachments: [
    {
      id: "attachment_002",
      name: "Presentation.pptx",
      link: "https://example.com/attachments/presentation.pptx",
    },
  ],
  organizer: {
    id: "organizer_002",
    lastName: "Host",
    role: "ORGANIZER",
    firstName: "Webinar",
    phone: "+0987654321",
    reminders: ["EMAIL"],
    username: "webinarhost",
    email: "webinarhost@example.com",
    settings: {
      status: "ACTIVE",
      notifications: [
        {
          id: "notif_002",
          type: "POPUP",
          isEnabled: true,
          timeBeforeEvent: 30,
        },
      ],
    },
  },
  guests: [
    {
      id: "guest_003",
      reminders: [],
      role: "GUEST",
      lastName: "Brown",
      status: "DECLINED",
      firstName: "Charlie",
      email: "charlie@example.com",
      settings: {
        canModifyEvent: false,
        canSeeGuestList: true,
        canInviteOthers: false,
      },
    },
    {
      id: "guest_004",
      role: "GUEST",
      firstName: "David",
      status: "ACCEPTED",
      lastName: "Williams",
      reminders: ["POPUP"],
      email: "david@example.com",
      settings: {
        canModifyEvent: true,
        canSeeGuestList: true,
        canInviteOthers: true,
      },
    },
  ],
};

export const eventsState = createSlice({
  initialState,
  name: "events",
  reducers: {
    removeEvent: (state, action) => {
      const { eventId } = action.payload;

      return state.filter((event) => {
        return event.eventId !== eventId;
      });
    },
    updateEvent: (state, action) => {
      const { eventId, ...updatedProperties } = action.payload;

      const index = state.findIndex((event) => {
        return event.eventId === eventId;
      });

      if (index !== -1) {
        state[index] = { ...state[index], ...updatedProperties };
      }
    },
    addEvent: (state, action) => {
      state.push({
        ...action.payload,
        saved: false,
        title: action.payload.title || "",
        endTime: action.payload.endTime || "",
        eventId: `event_id_${state.length + 1}`,
        startTime: action.payload.startTime || "",
        description: action.payload.description || "",
      });
    },
  },
});

export const { addEvent, updateEvent, removeEvent } = eventsState.actions;

export const selectEvents = (state) => {
  return state.events;
};

export default eventsState.reducer;
