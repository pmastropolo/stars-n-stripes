import CommonPageHero from "../../components/CommonPageHero/CommonPageHero";
import Cta from "../../components/Cta/Cta";
import SEO from "../../components/SEO";
import NextServiceArea from "../../components/NextServiceArea/NextServiceArea";

const Bessemer = () => {
  return (
    <>
      <SEO
        title="Collector Car Restoration in Bessemer, AL | Stars & Stripes Automotive"
        description="Bessemer is home to our shop, providing convenient restoration and customization for local enthusiasts."
        keywords="Bessemer car restoration, Bessemer custom cars, restoration shop in Bessemer"
        canonical="https://starsnstripesautomotive.com/service-areas/bessemer-al"
        openGraph={{
          title:
            "Collector Car Restoration in Bessemer, AL | Stars & Stripes Automotive",
          description:
            "Bessemer is home to our shop, providing convenient restoration and customization for local enthusiasts.",
          type: "website",
          url: "https://starsnstripesautomotive.com/service-areas/bessemer-al",
          image:
            "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
        }}
        twitter={{
          card: "summary_large_image",
          title:
            "Collector Car Restoration in Bessemer, AL | Stars & Stripes Automotive",
          description:
            "Bessemer is home to our shop, providing convenient restoration and customization for local enthusiasts.",
          image:
            "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
        }}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Collector Car Restoration in Bessemer, AL",
          areaServed: { "@type": "Place", name: "Bessemer, AL" },
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
      <CommonPageHero title={"Bessemer, AL"} />
      <section className="py-80">
        <div className="container space-y-8 leading-relaxed">
          <p>
            Bessemer is home to our shop, making it easy for local classic car
            owners to access expert restoration services.
          </p>
          <p>
            Stars &amp; Stripes Automotive is dedicated to preserving and
            enhancing vehicles for Bessemer enthusiasts with craftsmanship and
            care.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Classic car restoration in Bessemer, Alabama</li>
            <li>Custom hot rod builds and pro-touring conversions</li>
            <li>Performance upgrades, engine swaps, and tuning</li>
            <li>Rust repair, bodywork, and show-quality paint</li>
            <li>Complete interior fabrication and modernization</li>
          </ul>
          <p>
            Visit our Bessemer facility to discuss your project with our
            experienced team.
          </p>
        </div>
      </section>
      <NextServiceArea />
      <Cta />
    </>
  );
};

export default Bessemer;

