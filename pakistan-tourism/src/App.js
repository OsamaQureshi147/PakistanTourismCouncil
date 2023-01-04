import { ThemeProvider } from "@mui/material/styles";
import { AppRoutes } from "./routing";
import { theme } from "./styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='protfolio-wrap'>
        <AppRoutes />
      </div>
    </ThemeProvider>
  );
}

export default App;
