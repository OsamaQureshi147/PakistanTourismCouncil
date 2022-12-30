import { ThemeProvider } from "@mui/material/styles";
import { Header,Banner, FamousPlaces, Services, Footer } from "./components";
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
      <Footer/>
      </div>

    </ThemeProvider>
  );
}

export default App;
