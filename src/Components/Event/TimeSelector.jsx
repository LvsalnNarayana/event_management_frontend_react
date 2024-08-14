/* eslint-disable operator-linebreak */
/* eslint-disable no-undefined */
/* eslint-disable no-use-before-define */
/* eslint-disable max-lines */
import * as React from "react";

import { Stack, TextField, Typography, Autocomplete } from "@mui/material/";

import generateTimeSlots from "../../Utils/generateTimeSlots";
import { parseTimeString } from "../../Utils/timeStringGenerator";

const TimeSelector = ({ id, value, changeValue }) => {
  const timeSlots = generateTimeSlots();

  return (
    <Autocomplete
      id={id}
      freeSolo
      sx={{ width: "100%" }}
      size="small"
      disableClearable
      // includeInputInList
      disablePortal
      value={value.value}
      options={timeSlots.map((slot) => {
        return slot.value;
      })}
      autoHighlight
      onInput={(event) => {
        if (
          event.target.value !== "" &&
          event.target.value !== null &&
          event.target.value !== undefined
        ) {
          changeValue(parseTimeString(event.target.value));
        }
      }}
      onChange={(event, newValue) => {
        if (newValue) {
          changeValue(parseTimeString(newValue));
        }
      }}
      renderOption={({ key, ...props }, option) => {
        return (
          <Typography key={key} sx={{ fontSize: "14px" }} {...props}>
            {option}
          </Typography>
        );
      }}
      PaperComponent={({ children }) => {
        return (
          <Stack
            sx={{
              mt: 1,
              width: "100%",
              borderRadius: 2,
              overflowY: "auto",
              maxHeight: "300px",
              backgroundColor: "#fff",
              border: "1px solid #ccc",
            }}
          >
            {children}
          </Stack>
        );
      }}
      renderInput={(params) => {
        return (
          <TextField
            fullWidth
            {...params}
            inputProps={{
              ...params.inputProps,
              autoComplete: "new-password",
            }}
            placeholder="hh:mm"
          />
        );
      }}
    />
  );
};

export default TimeSelector;
