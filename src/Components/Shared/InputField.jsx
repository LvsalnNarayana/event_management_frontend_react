/* eslint-disable multiline-ternary */
/* eslint-disable no-extra-parens */
import React, { useState } from "react";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Stack, TextField, Typography, IconButton } from "@mui/material";

const InputField = ({
  sx,
  type,
  name,
  rows,
  label,
  error,
  value,
  disabled,
  multiple,
  placeholder,
  changeValue,
}) => {
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
      gap={0}
    >
      {label !== "" && (
        <Typography sx={{ ml: 0.5, fontSize: "14px" }}>{label}</Typography>
      )}
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
        id={`${name?.toLowerCase()}_input`}
        placeholder={placeholder}
        variant="outlined"
        fullWidth
        margin="normal"
        size="small"
        value={value}
        disabled={disabled || false}
        sx={{
          p: 0.2,
          my: 0.5,
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
      {error && (
        <Typography sx={{ ml: 0.5, color: "red", fontSize: "11px" }}>
          {error}
        </Typography>
      )}
    </Stack>
  );
};

export default InputField;
