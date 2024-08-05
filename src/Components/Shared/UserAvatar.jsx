import React, { useRef, useEffect } from "react";

// eslint-disable-next-line import/no-unresolved
import multiavatar from "@multiavatar/multiavatar/esm";

import { Avatar } from "@mui/material";

const UserAvatar = (props) => {
  const { width, height, username } = props;
  const avatarRef = useRef(null);

  useEffect(() => {
    const svgCode = multiavatar(username);

    if (avatarRef.current) {
      avatarRef.current.innerHTML = svgCode;
    }
  }, [username]);

  return (
    <>
      {username ? (
        <div
          style={{
            width,
            height,
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          ref={avatarRef}
        />
      ) : (
        <Avatar
          sx={{
            p: 0.5,
            flexShrink: 0,
            width: width + 2,
            height: height + 2,
            backgroundColor: "#00000040",
          }}
          src="/ape.png"
        />
      )}
    </>
  );
};

export default UserAvatar;
