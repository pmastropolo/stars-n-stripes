import Services from "../components/Services/ServicesSection";
import Cta from "../components/Cta/Cta";
import CommonPageHero from "../components/CommonPageHero/CommonPageHero";
import SEO from "../components/SEO";

const Service = () => {
  return (
    <>
      <SEO
        title="Auto Repair Services | Stars & Stripes Automotive"
        description="Explore our full range of mechanical, electrical, and custom auto services in Bessemer, AL."
      />
      <CommonPageHero title={"Services"} />
      <Services />
      <Cta />
    </>
  );
};

export default Service;