import CommonPageHero from "../../components/CommonPageHero/CommonPageHero";
import Cta from "../../components/Cta/Cta";
import SEO from "../../components/SEO";
import NextServiceArea from "../../components/NextServiceArea/NextServiceArea";

const ShoalCreek = () => {
  return (
    <>
      <SEO
        title="Exotic & Luxury Car Services in Shoal Creek, AL | Stars & Stripes Automotive"
        description="Full restorations, custom builds, and performance upgrades for luxury and exotic vehicles in Shoal Creek, AL."
        keywords="Shoal Creek luxury car services, Shoal Creek exotic car restoration, Shoal Creek custom auto"
        canonical="https://starsnstripesautomotive.com/service-areas/shoal-creek-al"
        openGraph={{
          title:
            "Exotic & Luxury Car Services in Shoal Creek, AL | Stars & Stripes Automotive",
          description:
            "Full restorations, custom builds, and performance upgrades for luxury and exotic vehicles in Shoal Creek, AL.",
          type: "website",
          url: "https://starsnstripesautomotive.com/service-areas/shoal-creek-al",
          image:
            "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
        }}
        twitter={{
          card: "summary_large_image",
          title:
            "Exotic & Luxury Car Services in Shoal Creek, AL | Stars & Stripes Automotive",
          description:
            "Full restorations, custom builds, and performance upgrades for luxury and exotic vehicles in Shoal Creek, AL.",
          image:
            "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
        }}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Exotic & Luxury Car Services in Shoal Creek, AL",
          areaServed: { "@type": "Place", name: "Shoal Creek, AL" },
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
      <CommonPageHero title={"Shoal Creek, AL"} />
      <section className="py-80">
        <div className="container space-y-8 leading-relaxed">
          <p>
            Shoal Creek is an ultra-upscale community where exotic and luxury
            car owners expect meticulous attention to detail. Our craftsmen
            deliver the precision these vehicles demand.
          </p>
          <p>
            Whether maintaining a high-end collection or executing a full
            restoration, Stars &amp; Stripes Automotive brings show-quality
            results to Shoal Creek garages.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Exotic and luxury vehicle restoration</li>
            <li>High-performance engine and drivetrain upgrades</li>
            <li>Custom fabrication for unique builds</li>
            <li>Paint correction and preservation services</li>
            <li>Comprehensive maintenance for collectible cars</li>
          </ul>
          <p>
            Shoal Creek clients rely on our discreet, concierge-level service
            for their automotive investments.
          </p>
        </div>
      </section>
      <NextServiceArea />
      <Cta />
    </>
  );
};

export default ShoalCreek;

