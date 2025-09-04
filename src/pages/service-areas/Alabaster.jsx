import CommonPageHero from "../../components/CommonPageHero/CommonPageHero";
import Cta from "../../components/Cta/Cta";
import SEO from "../../components/SEO";

const Alabaster = () => {
  return (
    <>
      <SEO
        title="Collector Car Restoration in Alabaster, AL | Stars & Stripes Automotive"
        description="Alabaster's growing market is just a short drive from our shop for quality restoration services."
        keywords="Alabaster car restoration, Alabaster custom cars, restoration shop near Alabaster"
        canonical="https://starsnstripesautomotive.com/service-areas/alabaster-al"
        openGraph={{
          title:
            "Collector Car Restoration in Alabaster, AL | Stars & Stripes Automotive",
          description:
            "Alabaster's growing market is just a short drive from our shop for quality restoration services.",
          type: "website",
          url: "https://starsnstripesautomotive.com/service-areas/alabaster-al",
          image:
            "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
        }}
        twitter={{
          card: "summary_large_image",
          title:
            "Collector Car Restoration in Alabaster, AL | Stars & Stripes Automotive",
          description:
            "Alabaster's growing market is just a short drive from our shop for quality restoration services.",
          image:
            "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
        }}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Collector Car Restoration in Alabaster, AL",
          areaServed: { "@type": "Place", name: "Alabaster, AL" },
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
      <CommonPageHero title={"Alabaster, AL"} />
      <section className="py-80">
        <div className="container space-y-6">
          <p>
            Alabaster is a growing market and an easy drive to our shop.
            We provide full-service restoration and custom work for enthusiasts throughout the area.
          </p>
          <p>
            Stars &amp; Stripes Automotive brings decades of experience to preserve and enhance classic vehicles for Alabaster owners.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Classic car restoration in Alabaster, Alabama</li>
            <li>Custom hot rod builds and pro-touring conversions</li>
            <li>Performance upgrades, engine swaps, and tuning</li>
            <li>Rust repair, bodywork, and show-quality paint</li>
            <li>Complete interior fabrication and modernization</li>
          </ul>
          <p>
            Let our team help turn your Alabaster project car into a showpiece.
          </p>
        </div>
      </section>
      <Cta />
    </>
  );
};

export default Alabaster;
