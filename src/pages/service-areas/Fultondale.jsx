import CommonPageHero from "../../components/CommonPageHero/CommonPageHero";
import Cta from "../../components/Cta/Cta";
import SEO from "../../components/SEO";
import NextServiceArea from "../../components/NextServiceArea/NextServiceArea";

const Fultondale = () => {
  return (
    <>
      <SEO
        title="Collector Car Restoration in Fultondale, AL | Stars & Stripes Automotive"
        description="Fultondale offers convenient access for north Birmingham restorers seeking expert services."
        keywords="Fultondale car restoration, north Birmingham restorers, custom cars Fultondale"
        canonical="https://starsnstripesautomotive.com/service-areas/fultondale-al"
        openGraph={{
          title:
            "Collector Car Restoration in Fultondale, AL | Stars & Stripes Automotive",
          description:
            "Fultondale offers convenient access for north Birmingham restorers seeking expert services.",
          type: "website",
          url: "https://starsnstripesautomotive.com/service-areas/fultondale-al",
          image:
            "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
        }}
        twitter={{
          card: "summary_large_image",
          title:
            "Collector Car Restoration in Fultondale, AL | Stars & Stripes Automotive",
          description:
            "Fultondale offers convenient access for north Birmingham restorers seeking expert services.",
          image:
            "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
        }}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Collector Car Restoration in Fultondale, AL",
          areaServed: { "@type": "Place", name: "Fultondale, AL" },
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
      <CommonPageHero title={"Fultondale, AL"} />
      <section className="py-80">
        <div className="container space-y-8 leading-relaxed">
          <p>
            Fultondale is convenient for north Birmingham restorers looking for a trusted shop.
            We provide the full range of services to keep their projects moving forward.
          </p>
          <p>
            Stars &amp; Stripes Automotive is dedicated to delivering quality workmanship for Fultondale enthusiasts.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Classic car restoration in Fultondale, Alabama</li>
            <li>Custom hot rod builds and pro-touring conversions</li>
            <li>Performance upgrades, engine swaps, and tuning</li>
            <li>Rust repair, bodywork, and show-quality paint</li>
            <li>Complete interior fabrication and modernization</li>
          </ul>
          <p>
            North Birmingham builders rely on us to finish their Fultondale projects right.
          </p>
        </div>
      </section>
      <NextServiceArea />
      <Cta />
    </>
  );
};

export default Fultondale;
