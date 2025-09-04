import CommonPageHero from "../../components/CommonPageHero/CommonPageHero";
import Cta from "../../components/Cta/Cta";
import SEO from "../../components/SEO";

const VestaviaHills = () => {
  return (
    <>
      <SEO
        title="Collector Car Restoration in Vestavia Hills, AL | Stars & Stripes Automotive"
        description="Premium collector car restoration and custom builds for enthusiasts in Vestavia Hills, Alabama."
        keywords="Vestavia Hills car restoration, Vestavia Hills custom builds, collector car services"
        canonical="https://starsnstripesautomotive.com/service-areas/vestavia-hills-al"
        openGraph={{
          title:
            "Collector Car Restoration in Vestavia Hills, AL | Stars & Stripes Automotive",
          description:
            "Premium restoration and custom automotive services for Vestavia Hills collectors.",
          type: "website",
          url: "https://starsnstripesautomotive.com/service-areas/vestavia-hills-al",
          image:
            "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
        }}
        twitter={{
          card: "summary_large_image",
          title:
            "Collector Car Restoration in Vestavia Hills, AL | Stars & Stripes Automotive",
          description:
            "Premium restoration and custom automotive services for Vestavia Hills collectors.",
          image:
            "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
        }}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Collector Car Restoration in Vestavia Hills, AL",
          areaServed: { "@type": "Place", name: "Vestavia Hills, AL" },
          provider: {
            "@type": "AutoRepair",
            name: "Stars & Stripes Automotive",
            image:
              "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
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
      <CommonPageHero title={"Vestavia Hills, AL"} />
      <section className="py-80">
        <div className="container">
          <p>
            Vestavia Hills is an affluent suburb of Birmingham with a strong demand for
            collector car restoration. Our team delivers high-end mechanical work,
            custom builds, and preservation services for discerning owners across the area.
          </p>
        </div>
      </section>
      <Cta />
    </>
  );
};

export default VestaviaHills;
