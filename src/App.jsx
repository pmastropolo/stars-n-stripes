import { useEffect, lazy, Suspense } from "react";
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
const Alabaster = lazy(() => import("./pages/service-areas/Alabaster"));
const Bessemer = lazy(() => import("./pages/service-areas/Bessemer"));
const BirminghamSouthside = lazy(() => import("./pages/service-areas/BirminghamSouthside"));
const BirminghamCrestwoodAvondale = lazy(() => import("./pages/service-areas/BirminghamCrestwoodAvondale"));
const BirminghamOverTheMountain = lazy(() => import("./pages/service-areas/BirminghamOverTheMountain"));
const Fultondale = lazy(() => import("./pages/service-areas/Fultondale"));
const Gardendale = lazy(() => import("./pages/service-areas/Gardendale"));
const Helena = lazy(() => import("./pages/service-areas/Helena"));
const HooverRiverchase = lazy(() => import("./pages/service-areas/HooverRiverchase"));
const Hueytown = lazy(() => import("./pages/service-areas/Hueytown"));
const Irondale = lazy(() => import("./pages/service-areas/Irondale"));
const LakeView = lazy(() => import("./pages/service-areas/LakeView"));
const LibertyPark = lazy(() => import("./pages/service-areas/LibertyPark"));
const McCalla = lazy(() => import("./pages/service-areas/McCalla"));
const Pelham = lazy(() => import("./pages/service-areas/Pelham"));
const PleasantGrove = lazy(() => import("./pages/service-areas/PleasantGrove"));
const Trussville = lazy(() => import("./pages/service-areas/Trussville"));
const BirminghamForestParkHighlandPark = lazy(() =>
  import("./pages/service-areas/BirminghamForestParkHighlandPark")
);
const BirminghamFivePointsSouth = lazy(() =>
  import("./pages/service-areas/BirminghamFivePointsSouth")
);
const BirminghamAvondaleHeights = lazy(() =>
  import("./pages/service-areas/BirminghamAvondaleHeights")
);
const ShoalCreek = lazy(() => import("./pages/service-areas/ShoalCreek"));
const HooverThePreserve = lazy(() =>
  import("./pages/service-areas/HooverThePreserve")
);
const HooverRossBridge = lazy(() =>
  import("./pages/service-areas/HooverRossBridge")
);
const MeadowbrookInverness = lazy(() =>
  import("./pages/service-areas/MeadowbrookInverness")
);
const Leeds = lazy(() => import("./pages/service-areas/Leeds"));
const Moody = lazy(() => import("./pages/service-areas/Moody"));
const BrookHighland = lazy(() =>
  import("./pages/service-areas/BrookHighland")
);
const IndianSpringsVillage = lazy(() =>
  import("./pages/service-areas/IndianSpringsVillage")
);
const DunnavantValleyShoalCreekValley = lazy(() =>
  import("./pages/service-areas/DunnavantValleyShoalCreekValley")
);

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
          <Route
            path="/service-areas/alabaster-al"
            element={<Alabaster />}
          />
          <Route
            path="/service-areas/bessemer-al"
            element={<Bessemer />}
          />
          <Route
            path="/service-areas/birmingham-al-southside"
            element={<BirminghamSouthside />}
          />
          <Route
            path="/service-areas/birmingham-al-crestwood-avondale"
            element={<BirminghamCrestwoodAvondale />}
          />
          <Route
            path="/service-areas/birmingham-al-over-the-mountain"
            element={<BirminghamOverTheMountain />}
          />
          <Route
            path="/service-areas/fultondale-al"
            element={<Fultondale />}
          />
          <Route
            path="/service-areas/gardendale-al"
            element={<Gardendale />}
          />
          <Route
            path="/service-areas/helena-al"
            element={<Helena />}
          />
          <Route
            path="/service-areas/hoover-al-riverchase"
            element={<HooverRiverchase />}
          />
          <Route
            path="/service-areas/hueytown-al"
            element={<Hueytown />}
          />
          <Route
            path="/service-areas/irondale-al"
            element={<Irondale />}
          />
          <Route
            path="/service-areas/lake-view-al"
            element={<LakeView />}
          />
          <Route
            path="/service-areas/liberty-park-al"
            element={<LibertyPark />}
          />
          <Route
            path="/service-areas/mccalla-al"
            element={<McCalla />}
          />
          <Route
            path="/service-areas/pelham-al"
            element={<Pelham />}
          />
          <Route
            path="/service-areas/pleasant-grove-al"
            element={<PleasantGrove />}
          />
          <Route
            path="/service-areas/trussville-al"
            element={<Trussville />}
          />
          <Route
            path="/service-areas/birmingham-al-forest-park-highland-park"
            element={<BirminghamForestParkHighlandPark />}
          />
          <Route
            path="/service-areas/birmingham-al-five-points-south"
            element={<BirminghamFivePointsSouth />}
          />
          <Route
            path="/service-areas/birmingham-al-avondale-heights"
            element={<BirminghamAvondaleHeights />}
          />
          <Route
            path="/service-areas/shoal-creek-al"
            element={<ShoalCreek />}
          />
          <Route
            path="/service-areas/hoover-al-the-preserve"
            element={<HooverThePreserve />}
          />
          <Route
            path="/service-areas/hoover-al-ross-bridge"
            element={<HooverRossBridge />}
          />
          <Route
            path="/service-areas/meadowbrook-inverness-al"
            element={<MeadowbrookInverness />}
          />
          <Route path="/service-areas/leeds-al" element={<Leeds />} />
          <Route path="/service-areas/moody-al" element={<Moody />} />
          <Route
            path="/service-areas/brook-highland-al"
            element={<BrookHighland />}
          />
          <Route
            path="/service-areas/indian-springs-village-al"
            element={<IndianSpringsVillage />}
          />
          <Route
            path="/service-areas/dunnavant-valley-shoal-creek-valley"
            element={<DunnavantValleyShoalCreekValley />}
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
