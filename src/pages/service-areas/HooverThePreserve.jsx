import CommonPageHero from "../../components/CommonPageHero/CommonPageHero";
import Cta from "../../components/Cta/Cta";
import SEO from "../../components/SEO";
import NextServiceArea from "../../components/NextServiceArea/NextServiceArea";

const HooverThePreserve = () => {
  return (
    <>
      <SEO
        title="Custom Car Services in Hoover, AL (The Preserve) | Stars & Stripes Automotive"
        description="High-end restorations and performance upgrades for Hoover's The Preserve community."
        keywords="The Preserve Hoover car restoration, Hoover custom builds, The Preserve automotive services"
        canonical="https://starsnstripesautomotive.com/service-areas/hoover-al-the-preserve"
        openGraph={{
          title:
            "Custom Car Services in Hoover, AL (The Preserve) | Stars & Stripes Automotive",
          description:
            "High-end restorations and performance upgrades for Hoover's The Preserve community.",
          type: "website",
          url: "https://starsnstripesautomotive.com/service-areas/hoover-al-the-preserve",
          image:
            "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
        }}
        twitter={{
          card: "summary_large_image",
          title:
            "Custom Car Services in Hoover, AL (The Preserve) | Stars & Stripes Automotive",
          description:
            "High-end restorations and performance upgrades for Hoover's The Preserve community.",
          image:
            "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
        }}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Custom Car Services in Hoover, AL (The Preserve)",
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
      <CommonPageHero title={"Hoover, AL (The Preserve)"} />
      <section className="py-80">
        <div className="container space-y-8 leading-relaxed">
          <p>
            The Preserve is a master-planned Hoover community with residents who
            value quality craftsmanship. We provide the expertise needed to keep
            luxury and classic vehicles running flawlessly.
          </p>
          <p>
            From performance enhancements to full restorations, our team ensures
            every build reflects the high standards of The Preserve.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Comprehensive classic car restoration</li>
            <li>Engine rebuilding and performance upgrades</li>
            <li>Custom paint, bodywork, and fabrication</li>
            <li>Interior customization and upholstery</li>
            <li>Preventive maintenance for collector cars</li>
          </ul>
          <p>
            Residents of The Preserve trust Stars &amp; Stripes Automotive to
            elevate their automotive investments.
          </p>
        </div>
      </section>
      <NextServiceArea />
      <Cta />
    </>
  );
};

export default HooverThePreserve;

