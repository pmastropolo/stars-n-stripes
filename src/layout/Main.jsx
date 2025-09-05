import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header/Header";
import { pageScrollUp } from "../helper/main";
import ScrollUpButton from "../components/ScrollUp/Scrollup";
import Footer from "./Footer/Footer";

const Main = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    pageScrollUp();
  }, [pathname]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ScrollUpButton />
    </>
  );
};

export default Main;
