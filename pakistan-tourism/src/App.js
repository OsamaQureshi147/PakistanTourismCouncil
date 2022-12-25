import { ThemeProvider } from "@mui/material/styles";
import { Header,Footer } from "./components";
import { theme } from "./common";
import reactLogo from "./assest/images/karakoram_range.jpg"; 

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <img src={reactLogo} alt="react logo" width="1440" height="700"></img>
      <Footer></Footer>
    </ThemeProvider>
  );
}

export default App;
