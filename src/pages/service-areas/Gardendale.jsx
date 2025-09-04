import CommonPageHero from "../../components/CommonPageHero/CommonPageHero";
import Cta from "../../components/Cta/Cta";
import SEO from "../../components/SEO";
import NextServiceArea from "../../components/NextServiceArea/NextServiceArea";

const Gardendale = () => {
  return (
    <>
      <SEO
        title="Collector Car Restoration in Gardendale, AL | Stars & Stripes Automotive"
        description="Gardendale's active classic car clubs rely on our skilled restoration and custom services."
        keywords="Gardendale car restoration, Gardendale classic car clubs, custom cars Gardendale"
        canonical="https://starsnstripesautomotive.com/service-areas/gardendale-al"
        openGraph={{
          title:
            "Collector Car Restoration in Gardendale, AL | Stars & Stripes Automotive",
          description:
            "Gardendale's active classic car clubs rely on our skilled restoration and custom services.",
          type: "website",
          url: "https://starsnstripesautomotive.com/service-areas/gardendale-al",
          image:
            "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
        }}
        twitter={{
          card: "summary_large_image",
          title:
            "Collector Car Restoration in Gardendale, AL | Stars & Stripes Automotive",
          description:
            "Gardendale's active classic car clubs rely on our skilled restoration and custom services.",
          image:
            "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
        }}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Collector Car Restoration in Gardendale, AL",
          areaServed: { "@type": "Place", name: "Gardendale, AL" },
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
      <CommonPageHero title={"Gardendale, AL"} />
      <section className="py-80">
        <div className="container space-y-8 leading-relaxed">
          <p>
            Gardendale hosts active classic car clubs that appreciate quality workmanship.
            We offer trusted restoration and customization to keep club vehicles in top shape.
          </p>
          <p>
            Stars &amp; Stripes Automotive brings show-quality results to every Gardendale project, from mild refreshes to full builds.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Classic car restoration in Gardendale, Alabama</li>
            <li>Custom hot rod builds and pro-touring conversions</li>
            <li>Performance upgrades, engine swaps, and tuning</li>
            <li>Rust repair, bodywork, and show-quality paint</li>
            <li>Complete interior fabrication and modernization</li>
          </ul>
          <p>
            Join other Gardendale enthusiasts who trust our team with their prized rides.
          </p>
        </div>
      </section>
      <NextServiceArea />
      <Cta />
    </>
  );
};

export default Gardendale;
