import React from "react";
import { MoreBtn } from "../Button/Button";
import SectionHeading from "../SectionHeading/SectionHeading";
import { Link } from "react-router-dom";

import servicesData from "../../dataJson/servicesData.json";

const ServicesSection = ({ styleTypeTwo }) => {
  const data = styleTypeTwo ? servicesData.slice(0, 3) : servicesData;

  return (
    <>
      <div className="ak-height-125 ak-height-lg-80"></div>
      <div className="d-flex justify-content-center">
        <div className="sticky-content container">
          <div className="content style_2">
            <div className="service">
              {data.map((item) => (
                <div
                  className="service-card"
                  data-aos="fade-left"
                  key={item.id}
                >
                  <Link to={`/service-single/${item.id}`} className="card-img">
                    <img
                      src={`${item.img}`}
                      className="ak-bg"
                      alt="..."
                      loading="lazy"
                      decoding="async"
                    />
                  </Link>
                  <div className="card-info">
                    <Link
                      to={`/service-single/${item.id}`}
                      className="card-title"
                    >
                      {item.title}
                    </Link>
                    <p className="card-desp">{item.desp}</p>
                    <MoreBtn to={`/service-single/${item.id}`}>
                      VIEW MORE
                    </MoreBtn>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="sidebar width-none">
            <div className="services-content">
              <SectionHeading
                bgText={"Services"}
                title={"Our Classic Car Services"}
                desp={
                  "At Stars and Stripes Automotive LLC, we offer a wide range of services tailored to the restoration, repair, and enhancement of vintage and classic cars. Whether it's bringing a timeless beauty back to its original glory or making modern improvements while preserving its classic charm, we are here to exceed your expectations."
                }
              />
              <div className="ak-height-50 ak-height-lg-10"></div>
              <MoreBtn to="/service">VIEW All SERVICES</MoreBtn>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesSection;
