import React from "react";

import HeroSlider from "../components/Sliders/HeroSlider";
import ServiceProgres from "../components/ServiceProgres/ServiceProgres";
import ChooseUs from "../components/ChooseUs/ChooseUs";
import Services from "../components/Services/ServicesSection";
import FrequentlyQuestions from "../components/FrequentlyQuestions/FrequentlyQuestions";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <ServiceProgres />
      <ChooseUs />
      <Services styleTypeTwo={true} />
      <FrequentlyQuestions />
    </>
  );
}
