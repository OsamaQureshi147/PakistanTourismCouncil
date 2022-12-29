import { ThemeProvider } from "@mui/material/styles";
import { Header,Banner, FamousPlaces, Services } from "./components";
import { Reviews } from "./components/CoustomerReviews";
import { theme } from "./styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="protfolio-wrap">
      <Header />
      <Banner/>
      <FamousPlaces/>
      <Services/>
      <Reviews/>
      </div>
    </ThemeProvider>
  );
}

export default App;
