import CommonPageHero from "../../components/CommonPageHero/CommonPageHero";
import Cta from "../../components/Cta/Cta";
import SEO from "../../components/SEO";

const HooverRossBridge = () => {
  return (
    <>
      <SEO
        title="Premium Auto Services in Hoover, AL (Ross Bridge) | Stars & Stripes Automotive"
        description="Restorations and performance upgrades for Ross Bridge's resort community and high-income households."
        keywords="Ross Bridge car restoration, Hoover Ross Bridge auto services, Ross Bridge custom cars"
        canonical="https://starsnstripesautomotive.com/service-areas/hoover-al-ross-bridge"
        openGraph={{
          title:
            "Premium Auto Services in Hoover, AL (Ross Bridge) | Stars & Stripes Automotive",
          description:
            "Restorations and performance upgrades for Ross Bridge's resort community and high-income households.",
          type: "website",
          url: "https://starsnstripesautomotive.com/service-areas/hoover-al-ross-bridge",
          image:
            "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
        }}
        twitter={{
          card: "summary_large_image",
          title:
            "Premium Auto Services in Hoover, AL (Ross Bridge) | Stars & Stripes Automotive",
          description:
            "Restorations and performance upgrades for Ross Bridge's resort community and high-income households.",
          image:
            "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
        }}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Premium Auto Services in Hoover, AL (Ross Bridge)",
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
      <CommonPageHero title={"Hoover, AL (Ross Bridge)"} />
      <section className="py-80">
        <div className="container space-y-6">
          <p>
            Ross Bridge is a sprawling golf resort community where many
            households own multiple vehicles. We help keep these collections in
            top shape with expert restoration and tuning services.
          </p>
          <p>
            Whether it&apos;s a classic cruiser or a modern performance build, our
            team delivers quality workmanship that Ross Bridge residents value.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Classic and modern car restoration</li>
            <li>Performance tuning and engine builds</li>
            <li>Custom body and paint services</li>
            <li>Interior upgrades and upholstery</li>
            <li>Ongoing maintenance for multi-car households</li>
          </ul>
          <p>
            Ross Bridge owners rely on Stars &amp; Stripes Automotive for
            dependable, high-level automotive care.
          </p>
        </div>
      </section>
      <Cta />
    </>
  );
};

export default HooverRossBridge;

