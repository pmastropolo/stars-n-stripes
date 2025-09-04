import CommonPageHero from "../../components/CommonPageHero/CommonPageHero";
import Cta from "../../components/Cta/Cta";
import SEO from "../../components/SEO";
import NextServiceArea from "../../components/NextServiceArea/NextServiceArea";

const HooverRiverchase = () => {
  return (
    <>
      <SEO
        title="Collector Car Restoration in Hoover, AL (Riverchase) | Stars & Stripes Automotive"
        description="Hoover's Riverchase area is home to higher-income homeowners who expect premium automotive services."
        keywords="Hoover Riverchase car restoration, Riverchase custom cars, Hoover performance upgrades"
        canonical="https://starsnstripesautomotive.com/service-areas/hoover-al-riverchase"
        openGraph={{
          title:
            "Collector Car Restoration in Hoover, AL (Riverchase) | Stars & Stripes Automotive",
          description:
            "Hoover's Riverchase area is home to higher-income homeowners who expect premium automotive services.",
          type: "website",
          url: "https://starsnstripesautomotive.com/service-areas/hoover-al-riverchase",
          image:
            "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
        }}
        twitter={{
          card: "summary_large_image",
          title:
            "Collector Car Restoration in Hoover, AL (Riverchase) | Stars & Stripes Automotive",
          description:
            "Hoover's Riverchase area is home to higher-income homeowners who expect premium automotive services.",
          image:
            "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
        }}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Collector Car Restoration in Hoover, AL (Riverchase)",
          areaServed: { "@type": "Place", name: "Hoover, AL" },
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
      <CommonPageHero title={"Hoover, AL (Riverchase)"} />
      <section className="py-80">
        <div className="container space-y-8 leading-relaxed">
          <p>
            Hoover's Riverchase area features higher-income homeowners who invest in their vehicles.
            We provide restoration and customization services that meet their expectations.
          </p>
          <p>
            Stars &amp; Stripes Automotive delivers detail-oriented builds and maintenance for Riverchase drivers.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Classic car restoration in Hoover's Riverchase community</li>
            <li>Custom hot rod builds and pro-touring conversions</li>
            <li>Performance upgrades, engine swaps, and tuning</li>
            <li>Rust repair, bodywork, and show-quality paint</li>
            <li>Complete interior fabrication and modernization</li>
          </ul>
          <p>
            Riverchase owners trust us with their most prized vehicles.
          </p>
        </div>
      </section>
      <NextServiceArea />
      <Cta />
    </>
  );
};

export default HooverRiverchase;
