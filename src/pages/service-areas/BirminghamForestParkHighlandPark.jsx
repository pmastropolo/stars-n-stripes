import CommonPageHero from "../../components/CommonPageHero/CommonPageHero";
import Cta from "../../components/Cta/Cta";
import SEO from "../../components/SEO";
import NextServiceArea from "../../components/NextServiceArea/NextServiceArea";

const BirminghamForestParkHighlandPark = () => {
  return (
    <>
      <SEO
        title="Classic Car Restoration in Birmingham, AL (Forest Park & Highland Park) | Stars & Stripes Automotive"
        description="Vintage car restoration and performance upgrades for Birmingham's Forest Park and Highland Park neighborhoods."
        keywords="Forest Park car restoration, Highland Park classic cars, Birmingham vintage auto services"
        canonical="https://starsnstripesautomotive.com/service-areas/birmingham-al-forest-park-highland-park"
        openGraph={{
          title:
            "Classic Car Restoration in Birmingham, AL (Forest Park & Highland Park) | Stars & Stripes Automotive",
          description:
            "Vintage car restoration and performance upgrades for Birmingham's Forest Park and Highland Park neighborhoods.",
          type: "website",
          url: "https://starsnstripesautomotive.com/service-areas/birmingham-al-forest-park-highland-park",
          image:
            "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
        }}
        twitter={{
          card: "summary_large_image",
          title:
            "Classic Car Restoration in Birmingham, AL (Forest Park & Highland Park) | Stars & Stripes Automotive",
          description:
            "Vintage car restoration and performance upgrades for Birmingham's Forest Park and Highland Park neighborhoods.",
          image:
            "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
        }}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Classic Car Restoration in Birmingham, AL (Forest Park & Highland Park)",
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
      <CommonPageHero title={"Birmingham, AL (Forest Park & Highland Park)"} />
      <section className="py-80">
        <div className="container space-y-6">
          <p>
            Forest Park and Highland Park are historic Birmingham neighborhoods
            where restoring vintage cars is part of the lifestyle. Our shop
            supports enthusiasts who want their classics to drive and look their
            best.
          </p>
          <p>
            Whether it is a full rebuild or subtle performance upgrade, Stars
            &amp; Stripes Automotive delivers craftsmanship that honors the
            heritage of every vehicle we touch.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Concours-level classic car restoration</li>
            <li>Period-correct performance tuning</li>
            <li>Custom fabrication and metalwork</li>
            <li>Body and paint services for vintage finishes</li>
            <li>Reliable maintenance for collectible vehicles</li>
          </ul>
          <p>
            Owners in Forest Park and Highland Park trust us with their most
            prized automobiles for quality work and attentive service.
          </p>
        </div>
      </section>
      <NextServiceArea />
      <Cta />
    </>
  );
};

export default BirminghamForestParkHighlandPark;

