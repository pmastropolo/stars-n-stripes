import CommonPageHero from "../../components/CommonPageHero/CommonPageHero";
import Cta from "../../components/Cta/Cta";
import SEO from "../../components/SEO";
import NextServiceArea from "../../components/NextServiceArea/NextServiceArea";

const Irondale = () => {
  return (
    <>
      <SEO
        title="Collector Car Restoration in Irondale, AL | Stars & Stripes Automotive"
        description="Irondale gives east Birmingham enthusiasts easy access to our restoration and performance shop."
        keywords="Irondale car restoration, east Birmingham car enthusiasts, custom cars Irondale"
        canonical="https://starsnstripesautomotive.com/service-areas/irondale-al"
        openGraph={{
          title:
            "Collector Car Restoration in Irondale, AL | Stars & Stripes Automotive",
          description:
            "Irondale gives east Birmingham enthusiasts easy access to our restoration and performance shop.",
          type: "website",
          url: "https://starsnstripesautomotive.com/service-areas/irondale-al",
          image:
            "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
        }}
        twitter={{
          card: "summary_large_image",
          title:
            "Collector Car Restoration in Irondale, AL | Stars & Stripes Automotive",
          description:
            "Irondale gives east Birmingham enthusiasts easy access to our restoration and performance shop.",
          image:
            "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
        }}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Collector Car Restoration in Irondale, AL",
          areaServed: { "@type": "Place", name: "Irondale, AL" },
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
      <CommonPageHero title={"Irondale, AL"} />
      <section className="py-80">
        <div className="container space-y-8 leading-relaxed">
          <p>
            Irondale provides easy access for east Birmingham car enthusiasts seeking quality restoration work.
            Our shop is ready to handle everything from simple repairs to complete builds.
          </p>
          <p>
            Stars &amp; Stripes Automotive ensures Irondale projects receive professional attention and precise results.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Classic car restoration in Irondale, Alabama</li>
            <li>Custom hot rod builds and pro-touring conversions</li>
            <li>Performance upgrades, engine swaps, and tuning</li>
            <li>Rust repair, bodywork, and show-quality paint</li>
            <li>Complete interior fabrication and modernization</li>
          </ul>
          <p>
            East Birmingham owners choose us for dependable service on their Irondale projects.
          </p>
        </div>
      </section>
      <NextServiceArea />
      <Cta />
    </>
  );
};

export default Irondale;
