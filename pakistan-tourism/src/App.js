import { ThemeProvider } from "@mui/material/styles";
import { Header,Banner } from "./components";
import { theme } from "./styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="protfolio-wrap">
      <Header />
      <Banner/>

      </div>
    </ThemeProvider>
  );
}

export default App;
