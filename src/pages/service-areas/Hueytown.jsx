import CommonPageHero from "../../components/CommonPageHero/CommonPageHero";
import Cta from "../../components/Cta/Cta";
import SEO from "../../components/SEO";
import NextServiceArea from "../../components/NextServiceArea/NextServiceArea";

const Hueytown = () => {
  return (
    <>
      <SEO
        title="Collector Car Restoration in Hueytown, AL | Stars & Stripes Automotive"
        description="Hueytown drivers are just minutes from our Bessemer shop for quality restoration and custom work."
        keywords="Hueytown car restoration, Hueytown custom cars, restoration shop near Hueytown"
        canonical="https://starsnstripesautomotive.com/service-areas/hueytown-al"
        openGraph={{
          title:
            "Collector Car Restoration in Hueytown, AL | Stars & Stripes Automotive",
          description:
            "Hueytown drivers are just minutes from our Bessemer shop for quality restoration and custom work.",
          type: "website",
          url: "https://starsnstripesautomotive.com/service-areas/hueytown-al",
          image:
            "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
        }}
        twitter={{
          card: "summary_large_image",
          title:
            "Collector Car Restoration in Hueytown, AL | Stars & Stripes Automotive",
          description:
            "Hueytown drivers are just minutes from our Bessemer shop for quality restoration and custom work.",
          image:
            "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
        }}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Collector Car Restoration in Hueytown, AL",
          areaServed: { "@type": "Place", name: "Hueytown, AL" },
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
      <CommonPageHero title={"Hueytown, AL"} />
      <section className="py-80">
        <div className="container space-y-8 leading-relaxed">
          <p>
            Hueytown is just a short drive from our Bessemer facility,
            giving local owners access to expert restoration and custom services.
          </p>
          <p>
            Our team delivers craftsmanship and attention to detail for Hueytown
            projects, from period-correct restorations to modern performance builds.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Classic car restoration in Hueytown, Alabama</li>
            <li>Custom hot rod builds and pro-touring conversions</li>
            <li>Performance upgrades, engine swaps, and tuning</li>
            <li>Rust repair, bodywork, and show-quality paint</li>
            <li>Complete interior fabrication and modernization</li>
          </ul>
          <p>
            Bring your Hueytown project to our shop for trusted workmanship and
            personal service.
          </p>
        </div>
      </section>
      <NextServiceArea />
      <Cta />
    </>
  );
};

export default Hueytown;

