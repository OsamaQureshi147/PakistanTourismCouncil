import {
  FamousPlaces,
  Members,
  MemberReviews,
  MainLayout,
  BannerSlider,
} from "../../components";

export const Homepage = () => (
  <MainLayout>
    <BannerSlider />
    <FamousPlaces />
    <Members />
    <MemberReviews />
  </MainLayout>
);
