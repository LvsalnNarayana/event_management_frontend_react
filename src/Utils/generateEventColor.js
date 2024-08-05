/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
/* eslint-disable func-style */
const pastelColors = [
  { text: "", background: "AEC6CF" },
  { text: "", background: "FFB7B2" },
  { text: "", background: "FFDAC1" },
  { text: "", background: "E2F0CB" },
  { text: "", background: "FFCCCB" },
  { text: "", background: "FDE2E4" },
  { text: "", background: "FED7C3" },
  { text: "", background: "FFF2B2" },
  { text: "", background: "D4F1F4" },
  { text: "", background: "C5E7E2" },
  { text: "", background: "D0F4DE" },
  { text: "", background: "E6E6FA" },
  { text: "", background: "FFFACD" },
  { text: "", background: "F5F5DC" },
  { text: "", background: "F0EAD6" },
  { text: "", background: "E0BBE4" },
  { text: "", background: "957DAD" },
  { text: "", background: "D5AAFF" },
  { text: "", background: "C8A2C8" },
  { text: "", background: "FFABAB" },
  { text: "", background: "FFC3A0" },
  { text: "", background: "FFDF91" },
  { text: "", background: "FFF9A8" },
  { text: "", background: "C3E4ED" },
  { text: "", background: "B5EAD7" },
  { text: "", background: "FFCBCB" },
  { text: "", background: "FFEB99" },
  { text: "", background: "C4FCEF" },
  { text: "", background: "F3D1F4" },
  { text: "", background: "F6D6FF" },
];

function getTextColor(bgColor) {
  const r = parseInt(bgColor.slice(0, 2), 16);
  const g = parseInt(bgColor.slice(2, 4), 16);
  const b = parseInt(bgColor.slice(4, 6), 16);

  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;

  return luminance > 0.6 ? "000000" : "FFFFFF";
}

pastelColors.forEach((color) => {
  color.text = getTextColor(color.background);
});
export function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * pastelColors.length);

  return pastelColors[randomIndex];
}
