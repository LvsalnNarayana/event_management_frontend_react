/* eslint-disable no-inline-comments */
/* eslint-disable max-statements */
const roundToNearest15Minutes = (date) => {
  const newDate = new Date(date);
  const minutes = newDate.getMinutes();
  // Round to nearest 15
  const roundedMinutes = Math.round(minutes / 15) * 15;

  // If roundedMinutes is 60, add 1 hour and set minutes to 0
  if (roundedMinutes === 60) {
    newDate.setHours(newDate.getHours() + 1);
    newDate.setMinutes(0);
    newDate.setSeconds(0);
    newDate.setMilliseconds(0);
  } else {
    newDate.setMinutes(roundedMinutes);
    newDate.setSeconds(0);
    newDate.setMilliseconds(0);
  }

  return newDate;
};

export default roundToNearest15Minutes;
