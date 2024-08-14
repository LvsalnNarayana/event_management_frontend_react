import React from "react";

/*
 *.##.....##....###....########.########.########..####....###....##......
 *.###...###...##.##......##....##.......##.....##..##....##.##...##......
 *.####.####..##...##.....##....##.......##.....##..##...##...##..##......
 *.##.###.##.##.....##....##....######...########...##..##.....##.##......
 *.##.....##.#########....##....##.......##...##....##..#########.##......
 *.##.....##.##.....##....##....##.......##....##...##..##.....##.##......
 *.##.....##.##.....##....##....########.##.....##.####.##.....##.########
 */
import { Stack, Slide, Button, Popover } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const ColorPopover = ({ id, open, anchor, onClose }) => {
  return (
    <Popover
      disablePortal
      TransitionComponent={Slide}
      TransitionProps={{ direction: "up" }}
      id={`${id}_color_popper`}
      open={open}
      anchorEl={anchor || null}
      onClose={onClose}
      PaperProps={{
        elevation: 2,
        sx: {
          width: "200px",
          height: "auto",
          backgroundColor: "white",
          border: "1px solid #ccc",
        },
      }}
      anchorOrigin={{
        vertical: "center",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
    >
      <Stack
        gap={2}
        sx={{ p: 0.5, backgroundColor: "#cccccc80" }}
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Button
          size="small"
          disableElevation
          disableRipple
          startIcon={<DeleteOutlineOutlinedIcon />}
          sx={{
            color: "black",
            "&:hover": { backgroundColor: "transparent" },
          }}
        >
          Delete
        </Button>
      </Stack>
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        flexWrap="wrap"
        gap={2}
        sx={{ p: 2 }}
      >
        <div
          style={{
            width: "20px",
            height: "20px",
            borderRadius: 5,
            cursor: "pointer",
            backgroundColor: "#2C365E",
          }}
        />
        <div
          style={{
            width: "20px",
            height: "20px",
            borderRadius: 5,
            cursor: "pointer",
            backgroundColor: "#57CC99",
          }}
        />
        <div
          style={{
            width: "20px",
            height: "20px",
            borderRadius: 5,
            cursor: "pointer",
            backgroundColor: "#01BAEF",
          }}
        />
        <div
          style={{
            width: "20px",
            height: "20px",
            borderRadius: 5,
            cursor: "pointer",
            backgroundColor: "#F13030",
          }}
        />
        <div
          style={{
            width: "20px",
            height: "20px",
            borderRadius: 5,
            cursor: "pointer",
            backgroundColor: "#F3DE2C",
          }}
        />
        <div
          style={{
            width: "20px",
            height: "20px",
            borderRadius: 5,
            cursor: "pointer",
            backgroundColor: "#735290",
          }}
        />
      </Stack>
    </Popover>
  );
};

export default ColorPopover;
