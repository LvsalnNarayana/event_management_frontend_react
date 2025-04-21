/* eslint-disable operator-linebreak */
import { HexColorPicker } from "react-colorful";
import React, { useRef, useState, useEffect } from "react";

import CheckIcon from "@mui/icons-material/Check";
import { CloseOutlined } from "@mui/icons-material";
import {
  Box,
  Paper,
  Stack,
  Popper,
  TextField,
  IconButton,
  InputAdornment,
  ClickAwayListener,
} from "@mui/material";

// ✅ Fixed hex validation
// eslint-disable-next-line wrap-regex, arrow-body-style
const isValidHex = (hex) => /^#[0-9A-Fa-f]{6}$/u.test(hex);

const ColorPicker = ({ sx = {}, setColor, color = "#000000" }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [inputColor, setInputColor] = useState(color.replace("#", ""));
  const popperRef = useRef(null);
  const isOpen = Boolean(anchorEl);
  const buttonRef = useRef(null);
  // ✅ Sync inputColor with external color changes

  useEffect(() => {
    setInputColor(color.replace("#", ""));
  }, [color]);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setInputColor(color.replace("#", ""));
  };

  const handleConfirm = () => {
    const hex = `#${inputColor}`;

    if (isValidHex(hex)) {
      setColor(hex);
      handleClose();
    }
  };

  return (
    <>
      <IconButton
        ref={buttonRef}
        onClick={handleOpen}
        sx={{
          width: sx.width || 24,
          backgroundColor: color,
          height: sx.height || 24,
          border: "2px solid #ccc",
          borderRadius: sx.borderRadius || "50%",
          "&:hover": { opacity: 0.9, backgroundColor: color },
        }}
      />

      <Popper
        open={isOpen}
        anchorEl={anchorEl}
        placement="bottom-start"
        modifiers={[
          {
            name: "preventOverflow",
            options: { boundary: "window" },
          },
        ]}
        sx={{
          zIndex: 9999,
        }}
      >
        <ClickAwayListener onClickAway={handleClose}>
          <Paper
            ref={popperRef}
            sx={{
              p: 1,
              gap: 1,
              boxShadow: 3,
              display: "flex",
              borderRadius: 2,
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Stack
              direction="row"
              width="100%"
              alignItems="center"
              justifyContent="space-between"
            >
              <TextField
                size="small"
                value={inputColor}
                onChange={(e) => {
                  return setInputColor(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleConfirm();
                  }
                }}
                sx={{
                  width: 130,
                  "& .MuiInputBase-input": { p: 0 },
                  "& .MuiInputBase-root": {
                    fontSize: "14px",
                    textAlign: "center",
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">#</InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        color="success"
                        size="small"
                        sx={{ p: 0.2 }}
                        onClick={handleConfirm}
                      >
                        <CheckIcon fontSize="small" />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <IconButton size="small" onClick={handleClose}>
                <CloseOutlined fontSize="small" />
              </IconButton>
            </Stack>

            <Box>
              <HexColorPicker
                color={`#${inputColor}`}
                onChange={(newColor) => {
                  if (isValidHex(newColor)) {
                    setColor(newColor);
                    setInputColor(newColor.replace("#", ""));
                  }
                }}
              />
            </Box>
          </Paper>
        </ClickAwayListener>
      </Popper>
    </>
  );
};

export default ColorPicker;
