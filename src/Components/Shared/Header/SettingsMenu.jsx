import React, { useState } from "react";

import { Menu, MenuItem, IconButton } from "@mui/material";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const SettingsMenu = () => {
  const [settingsAnchor, setSettingsAnchor] = useState(null);
  const settingsMenuOpen = Boolean(settingsAnchor);
  const handleOpenSettingsMenu = (event) => {
    setSettingsAnchor(event.currentTarget);
  };
  const handleCloseSettingsMenu = () => {
    setSettingsAnchor(null);
  };

  return (
    <>
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
    </>
  );
};

export default SettingsMenu;
