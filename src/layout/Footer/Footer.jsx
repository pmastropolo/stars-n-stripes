import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextAnimation from "../../components/TextAnimation/TextAnimation";
import emailjs from "emailjs-com"; // Import emailjs

import footerLogo from "/assets/img/icon/stars-and-stripes-automotive-llc-footer-logo.svg";

const footerDataArray = [
  {
    className: "footer-info",
    dataAosDelay: "0",
    phone: "(659) 305-8483",
    desp: "Stars and Stripes Automotive LLC brings vintage and classic car dreams to life with unmatched craftsmanship and dedication.",
  },
  {
    className: "footer-menu-one",
    dataAosDelay: "50",
    links: [
      { title: "About", link: "/about" },
      { title: "Services", link: "/service" },
      { title: "Gallery", link: "/gallery" },
      { title: "Contact Us", link: "/contact" },
    ],
  },
  {
    className: "footer-menu-two",
    dataAosDelay: "100",
    links: [
      { title: "FAQ", link: "/faq" },
      { title: "Terms & Conditions", link: "/terms-and-conditions" },
      { title: "Acessibility Statement", link: "/accessibility-statement" },
      { title: "Privacy Policy", link: "/privacy-policy" },
    ],
  },
  {
    className: "footer-address",
    dataAosDelay: "150",
    address: "301 4th Street, Bessemer AL 35020",
    email: "Starsnstripesautomotive@gmail.com",
  },
];

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      emailjs
        .sendForm(
          'service_ez0r3di', // Your Service ID from EmailJS
          'template_x9sxs53', // Your Template ID for newsletter
          e.target, // Send the form data
          'veUrxXCe020uC8I6n' // Your Public Key from EmailJS
        )
        .then(
          (result) => {
            setMessage("Thank you for subscribing!");
            setEmail(""); // Clear the input field after successful submission
          },
          (error) => {
            setMessage("Oops! Something went wrong. Please try again later.");
          }
        );
    } else {
      setMessage("Please enter a valid email address.");
    }
  };

  // Validate the email address format
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <>
      <div className="ak-height-125 ak-height-lg-80"></div>
      <footer className="footer style-1 footer-bg">
        <div className="container">
          <div className="ak-height-40 ak-height-lg-60"></div>
          <div
            className="footer-email"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="100"
            data-aos-offset="0"
          >
            <div
              className="background-text"
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              Newsletter
            </div>
            <div className="footer-heading-email">
              <h5 className="email-title">
                Get exclusive deals and updates straight to your inbox!
              </h5>
              <div>
                <p id="ak-alert-footer">{message}</p>
                <form className="email-form" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="email"  // Matches {{email}} in your EmailJS template
                    id="footerEmail"
                    placeholder="Enter your email..."
                    className="email-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button
                    type="submit"
                    className="submit-btn"
                    aria-label="Subscribe to newsletter"
                  >
                    <span className="send">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                      >
                        <path
                          d="M23.0345 3.91676C23.5566 2.42362 22.157 0.976718 20.7126 1.51775L3.06022 8.11754C1.61105 8.65982 1.43579 10.704 2.76894 11.5024L8.40369 14.8748L13.4353 9.67315C13.6633 9.44555 13.9686 9.31961 14.2855 9.32246C14.6024 9.3253 14.9055 9.45671 15.1296 9.68837C15.3537 9.92004 15.4808 10.2334 15.4836 10.561C15.4863 10.8887 15.3645 11.2043 15.1444 11.4399L10.1127 16.6415L13.3761 22.4667C14.1472 23.8448 16.1246 23.6624 16.6491 22.1655L23.0345 3.91676Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="ak-height-70 ak-height-lg-30"></div>
          <div className="primary-color-border"></div>
          <div className="ak-height-35 ak-height-lg-30"></div>
          <div className="footer-logo">
            <img src={footerLogo} alt="footer-logo" />
            <div className="ak-height-15 ak-height-lg-10"></div>
          </div>
          <div className="footer-content">
            {footerDataArray.map((item, index) => (
              <div
                key={index}
                className={item.className}
                data-aos="fade-up"
                data-aos-delay={item.dataAosDelay}
                data-aos-duration="500"
              >
                {item.phone && (
                  <>
                    <p className="desp">{item.desp}</p>
                    <div className="ak-height-35 ak-height-lg-30"></div>
                    <div className="d-flex align-items-center gap-3">
                      <div className="heartbeat-icon">
                        <Link to="tel:(659)305-8483">
                          <span className="ak-heartbeat-btn">
                            <img src="/assets/img/icon/phone.svg" alt="..." />
                          </span>
                        </Link>
                      </div>
                      <TextAnimation
                        link={"tel:(659)305-8483"}
                        title={item.phone}
                        classNamePass="phone white"
                      />
                    </div>
                  </>
                )}
                {item.links && (
                  <div className="footer-menu">
                    <p className="menu-title">QUICK LINK</p>
                    {item.links.map((item, idx) => (
                      <TextAnimation
                        key={idx}
                        link={item.link}
                        title={item.title}
                        classNamePass="menu-item white"
                      />
                    ))}
                  </div>
                )}
                {item.address && (
                  <div className="footer-address">
                    <p className="adress-title">LOCATION & CONTACT</p>
                    <Link to="#" className="location">
                      <span className="me-1">
                        <img
                          src="/assets/img/icon/location.svg"
                          alt="Location"
                        />
                      </span>
                      {item.address}
                    </Link>
                    <Link to={`mailto:${item.email}`} className="email">
                      <span className="me-1">
                        <img src="/assets/img/icon/email.svg" alt="Email" />
                      </span>
                      {item.email}
                    </Link>
                    <p className="date">
                      <span className="me-1">
                        <img
                          src="/assets/img/icon/calender.svg"
                          alt="Calendar"
                        />
                      </span>
                      Tues - Fri: 
                      8AM - 5PM
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="ak-height-70 ak-height-lg-30"></div>
          <div className="primary-color-border"></div>
          <div className="copy-right">
            <p className="title text-hover-animaiton">
              &copy; 2025 Stars and Stripes Automotive, LLC. All rights reserved.
            </p>
            <p className="footer-credit">
              Made by:&nbsp;
              <a href="https://github.com/pmastropolo" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>
                pmastropolo
              </a> 🩶
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;