import React from "react";

import { Select, MenuItem, Typography } from "@mui/material";

const StatusSelector = () => {
  return (
    <Select
      displayEmpty
      value=""
      MenuProps={{
        PaperProps: {
          elevation: 0,
          sx: {
            mt: 1,
            py: 0.4,
            maxHeight: "400px",
            backgroundColor: "#fff",
            border: "1px solid #ccc",
          },
        },
      }}
      onChange={() => {}}
      sx={{
        width: "100%",
        "& .MuiSelect-select": {
          p: 0.85,
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderWidth: "1px",
        },
      }}
      size="small"
    >
      <MenuItem sx={{ p: 0.8 }} value="">
        <Typography
          sx={{
            fontSize: "13px",
            textTransform: "capitalize",
          }}
        >
          Free
        </Typography>
      </MenuItem>
      <MenuItem sx={{ p: 0.8 }} value="daily">
        <Typography
          sx={{
            fontSize: "13px",
            textTransform: "capitalize",
          }}
        >
          Busy
        </Typography>
      </MenuItem>
    </Select>
  );
};

export default StatusSelector;
