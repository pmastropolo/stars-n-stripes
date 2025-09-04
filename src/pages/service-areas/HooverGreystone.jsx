import CommonPageHero from "../../components/CommonPageHero/CommonPageHero";
import Cta from "../../components/Cta/Cta";
import SEO from "../../components/SEO";

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
        <div className="container">
          <p>
            Hoover&apos;s Greystone area is known for its custom homes and luxury vehicles.
            We provide tailored restoration and performance services that match the
            high expectations of Greystone car owners.
          </p>
        </div>
      </section>
      <Cta />
    </>
  );
};

export default HooverGreystone;
