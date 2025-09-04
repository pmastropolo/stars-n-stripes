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
const ServiceAreas = lazy(() => import("./pages/ServiceAreas"));
const VestaviaHills = lazy(() => import("./pages/service-areas/VestaviaHills"));
const MountainBrook = lazy(() => import("./pages/service-areas/MountainBrook"));
const HooverGreystone = lazy(() => import("./pages/service-areas/HooverGreystone"));
const Homewood = lazy(() => import("./pages/service-areas/Homewood"));
const Chelsea = lazy(() => import("./pages/service-areas/Chelsea"));

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
          <Route path="/service-areas" element={<ServiceAreas />} />
          <Route
            path="/service-areas/vestavia-hills-al"
            element={<VestaviaHills />}
          />
          <Route
            path="/service-areas/mountain-brook-al"
            element={<MountainBrook />}
          />
          <Route
            path="/service-areas/hoover-al-greystone"
            element={<HooverGreystone />}
          />
          <Route
            path="/service-areas/homewood-al"
            element={<Homewood />}
          />
          <Route
            path="/service-areas/chelsea-al"
            element={<Chelsea />}
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
