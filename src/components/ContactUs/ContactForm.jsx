import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "",
    phone: "",
    msg: "",
  });

  const [alertMessage, setAlertMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.name) {
      isValid = false;
      tempErrors["name"] = "Please enter your full name.";
    }

    if (!formData.email) {
      isValid = false;
      tempErrors["email"] = "Please enter your email address.";
    } else {
      let pattern = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
      if (!pattern.test(formData.email)) {
        isValid = false;
        tempErrors["email"] = "Please enter a valid email address.";
      }
    }

    if (!formData.topic) {
      isValid = false;
      tempErrors["topic"] = "Please enter the topic of your inquiry.";
    }

    if (!formData.phone) {
      isValid = false;
      tempErrors["phone"] = "Please enter your phone number.";
    }

    if (!formData.msg) {
      isValid = false;
      tempErrors["msg"] = "Please enter your message.";
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Debugging log to check form data
      console.log("Form Data Submitted:", formData);

      // Create a FormData object manually from the form
      const form = e.target;

      // Send form data via EmailJS using sendForm
      emailjs
        .sendForm(
          'service_ez0r3di', // SERVICE ID
          'template_e56ik9p', // TEMPLATE ID
          form,               // Directly pass the form as the third argument
          'veUrxXCe020uC8I6n' // Your EmailJS PUBLIC KEY
        )
        .then(
          (result) => {
            console.log(result.text);  // Log response for debugging
            setAlertMessage("Your message has been sent successfully! We'll get back to you shortly.");
            setFormData({
              name: "",
              email: "",
              topic: "",
              phone: "",
              msg: "",
            });
          },
          (error) => {
            console.log(error);  // Log any errors for debugging
            setAlertMessage("Oops! Something went wrong. Please try again later.");
          }
        );
    }
  };

  return (
    <div className="container">
      <div className="ak-height-100 ak-height-lg-40"></div>
      <div className="ak-height-125 ak-height-lg-80"></div>
      <div className="contact-content">
        <div className="contact-title-section" data-aos="fade-up" data-aos-delay="700">
          <h2 className="contact-form-title ak-white-color text-uppercase">Get In Touch with Stars and Stripes Automotive</h2>
          <p>Home / Contact</p>
        </div>
        <div className="ak-height-25 ak-height-lg-20"></div>
        <div className="contact-form" data-aos="fade-up" data-aos-delay="750">
          <div>
            <h5 className="mb-3">How can we assist you?</h5>
            <p>
              Whether you're restoring a classic car or need repairs, we're here to provide expert advice and exceptional craftsmanship. We love to help with any questions you have!
            </p>
            <div className="ak-height-45 ak-height-lg-30"></div>
          </div>
          <div id="ak-alert">{alertMessage && <p>{alertMessage}</p>}</div>
          <form id="contact-form" onSubmit={handleSubmit}>
            <div className="from-inputs">
              <div className="type_1">
                <label htmlFor="from_name" className="form-label">Full Name</label>
                <input
                  type="text"
                  name="name"  // Matches {{name}} in the template
                  id="from_name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                {errors.name && <p className="error">{errors.name}</p>}
              </div>
              <div className="type_1">
                <label htmlFor="reply_to" className="form-label">Email*</label>
                <input
                  type="email"
                  name="email"  // Matches {{email}} in the template
                  id="reply_to"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && <p className="error">{errors.email}</p>}
              </div>
            </div>
            <div className="from-inputs">
              <div className="type_1">
                <label htmlFor="topic" className="form-label">What is the topic of your question?</label>
                <input
                  type="text"
                  name="topic"  // Matches {{topic}} in the template
                  id="topic"
                  value={formData.topic}
                  onChange={handleChange}
                  required
                />
                {errors.topic && <p className="error">{errors.topic}</p>}
              </div>
              <div className="type_1">
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <input
                  type="text"
                  name="phone"  // Matches {{phone}} in the template
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                {errors.phone && <p className="error">{errors.phone}</p>}
              </div>
            </div>
            <div className="from-textarea">
              <div className="type_1">
                <label htmlFor="message" className="form-label">Your Message*</label>
                <textarea
                  name="msg"  // Matches {{msg}} in the template
                  rows="5"
                  id="message"
                  value={formData.msg}
                  onChange={handleChange}
                  required
                ></textarea>
                {errors.msg && <p className="error">{errors.msg}</p>}
              </div>
            </div>

            <div className="ak-height-40 ak-height-lg-20"></div>
            <button type="submit" className="common-btn">SEND MESSAGE</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;