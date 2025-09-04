import CommonPageHero from "../../components/CommonPageHero/CommonPageHero";
import Cta from "../../components/Cta/Cta";
import SEO from "../../components/SEO";

const Chelsea = () => {
  return (
    <>
      <SEO
        title="Automotive Restoration in Chelsea, AL | Stars & Stripes Automotive"
        description="Serving Chelsea, Alabama with restoration and custom automotive services for the growing community of car enthusiasts."
        keywords="Chelsea car restoration, Chelsea custom cars, Chelsea auto enthusiasts"
        canonical="https://starsnstripesautomotive.com/service-areas/chelsea-al"
        openGraph={{
          title:
            "Automotive Restoration in Chelsea, AL | Stars & Stripes Automotive",
          description:
            "Serving Chelsea, Alabama with restoration and custom automotive services for the growing community of car enthusiasts.",
          type: "website",
          url: "https://starsnstripesautomotive.com/service-areas/chelsea-al",
          image:
            "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
        }}
        twitter={{
          card: "summary_large_image",
          title:
            "Automotive Restoration in Chelsea, AL | Stars & Stripes Automotive",
          description:
            "Serving Chelsea, Alabama with restoration and custom automotive services for the growing community of car enthusiasts.",
          image:
            "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
        }}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Automotive Restoration in Chelsea, AL",
          areaServed: { "@type": "Place", name: "Chelsea, AL" },
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
      <CommonPageHero title={"Chelsea, AL"} />
      <section className="py-80">
        <div className="container space-y-6">
          <p>
            Chelsea is rapidly growing with new custom homes and incoming car enthusiasts.
            We support this expanding community with expert restoration, performance
            upgrades, and custom builds tailored to each owner&apos;s vision.
          </p>
          <p>
            Our craftsmen breathe new life into classic vehicles while giving modern
            drivers the reliability and technology they expect. From small repairs to
            full frame-off restorations, Stars &amp; Stripes Automotive is a trusted
            partner for Chelsea collectors.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Classic car restoration in Chelsea, Alabama</li>
            <li>Bespoke hot rods and custom builds</li>
            <li>Performance upgrades and chassis tuning</li>
            <li>High-quality paint, bodywork, and rust repair</li>
            <li>Modern amenities like A/C, EFI, and disc brakes</li>
          </ul>
          <p>
            Join the growing number of Chelsea enthusiasts who trust our team to bring
            their automotive dreams to the road.
          </p>
        </div>
      </section>
      <Cta />
    </>
  );
};

export default Chelsea;
