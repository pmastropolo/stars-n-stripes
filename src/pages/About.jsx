import AboutPageHero from "../components/CommonPageHero/AboutPageHero";
import CompanyTab from "../components/CompanyTab/CompanyTab";
import ChooseUs from "../components/ChooseUs/ChooseUs";
import Cta from "../components/Cta/Cta";
import SEO from "../components/SEO";

const About = () => {
  return (
    <>
      <SEO
        title="About Stars & Stripes Automotive"
        description="Learn about our Bessemer, AL auto repair team's mission and values."
      />
      <AboutPageHero title={"About Us"} />
      <CompanyTab />
      <ChooseUs />
      <Cta />
    </>
  );
};

export default About;