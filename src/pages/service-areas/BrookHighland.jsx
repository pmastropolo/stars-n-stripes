import CommonPageHero from "../../components/CommonPageHero/CommonPageHero";
import Cta from "../../components/Cta/Cta";
import SEO from "../../components/SEO";
import NextServiceArea from "../../components/NextServiceArea/NextServiceArea";

const BrookHighland = () => {
  return (
    <>
      <SEO
        title="Truck & Off-Road Upgrades in Brook Highland, AL | Stars & Stripes Automotive"
        description="Lift kits, custom builds, and restorations for Brook Highland's trucks, Jeeps, and classics."
        keywords="Brook Highland truck lifts, Brook Highland custom Jeeps, Brook Highland auto restoration"
        canonical="https://starsnstripesautomotive.com/service-areas/brook-highland-al"
        openGraph={{
          title:
            "Truck & Off-Road Upgrades in Brook Highland, AL | Stars & Stripes Automotive",
          description:
            "Lift kits, custom builds, and restorations for Brook Highland's trucks, Jeeps, and classics.",
          type: "website",
          url: "https://starsnstripesautomotive.com/service-areas/brook-highland-al",
          image:
            "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
        }}
        twitter={{
          card: "summary_large_image",
          title:
            "Truck & Off-Road Upgrades in Brook Highland, AL | Stars & Stripes Automotive",
          description:
            "Lift kits, custom builds, and restorations for Brook Highland's trucks, Jeeps, and classics.",
          image:
            "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
        }}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Truck & Off-Road Upgrades in Brook Highland, AL",
          areaServed: { "@type": "Place", name: "Brook Highland, AL" },
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
      <CommonPageHero title={"Brook Highland, AL"} />
      <section className="py-80">
        <div className="container space-y-6">
          <p>
            Brook Highland blends higher-income living with a love for trucks and
            Jeeps. Our team delivers the lift kits, custom builds, and
            restorations that these enthusiasts demand.
          </p>
          <p>
            From off-road capability to showroom shine, we tailor every project
            to the needs of Brook Highland families and hobbyists.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Lift kits and suspension upgrades</li>
            <li>Custom bumpers, lighting, and accessories</li>
            <li>Classic truck restoration</li>
            <li>Engine swaps and performance tuning</li>
            <li>Detailing and preservation services</li>
          </ul>
          <p>
            Brook Highland drivers count on Stars &amp; Stripes Automotive for
            capable builds that turn heads on and off the road.
          </p>
        </div>
      </section>
      <NextServiceArea />
      <Cta />
    </>
  );
};

export default BrookHighland;

