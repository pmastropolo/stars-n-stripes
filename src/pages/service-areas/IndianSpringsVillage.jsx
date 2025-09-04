import CommonPageHero from "../../components/CommonPageHero/CommonPageHero";
import Cta from "../../components/Cta/Cta";
import SEO from "../../components/SEO";
import NextServiceArea from "../../components/NextServiceArea/NextServiceArea";

const IndianSpringsVillage = () => {
  return (
    <>
      <SEO
        title="Custom Builds in Indian Springs Village, AL | Stars & Stripes Automotive"
        description="Premium restorations and off-road upgrades for enthusiasts in Indian Springs Village, AL."
        keywords="Indian Springs Village car restoration, Indian Springs custom builds, Indian Springs off-road upgrades"
        canonical="https://starsnstripesautomotive.com/service-areas/indian-springs-village-al"
        openGraph={{
          title:
            "Custom Builds in Indian Springs Village, AL | Stars & Stripes Automotive",
          description:
            "Premium restorations and off-road upgrades for enthusiasts in Indian Springs Village, AL.",
          type: "website",
          url: "https://starsnstripesautomotive.com/service-areas/indian-springs-village-al",
          image:
            "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
        }}
        twitter={{
          card: "summary_large_image",
          title:
            "Custom Builds in Indian Springs Village, AL | Stars & Stripes Automotive",
          description:
            "Premium restorations and off-road upgrades for enthusiasts in Indian Springs Village, AL.",
          image:
            "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
        }}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Custom Builds in Indian Springs Village, AL",
          areaServed: { "@type": "Place", name: "Indian Springs Village, AL" },
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
      <CommonPageHero title={"Indian Springs Village, AL"} />
      <section className="py-80">
        <div className="container space-y-6">
          <p>
            Indian Springs Village is a small but affluent community where
            residents pursue custom builds and restorations with a personal
            touch. We provide the expertise to bring those visions to life.
          </p>
          <p>
            From classic cars to off-road rigs, our craftsmen deliver quality
            work that fits the lifestyle of Indian Springs Village drivers.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Complete classic car restorations</li>
            <li>Custom off-road builds and accessories</li>
            <li>Engine swaps and performance enhancements</li>
            <li>Interior and exterior customization</li>
            <li>Maintenance plans for collector vehicles</li>
          </ul>
          <p>
            Indian Springs Village enthusiasts trust Stars &amp; Stripes
            Automotive for tailored automotive solutions.
          </p>
        </div>
      </section>
      <NextServiceArea />
      <Cta />
    </>
  );
};

export default IndianSpringsVillage;

