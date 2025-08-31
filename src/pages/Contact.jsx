import ContactForm from "../components/ContactUs/ContactForm";
import ContactInfo from "../components/ContactUs/ContactInfo";
import SEO from "../components/SEO";

const Contact = () => {
  return (
    <>
      <SEO
        title="Contact Stars & Stripes Automotive"
        description="Reach out to our Bessemer, AL shop for quotes or questions about auto repair services."
        keywords="contact Stars & Stripes Automotive, auto repair quotes Bessemer AL"
        canonical="https://starsnstripesautomotive.com/contact"
        openGraph={{
          title: "Contact Stars & Stripes Automotive",
          description:
            "Reach out to our Bessemer, AL shop for quotes or questions about auto repair services.",
          type: "website",
          url: "https://starsnstripesautomotive.com/contact",
          image:
            "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
        }}
        twitter={{
          card: "summary_large_image",
          title: "Contact Stars & Stripes Automotive",
          description:
            "Reach out to our Bessemer, AL shop for quotes or questions about auto repair services.",
          image:
            "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
        }}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Stars & Stripes Automotive",
          description:
            "Reach out to our Bessemer, AL shop for quotes or questions about auto repair services.",
          mainEntity: {
            "@type": "AutoRepair",
            name: "Stars & Stripes Automotive",
            image:
              "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
            "@id": "https://starsnstripesautomotive.com/#business",
            url: "https://starsnstripesautomotive.com/",
            telephone: "(205) 436-2056",
            address: {
              "@type": "PostalAddress",
              streetAddress: "301 4th Street North",
              addressLocality: "Bessemer",
              addressRegion: "AL",
              postalCode: "35020",
              addressCountry: "US",
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ],
              opens: "09:00",
              closes: "17:00",
            },
          },
        }}
      />
      <ContactForm />
      <ContactInfo />
    </>
  );
};

export default Contact;
