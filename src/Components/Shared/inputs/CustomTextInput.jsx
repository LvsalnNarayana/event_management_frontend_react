/* eslint-disable multiline-ternary */
/* eslint-disable no-extra-parens */
import React, { useState } from "react";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
  Stack,
  useTheme,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";

const CustomTextInput = ({
  sx,
  type,
  name,
  rows,
  icon,
  label,
  error,
  value,
  disabled,
  multiple,
  fontSize,
  placeholder,
  changeValue,
  iconPlacement,
}) => {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    return setShowPassword((prev) => {
      return !prev;
    });
  };

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
        <>{icon}</>
        <TextField
          multiline={multiple || false}
          rows={rows || 1}
          type={
            type === "password"
              ? showPassword
                ? "text"
                : "password"
              : type || "text"
          }
          onChange={(e) => {
            return changeValue(e.target.value);
          }}
          id={`${name?.toLowerCase()}_input_field`}
          name={name?.toLowerCase()}
          placeholder={placeholder}
          variant="outlined"
          fullWidth
          margin="normal"
          size="small"
          value={value}
          disabled={disabled || false}
          sx={{
            my: 0,
            p: 0.2,
            width: "100%",

            fontSize: fontSize || "14px",
            "& .MuiOutlinedInput-input": {
              fontSize: fontSize || "14px",
            },
            "& .MuiOutlinedInput-input::placeholder": {
              fontSize: fontSize || "14px",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: error ? "red" : "",
              },
              "&:hover fieldset": {
                borderColor: error ? "red" : theme.palette.primary.main,
              },
              "&.Mui-focused fieldset": {
                borderColor: error
                  ? "red !important"
                  : theme.palette.primary.main,
              },
            },
          }}
          InputProps={{
            endAdornment: type === "password" && (
              <IconButton
                aria-label={showPassword ? "Hide password" : "Show password"}
                onClick={togglePasswordVisibility}
                size="small"
                sx={{ p: 0, m: 0, minWidth: "0" }}
              >
                {showPassword ? (
                  <VisibilityIcon sx={{ opacity: 0.5 }} fontSize="small" />
                ) : (
                  <VisibilityOffIcon sx={{ opacity: 0.5 }} fontSize="small" />
                )}
              </IconButton>
            ),
          }}
        />
      </Stack>
      {error && (
        <Typography sx={{ ml: 0.5, color: "red", fontSize: "11px" }}>
          {error}
        </Typography>
      )}
    </Stack>
  );
};

export default CustomTextInput;
