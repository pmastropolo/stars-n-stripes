import CommonPageHero from "../../components/CommonPageHero/CommonPageHero";
import Cta from "../../components/Cta/Cta";
import SEO from "../../components/SEO";
import NextServiceArea from "../../components/NextServiceArea/NextServiceArea";

const Trussville = () => {
  return (
    <>
      <SEO
        title="Collector Car Restoration in Trussville, AL | Stars & Stripes Automotive"
        description="Trussville's affluent, growing community looks to us for performance upgrades and restorations."
        keywords="Trussville car restoration, Trussville performance upgrades, custom cars Trussville"
        canonical="https://starsnstripesautomotive.com/service-areas/trussville-al"
        openGraph={{
          title:
            "Collector Car Restoration in Trussville, AL | Stars & Stripes Automotive",
          description:
            "Trussville's affluent, growing community looks to us for performance upgrades and restorations.",
          type: "website",
          url: "https://starsnstripesautomotive.com/service-areas/trussville-al",
          image:
            "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
        }}
        twitter={{
          card: "summary_large_image",
          title:
            "Collector Car Restoration in Trussville, AL | Stars & Stripes Automotive",
          description:
            "Trussville's affluent, growing community looks to us for performance upgrades and restorations.",
          image:
            "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
        }}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Collector Car Restoration in Trussville, AL",
          areaServed: { "@type": "Place", name: "Trussville, AL" },
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
      <CommonPageHero title={"Trussville, AL"} />
      <section className="py-80">
        <div className="container space-y-8 leading-relaxed">
          <p>
            Trussville is an affluent and growing community, making it ideal for high-performance upgrades and detailed restorations.
            Our shop provides the expertise local enthusiasts demand.
          </p>
          <p>
            Stars &amp; Stripes Automotive handles everything from classic restorations to modern engine swaps for Trussville clients.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Classic car restoration in Trussville, Alabama</li>
            <li>Custom hot rod builds and pro-touring conversions</li>
            <li>Performance upgrades, engine swaps, and tuning</li>
            <li>Rust repair, bodywork, and show-quality paint</li>
            <li>Complete interior fabrication and modernization</li>
          </ul>
          <p>
            Bring your Trussville project to us for craftsmanship you can trust.
          </p>
        </div>
      </section>
      <NextServiceArea />
      <Cta />
    </>
  );
};

export default Trussville;
