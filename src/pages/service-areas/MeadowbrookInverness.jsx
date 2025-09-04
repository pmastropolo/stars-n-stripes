import CommonPageHero from "../../components/CommonPageHero/CommonPageHero";
import Cta from "../../components/Cta/Cta";
import SEO from "../../components/SEO";
import NextServiceArea from "../../components/NextServiceArea/NextServiceArea";

const MeadowbrookInverness = () => {
  return (
    <>
      <SEO
        title="Classic Car Services in Meadowbrook & Inverness, AL | Stars & Stripes Automotive"
        description="Performance upgrades and restorations for Meadowbrook and Inverness commuters near Hwy 280."
        keywords="Meadowbrook car restoration, Inverness auto services, Birmingham 280 commuter cars"
        canonical="https://starsnstripesautomotive.com/service-areas/meadowbrook-inverness-al"
        openGraph={{
          title:
            "Classic Car Services in Meadowbrook & Inverness, AL | Stars & Stripes Automotive",
          description:
            "Performance upgrades and restorations for Meadowbrook and Inverness commuters near Hwy 280.",
          type: "website",
          url: "https://starsnstripesautomotive.com/service-areas/meadowbrook-inverness-al",
          image:
            "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
        }}
        twitter={{
          card: "summary_large_image",
          title:
            "Classic Car Services in Meadowbrook & Inverness, AL | Stars & Stripes Automotive",
          description:
            "Performance upgrades and restorations for Meadowbrook and Inverness commuters near Hwy 280.",
          image:
            "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
        }}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Classic Car Services in Meadowbrook & Inverness, AL",
          areaServed: { "@type": "Place", name: "Meadowbrook & Inverness, AL" },
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
      <CommonPageHero title={"Meadowbrook & Inverness, AL"} />
      <section className="py-80">
        <div className="container space-y-8 leading-relaxed">
          <p>
            Meadowbrook and Inverness are popular corridors for Birmingham
            commuters. Many garages here house project cars and weekend toys
            that deserve expert attention.
          </p>
          <p>
            We provide restoration, tuning, and maintenance solutions that fit
            busy schedules while keeping prized vehicles ready for the road.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Engine builds and performance upgrades</li>
            <li>Classic car restoration and preservation</li>
            <li>Custom fabrication and bodywork</li>
            <li>Modern drivetrain swaps and EFI conversions</li>
            <li>Regular maintenance for commuter classics</li>
          </ul>
          <p>
            Meadowbrook and Inverness drivers count on our expertise to keep
            their automotive projects moving forward.
          </p>
        </div>
      </section>
      <NextServiceArea />
      <Cta />
    </>
  );
};

export default MeadowbrookInverness;

