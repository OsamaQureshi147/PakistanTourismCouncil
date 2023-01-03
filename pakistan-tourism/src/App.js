import { ThemeProvider } from "@mui/material/styles";
import { Banner, FamousPlaces, Services, MainLayout } from "./components";
import { Reviews } from "./components/CoustomerReviews";
import { theme } from "./styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='protfolio-wrap'>
        <MainLayout>
          <Banner />
          <FamousPlaces />
          <Services />
          <Reviews />
        </MainLayout>
      </div>
    </ThemeProvider>
  );
}

export default App;
