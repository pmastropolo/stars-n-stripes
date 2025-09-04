import CommonPageHero from "../../components/CommonPageHero/CommonPageHero";
import Cta from "../../components/Cta/Cta";
import SEO from "../../components/SEO";
import NextServiceArea from "../../components/NextServiceArea/NextServiceArea";

const BirminghamSouthside = () => {
  return (
    <>
      <SEO
        title="Collector Car Restoration in Birmingham, AL (Southside) | Stars & Stripes Automotive"
        description="Birmingham's Southside, home to UAB professionals and downtown collectors, counts on our restoration expertise."
        keywords="Birmingham Southside car restoration, UAB professionals cars, downtown Birmingham collectors"
        canonical="https://starsnstripesautomotive.com/service-areas/birmingham-al-southside"
        openGraph={{
          title:
            "Collector Car Restoration in Birmingham, AL (Southside) | Stars & Stripes Automotive",
          description:
            "Birmingham's Southside, home to UAB professionals and downtown collectors, counts on our restoration expertise.",
          type: "website",
          url: "https://starsnstripesautomotive.com/service-areas/birmingham-al-southside",
          image:
            "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
        }}
        twitter={{
          card: "summary_large_image",
          title:
            "Collector Car Restoration in Birmingham, AL (Southside) | Stars & Stripes Automotive",
          description:
            "Birmingham's Southside, home to UAB professionals and downtown collectors, counts on our restoration expertise.",
          image:
            "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
        }}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Collector Car Restoration in Birmingham, AL (Southside)",
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
      <CommonPageHero title={"Birmingham, AL (Southside)"} />
      <section className="py-80">
        <div className="container space-y-8 leading-relaxed">
          <p>
            Birmingham's Southside covers UAB professionals and downtown collectors who expect high standards.
            Our shop delivers precision restorations and custom builds to match their needs.
          </p>
          <p>
            Stars &amp; Stripes Automotive is the trusted partner for Southside enthusiasts seeking quality and reliability.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Classic car restoration in Birmingham's Southside</li>
            <li>Custom hot rod builds and pro-touring conversions</li>
            <li>Performance upgrades, engine swaps, and tuning</li>
            <li>Rust repair, bodywork, and show-quality paint</li>
            <li>Complete interior fabrication and modernization</li>
          </ul>
          <p>
            From university staff to downtown collectors, Southside clients depend on our craftsmanship.
          </p>
        </div>
      </section>
      <NextServiceArea />
      <Cta />
    </>
  );
};

export default BirminghamSouthside;
