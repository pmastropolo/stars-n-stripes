import CommonPageHero from "../../components/CommonPageHero/CommonPageHero";
import Cta from "../../components/Cta/Cta";
import SEO from "../../components/SEO";
import NextServiceArea from "../../components/NextServiceArea/NextServiceArea";

const LakeView = () => {
  return (
    <>
      <SEO
        title="Collector Car Restoration in Lake View, AL | Stars & Stripes Automotive"
        description="Lake View's hobbyist car owners trust us for projects that have room to grow."
        keywords="Lake View car restoration, Lake View hobby car owners, custom cars Lake View"
        canonical="https://starsnstripesautomotive.com/service-areas/lake-view-al"
        openGraph={{
          title:
            "Collector Car Restoration in Lake View, AL | Stars & Stripes Automotive",
          description:
            "Lake View's hobbyist car owners trust us for projects that have room to grow.",
          type: "website",
          url: "https://starsnstripesautomotive.com/service-areas/lake-view-al",
          image:
            "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
        }}
        twitter={{
          card: "summary_large_image",
          title:
            "Collector Car Restoration in Lake View, AL | Stars & Stripes Automotive",
          description:
            "Lake View's hobbyist car owners trust us for projects that have room to grow.",
          image:
            "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
        }}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Collector Car Restoration in Lake View, AL",
          areaServed: { "@type": "Place", name: "Lake View, AL" },
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
      <CommonPageHero title={"Lake View, AL"} />
      <section className="py-80">
        <div className="container space-y-6">
          <p>
            Lake View is popular among hobbyist car owners with the space to tackle big projects.
            We help turn those projects into finished builds with professional-grade results.
          </p>
          <p>
            Stars &amp; Stripes Automotive provides the expertise needed to bring long-term restorations to completion.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Classic car restoration in Lake View, Alabama</li>
            <li>Custom hot rod builds and pro-touring conversions</li>
            <li>Performance upgrades, engine swaps, and tuning</li>
            <li>Rust repair, bodywork, and show-quality paint</li>
            <li>Complete interior fabrication and modernization</li>
          </ul>
          <p>
            From barn finds to track-ready builds, Lake View owners turn to our shop for the finishing touch.
          </p>
        </div>
      </section>
      <NextServiceArea />
      <Cta />
    </>
  );
};

export default LakeView;
