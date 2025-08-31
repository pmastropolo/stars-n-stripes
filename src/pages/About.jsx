import AboutPageHero from "../components/CommonPageHero/AboutPageHero";
import CompanyTab from "../components/CompanyTab/CompanyTab";
import ChooseUs from "../components/ChooseUs/ChooseUs";
import Cta from "../components/Cta/Cta";
import SEO from "../components/SEO";

const About = () => {
  return (
    <>
      <SEO
        title="About Stars & Stripes Automotive"
        description="Learn about our Bessemer, AL auto repair team's mission and values."
        keywords="about Stars & Stripes Automotive, auto repair Bessemer AL, shop mission"
        canonical="https://starsnstripesautomotive.com/about"
        openGraph={{
          title: "About Stars & Stripes Automotive",
          description:
            "Learn about our Bessemer, AL auto repair team's mission and values.",
          type: "website",
          url: "https://starsnstripesautomotive.com/about",
          image:
            "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
        }}
        twitter={{
          card: "summary_large_image",
          title: "About Stars & Stripes Automotive",
          description:
            "Learn about our Bessemer, AL auto repair team's mission and values.",
          image:
            "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
        }}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About Stars & Stripes Automotive",
          description:
            "Learn about our Bessemer, AL auto repair team's mission and values.",
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
          },
        }}
      />
      <AboutPageHero title={"About Us"} />
      <CompanyTab />
      <ChooseUs />
      <Cta />
    </>
  );
};

export default About;