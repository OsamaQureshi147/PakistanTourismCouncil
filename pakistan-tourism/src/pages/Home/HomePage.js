import {
  Banner,
  FamousPlaces,
  Services,
  Reviews,
  MainLayout,
} from "../../components";

export const Homepage = () => (
  <MainLayout>
    <Banner />
    <FamousPlaces />
    <Services />
    <Reviews />
  </MainLayout>
);
