import CommonPageHero from "../../components/CommonPageHero/CommonPageHero";
import Cta from "../../components/Cta/Cta";
import SEO from "../../components/SEO";

const DunnavantValleyShoalCreekValley = () => {
  return (
    <>
      <SEO
        title="Classic Car Services in Dunnavant & Shoal Creek Valley, AL | Stars & Stripes Automotive"
        description="High-end restorations and performance upgrades for Dunnavant Valley and Shoal Creek Valley hobbyists."
        keywords="Dunnavant Valley car restoration, Shoal Creek Valley custom builds, Dunnavant auto services"
        canonical="https://starsnstripesautomotive.com/service-areas/dunnavant-valley-shoal-creek-valley"
        openGraph={{
          title:
            "Classic Car Services in Dunnavant & Shoal Creek Valley, AL | Stars & Stripes Automotive",
          description:
            "High-end restorations and performance upgrades for Dunnavant Valley and Shoal Creek Valley hobbyists.",
          type: "website",
          url: "https://starsnstripesautomotive.com/service-areas/dunnavant-valley-shoal-creek-valley",
          image:
            "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
        }}
        twitter={{
          card: "summary_large_image",
          title:
            "Classic Car Services in Dunnavant & Shoal Creek Valley, AL | Stars & Stripes Automotive",
          description:
            "High-end restorations and performance upgrades for Dunnavant Valley and Shoal Creek Valley hobbyists.",
          image:
            "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
        }}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Classic Car Services in Dunnavant & Shoal Creek Valley, AL",
          areaServed: {
            "@type": "Place",
            name: "Dunnavant Valley & Shoal Creek Valley, AL",
          },
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
      <CommonPageHero title={"Dunnavant Valley & Shoal Creek Valley, AL"} />
      <section className="py-80">
        <div className="container space-y-6">
          <p>
            Dunnavant Valley and Shoal Creek Valley offer space for serious car
            projects. Enthusiasts here seek top-tier restorations and bespoke
            performance work.
          </p>
          <p>
            Our craftsmen provide the skill and attention required for
            high-value builds, ensuring every ride reflects its owner&apos;s vision.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Ground-up classic car restorations</li>
            <li>Custom performance and suspension upgrades</li>
            <li>Metal fabrication and bodywork</li>
            <li>Show-quality paint and finishing</li>
            <li>Long-term preservation and maintenance</li>
          </ul>
          <p>
            Dunnavant and Shoal Creek Valley hobbyists depend on Stars &amp;
            Stripes Automotive for unmatched quality and service.
          </p>
        </div>
      </section>
      <Cta />
    </>
  );
};

export default DunnavantValleyShoalCreekValley;

