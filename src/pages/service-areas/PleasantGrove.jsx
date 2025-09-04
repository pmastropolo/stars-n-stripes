import CommonPageHero from "../../components/CommonPageHero/CommonPageHero";
import Cta from "../../components/Cta/Cta";
import SEO from "../../components/SEO";

const PleasantGrove = () => {
  return (
    <>
      <SEO
        title="Collector Car Restoration in Pleasant Grove, AL | Stars & Stripes Automotive"
        description="Pleasant Grove's middle and upper-middle class owners trust us for nearby restoration expertise."
        keywords="Pleasant Grove car restoration, Pleasant Grove custom cars, restoration near Pleasant Grove"
        canonical="https://starsnstripesautomotive.com/service-areas/pleasant-grove-al"
        openGraph={{
          title:
            "Collector Car Restoration in Pleasant Grove, AL | Stars & Stripes Automotive",
          description:
            "Pleasant Grove's middle and upper-middle class owners trust us for nearby restoration expertise.",
          type: "website",
          url: "https://starsnstripesautomotive.com/service-areas/pleasant-grove-al",
          image:
            "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
        }}
        twitter={{
          card: "summary_large_image",
          title:
            "Collector Car Restoration in Pleasant Grove, AL | Stars & Stripes Automotive",
          description:
            "Pleasant Grove's middle and upper-middle class owners trust us for nearby restoration expertise.",
          image:
            "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
        }}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Collector Car Restoration in Pleasant Grove, AL",
          areaServed: { "@type": "Place", name: "Pleasant Grove, AL" },
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
      <CommonPageHero title={"Pleasant Grove, AL"} />
      <section className="py-80">
        <div className="container space-y-6">
          <p>
            Pleasant Grove is close to our shop and home to many middle and upper-middle class car owners.
            We offer convenient, high-quality restoration services for the community.
          </p>
          <p>
            Stars &amp; Stripes Automotive provides trusted workmanship for projects big and small.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Classic car restoration in Pleasant Grove, Alabama</li>
            <li>Custom hot rod builds and pro-touring conversions</li>
            <li>Performance upgrades, engine swaps, and tuning</li>
            <li>Rust repair, bodywork, and show-quality paint</li>
            <li>Complete interior fabrication and modernization</li>
          </ul>
          <p>
            Local owners choose us when they need skilled hands for their Pleasant Grove projects.
          </p>
        </div>
      </section>
      <Cta />
    </>
  );
};

export default PleasantGrove;
