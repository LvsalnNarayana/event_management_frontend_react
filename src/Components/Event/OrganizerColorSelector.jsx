import React from "react";

import { Stack, Select, MenuItem, Typography } from "@mui/material";

const OrganizerColorSelector = () => {
  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      gap={1}
      sx={{ width: "100%" }}
    >
      <Typography>Narayana Lvsaln</Typography>
      <Select
        displayEmpty
        value="blue"
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
          width: "fit-content",
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderWidth: "1px",
          },
          "& .MuiSelect-select": {
            p: 0.5,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
        }}
        size="small"
      >
        <MenuItem sx={{ p: 0.8 }} value="red">
          <span
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "50%",
              display: "inline-block",
              backgroundColor: "#ff0000",
            }}
          />
        </MenuItem>
        <MenuItem sx={{ p: 0.8 }} value="blue">
          <span
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "50%",
              display: "inline-block",
              backgroundColor: "blue",
            }}
          />
        </MenuItem>
        <MenuItem sx={{ p: 0.8 }} value="green">
          <span
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "50%",
              display: "inline-block",
              backgroundColor: "green",
            }}
          />
        </MenuItem>
        <MenuItem sx={{ p: 0.8 }} value="yellow">
          <span
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "50%",
              display: "inline-block",
              backgroundColor: "yellow",
            }}
          />
        </MenuItem>
        <MenuItem sx={{ p: 0.8 }} value="orange">
          <span
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "50%",
              display: "inline-block",
              backgroundColor: "orange",
            }}
          />
        </MenuItem>
      </Select>
    </Stack>
  );
};

export default OrganizerColorSelector;
