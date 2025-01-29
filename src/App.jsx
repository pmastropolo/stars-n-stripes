import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./layout/Main";
import AOS from "aos";
import ErrorPages from "./pages/ErrorPages";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Gallery from "./pages/Gallery";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import SingleService from "./pages/SingleService";
import TermsCon from "./pages/terms-and-conditions";

export default function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route
          path="/service-single/:serviceId"
          element={<SingleService />}
        ></Route>
        <Route path="/faq" element={<Faq />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms-and-conditions" element={<TermsCon />} />
      </Route>
      <Route path="/*" element={<ErrorPages />}></Route>
    </Routes>
  );
}
