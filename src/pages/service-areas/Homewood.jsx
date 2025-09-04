import CommonPageHero from "../../components/CommonPageHero/CommonPageHero";
import Cta from "../../components/Cta/Cta";
import SEO from "../../components/SEO";

const Homewood = () => {
  return (
    <>
      <SEO
        title="Custom Car Builds in Homewood, AL | Stars & Stripes Automotive"
        description="Serving Homewood, Alabama with bespoke builds and restoration for young professionals and collectors."
        keywords="Homewood custom car builds, Homewood car restoration, Homewood collector cars"
        canonical="https://starsnstripesautomotive.com/service-areas/homewood-al"
        openGraph={{
          title:
            "Custom Car Builds in Homewood, AL | Stars & Stripes Automotive",
          description:
            "Serving Homewood, Alabama with bespoke builds and restoration for young professionals and collectors.",
          type: "website",
          url: "https://starsnstripesautomotive.com/service-areas/homewood-al",
          image:
            "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
        }}
        twitter={{
          card: "summary_large_image",
          title:
            "Custom Car Builds in Homewood, AL | Stars & Stripes Automotive",
          description:
            "Serving Homewood, Alabama with bespoke builds and restoration for young professionals and collectors.",
          image:
            "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
        }}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Custom Car Builds in Homewood, AL",
          areaServed: { "@type": "Place", name: "Homewood, AL" },
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
      <CommonPageHero title={"Homewood, AL"} />
      <section className="py-80">
        <div className="container">
          <p>
            Homewood is home to many young professionals and passionate collectors.
            We offer custom builds and restoration solutions that match the style and
            performance goals of this vibrant community.
          </p>
        </div>
      </section>
      <Cta />
    </>
  );
};

export default Homewood;
