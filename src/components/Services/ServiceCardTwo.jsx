import React from "react";
import { Link } from "react-router-dom";
import { MoreBtn } from "../Button/Button";

export const ServiceCardTwo = ({ service }) => {
  return (
    <div className="col">
      <div className="service-card-style-2" data-aos="fade-up">
        <div className="service-icon">
          <img
            src={service.icon}
            alt={service.title}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="service-desp">
          <Link to={`/service/${service.slug}`} className="title">
            {service.title}
          </Link>
          <p className="desp">{service.description}</p>
          <MoreBtn to={`/service/${service.slug}`} className="more-btn">
            VIEW MORE
          </MoreBtn>
        </div>
      </div>
    </div>
  );
};
