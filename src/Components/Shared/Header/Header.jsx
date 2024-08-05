/* eslint-disable max-statements */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import {
  Menu,
  Stack,
  Button,
  MenuItem,
  Typography,
  IconButton,
} from "@mui/material";

import UserAvatar from "../UserAvatar";
import { setDate, DateState } from "../../../State/dateState";

const Header = () => {
  const dispatch = useDispatch();
  const { selectedDate } = useSelector(DateState);
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [settingsAnchor, setSettingsAnchor] = useState(null);
  const [calenderSelectorAnchor, setCalenderSelectorAnchor] = useState(null);
  const handleNextMonth = () => {
    const newDate = new Date(selectedDate);

    newDate.setMonth(selectedDate.getMonth() + 1);
    newDate.setDate(1);

    dispatch(setDate(newDate));
  };

  const handlePreviousMonth = () => {
    const newDate = new Date(selectedDate);

    newDate.setMonth(selectedDate.getMonth() - 1);
    newDate.setDate(1);

    dispatch(setDate(newDate));
  };
  const calenderSelectorMenuOpen = Boolean(calenderSelectorAnchor);
  const handleOpenCalenderSelectorMenu = (event) => {
    setCalenderSelectorAnchor(event.currentTarget);
  };
  const handleCloseCalenderSelectorMenu = () => {
    setCalenderSelectorAnchor(null);
  };
  const settingsMenuOpen = Boolean(settingsAnchor);
  const handleOpenSettingsMenu = (event) => {
    setSettingsAnchor(event.currentTarget);
  };
  const handleCloseSettingsMenu = () => {
    setSettingsAnchor(null);
  };
  const handleTodayClick = () => {
    const today = new Date();

    dispatch(setDate(today));
  };

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      sx={{
        height: "55px",
        padding: "0 20px",
        borderBottom: "1px solid #e3e3e3",
      }}
    >
      <Stack
        gap={2}
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Typography
          sx={{
            width: "265px",
            fontWeight: 600,
            fontSize: "24px",
            fontFamily: "IBM Plex Mono",
          }}
        >
          Eventr
        </Typography>
        <Button
          onClick={handleTodayClick}
          variant="contained"
          disableRipple
          disableElevation
          size="small"
        >
          Today
        </Button>
        <Stack direction="row" justifyContent="flex-start" alignItems="center">
          <IconButton
            onClick={handlePreviousMonth}
            sx={{ mr: 1 }}
            disableRipple
          >
            <ArrowBackIosNewIcon fontSize="small" />
          </IconButton>
          <IconButton onClick={handleNextMonth} sx={{ mr: 2 }} disableRipple>
            <ArrowForwardIosIcon fontSize="small" />
          </IconButton>
          <Typography sx={{ fontSize: "20px" }}>
            {month[selectedDate.getMonth()]} {selectedDate.getFullYear()}
          </Typography>
        </Stack>
      </Stack>
      <Stack
        gap={4}
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
      >
        <IconButton disableRipple>
          <SearchOutlinedIcon sx={{ color: "black" }} />
        </IconButton>
        <Button
          variant="contained"
          onClick={(event) => {
            return handleOpenCalenderSelectorMenu(event);
          }}
          disableElevation
          disableRipple
          size="small"
        >
          Month
        </Button>
        <Menu
          elevation={1}
          id="work-menu"
          anchorEl={calenderSelectorAnchor}
          open={calenderSelectorMenuOpen}
          onClose={handleCloseCalenderSelectorMenu}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          PaperProps={{
            elevation: 0,
            sx: {
              mt: 1,
              width: "auto",
              borderRadius: 2,
              overflow: "visible",
              backgroundColor: "white",
              border: "1px solid #ccc",
            },
          }}
        >
          <MenuItem sx={{ py: 1, px: 2, fontSize: "14px" }} onClick={() => {}}>
            Day
          </MenuItem>
          <MenuItem sx={{ py: 1, px: 2, fontSize: "14px" }} onClick={() => {}}>
            Week
          </MenuItem>
          <MenuItem sx={{ py: 1, px: 2, fontSize: "14px" }} onClick={() => {}}>
            Month
          </MenuItem>
          <MenuItem sx={{ py: 1, px: 2, fontSize: "14px" }} onClick={() => {}}>
            Year
          </MenuItem>
        </Menu>
        <IconButton
          onClick={(event) => {
            return handleOpenSettingsMenu(event);
          }}
          disableRipple
        >
          <SettingsOutlinedIcon sx={{ color: "black" }} />
        </IconButton>
        <Menu
          elevation={1}
          id="work-menu"
          anchorEl={settingsAnchor}
          open={settingsMenuOpen}
          onClose={handleCloseSettingsMenu}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          PaperProps={{
            elevation: 0,
            sx: {
              mt: 1,
              width: "auto",
              borderRadius: 2,
              overflow: "visible",
              backgroundColor: "white",
              border: "1px solid #ccc",
            },
          }}
        >
          <MenuItem sx={{ py: 1, px: 2, fontSize: "14px" }} onClick={() => {}}>
            Settings
          </MenuItem>
          <MenuItem sx={{ py: 1, px: 2, fontSize: "14px" }} onClick={() => {}}>
            Trash
          </MenuItem>
        </Menu>
        <UserAvatar username="jhon_cena" width={40} />
      </Stack>
    </Stack>
  );
};

export default Header;
