import {
  Banner,
  FamousPlaces,
  Services,
  Reviews,
  MainLayout,
  BannerSlider
} from "../../components";

export const Homepage = () => (
  <MainLayout>
    <BannerSlider />
    <FamousPlaces />
    <Services />
    <Reviews />
  </MainLayout>
);
