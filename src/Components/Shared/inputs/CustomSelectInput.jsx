/* eslint-disable operator-linebreak */
/* eslint-disable multiline-ternary */
/* eslint-disable no-extra-parens */
import React from "react";

import { Stack, Select, useTheme, MenuItem, Typography } from "@mui/material";

const CustomSelectInput = ({
  sx,
  name,
  icon,
  label,
  error,
  value,
  options,
  disabled,
  multiple,
  fontSize,
  placeholder,
  changeValue,
  iconPlacement,
  optionsFontSize,
}) => {
  const theme = useTheme();

  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      sx={{ width: "100%", ...sx }}
      gap={0.5}
      id={`${name}_input_container`}
    >
      {label !== "" && (
        <Typography
          id={`${name}_input_label`}
          sx={{ ml: 0.5, fontSize: "14px" }}
        >
          {label}
        </Typography>
      )}
      <Stack
        gap={2}
        width="100%"
        direction={iconPlacement === "end" ? "row-reverse" : "row"}
        justifyContent="flex-start"
        alignItems="center"
      >
        {icon}
        <Select
          id={`${name?.toLowerCase()}_select_input`}
          name={name?.toLowerCase()}
          value={value}
          onChange={(e) => {
            return changeValue(e.target.value);
          }}
          displayEmpty
          disabled={disabled || false}
          multiple={multiple || false}
          sx={{
            width: "100%",
            position: "relative",
            fontSize: fontSize || "14px",
            // This targets the inner select display.
            "& .MuiSelect-select": {
              px: 2,
              py: 1,
              fontSize: fontSize || "14px",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: error ? "red" : theme.palette.primary.main,
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderWidth: "1px",
              borderColor: error ? "red" : "",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderWidth: "1px",
              borderColor: error
                ? "red !important"
                : theme.palette.primary.main,
            },
          }}
          MenuProps={{
            PaperProps: {
              elevation: 0,
              sx: {
                mt: 1,
                borderRadius: 2,
                maxHeight: "300px",
                backgroundColor: "#fff",
                border: `1px solid #00000030`,
              },
            },
          }}
          placeholder={placeholder}
        >
          {/* Optionally, you can display a placeholder as a disabled MenuItem */}
          {placeholder && !multiple && (
            <MenuItem
              value=""
              disabled
              sx={{
                color: "gray",
              }}
            >
              {placeholder}
            </MenuItem>
          )}
          {options &&
            options.map((option) => {
              return (
                <MenuItem
                  sx={{
                    fontSize: optionsFontSize || "14px",
                  }}
                  key={option.value}
                  value={option.value}
                >
                  {option.name}
                </MenuItem>
              );
            })}
        </Select>
      </Stack>
      {error && (
        <Typography sx={{ ml: 0.5, color: "red", fontSize: "11px" }}>
          {error}
        </Typography>
      )}
    </Stack>
  );
};

export default CustomSelectInput;
