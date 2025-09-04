import CommonPageHero from "../../components/CommonPageHero/CommonPageHero";
import Cta from "../../components/Cta/Cta";
import SEO from "../../components/SEO";
import NextServiceArea from "../../components/NextServiceArea/NextServiceArea";

const BirminghamAvondaleHeights = () => {
  return (
    <>
      <SEO
        title="Classic Car Services in Birmingham, AL (Avondale Heights) | Stars & Stripes Automotive"
        description="Restorations and custom work for Birmingham's Avondale Heights community and its vintage car culture."
        keywords="Avondale Heights car restoration, Birmingham vintage auto, Avondale Heights custom builds"
        canonical="https://starsnstripesautomotive.com/service-areas/birmingham-al-avondale-heights"
        openGraph={{
          title:
            "Classic Car Services in Birmingham, AL (Avondale Heights) | Stars & Stripes Automotive",
          description:
            "Restorations and custom work for Birmingham's Avondale Heights community and its vintage car culture.",
          type: "website",
          url: "https://starsnstripesautomotive.com/service-areas/birmingham-al-avondale-heights",
          image:
            "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
        }}
        twitter={{
          card: "summary_large_image",
          title:
            "Classic Car Services in Birmingham, AL (Avondale Heights) | Stars & Stripes Automotive",
          description:
            "Restorations and custom work for Birmingham's Avondale Heights community and its vintage car culture.",
          image:
            "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
        }}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Classic Car Services in Birmingham, AL (Avondale Heights)",
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
      <CommonPageHero title={"Birmingham, AL (Avondale Heights)"} />
      <section className="py-80">
        <div className="container space-y-8 leading-relaxed">
          <p>
            Avondale Heights carries its own flavor of Birmingham&apos;s vintage
            scene. Residents keep classic rides alive with thoughtful upgrades
            and personal touches that reflect the neighborhood&apos;s character.
          </p>
          <p>
            Stars &amp; Stripes Automotive offers trusted restoration,
            performance tuning, and custom fabrication to keep these builds on
            the road and turning heads.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Complete classic car restorations</li>
            <li>Engine rebuilding and EFI conversions</li>
            <li>Custom interiors and upholstery</li>
            <li>Bodywork and rust repair</li>
            <li>Scheduled maintenance for collector vehicles</li>
          </ul>
          <p>
            Avondale Heights drivers rely on our craftsmanship to preserve and
            enhance their automotive investments.
          </p>
        </div>
      </section>
      <NextServiceArea />
      <Cta />
    </>
  );
};

export default BirminghamAvondaleHeights;

