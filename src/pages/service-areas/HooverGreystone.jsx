import CommonPageHero from "../../components/CommonPageHero/CommonPageHero";
import Cta from "../../components/Cta/Cta";
import SEO from "../../components/SEO";
import NextServiceArea from "../../components/NextServiceArea/NextServiceArea";

const HooverGreystone = () => {
  return (
    <>
      <SEO
        title="Luxury Car Services in Hoover, AL (Greystone) | Stars & Stripes Automotive"
        description="Custom builds and restoration services for Hoover's Greystone neighborhoods with luxury cars and custom homes."
        keywords="Hoover Greystone car restoration, Hoover custom cars, luxury auto services Hoover"
        canonical="https://starsnstripesautomotive.com/service-areas/hoover-al-greystone"
        openGraph={{
          title:
            "Luxury Car Services in Hoover, AL (Greystone) | Stars & Stripes Automotive",
          description:
            "Custom builds and restoration services for Hoover's Greystone neighborhoods with luxury cars and custom homes.",
          type: "website",
          url: "https://starsnstripesautomotive.com/service-areas/hoover-al-greystone",
          image:
            "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
        }}
        twitter={{
          card: "summary_large_image",
          title:
            "Luxury Car Services in Hoover, AL (Greystone) | Stars & Stripes Automotive",
          description:
            "Custom builds and restoration services for Hoover's Greystone neighborhoods with luxury cars and custom homes.",
          image:
            "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
        }}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Luxury Car Services in Hoover, AL (Greystone)",
          areaServed: { "@type": "Place", name: "Hoover, AL" },
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
      <CommonPageHero title={"Hoover, AL (Greystone)"} />
      <section className="py-80">
        <div className="container space-y-8 leading-relaxed">
          <p>
            Hoover&apos;s Greystone area is known for its custom homes and luxury vehicles.
            We provide tailored restoration and performance services that match the high
            expectations of Greystone car owners.
          </p>
          <p>
            Stars &amp; Stripes Automotive specializes in meticulous craftsmanship for
            high-end classics and exotic builds. Our technicians treat every project with
            the care it deserves, delivering reliability and show-stopping style for
            Greystone&apos;s most discerning enthusiasts.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Classic car restoration in Hoover&apos;s Greystone community</li>
            <li>High-performance upgrades for luxury and exotic vehicles</li>
            <li>Custom fabrication and pro-touring builds</li>
            <li>Full body and paint restoration services</li>
            <li>Maintenance and preservation for collector cars</li>
          </ul>
          <p>
            From vintage muscle cars to European exotics, our Greystone clients rely on
            us to keep their investments performing and looking their best.
          </p>
        </div>
      </section>
      <NextServiceArea />
      <Cta />
    </>
  );
};

export default HooverGreystone;
