/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
/* eslint-disable max-lines */
/* eslint-disable multiline-ternary */
import React, { useState } from "react";

import { CloseOutlined } from "@mui/icons-material";
import {
  Stack,
  Radio,
  Dialog,
  Select,
  MenuItem,
  Typography,
  IconButton,
  FormControlLabel,
} from "@mui/material";

import CustomDatePicker from "../Shared/CustomDatePicker";
import CustomNumberInput from "../Shared/CustomNumberInput";

const CustomRecurrenceForm = ({ open, onClose }) => {
  const [repeatValue, setRepeatValue] = useState(1);
  const [interval, setInterval] = useState("day");
  const [repeatWeekDays, setRepeatWeekDays] = useState(["saturday"]);

  return (
    <Dialog
      disableRestoreFocus
      disableEscapeKeyDown
      disablePortal
      open={open}
      PaperProps={{
        sx: {
          width: "25vw",
          height: "auto",
          backgroundColor: "#fff",
          maxWidth: "90vw !important",
          transition: "all 0.1s ease-in",
        },
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ px: 2, pt: 2 }}
      >
        <Typography>Custom Recurrence</Typography>
        <IconButton
          onClick={() => {
            return onClose(false);
          }}
        >
          <CloseOutlined fontSize="small" />
        </IconButton>
      </Stack>
      <Stack
        gap={3}
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={{ p: 2 }}
      >
        <Stack
          gap={1}
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Typography variant="body1" sx={{ fontSize: "14px" }}>
            Repeat every
          </Typography>
          <CustomNumberInput
            value={repeatValue}
            changeValue={(value) => {
              return setRepeatValue(value);
            }}
          />
          <Select
            displayEmpty
            value={interval}
            MenuProps={{
              PaperProps: {
                elevation: 0,
                sx: {
                  mt: 1,
                  py: 0.4,
                  maxHeight: "400px",
                  backgroundColor: "#fff",
                  border: "1px solid #ccc",
                },
              },
            }}
            onChange={(event) => {
              return setInterval(event.target.value);
            }}
            sx={{
              width: "100px",
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderWidth: "1px",
              },
              "& .MuiSelect-select": {
                p: 0.5,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              },
            }}
            size="small"
          >
            <MenuItem sx={{ p: 0.8 }} value="day">
              <Typography variant="body1" sx={{ fontSize: "12px" }}>
                {repeatValue > 1 ? "Days" : "Day"}
              </Typography>
            </MenuItem>
            <MenuItem sx={{ p: 0.8 }} value="week">
              <Typography variant="body1" sx={{ fontSize: "12px" }}>
                {repeatValue > 1 ? "Weeks" : "Week"}
              </Typography>
            </MenuItem>
            <MenuItem sx={{ p: 0.8 }} value="month">
              <Typography variant="body1" sx={{ fontSize: "12px" }}>
                {repeatValue > 1 ? "Months" : "Month"}
              </Typography>
            </MenuItem>
            <MenuItem sx={{ p: 0.8 }} value="year">
              <Typography variant="body1" sx={{ fontSize: "12px" }}>
                {repeatValue > 1 ? "Years" : "Year"}
              </Typography>
            </MenuItem>
          </Select>
        </Stack>
        <Stack gap={1}>
          <Typography variant="body1" sx={{ fontSize: "14px" }}>
            Repeat on
          </Typography>
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            gap={2}
          >
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              sx={{
                width: "28px",
                height: "28px",
                fontWeight: 600,
                fontSize: "12px",
                cursor: "pointer",
                borderRadius: "100%",
                backgroundColor: "#cccccc60",
              }}
            >
              S
            </Stack>
            <Stack
              component="div"
              onClick={() => {
                if (repeatWeekDays?.includes("monday")) {
                  return setRepeatWeekDays(
                    repeatWeekDays?.filter((day) => {
                      return day !== "monday";
                    })
                  );
                }

                return setRepeatWeekDays([...repeatWeekDays, "monday"]);
              }}
              direction="row"
              justifyContent="center"
              alignItems="center"
              sx={{
                width: "28px",
                height: "28px",
                fontWeight: 600,
                fontSize: "12px",
                cursor: "pointer",
                borderRadius: "100%",
                color: repeatWeekDays?.includes("monday") ? "#fff" : "#000",
                backgroundColor: repeatWeekDays?.includes("monday")
                  ? "#1434A4"
                  : "#cccccc60",
              }}
            >
              M
            </Stack>
            <Stack
              component="div"
              onClick={() => {
                if (repeatWeekDays?.includes("tuesday")) {
                  return setRepeatWeekDays(
                    repeatWeekDays?.filter((day) => {
                      return day !== "tuesday";
                    })
                  );
                }

                return setRepeatWeekDays([...repeatWeekDays, "tuesday"]);
              }}
              direction="row"
              justifyContent="center"
              alignItems="center"
              sx={{
                width: "28px",
                height: "28px",
                fontWeight: 600,
                fontSize: "12px",
                cursor: "pointer",
                borderRadius: "100%",
                color: repeatWeekDays?.includes("tuesday") ? "#fff" : "#000",
                backgroundColor: repeatWeekDays?.includes("tuesday")
                  ? "#1434A4"
                  : "#cccccc60",
              }}
            >
              T
            </Stack>
            <Stack
              component="div"
              onClick={() => {
                if (repeatWeekDays?.includes("wednesday")) {
                  return setRepeatWeekDays(
                    repeatWeekDays?.filter((day) => {
                      return day !== "wednesday";
                    })
                  );
                }

                return setRepeatWeekDays([...repeatWeekDays, "wednesday"]);
              }}
              direction="row"
              justifyContent="center"
              alignItems="center"
              sx={{
                width: "28px",
                height: "28px",
                fontWeight: 600,
                fontSize: "12px",
                cursor: "pointer",
                borderRadius: "100%",
                color: repeatWeekDays?.includes("wednesday") ? "#fff" : "#000",
                backgroundColor: repeatWeekDays?.includes("wednesday")
                  ? "#1434A4"
                  : "#cccccc60",
              }}
            >
              W
            </Stack>
            <Stack
              component="div"
              onClick={() => {
                if (repeatWeekDays?.includes("thursday")) {
                  return setRepeatWeekDays(
                    repeatWeekDays?.filter((day) => {
                      return day !== "thursday";
                    })
                  );
                }

                return setRepeatWeekDays([...repeatWeekDays, "thursday"]);
              }}
              direction="row"
              justifyContent="center"
              alignItems="center"
              sx={{
                width: "28px",
                height: "28px",
                fontWeight: 600,
                fontSize: "12px",
                cursor: "pointer",
                borderRadius: "100%",
                color: repeatWeekDays?.includes("thursday") ? "#fff" : "#000",
                backgroundColor: repeatWeekDays?.includes("thursday")
                  ? "#1434A4"
                  : "#cccccc60",
              }}
            >
              T
            </Stack>
            <Stack
              component="div"
              onClick={() => {
                if (repeatWeekDays?.includes("friday")) {
                  return setRepeatWeekDays(
                    repeatWeekDays?.filter((day) => {
                      return day !== "friday";
                    })
                  );
                }

                return setRepeatWeekDays([...repeatWeekDays, "friday"]);
              }}
              direction="row"
              justifyContent="center"
              alignItems="center"
              sx={{
                width: "28px",
                height: "28px",
                fontWeight: 600,
                fontSize: "12px",
                cursor: "pointer",
                borderRadius: "100%",
                color: repeatWeekDays?.includes("friday") ? "#fff" : "#000",
                backgroundColor: repeatWeekDays?.includes("friday")
                  ? "#1434A4"
                  : "#cccccc60",
              }}
            >
              F
            </Stack>
            <Stack
              component="div"
              onClick={() => {
                if (repeatWeekDays?.includes("saturday")) {
                  return setRepeatWeekDays(
                    repeatWeekDays?.filter((day) => {
                      return day !== "saturday";
                    })
                  );
                }

                return setRepeatWeekDays([...repeatWeekDays, "saturday"]);
              }}
              direction="row"
              justifyContent="center"
              alignItems="center"
              sx={{
                width: "28px",
                height: "28px",
                fontWeight: 600,
                fontSize: "12px",
                cursor: "pointer",
                borderRadius: "100%",
                color: repeatWeekDays?.includes("saturday") ? "#fff" : "#000",
                backgroundColor: repeatWeekDays?.includes("saturday")
                  ? "#1434A4"
                  : "#cccccc60",
              }}
            >
              S
            </Stack>
          </Stack>
        </Stack>
        <Stack gap={1}>
          <Typography variant="body1" sx={{ fontSize: "14px" }}>
            Ends
          </Typography>
          <FormControlLabel
            label="Never"
            control={<Radio size="small" />}
            sx={{ "& .MuiTypography-root": { fontSize: "14px" } }}
          />
          <Stack
            width="100%"
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <FormControlLabel
              label="On"
              control={<Radio size="small" />}
              sx={{
                width: "50%",
                flexShrink: 0,
                "& .MuiTypography-root": { fontSize: "14px" },
              }}
            />
            <CustomDatePicker
              disabled
              id="event_date_input"
              format="MMM dd, yyyy"
              value={new Date()}
              changeValue={(value) => {}}
            />
          </Stack>
          <Stack
            width="100%"
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <FormControlLabel
              label="After"
              control={<Radio size="small" />}
              sx={{
                width: "50%",
                flexShrink: 0,
                "& .MuiTypography-root": { fontSize: "14px" },
              }}
            />
            <Stack
              gap={2}
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <CustomNumberInput
                disabled={true}
                value={repeatValue}
                changeValue={(value) => {
                  return setRepeatValue(value);
                }}
              />
              <Typography variant="body1" sx={{ fontSize: "14px" }}>
                Ocurrencies
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default CustomRecurrenceForm;
