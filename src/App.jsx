import React, { useEffect, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";

// Main layout and default landing page are loaded eagerly to avoid
// additional network request chains during initial render.
import Main from "./layout/Main";
import Home from "./pages/Home";

const ErrorPages = lazy(() => import("./pages/ErrorPages"));
const About = lazy(() => import("./pages/About"));
const Service = lazy(() => import("./pages/Service"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Faq = lazy(() => import("./pages/Faq"));
const Contact = lazy(() => import("./pages/Contact"));
const SingleService = lazy(() => import("./pages/SingleService"));
const TermsCon = lazy(() => import("./pages/terms-and-conditions"));
const PriPolicy = lazy(() => import("./pages/privacy-policy"));
const AccessState = lazy(() => import("./pages/accessibility-statement"));

export default function App() {
  useEffect(() => {
    import("aos/dist/aos.css").then(() => {
      AOS.init();
      AOS.refresh();
    });
  }, []);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route
            path="/service/:serviceSlug"
            element={<SingleService />}
          />
          <Route path="/faq" element={<Faq />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms-and-conditions" element={<TermsCon />} />
          <Route path="/privacy-policy" element={<PriPolicy />} />
          <Route path="/accessibility-statement" element={<AccessState />} />
        </Route>
        <Route path="/*" element={<ErrorPages />} />
      </Routes>
    </Suspense>
  );
}
