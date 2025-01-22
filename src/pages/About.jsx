import React from "react";

import AboutPageHero from "../components/CommonPageHero/AboutPageHero";
import CompanyTab from "../components/CompanyTab/CompanyTab";
import ChooseUs from "../components/ChooseUs/ChooseUs";
import Cta from "../components/Cta/Cta";

const About = () => {
  return (
    <>
      <AboutPageHero title={"About Us"} />
      <CompanyTab />
      <ChooseUs />
      <Cta />
    </>
  );
};

export default About;
