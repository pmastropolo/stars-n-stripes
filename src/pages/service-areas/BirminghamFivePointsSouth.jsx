import CommonPageHero from "../../components/CommonPageHero/CommonPageHero";
import Cta from "../../components/Cta/Cta";
import SEO from "../../components/SEO";
import NextServiceArea from "../../components/NextServiceArea/NextServiceArea";

const BirminghamFivePointsSouth = () => {
  return (
    <>
      <SEO
        title="Custom Car Services in Birmingham, AL (Five Points South) | Stars & Stripes Automotive"
        description="Performance upgrades and restorations for Five Points South's young professionals and car culture enthusiasts."
        keywords="Five Points South car restoration, Birmingham custom car builds, Five Points South auto services"
        canonical="https://starsnstripesautomotive.com/service-areas/birmingham-al-five-points-south"
        openGraph={{
          title:
            "Custom Car Services in Birmingham, AL (Five Points South) | Stars & Stripes Automotive",
          description:
            "Performance upgrades and restorations for Five Points South's young professionals and car culture enthusiasts.",
          type: "website",
          url: "https://starsnstripesautomotive.com/service-areas/birmingham-al-five-points-south",
          image:
            "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
        }}
        twitter={{
          card: "summary_large_image",
          title:
            "Custom Car Services in Birmingham, AL (Five Points South) | Stars & Stripes Automotive",
          description:
            "Performance upgrades and restorations for Five Points South's young professionals and car culture enthusiasts.",
          image:
            "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
        }}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Custom Car Services in Birmingham, AL (Five Points South)",
          areaServed: { "@type": "Place", name: "Birmingham, AL" },
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
      <CommonPageHero title={"Birmingham, AL (Five Points South)"} />
      <section className="py-80">
        <div className="container space-y-6">
          <p>
            Five Points South blends nightlife and car culture. Young
            professionals bring their rides to us for performance tuning,
            restoration, and custom touches that stand out on Birmingham
            streets.
          </p>
          <p>
            From weekend cruisers to daily drivers, our technicians build
            reliable power and style that matches the energy of Five Points
            South.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Performance upgrades and tuning</li>
            <li>Restoration of classic and modern vehicles</li>
            <li>Custom interior and exterior modifications</li>
            <li>Body and paint correction services</li>
            <li>Routine maintenance and inspections</li>
          </ul>
          <p>
            Stars &amp; Stripes Automotive keeps Five Points South rides ready
            for the next meet or night out.
          </p>
        </div>
      </section>
      <NextServiceArea />
      <Cta />
    </>
  );
};

export default BirminghamFivePointsSouth;

