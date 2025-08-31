import Services from "../components/Services/ServicesSection";
import Cta from "../components/Cta/Cta";
import CommonPageHero from "../components/CommonPageHero/CommonPageHero";
import SEO from "../components/SEO";

const Service = () => {
  return (
    <>
      <SEO
        title="Auto Repair Services | Stars & Stripes Automotive"
        description="Explore our full range of mechanical, electrical, and custom auto services in Bessemer, AL."
        keywords="auto repair services Bessemer AL, engine rebuilding, bodywork, LS swaps"
        canonical="https://starsnstripesautomotive.com/service"
        openGraph={{
          title: "Auto Repair Services | Stars & Stripes Automotive",
          description:
            "Explore our full range of mechanical, electrical, and custom auto services in Bessemer, AL.",
          type: "website",
          url: "https://starsnstripesautomotive.com/service",
          image:
            "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
        }}
        twitter={{
          card: "summary_large_image",
          title: "Auto Repair Services | Stars & Stripes Automotive",
          description:
            "Explore our full range of mechanical, electrical, and custom auto services in Bessemer, AL.",
          image:
            "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
        }}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Auto Repair Services | Stars & Stripes Automotive",
          description:
            "Explore our full range of mechanical, electrical, and custom auto services in Bessemer, AL.",
          mainEntity: {
            "@type": "Service",
            name: "Auto Repair Services",
            provider: {
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
          },
        }}
      />
      <CommonPageHero title={"Services"} />
      <Services />
      <Cta />
    </>
  );
};

export default Service;