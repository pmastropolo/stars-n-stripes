import CommonPageHero from "../../components/CommonPageHero/CommonPageHero";
import Cta from "../../components/Cta/Cta";
import SEO from "../../components/SEO";

const Pelham = () => {
  return (
    <>
      <SEO
        title="Collector Car Restoration in Pelham, AL | Stars & Stripes Automotive"
        description="Pelham's mix of restoration hobbyists and performance car owners rely on us for expert work."
        keywords="Pelham car restoration, Pelham performance upgrades, custom cars Pelham"
        canonical="https://starsnstripesautomotive.com/service-areas/pelham-al"
        openGraph={{
          title:
            "Collector Car Restoration in Pelham, AL | Stars & Stripes Automotive",
          description:
            "Pelham's mix of restoration hobbyists and performance car owners rely on us for expert work.",
          type: "website",
          url: "https://starsnstripesautomotive.com/service-areas/pelham-al",
          image:
            "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
        }}
        twitter={{
          card: "summary_large_image",
          title:
            "Collector Car Restoration in Pelham, AL | Stars & Stripes Automotive",
          description:
            "Pelham's mix of restoration hobbyists and performance car owners rely on us for expert work.",
          image:
            "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
        }}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Collector Car Restoration in Pelham, AL",
          areaServed: { "@type": "Place", name: "Pelham, AL" },
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
      <CommonPageHero title={"Pelham, AL"} />
      <section className="py-80">
        <div className="container space-y-6">
          <p>
            Pelham has a vibrant mix of restoration hobbyists and performance car owners.
            Our team supports both groups with expert fabrication, tuning, and preservation services.
          </p>
          <p>
            Stars &amp; Stripes Automotive combines proven techniques with modern technology to deliver reliable, eye-catching builds.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Classic car restoration in Pelham, Alabama</li>
            <li>Custom hot rod builds and pro-touring conversions</li>
            <li>Performance upgrades, engine swaps, and tuning</li>
            <li>Rust repair, bodywork, and show-quality paint</li>
            <li>Complete interior fabrication and modernization</li>
          </ul>
          <p>
            From weekend cruisers to track-ready machines, Pelham drivers count on our craftsmanship.
          </p>
        </div>
      </section>
      <Cta />
    </>
  );
};

export default Pelham;
