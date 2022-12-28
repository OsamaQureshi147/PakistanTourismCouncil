import { ThemeProvider } from "@mui/material/styles";
import { Header,Banner } from "./components";
import { theme } from "./styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Banner/>
    </ThemeProvider>
  );
}

export default App;
