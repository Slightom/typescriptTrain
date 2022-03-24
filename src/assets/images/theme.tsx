import { createTheme } from "@mui/material";
import { deepOrange, green, red } from "@mui/material/colors";

const primaryColor = deepOrange[900];
const secondaryColor = green[900];
const dangerColor = red[900];

export const customTheme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
    error: {
      main: dangerColor,
    },
  },
  components: {
    MuiFab: {
      styleOverrides: {
        secondary: {
          color: "black ",
          "&:hover": {
            color: "white",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#666666 !important",
        },
      },
    },
  },
});
