import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Menu, Stack, Button, MenuItem, Typography } from "@mui/material";

import { AppState, setCurrentView } from "../../../State/appState";

const ViewSelector = () => {
  const dispatch = useDispatch();
  const { currentView } = useSelector(AppState);

  const [calenderSelectorAnchor, setCalenderSelectorAnchor] = useState(null);
  const calenderSelectorMenuOpen = Boolean(calenderSelectorAnchor);
  const handleOpenCalenderSelectorMenu = (event) => {
    setCalenderSelectorAnchor(event.currentTarget);
  };
  const handleCloseCalenderSelectorMenu = () => {
    setCalenderSelectorAnchor(null);
  };

  return (
    <>
      <Button
        variant="outlined"
        onClick={(event) => {
          return handleOpenCalenderSelectorMenu(event);
        }}
        disableElevation
        disableRipple
        size="small"
        sx={{ textTransform: "capitalize" }}
      >
        {currentView}&nbsp;
        <ExpandMoreIcon fontSize="small" />
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
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        PaperProps={{
          elevation: 0,
          sx: {
            mt: 1,
            width: "120px",
            borderRadius: 2,
            overflow: "visible",
            backgroundColor: "white",
            border: "1px solid #ccc",
          },
        }}
      >
        <MenuItem
          sx={{ py: 1, px: 2, width: "100%" }}
          onClick={() => {
            dispatch(setCurrentView("day"));
            handleCloseCalenderSelectorMenu();
          }}
        >
          <Stack
            width="100%"
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="body1" sx={{ fontSize: "14px" }}>
              Day
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "14px", color: "#00000080" }}
            >
              D
            </Typography>
          </Stack>
        </MenuItem>
        <MenuItem
          sx={{ py: 1, px: 2, width: "100%" }}
          onClick={() => {
            dispatch(setCurrentView("week"));
            handleCloseCalenderSelectorMenu();
          }}
        >
          <Stack
            width="100%"
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="body1" sx={{ fontSize: "14px" }}>
              Week
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "14px", color: "#00000080" }}
            >
              W
            </Typography>
          </Stack>
        </MenuItem>
        <MenuItem
          sx={{ py: 1, px: 2, width: "100%" }}
          onClick={() => {
            dispatch(setCurrentView("month"));
            handleCloseCalenderSelectorMenu();
          }}
        >
          <Stack
            width="100%"
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="body1" sx={{ fontSize: "14px" }}>
              Month
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "14px", color: "#00000080" }}
            >
              M
            </Typography>
          </Stack>
        </MenuItem>
        <MenuItem
          sx={{ py: 1, px: 2, width: "100%" }}
          onClick={() => {
            dispatch(setCurrentView("year"));
            handleCloseCalenderSelectorMenu();
          }}
        >
          <Stack
            width="100%"
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="body1" sx={{ fontSize: "14px" }}>
              Year
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "14px", color: "#00000080" }}
            >
              Y
            </Typography>
          </Stack>
        </MenuItem>
        <MenuItem
          sx={{ py: 1, px: 2, width: "100%" }}
          onClick={() => {
            dispatch(setCurrentView("playground"));
            handleCloseCalenderSelectorMenu();
          }}
        >
          <Stack
            width="100%"
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="body1" sx={{ fontSize: "14px" }}>
              Playground
            </Typography>
          </Stack>
        </MenuItem>
      </Menu>
    </>
  );
};

export default ViewSelector;
