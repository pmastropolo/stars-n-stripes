import CommonPageHero from "../../components/CommonPageHero/CommonPageHero";
import Cta from "../../components/Cta/Cta";
import SEO from "../../components/SEO";
import NextServiceArea from "../../components/NextServiceArea/NextServiceArea";

const Helena = () => {
  return (
    <>
      <SEO
        title="Collector Car Restoration in Helena, AL | Stars & Stripes Automotive"
        description="Helena families and classic car enthusiasts trust us for restoration and custom work."
        keywords="Helena car restoration, Helena classic car culture, custom builds Helena"
        canonical="https://starsnstripesautomotive.com/service-areas/helena-al"
        openGraph={{
          title:
            "Collector Car Restoration in Helena, AL | Stars & Stripes Automotive",
          description:
            "Helena families and classic car enthusiasts trust us for restoration and custom work.",
          type: "website",
          url: "https://starsnstripesautomotive.com/service-areas/helena-al",
          image:
            "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
        }}
        twitter={{
          card: "summary_large_image",
          title:
            "Collector Car Restoration in Helena, AL | Stars & Stripes Automotive",
          description:
            "Helena families and classic car enthusiasts trust us for restoration and custom work.",
          image:
            "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
        }}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Collector Car Restoration in Helena, AL",
          areaServed: { "@type": "Place", name: "Helena, AL" },
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
      <CommonPageHero title={"Helena, AL"} />
      <section className="py-80">
        <div className="container space-y-8 leading-relaxed">
          <p>
            Helena is popular with families and has a strong classic car culture.
            We help local enthusiasts keep their vehicles on the road with expert restoration and custom upgrades.
          </p>
          <p>
            Stars &amp; Stripes Automotive delivers craftsmanship and attention to detail for every project, from period-correct restorations to modern performance builds.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Classic car restoration in Helena, Alabama</li>
            <li>Custom hot rod builds and pro-touring conversions</li>
            <li>Performance upgrades, engine swaps, and tuning</li>
            <li>Rust repair, bodywork, and show-quality paint</li>
            <li>Complete interior fabrication and modernization</li>
          </ul>
          <p>
            When your Helena project needs trusted hands, our shop is ready to deliver.
          </p>
        </div>
      </section>
      <NextServiceArea />
      <Cta />
    </>
  );
};

export default Helena;
