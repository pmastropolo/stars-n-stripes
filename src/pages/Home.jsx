import HeroSlider from "../components/Sliders/HeroSlider";
import ServiceProgres from "../components/ServiceProgres/ServiceProgres";
import ChooseUs from "../components/ChooseUs/ChooseUs";
import Services from "../components/Services/ServicesSection";
import FrequentlyQuestions from "../components/FrequentlyQuestions/FrequentlyQuestions";
import SEO from "../components/SEO";

export default function Home() {
  return (
    <>
      <SEO
        title="Stars & Stripes Automotive | Bessemer Auto Repair Experts"
        description="Bessemer's trusted shop for LS/EFI conversions, mechanical and electrical repairs, paint, and bodywork."
      />
      <HeroSlider />
      <ServiceProgres />
      <ChooseUs />
      <Services styleTypeTwo={true} />
      <FrequentlyQuestions />
    </>
  );
}