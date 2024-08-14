/* eslint-disable prefer-named-capture-group */
/* eslint-disable require-unicode-regexp */
/* eslint-disable max-statements */
const timeStringGenerator = (date) => {
  const value = {
    hour: new Date(date).getHours(),
    minutes: new Date(date).getMinutes(),
    value: `${
      new Date(date).getHours() < 10 ? "0" : ""
    }${new Date(date).getHours()}:${
      new Date(date).getMinutes() < 10 ? "0" : ""
    }${new Date(date).getMinutes()}${
      new Date(date).getHours() >= 12 ? "pm" : "am"
    }`,
  };

  return value;
};
const parseTimeString = (timeString) => {
  // Regular expression to extract hour and minutes
  const timeRegex = /(\d{1,2}):?(\d{1,2})?/;
  const match = timeRegex.exec(timeString);

  if (!match) {
    throw new Error("Invalid time format. Expected format: hh:mm or hh.");
  }

  // Parse hour and minutes, defaulting minutes to 0 if not provided
  const hour = parseInt(match[1], 10);
  const minutes = match[2] ? parseInt(match[2], 10) : 0;

  // Ensure the hour and minutes are within valid ranges
  if (hour < 0 || hour > 23 || minutes < 0 || minutes > 59) {
    throw new Error("Invalid time values. Hour must be 0-23 and minutes 0-59.");
  }

  // Format the hour and minutes with leading zeros if necessary
  const formattedHour = hour.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");

  // Return the parsed object
  return {
    hour,
    minutes,
    value: `${formattedHour}:${formattedMinutes}`,
  };
};

export { timeStringGenerator, parseTimeString };
