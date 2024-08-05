/* eslint-disable import/prefer-default-export */
export const generateThemeOptions = (appTheme) => {
  const mode = appTheme.mode || "light";
  const primaryColor = "#1434A4";
  const secondaryColor = "#000";
  const backgroundColor = mode === "light" ? "#ffffff" : "#010101";
  const cardBackgroundColor = mode === "light" ? "#f2f2f2" : "#272727";

  return {
    palette: {
      mode,
      primary: {
        main: primaryColor,
      },
      secondary: {
        main: secondaryColor,
      },
      background: {
        default: backgroundColor,
      },
    },
    typography: {
      overflow: "hidden",
      fontFamily: ["Montserrat"],
      body1: {
        noWrap: true,
        fontWeight: 500,
        textOverflow: "ellipsis",
      },
      body2: {
        noWrap: true,
        fontWeight: 500,
        textOverflow: "ellipsis",
      },
    },

    components: {
      MuiTypography: {
        styleOverrides: {
          root: {
            overflow: "hidden",
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: "#f6f5f4",
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundImage: "none",
            backgroundColor: cardBackgroundColor,
          },
        },
      },
      MuiIconButton: {
        defaultProps: {
          color: secondaryColor,
        },
        styleOverrides: {
          root: {
            "&:hover": {
              backgroundColor: "#f6f5f4",
            },
          },
        },
      },
      MuiButton: {
        defaultProps: {
          disableRipple: true,
        },
        styleOverrides: {
          root: {
            textTransform: "capitalize",
            "&.MuiTypography-root": {
              fontSize: "18px",
              fontWeight: "500",
            },
          },
        },
      },
      MuiSelect: {
        styleOverrides: {
          root: {
            border: "none",
            outline: "none",
            "& .MuiInputBase-root:placeholder": {
              fontSize: "13px",
            },
            "& .MuiInputBase-root:focus": {
              border: 0,
              outline: "none",
            },
            "& .MuiInputBase-root:focusVisible": {
              border: 0,
              outline: "none",
            },
            "& .MuiInputBase-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                border: "1px solid dodgerblue",
              },
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            border: "none",
            outline: "none",
            "& .MuiInputBase-root": {
              fontSize: "13px",
            },
            "& .MuiInputBase-root:placeholder": {
              fontSize: "13px",
            },
            "& .MuiInputBase-root:focus": {
              border: 0,
              outline: "none",
            },
            "& .MuiInputBase-root:focusVisible": {
              border: 0,
              outline: "none",
            },
            "& .MuiInputBase-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                border: "1px solid dodgerblue",
              },
          },
        },
      },

      MuiCssBaseline: {
        styleOverrides: {
          body: {
            scrollbarColor: "#dadada",

            "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
              backgroundColor: "#dadada",
            },

            "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
              width: "8px",
              backgroundColor: "#dadada",
            },

            "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus":
              {
                backgroundColor: "#A7A7A7",
              },

            "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":
              {
                backgroundColor: "#A7A7A7",
              },

            "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active":
              {
                backgroundColor: "#A7A7A7",
              },

            "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
              borderRadius: 8,

              backgroundColor: "#A7A7A7",

              border: "3px solid #A7A7A7",
            },
          },
        },
      },
    },
  };
};
