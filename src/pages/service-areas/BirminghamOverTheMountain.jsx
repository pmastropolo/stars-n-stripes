import CommonPageHero from "../../components/CommonPageHero/CommonPageHero";
import Cta from "../../components/Cta/Cta";
import SEO from "../../components/SEO";
import NextServiceArea from "../../components/NextServiceArea/NextServiceArea";

const BirminghamOverTheMountain = () => {
  return (
    <>
      <SEO
        title="Collector Car Restoration in Birmingham, AL (Over the Mountain) | Stars & Stripes Automotive"
        description="Birmingham's Over the Mountain area offers affluent communities that seek premium performance upgrades and restorations."
        keywords="Birmingham over the mountain car restoration, affluent Birmingham auto services, custom cars over the mountain"
        canonical="https://starsnstripesautomotive.com/service-areas/birmingham-al-over-the-mountain"
        openGraph={{
          title:
            "Collector Car Restoration in Birmingham, AL (Over the Mountain) | Stars & Stripes Automotive",
          description:
            "Birmingham's Over the Mountain area offers affluent communities that seek premium performance upgrades and restorations.",
          type: "website",
          url: "https://starsnstripesautomotive.com/service-areas/birmingham-al-over-the-mountain",
          image:
            "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
        }}
        twitter={{
          card: "summary_large_image",
          title:
            "Collector Car Restoration in Birmingham, AL (Over the Mountain) | Stars & Stripes Automotive",
          description:
            "Birmingham's Over the Mountain area offers affluent communities that seek premium performance upgrades and restorations.",
          image:
            "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
        }}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Collector Car Restoration in Birmingham, AL (Over the Mountain)",
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
      <CommonPageHero title={"Birmingham, AL (Over the Mountain)"} />
      <section className="py-80">
        <div className="container space-y-8 leading-relaxed">
          <p>
            Birmingham's Over the Mountain area includes affluent communities that demand premium automotive care.
            We provide high-end restorations and performance upgrades tailored to these neighborhoods.
          </p>
          <p>
            Stars &amp; Stripes Automotive understands the expectations of Over the Mountain clients and delivers results that impress.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Classic car restoration in Birmingham's Over the Mountain area</li>
            <li>Custom hot rod builds and pro-touring conversions</li>
            <li>Performance upgrades, engine swaps, and tuning</li>
            <li>Rust repair, bodywork, and show-quality paint</li>
            <li>Complete interior fabrication and modernization</li>
          </ul>
          <p>
            From luxury classics to modern performance machines, Over the Mountain owners trust our craftsmanship.
          </p>
        </div>
      </section>
      <NextServiceArea />
      <Cta />
    </>
  );
};

export default BirminghamOverTheMountain;
