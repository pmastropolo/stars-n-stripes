import CommonPageHero from "../../components/CommonPageHero/CommonPageHero";
import Cta from "../../components/Cta/Cta";
import SEO from "../../components/SEO";

const MountainBrook = () => {
  return (
    <>
      <SEO
        title="Premium Auto Services in Mountain Brook, AL | Stars & Stripes Automotive"
        description="High-end restoration and custom automotive services for Mountain Brook, Alabama, one of the state's wealthiest communities."
        keywords="Mountain Brook car restoration, Mountain Brook premium auto services, custom cars Mountain Brook"
        canonical="https://starsnstripesautomotive.com/service-areas/mountain-brook-al"
        openGraph={{
          title:
            "Premium Auto Services in Mountain Brook, AL | Stars & Stripes Automotive",
          description:
            "High-end restoration and custom automotive services for Mountain Brook, Alabama, one of the state's wealthiest communities.",
          type: "website",
          url: "https://starsnstripesautomotive.com/service-areas/mountain-brook-al",
          image:
            "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
        }}
        twitter={{
          card: "summary_large_image",
          title:
            "Premium Auto Services in Mountain Brook, AL | Stars & Stripes Automotive",
          description:
            "High-end restoration and custom automotive services for Mountain Brook, Alabama, one of the state's wealthiest communities.",
          image:
            "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
        }}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Premium Auto Services in Mountain Brook, AL",
          areaServed: { "@type": "Place", name: "Mountain Brook, AL" },
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
      <CommonPageHero title={"Mountain Brook, AL"} />
      <section className="py-80">
        <div className="container">
          <p>
            Mountain Brook is among the wealthiest areas in Alabama, making it ideal for
            premium restoration work and bespoke custom builds. We cater to clients who
            expect exceptional craftsmanship and attention to detail.
          </p>
        </div>
      </section>
      <Cta />
    </>
  );
};

export default MountainBrook;
