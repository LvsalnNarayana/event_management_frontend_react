/* eslint-disable operator-linebreak */
/* eslint-disable multiline-ternary */
/* eslint-disable max-statements */
/**
 * getEventTimes - Returns an object with currenttime and newtime strings.
 *
 * @param {Object} params - The parameters object.
 * @param {Object} params.event - The event object containing startTime and endTime.
 * @param {Object} [params.transform] - The transform object with a numeric property "y".
 * @param {number} params.pixelToTime - A conversion factor from pixels to minutes.
 *
 * @returns {Object} - An object with two properties:
 *   currenttime: string in the format "hh:mm aa to hh:mm aa" based solely on event times.
 *   newtime: string in the format "hh:mm aa to hh:mm aa" where both times are shifted
 *            by transform.y * pixelToTime minutes (supports negative values).
 */

import { format, addMinutes } from "date-fns";

const getEventTimes = ({ event, transform, pixelToTime }) => {
  // Ensure the event has a valid start time.

  const startTimeStr = event?.startTime || new Date().toISOString();

  const baseStartTime = new Date(startTimeStr);

  const baseEndTime = new Date(event?.endTime || startTimeStr);

  // Format the event's original times.

  const currentStartTimeFormatted = format(baseStartTime, "hh:mm aa");

  const currentEndTimeFormatted = format(baseEndTime, "hh:mm aa");

  /*
   * Calculate the offset in minutes based on the transform.
   * Note: This supports negative values, so dragging upward will yield a negative offset.
   */

  const offsetMinutes =
    transform && typeof transform.y === "number"
      ? transform.y * pixelToTime
      : 0;

  // Calculate new times by shifting both the start and end times.

  const newStartTime = addMinutes(baseStartTime, offsetMinutes);

  const newEndTime = addMinutes(baseEndTime, offsetMinutes);

  const newStartTimeFormatted = format(new Date(newStartTime), "hh:mm aa");

  const newEndTimeFormatted = format(new Date(newEndTime), "hh:mm aa");

  return {
    newtime: `${newStartTimeFormatted} to ${newEndTimeFormatted}`,

    currenttime: `${currentStartTimeFormatted} to ${currentEndTimeFormatted}`,
  };
};

export default getEventTimes;
