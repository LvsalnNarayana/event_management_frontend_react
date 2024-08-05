import React from "react";

import CloseIcon from "@mui/icons-material/Close";
import { Stack, IconButton, Typography } from "@mui/material";

import UserAvatar from "../Shared/UserAvatar";

const UserTag = ({ user }) => {
  return (
    <Stack
      gap={1}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
    >
      <Stack
        gap={1}
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        <UserAvatar username={user?.username} width={28} />
        <Typography variant="body1" sx={{ fontSize: "14px" }}>
          {user?.firstname} {user?.lastname}
        </Typography>
      </Stack>
      <IconButton>
        <CloseIcon fontSize="small" />
      </IconButton>
    </Stack>
  );
};

export default UserTag;
