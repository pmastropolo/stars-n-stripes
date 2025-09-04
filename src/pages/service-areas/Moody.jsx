import CommonPageHero from "../../components/CommonPageHero/CommonPageHero";
import Cta from "../../components/Cta/Cta";
import SEO from "../../components/SEO";
import NextServiceArea from "../../components/NextServiceArea/NextServiceArea";

const Moody = () => {
  return (
    <>
      <SEO
        title="Custom Auto Services in Moody, AL | Stars & Stripes Automotive"
        description="Restoration, performance tuning, and truck upfit services for Moody's growing community of car hobbyists."
        keywords="Moody car restoration, Moody truck upgrades, Moody performance tuning"
        canonical="https://starsnstripesautomotive.com/service-areas/moody-al"
        openGraph={{
          title:
            "Custom Auto Services in Moody, AL | Stars & Stripes Automotive",
          description:
            "Restoration, performance tuning, and truck upfit services for Moody's growing community of car hobbyists.",
          type: "website",
          url: "https://starsnstripesautomotive.com/service-areas/moody-al",
          image:
            "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
        }}
        twitter={{
          card: "summary_large_image",
          title:
            "Custom Auto Services in Moody, AL | Stars & Stripes Automotive",
          description:
            "Restoration, performance tuning, and truck upfit services for Moody's growing community of car hobbyists.",
          image:
            "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
        }}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Custom Auto Services in Moody, AL",
          areaServed: { "@type": "Place", name: "Moody, AL" },
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
      <CommonPageHero title={"Moody, AL"} />
      <section className="py-80">
        <div className="container space-y-8 leading-relaxed">
          <p>
            Moody is a fast-growing area east of Birmingham where car hobbyists
            and truck owners look for quality upgrades. Our shop offers
            everything from classic restorations to off-road enhancements.
          </p>
          <p>
            We tailor each build to how you drive, ensuring both reliability and
            style for Moody&apos;s diverse automotive community.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Classic car restoration and preservation</li>
            <li>Lift kits and truck accessories</li>
            <li>Engine swaps and performance tuning</li>
            <li>Custom bodywork and paint</li>
            <li>Routine service for modified vehicles</li>
          </ul>
          <p>
            Moody drivers trust Stars &amp; Stripes Automotive to bring their
            automotive projects to life.
          </p>
        </div>
      </section>
      <NextServiceArea />
      <Cta />
    </>
  );
};

export default Moody;

