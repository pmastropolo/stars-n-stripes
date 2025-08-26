import ContactForm from "../components/ContactUs/ContactForm";
import ContactInfo from "../components/ContactUs/ContactInfo";
import SEO from "../components/SEO";

const Contact = () => {
  return (
    <>
      <SEO
        title="Contact Stars & Stripes Automotive"
        description="Reach out to our Bessemer, AL shop for quotes or questions about auto repair services."
      />
      <ContactForm />
      <ContactInfo />
    </>
  );
};

export default Contact;
