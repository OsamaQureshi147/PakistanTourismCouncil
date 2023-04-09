import { createTheme } from "@mui/material/styles";
import { primaryBlack, secondaryWhite, successGreen } from "./colors";

export const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: primaryBlack,
    },
    secondary: {
      main: secondaryWhite,
    },
    success: {
      main: successGreen,
    },
  },
});
