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
    info: ["301 4th Street North, Bessemer, AL 35020"],
  },
  {
    label: "Phone",
    icon: "/assets/img/icon/phone.svg",
    info: ["(205) 436-2056"],
  },
  {
    label: "Business Hours",
    icon: "/assets/img/icon/date-icon.svg",
    info: ["Tuesday - Saturday: 9:00 AM - 5:00 PM"],
  },
];

const ContactInfo = () => {
  return (
    <>
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

      <div className="map-container" data-aos="fade-up">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3331.4096843456277!2d-86.96939602356753!3d33.38647437341502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8888dfc1f27aeacf%3A0xd8255a5722ed3565!2sStars%20%26%20Stripes%20Automotive%2C%20LLC!5e0!3m2!1sen!2sus!4v1756602159384!5m2!1sen!2sus"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Stars and Stripes Automotive location"
        ></iframe>
      </div>
    </>
  );
};

export default ContactInfo;
