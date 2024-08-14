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

const StyledInputRoot = styled("div")(({ theme }) => {
  return `
        width:auto;
        height:31px;
        font-weight: 400;
        border-radius: 5px;
        color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
        background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
        border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
        box-shadow: 0px 2px 2px ${theme.palette.mode === "dark" ? grey[900] : grey[50]};
        display: grid;
        grid-template-columns: 1fr 15px;
        grid-template-rows: 1fr 1fr;
        overflow: hidden;
        column-gap: 8px;
      
        &.${numberInputClasses.focused} {
          border-color: ${blue[400]};
        }
      
        &:hover {
          border-color: ${blue[400]};
        }
      
        // firefox
        &:focus-visible {
          outline: 0;
        }
      `;
});

const StyledInputElement = styled("input")(({ theme }) => {
  return `
        width:30px;
        height:31px;
        font-size: 12px;
        font-family: inherit;
        font-weight: 500;
        line-height: 1.5;
        grid-column: 1/2;
        grid-row: 1/3;
        display:flex;
        justify-content:center;
        align-items:center;
        color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
        background: inherit;
        border: none;
        border-radius: inherit;
        padding: 0px 10px;
        outline: 0;
      `;
});

const StyledButton = styled("button")(({ theme }) => {
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
        background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
        border: 0;
        color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 120ms;
      
        &:hover {
          background: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
          border-color: ${theme.palette.mode === "dark" ? grey[600] : grey[300]};
          cursor: pointer;
        }
      
        &.${numberInputClasses.incrementButton} {
          grid-column: 2/3;
          grid-row: 1/2;
          border-top-left-radius: 4px;
          border-top-right-radius: 4px;
          border: 1px solid;
          border-bottom: 0;
          &:hover {
            cursor: pointer;
            background: ${blue[600]};
            color: #fff;
          }
      
        border-color: ${theme.palette.mode === "dark" ? grey[800] : grey[200]};
        background: ${theme.palette.mode === "dark" ? grey[900] : grey[50]};
        color: ${theme.palette.mode === "dark" ? grey[200] : grey[900]};
        }
      
        &.${numberInputClasses.decrementButton} {
          grid-column: 2/3;
          grid-row: 2/3;
          border-bottom-left-radius: 4px;
          border-bottom-right-radius: 4px;
          border: 1px solid;
          &:hover {
            cursor: pointer;
            background: ${blue[600]};
            color: #fff;
          }
      
        border-color: ${theme.palette.mode === "dark" ? grey[800] : grey[200]};
        background: ${theme.palette.mode === "dark" ? grey[900] : grey[50]};
        color: ${theme.palette.mode === "dark" ? grey[200] : grey[900]};
        }
        & .arrow {
          transform: translateY(-1px);
        }
      `;
});

const NumberInput = forwardRef((props, ref) => {
  return (
    <BaseNumberInput
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

const CustomNumberInput = ({ value, changeValue }) => {
  return (
    <NumberInput
      aria-label="Demo number input"
      value={value || 0}
      onChange={(event, val) => {
        return changeValue(val);
      }}
    />
  );
};

export default CustomNumberInput;
