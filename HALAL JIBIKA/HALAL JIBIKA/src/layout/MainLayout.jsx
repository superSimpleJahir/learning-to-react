import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
const MainLayout = () => {
  return (
    <div>
      <ScrollRestoration/>
      <Header />
      <div className="mt">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
