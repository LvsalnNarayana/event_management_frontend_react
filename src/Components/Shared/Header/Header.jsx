/* eslint-disable max-statements */
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Stack, Button, Typography, IconButton } from "@mui/material";

import UserAvatar from "../UserAvatar";
import ViewSelector from "./ViewSelector";
import SettingsMenu from "./SettingsMenu";
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
        <ViewSelector />
        <SettingsMenu />
        <UserAvatar username="jhon_cena" width={40} />
      </Stack>
    </Stack>
  );
};

export default Header;
