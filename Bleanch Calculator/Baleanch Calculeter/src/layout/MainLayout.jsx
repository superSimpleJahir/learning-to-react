import { Outlet, useNavigation } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Loding from "./Loding";


const MainLayout = () => {
  const naviget = useNavigation();
  console.log(import.meta.env.VITE_FIREBASE_API_KEY);
  return (
    <div>
      <Header />
      <div>{naviget.state === "loading" ? <Loding /> : <Outlet />}</div>
      
      <Footer />
    </div>
  );
};

export default MainLayout;
