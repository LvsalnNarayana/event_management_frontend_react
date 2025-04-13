/* eslint-disable complexity */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/display-name */
import React, { forwardRef } from "react";

import { styled } from "@mui/system";
import {
  numberInputClasses,
  Unstable_NumberInput as BaseNumberInput,
} from "@mui/base/Unstable_NumberInput";

const blue = {
  100: "#DAECFF",
  200: "#80BFFF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const StyledInputRoot = styled("div")(({ theme, disabled }) => {
  return `
  width: auto;
  height: 31px;
  font-weight: 400;
  border-radius: 5px;
  color: ${disabled ? grey[500] : theme.palette.mode === "dark" ? grey[300] : grey[900]};
  background: ${disabled ? grey[200] : theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${disabled ? grey[400] : theme.palette.mode === "dark" ? grey[700] : grey[200]};
  box-shadow: 0px 2px 2px ${disabled ? "none" : theme.palette.mode === "dark" ? grey[900] : grey[50]};
  display: grid;
  grid-template-columns: 1fr 15px;
  grid-template-rows: 1fr 1fr;
  overflow: hidden;
  column-gap: 8px;

  &.${numberInputClasses.focused} {
    border-color: ${disabled ? grey[400] : blue[400]};
  }

  &:hover {
    border-color: ${disabled ? grey[400] : blue[400]};
  }

  &:focus-visible {
    outline: 0;
  }
`;
});

const StyledInputElement = styled("input")(({ theme, disabled }) => {
  return `
  width: 30px;
  height: 31px;
  font-size: 12px;
  font-family: inherit;
  font-weight: 500;
  line-height: 1.5;
  grid-column: 1/2;
  grid-row: 1/3;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${disabled ? grey[500] : theme.palette.mode === "dark" ? grey[300] : grey[900]};
  background: inherit;
  border: none;
  border-radius: inherit;
  padding: 0px 10px;
  outline: 0;
  pointer-events: ${disabled ? "none" : "auto"};
`;
});

const StyledButton = styled("button")(({ theme, disabled }) => {
  return `
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  appearance: none;
  padding: 0;
  width: 15px;
  height: 15px;
  font-family: system-ui, sans-serif;
  font-size: 0.875rem;
  line-height: 1;
  box-sizing: border-box;
  background: ${disabled ? grey[200] : theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 0;
  color: ${disabled ? grey[500] : theme.palette.mode === "dark" ? grey[300] : grey[900]};
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;
  pointer-events: ${disabled ? "none" : "auto"};

  &:hover {
    background: ${disabled ? grey[200] : theme.palette.mode === "dark" ? grey[800] : grey[50]};
    border-color: ${disabled ? grey[400] : theme.palette.mode === "dark" ? grey[600] : grey[300]};
    cursor: ${disabled ? "not-allowed" : "pointer"};
  }

  &.${numberInputClasses.incrementButton} {
    grid-column: 2/3;
    grid-row: 1/2;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    border: 1px solid;
    border-bottom: 0;

    &:hover {
      background: ${disabled ? grey[200] : blue[600]};
      color: ${disabled ? grey[500] : "#fff"};
    }

    border-color: ${disabled ? grey[400] : theme.palette.mode === "dark" ? grey[800] : grey[200]};
    background: ${disabled ? grey[200] : theme.palette.mode === "dark" ? grey[900] : grey[50]};
    color: ${disabled ? grey[500] : theme.palette.mode === "dark" ? grey[200] : grey[900]};
  }

  &.${numberInputClasses.decrementButton} {
    grid-column: 2/3;
    grid-row: 2/3;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    border: 1px solid;

    &:hover {
      background: ${disabled ? grey[200] : blue[600]};
      color: ${disabled ? grey[500] : "#fff"};
    }

    border-color: ${disabled ? grey[400] : theme.palette.mode === "dark" ? grey[800] : grey[200]};
    background: ${disabled ? grey[200] : theme.palette.mode === "dark" ? grey[900] : grey[50]};
    color: ${disabled ? grey[500] : theme.palette.mode === "dark" ? grey[200] : grey[900]};
  }

  & .arrow {
    transform: translateY(-1px);
  }
`;
});

const NumberInput = forwardRef((props, ref) => {
  return (
    <BaseNumberInput
      disabled={props.disabled || false}
      slots={{
        root: StyledInputRoot,
        input: StyledInputElement,
        incrementButton: StyledButton,
        decrementButton: StyledButton,
      }}
      slotProps={{
        incrementButton: {
          children: "▴",
        },
        decrementButton: {
          children: "▾",
        },
      }}
      {...props}
      ref={ref}
    />
  );
});

const CustomNumberInput = ({ value, disabled, changeValue }) => {
  return (
    <NumberInput
      disabled={disabled}
      aria-label="Demo number input"
      value={value}
      onChange={(event, val) => {
        if (val > 0) {
          changeValue(val);
        }
      }}
    />
  );
};

export default CustomNumberInput;
