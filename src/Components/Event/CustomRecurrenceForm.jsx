/* eslint-disable operator-linebreak */
/* eslint-disable no-extra-parens */
/* eslint-disable multiline-ternary */
/* eslint-disable max-lines */
import React from "react";
import { useDispatch } from "react-redux";

import { CloseOutlined } from "@mui/icons-material";
import {
  Stack,
  Radio,
  Dialog,
  Typography,
  IconButton,
  FormControlLabel,
} from "@mui/material";

import { setRecurrence } from "../../State/createEventState";
import CustomDatePicker from "../Shared/inputs/CustomDatePicker";
import CustomNumberInput from "../Shared/inputs/CustomNumberInput";
import CustomSelectInput from "../Shared/inputs/CustomSelectInput";

const CustomRecurrenceForm = ({ open, event, onClose }) => {
  const { recurrence } = event || {};

  const dispatch = useDispatch();

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
          width="100%"
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Typography variant="body1" sx={{ flexShrink: 0, fontSize: "14px" }}>
            Repeat every
          </Typography>
          <CustomNumberInput
            value={recurrence?.interval}
            changeValue={(value) => {
              dispatch(
                setRecurrence({
                  ...event?.recurrence,
                  interval: value,
                }),
              );
            }}
          />
          <CustomSelectInput
            name="recurrence_frequency_selector"
            onChange={(frequencyEvent) => {
              dispatch(
                setRecurrence({
                  ...event?.recurrence,
                  frequency: frequencyEvent?.target?.value,
                }),
              );
            }}
            value={recurrence?.frequency || "DAY"}
            options={[
              { name: "Day", value: "DAY" },
              { name: "Week", value: "WEEK" },
              { name: "Month", value: "MONTH" },
              { name: "Year", value: "YEAR" },
            ]}
          />
        </Stack>
        <Stack gap={1}>
          <Typography variant="body1" sx={{ fontSize: "14px" }}>
            Repeat on
          </Typography>
          <Stack
            component="div"
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
                color: recurrence?.daysOfWeek?.includes("SUN")
                  ? "#fff"
                  : "#000",
                backgroundColor: recurrence?.daysOfWeek?.includes("SUN")
                  ? "#1434A4"
                  : "#cccccc60",
              }}
              onClick={() => {
                const daysOfWeek = [...(recurrence?.daysOfWeek || [])];

                const index = daysOfWeek.indexOf("SUN");

                if (index > -1) {
                  daysOfWeek.splice(index, 1);
                } else {
                  daysOfWeek.push("SUN");
                }

                dispatch(
                  setRecurrence({
                    ...event?.recurrence,
                    daysOfWeek,
                  }),
                );
              }}
            >
              S
            </Stack>
            <Stack
              component="div"
              onClick={() => {
                const daysOfWeek = [...(recurrence?.daysOfWeek || [])];

                const index = daysOfWeek.indexOf("MON");

                if (index > -1) {
                  daysOfWeek.splice(index, 1);
                } else {
                  daysOfWeek.push("MON");
                }

                dispatch(
                  setRecurrence({
                    ...event?.recurrence,
                    daysOfWeek,
                  }),
                );
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
                color: recurrence?.daysOfWeek?.includes("MON")
                  ? "#fff"
                  : "#000",
                backgroundColor: recurrence?.daysOfWeek?.includes("MON")
                  ? "#1434A4"
                  : "#cccccc60",
              }}
            >
              M
            </Stack>
            <Stack
              component="div"
              onClick={() => {
                const daysOfWeek = [...(recurrence?.daysOfWeek || [])];

                const index = daysOfWeek.indexOf("TUE");

                if (index > -1) {
                  daysOfWeek.splice(index, 1);
                } else {
                  daysOfWeek.push("TUE");
                }

                dispatch(
                  setRecurrence({
                    ...event?.recurrence,
                    daysOfWeek,
                  }),
                );
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
                color: recurrence?.daysOfWeek?.includes("TUE")
                  ? "#fff"
                  : "#000",
                backgroundColor: recurrence?.daysOfWeek?.includes("TUE")
                  ? "#1434A4"
                  : "#cccccc60",
              }}
            >
              T
            </Stack>
            <Stack
              component="div"
              onClick={() => {
                const daysOfWeek = [...(recurrence?.daysOfWeek || [])];

                const index = daysOfWeek.indexOf("WED");

                if (index > -1) {
                  daysOfWeek.splice(index, 1);
                } else {
                  daysOfWeek.push("WED");
                }

                dispatch(
                  setRecurrence({
                    ...event?.recurrence,
                    daysOfWeek,
                  }),
                );
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
                color: recurrence?.daysOfWeek?.includes("WED")
                  ? "#fff"
                  : "#000",
                backgroundColor: recurrence?.daysOfWeek?.includes("WED")
                  ? "#1434A4"
                  : "#cccccc60",
              }}
            >
              W
            </Stack>
            <Stack
              component="div"
              onClick={() => {
                const daysOfWeek = [...(recurrence?.daysOfWeek || [])];

                const index = daysOfWeek.indexOf("THU");

                if (index > -1) {
                  daysOfWeek.splice(index, 1);
                } else {
                  daysOfWeek.push("THU");
                }

                dispatch(
                  setRecurrence({
                    ...event?.recurrence,
                    daysOfWeek,
                  }),
                );
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
                color: recurrence?.daysOfWeek?.includes("THU")
                  ? "#fff"
                  : "#000",

                backgroundColor: recurrence?.daysOfWeek?.includes("THU")
                  ? "#1434A4"
                  : "#cccccc60",
              }}
            >
              T
            </Stack>
            <Stack
              component="div"
              onClick={() => {
                const daysOfWeek = [...(recurrence?.daysOfWeek || [])];

                const index = daysOfWeek.indexOf("FRI");

                if (index > -1) {
                  daysOfWeek.splice(index, 1);
                } else {
                  daysOfWeek.push("FRI");
                }

                dispatch(
                  setRecurrence({
                    ...event?.recurrence,
                    daysOfWeek,
                  }),
                );
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
                color: recurrence?.daysOfWeek?.includes("FRI")
                  ? "#fff"
                  : "#000",
                backgroundColor: recurrence?.daysOfWeek?.includes("FRI")
                  ? "#1434A4"
                  : "#cccccc60",
              }}
            >
              F
            </Stack>
            <Stack
              component="div"
              onClick={() => {
                const daysOfWeek = [...(recurrence?.daysOfWeek || [])];

                const index = daysOfWeek.indexOf("SAT");

                if (index > -1) {
                  daysOfWeek.splice(index, 1);
                } else {
                  daysOfWeek.push("SAT");
                }

                dispatch(
                  setRecurrence({
                    ...event?.recurrence,
                    daysOfWeek,
                  }),
                );
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
                color: recurrence?.daysOfWeek?.includes("SAT")
                  ? "#fff"
                  : "#000",
                backgroundColor: recurrence?.daysOfWeek?.includes("SAT")
                  ? "#1434A4"
                  : "#cccccc60",
              }}
            >
              S
            </Stack>
          </Stack>
        </Stack>
        <Stack gap={1} width="100%">
          <Typography variant="body1" sx={{ fontSize: "14px" }}>
            Ends
          </Typography>
          <FormControlLabel
            label="Never"
            control={
              <Radio
                size="small"
                checked={recurrence?.endType === "never"}
                onChange={() => {
                  dispatch(
                    setRecurrence({
                      ...event?.recurrence,
                      endType: "never",
                    }),
                  );
                }}
              />
            }
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
              control={
                <Radio
                  size="small"
                  checked={recurrence?.endType === "on"}
                  onChange={() => {
                    dispatch(
                      setRecurrence({
                        ...event?.recurrence,
                        endType: "on",
                      }),
                    );
                  }}
                />
              }
              sx={{
                width: "50%",
                flexShrink: 0,
                "& .MuiTypography-root": { fontSize: "14px" },
              }}
            />
            <CustomDatePicker
              id="event_recurrence_date_input"
              format="MMM dd, yyyy"
              value={
                recurrence?.endDate ? new Date(recurrence?.endDate) : new Date()
              }
              disabled={recurrence?.endType !== "on"}
              changeValue={(value) => {
                dispatch(
                  setRecurrence({
                    ...event?.recurrence,
                    endDate: value,
                  }),
                );
              }}
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
              control={
                <Radio
                  size="small"
                  checked={recurrence?.endType === "after"}
                  onChange={() => {
                    dispatch(
                      setRecurrence({
                        ...event?.recurrence,
                        endType: "after",
                      }),
                    );
                  }}
                />
              }
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
                disabled={
                  recurrence?.endType !== "after" ||
                  recurrence?.occurrenceCount < 1
                }
                value={recurrence?.occurrenceCount}
                changeValue={(value) => {
                  dispatch(
                    setRecurrence({
                      ...event?.recurrence,
                      occurrenceCount: value,
                    }),
                  );
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
