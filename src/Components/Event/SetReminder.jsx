import React from "react";

import { CloseOutlined } from "@mui/icons-material";
import { Stack, Select, MenuItem, Typography, IconButton } from "@mui/material";

const SetReminder = () => {
  return (
    <Stack
      gap={2}
      width="100%"
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
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
            On the same day at 9am
          </Typography>
        </MenuItem>
        <MenuItem sx={{ p: 0.8 }} value="12hrs">
          <Typography
            sx={{
              fontSize: "13px",
              textTransform: "capitalize",
            }}
          >
            The day before at 11:30pm
          </Typography>
        </MenuItem>
        <MenuItem sx={{ p: 0.8 }} value="1day">
          <Typography
            sx={{
              fontSize: "13px",
              textTransform: "capitalize",
            }}
          >
            The day before at 9am
          </Typography>
        </MenuItem>
        <MenuItem sx={{ p: 0.8 }} value="2days">
          <Typography
            sx={{
              fontSize: "13px",
              textTransform: "capitalize",
            }}
          >
            2 days before at 9am
          </Typography>
        </MenuItem>
        <MenuItem sx={{ p: 0.8 }} value="week">
          <Typography
            sx={{
              fontSize: "13px",
              textTransform: "capitalize",
            }}
          >
            1 week before at 9am
          </Typography>
        </MenuItem>
        <MenuItem sx={{ p: 0.8 }} value="custom">
          <Typography
            sx={{
              fontSize: "13px",
              textTransform: "capitalize",
            }}
          >
            custom
          </Typography>
        </MenuItem>
      </Select>
      <IconButton>
        <CloseOutlined fontSize="small" />
      </IconButton>
    </Stack>
  );
};

export default SetReminder;
