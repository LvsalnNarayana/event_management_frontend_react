/* eslint-disable import/no-extraneous-dependencies */
import React from "react";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const CustomDatePicker = ({ id, value, format, changeValue }) => {
  return (
    <DatePicker
      format={format || "dd MMMM yyyy, EEEE"}
      value={value}
      onChange={(newDate) => {
        return changeValue(newDate);
      }}
      sx={{
        p: 0,
        width: "100%",
      }}
      slotProps={{
        layout: {
          sx: {
            borderRadius: 3,
            borderWidth: "1px",
            border: "1px solid",
            borderColor: "#ccc",
            backgroundColor: "#fff",
          },
        },
        textField: {
          id,
          size: "small",
          variant: "outlined",
          sx: {
            width: "100%",
            "& .MuiInputBase-root": {
              fontSize: "13px !important",
            },
          },
        },
        desktopPaper: {
          elevation: 0,
          sx: {
            mt: 1,
            width: "100%",
            "& .MuiPickersDay-root": {
              fontWeight: 500,
              fontSize: "14px",
            },
            "& .MuiPickersYear-root .MuiPickersYear-yearButton": {
              fontWeight: 500,
              fontSize: "13px",
            },
          },
        },
      }}
    />
  );
};

export default CustomDatePicker;
