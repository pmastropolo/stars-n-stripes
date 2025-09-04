import CommonPageHero from "../../components/CommonPageHero/CommonPageHero";
import Cta from "../../components/Cta/Cta";
import SEO from "../../components/SEO";
import NextServiceArea from "../../components/NextServiceArea/NextServiceArea";

const McCalla = () => {
  return (
    <>
      <SEO
        title="Collector Car Restoration in McCalla, AL | Stars & Stripes Automotive"
        description="McCalla's garages and hobby shops fuel a strong market for trucks and custom builds."
        keywords="McCalla car restoration, McCalla custom trucks, custom cars McCalla"
        canonical="https://starsnstripesautomotive.com/service-areas/mccalla-al"
        openGraph={{
          title:
            "Collector Car Restoration in McCalla, AL | Stars & Stripes Automotive",
          description:
            "McCalla's garages and hobby shops fuel a strong market for trucks and custom builds.",
          type: "website",
          url: "https://starsnstripesautomotive.com/service-areas/mccalla-al",
          image:
            "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
        }}
        twitter={{
          card: "summary_large_image",
          title:
            "Collector Car Restoration in McCalla, AL | Stars & Stripes Automotive",
          description:
            "McCalla's garages and hobby shops fuel a strong market for trucks and custom builds.",
          image:
            "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
        }}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Collector Car Restoration in McCalla, AL",
          areaServed: { "@type": "Place", name: "McCalla, AL" },
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
      <CommonPageHero title={"McCalla, AL"} />
      <section className="py-80">
        <div className="container space-y-6">
          <p>
            McCalla hosts many garages and hobby shops, creating a strong market for truck and custom builds.
            Our technicians deliver the workmanship local builders demand.
          </p>
          <p>
            Stars &amp; Stripes Automotive supports McCalla projects from initial teardown to final tuning.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Classic car and truck restoration in McCalla, Alabama</li>
            <li>Custom hot rod builds and pro-touring conversions</li>
            <li>Performance upgrades, engine swaps, and tuning</li>
            <li>Rust repair, bodywork, and show-quality paint</li>
            <li>Complete interior fabrication and modernization</li>
          </ul>
          <p>
            For McCalla builders seeking professional results, our shop is the trusted partner.
          </p>
        </div>
      </section>
      <NextServiceArea />
      <Cta />
    </>
  );
};

export default McCalla;
