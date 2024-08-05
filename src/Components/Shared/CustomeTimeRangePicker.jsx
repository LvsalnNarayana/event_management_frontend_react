import React from "react";

import { Stack } from "@mui/material";

import TimeSelector from "../Event/TimeSelector";
import timeStringGenerator from "../../Utils/timeStringGenerator";

const CustomeTimeRangePicker = ({
  endDate,
  startDate,
  changeEndTime,
  changeStartTime,
}) => {
  return (
    <Stack
      width="100%"
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      gap={2}
    >
      <TimeSelector
        value={timeStringGenerator(startDate)}
        changeValue={(event) => {
          return changeStartTime(event);
        }}
      />
      <TimeSelector
        value={timeStringGenerator(endDate)}
        changeValue={(event) => {
          return changeEndTime(event);
        }}
      />
    </Stack>
  );
};

export default CustomeTimeRangePicker;
