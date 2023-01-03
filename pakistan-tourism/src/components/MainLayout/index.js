import { Header } from "../Header";
import { Footer } from "../Footer";

export const MainLayout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);
