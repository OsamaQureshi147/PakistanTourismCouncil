import { createTheme } from "@mui/material/styles";
import { primaryGreen, secondaryFolly, successGreen } from "./colors";

export const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: primaryGreen,
    },
    secondary: {
      main: secondaryFolly,
    },
    success: {
      main: successGreen,
    },
  },
});
