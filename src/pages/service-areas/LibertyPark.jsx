import CommonPageHero from "../../components/CommonPageHero/CommonPageHero";
import Cta from "../../components/Cta/Cta";
import SEO from "../../components/SEO";

const LibertyPark = () => {
  return (
    <>
      <SEO
        title="Collector Car Restoration in Liberty Park, AL | Stars & Stripes Automotive"
        description="Liberty Park's gated community is filled with high-end vehicle owners who require top-tier automotive care."
        keywords="Liberty Park car restoration, Liberty Park high-end vehicles, custom cars Liberty Park"
        canonical="https://starsnstripesautomotive.com/service-areas/liberty-park-al"
        openGraph={{
          title:
            "Collector Car Restoration in Liberty Park, AL | Stars & Stripes Automotive",
          description:
            "Liberty Park's gated community is filled with high-end vehicle owners who require top-tier automotive care.",
          type: "website",
          url: "https://starsnstripesautomotive.com/service-areas/liberty-park-al",
          image:
            "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
        }}
        twitter={{
          card: "summary_large_image",
          title:
            "Collector Car Restoration in Liberty Park, AL | Stars & Stripes Automotive",
          description:
            "Liberty Park's gated community is filled with high-end vehicle owners who require top-tier automotive care.",
          image:
            "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
        }}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Collector Car Restoration in Liberty Park, AL",
          areaServed: { "@type": "Place", name: "Liberty Park, AL" },
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
      <CommonPageHero title={"Liberty Park, AL"} />
      <section className="py-80">
        <div className="container space-y-6">
          <p>
            Liberty Park is a gated community with high-end vehicle owners who demand exceptional quality.
            Our shop provides the premium restoration and customization services they expect.
          </p>
          <p>
            Stars &amp; Stripes Automotive delivers meticulous attention to detail for every Liberty Park build.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Classic car restoration in Liberty Park, Alabama</li>
            <li>Custom hot rod builds and pro-touring conversions</li>
            <li>Performance upgrades, engine swaps, and tuning</li>
            <li>Rust repair, bodywork, and show-quality paint</li>
            <li>Complete interior fabrication and modernization</li>
          </ul>
          <p>
            Liberty Park owners rely on us to maintain and enhance their automotive investments.
          </p>
        </div>
      </section>
      <Cta />
    </>
  );
};

export default LibertyPark;
