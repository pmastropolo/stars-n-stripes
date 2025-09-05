import { useEffect, lazy, Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header/Header";
import { pageScrollUp } from "../helper/main";
import ScrollUpButton from "../components/ScrollUp/Scrollup";

// Lazily load the footer to reduce initial bundle size
const Footer = lazy(() => import("./Footer/Footer"));

const Main = () => {
  const { pathname } = useLocation();
  

  useEffect(() => {
    pageScrollUp();
  }, [pathname]);

  return (
    <>
      <Header />
      <Outlet />
     <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <ScrollUpButton />
    </>
  );
};

export default Main;
