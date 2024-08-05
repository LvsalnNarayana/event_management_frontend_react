/* eslint-disable max-statements */
// Utils/generateTimeSlots.js
const generateTimeSlots = () => {
  const slots = [];
  const totalMinutes = 24 * 60;
  const slotInterval = 15;

  for (let i = 0; i < totalMinutes; i += slotInterval) {
    const hours = Math.floor(i / 60);
    const minutes = i % 60;
    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const timeValue = `${formattedHours}:${formattedMinutes}${formattedHours > 11 ? "pm" : "am"}`;

    slots.push({
      minutes,
      hour: hours,
      value: timeValue,
    });
  }

  return slots;
};

export default generateTimeSlots;
