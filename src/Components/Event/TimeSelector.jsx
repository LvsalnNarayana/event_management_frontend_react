/* eslint-disable no-use-before-define */
/* eslint-disable max-lines */
import * as React from "react";

import { Stack, TextField, Typography, Autocomplete } from "@mui/material/";

import generateTimeSlots from "../../Utils/generateTimeSlots";

const TimeSelector = ({ id, value, changeValue }) => {
  const timeSlots = generateTimeSlots();

  return (
    <Autocomplete
      id={id}
      sx={{ width: "100%" }}
      size="small"
      disableClearable
      includeInputInList
      disablePortal
      value={value}
      options={timeSlots}
      autoHighlight
      getOptionLabel={(option) => {
        return option.value.trim();
      }}
      isOptionEqualToValue={(option, testValue) => {
        return option.value === testValue.value;
      }}
      onChange={(event, newValue) => {
        if (newValue) {
          changeValue(newValue);
        }
      }}
      renderOption={({ key, ...props }, option) => {
        return (
          <Typography key={key} sx={{ fontSize: "14px" }} {...props}>
            {option.value}
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
