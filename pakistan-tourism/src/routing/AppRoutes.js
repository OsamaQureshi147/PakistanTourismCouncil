import { Routes, Route, BrowserRouter } from "react-router-dom";
import {
  AboutUsPage,
  CulturePage,
  FoodsPage,
  Homepage,
  EventsPage,
  TourismPage,
  AdminPannelPage,
} from "../pages";
import SignUp from "../pages/Login/SignUp";
import SignIn from "../pages/Login/SignIn";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='tourism' element={<TourismPage />} />
        <Route path='food' element={<FoodsPage />} />
        <Route path='culture' element={<CulturePage />} />
        <Route path='events' element={<EventsPage />} />
        <Route path='about-us' element={<AboutUsPage />} />
        <Route path='SignUp' element={<SignUp />} />
        <Route path='SignIn' element={<SignIn />} />
        <Route path='AdminPannelPage' element={<AdminPannelPage />} />
      </Routes>
    </BrowserRouter>
  );
};
