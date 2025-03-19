import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import { ButtonCommon } from "../Button/Button";

const chooseUsData = {
  bgText: "Excellence",
  title: "Why Choose Stars and Stripes Automotive",
  desp: "At Stars and Stripes Automotive LLC, we specialize in restoring, repairing, and improving vintage and classic cars with unmatched craftsmanship. Our commitment to quality and passion for automotive history make us the go-to destination for car enthusiasts in Bessemer, Alabama, and beyond.",
  img: "/assets/img/chooseus/side-banner-image.png",
  list: [
    { title: "Expert Vintage Car Specialists" },
    { title: "High-Quality Restoration Services" },
    { title: "Trusted by Collectors and Enthusiasts" },
    { title: "Guaranteed Satisfaction on Every Job" },
  ],
};

const ChooseUs = () => {
  const { bgText, title, desp, list, img } = chooseUsData;

  return (
    <section className="container">
      <div className="ak-height-125 ak-height-lg-80"></div>
      <div className="choose-us-container-extents">
        <div className="choose-us-contain">
          <div className="choose-us-info" data-aos="fade-up">
            <SectionHeading bgText={bgText} title={title} desp={desp} />
            <div className="ak-height-60 ak-height-lg-30"></div>
            <div className="stroke-heading-text">
              {list.map((item) => (
                <h3
                  key={item.title}
                  className="ak-stroke-text"
                >
                  {item.title}
                </h3>
              ))}
            </div>
            <div className="ak-height-60 ak-height-lg-30"></div>
            <ButtonCommon to="/contact"> Contact Us</ButtonCommon>
          </div>
          <div
            className="choose-us-img"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <img src={img} alt="..." />
            <img
              className="circle-img"
              src="/assets/img/chooseus/circle.png"
              alt="..."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
