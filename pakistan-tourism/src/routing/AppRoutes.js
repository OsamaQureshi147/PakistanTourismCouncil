import { Routes, Route, BrowserRouter } from "react-router-dom";
import {
  AboutUsPage,
  CulturePage,
  FoodsPage,
  Homepage,
  SportsPage,
  TourismPage,
} from "../pages";
import SignUp from "../pages/Login/SignUp";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='tourism' element={<TourismPage />} />
        <Route path='food' element={<FoodsPage />} />
        <Route path='culture' element={<CulturePage />} />
        <Route path='sports' element={<SportsPage />} />
        <Route path='about-us' element={<AboutUsPage />} />
        <Route path='SignUp' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};
