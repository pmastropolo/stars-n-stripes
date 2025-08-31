import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";

const contactData = [
  {
    label: "Email",
    icon: "/assets/img/icon/email.svg",
    info: ["Starsnstripesautomotive@gmail.com"],
  },
  {
    label: "Address",
    icon: "/assets/img/icon/location.svg",
    info: ["301 4th Street, Bessemer, AL 35020"],
  },
  {
    label: "Phone",
    icon: "/assets/img/icon/phone.svg",
    info: ["(659) 305-8483"],
  },
  {
    label: "Business Hours",
    icon: "/assets/img/icon/date-icon.svg",
    info: ["Tuesday - Saturday: 9:00 AM - 5:00 PM"],
  },
];

const ContactInfo = () => {
  return (
    <div className="container">
      <div className="ak-height-125 ak-height-lg-80"></div>
      <div className="contact-info">
        <div className="left-info" data-aos="fade-right">
          <div className="content">
            <SectionHeading
              bgText={"Contact"}
              title={"Get in Touch"}
              desp={
                "Have questions or need assistance? We're here to help. Reach out to us for more information or support."
              }
            />
          </div>
        </div>

        <div className="right-info">
          {contactData.map((item, index) => (
            <div className="info-card" key={index} data-aos="fade-left">
              <p>{item.label} :</p>
              <div className="d-flex gap-2 align-items-center">
                <div>
                  <img
                    src={item.icon}
                    alt={item.label}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div>
                  {item.info.map((info, idx) => (
                    <p key={idx}>{info}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
