import { ThemeProvider } from "@mui/material/styles";
import { Header } from "./components";
import { theme } from "./styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
}

export default App;
