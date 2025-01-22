import React from "react";
import { Link } from "react-router-dom";
import { CtaBtn } from "../Button/Button";

const ctaData = {
  title: "Lets Build Your Dream Ride",
  description:
    "At Stars and Stripes Automotive LLC, we specialize in restoring and customizing vintage and classic cars with unmatched craftsmanship and passion. Let us turn your vision into reality.",
};

const Cta = () => {
  const { title, description } = ctaData;

  return (
    <div className="container">
      <div className="ak-height-125 ak-height-lg-80"></div>
      <div className="cta" data-aos="fade-right">
        <span className="border-pr"></span>
        <span className="border-wh"></span>
        <div className="cta-info">
          <h2 className="cta-title" data-aos="fade-left" data-aos-delay="100">
            {title}
          </h2>
          <p className="cta-desp">{description}</p>
          <CtaBtn to="/contact">START YOUR DREAM BUILD TODAY</CtaBtn>
        </div>
      </div>
    </div>
  );
};

export default Cta;
