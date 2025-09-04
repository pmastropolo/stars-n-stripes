import CommonPageHero from "../../components/CommonPageHero/CommonPageHero";
import Cta from "../../components/Cta/Cta";
import SEO from "../../components/SEO";
import NextServiceArea from "../../components/NextServiceArea/NextServiceArea";

const BirminghamCrestwoodAvondale = () => {
  return (
    <>
      <SEO
        title="Collector Car Restoration in Birmingham, AL (Crestwood & Avondale) | Stars & Stripes Automotive"
        description="Crestwood and Avondale's growing population of younger car enthusiasts turn to us for custom builds and restorations."
        keywords="Birmingham Crestwood car enthusiasts, Avondale custom cars, Birmingham restoration shop"
        canonical="https://starsnstripesautomotive.com/service-areas/birmingham-al-crestwood-avondale"
        openGraph={{
          title:
            "Collector Car Restoration in Birmingham, AL (Crestwood & Avondale) | Stars & Stripes Automotive",
          description:
            "Crestwood and Avondale's growing population of younger car enthusiasts turn to us for custom builds and restorations.",
          type: "website",
          url: "https://starsnstripesautomotive.com/service-areas/birmingham-al-crestwood-avondale",
          image:
            "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
        }}
        twitter={{
          card: "summary_large_image",
          title:
            "Collector Car Restoration in Birmingham, AL (Crestwood & Avondale) | Stars & Stripes Automotive",
          description:
            "Crestwood and Avondale's growing population of younger car enthusiasts turn to us for custom builds and restorations.",
          image:
            "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
        }}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Collector Car Restoration in Birmingham, AL (Crestwood & Avondale)",
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
      <CommonPageHero title={"Birmingham, AL (Crestwood & Avondale)"} />
      <section className="py-80">
        <div className="container space-y-8 leading-relaxed">
          <p>
            Birmingham's Crestwood and Avondale neighborhoods are home to a growing population of younger car enthusiasts.
            We provide the custom builds and restorations that fuel their passion.
          </p>
          <p>
            Stars &amp; Stripes Automotive helps Crestwood and Avondale drivers turn unique ideas into reliable, head-turning machines.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Classic car restoration in Crestwood & Avondale</li>
            <li>Custom hot rod builds and pro-touring conversions</li>
            <li>Performance upgrades, engine swaps, and tuning</li>
            <li>Rust repair, bodywork, and show-quality paint</li>
            <li>Complete interior fabrication and modernization</li>
          </ul>
          <p>
            From vintage imports to modern muscle, Crestwood and Avondale owners trust our shop to bring their projects to life.
          </p>
        </div>
      </section>
      <NextServiceArea />
      <Cta />
    </>
  );
};

export default BirminghamCrestwoodAvondale;
