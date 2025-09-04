import CommonPageHero from "../../components/CommonPageHero/CommonPageHero";
import Cta from "../../components/Cta/Cta";
import SEO from "../../components/SEO";
import NextServiceArea from "../../components/NextServiceArea/NextServiceArea";

const Leeds = () => {
  return (
    <>
      <SEO
        title="Performance & Restoration Services in Leeds, AL | Stars & Stripes Automotive"
        description="Custom builds, restorations, and track-prep work for Leeds enthusiasts near Barber Motorsports Park."
        keywords="Leeds car restoration, Barber Motorsports Park tuning, Leeds performance upgrades"
        canonical="https://starsnstripesautomotive.com/service-areas/leeds-al"
        openGraph={{
          title:
            "Performance & Restoration Services in Leeds, AL | Stars & Stripes Automotive",
          description:
            "Custom builds, restorations, and track-prep work for Leeds enthusiasts near Barber Motorsports Park.",
          type: "website",
          url: "https://starsnstripesautomotive.com/service-areas/leeds-al",
          image:
            "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
        }}
        twitter={{
          card: "summary_large_image",
          title:
            "Performance & Restoration Services in Leeds, AL | Stars & Stripes Automotive",
          description:
            "Custom builds, restorations, and track-prep work for Leeds enthusiasts near Barber Motorsports Park.",
          image:
            "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
        }}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Performance & Restoration Services in Leeds, AL",
          areaServed: { "@type": "Place", name: "Leeds, AL" },
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
      <CommonPageHero title={"Leeds, AL"} />
      <section className="py-80">
        <div className="container space-y-8 leading-relaxed">
          <p>
            Leeds is home to Barber Motorsports Park, attracting racing and
            performance enthusiasts from across the region. We support these
            drivers with track-focused builds and meticulous restorations.
          </p>
          <p>
            Our team helps Leeds customers prepare their cars for show or track,
            delivering reliability and speed in equal measure.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Track-prep and performance tuning</li>
            <li>Custom engine and suspension builds</li>
            <li>Full classic car restorations</li>
            <li>Roll cage and safety installations</li>
            <li>Maintenance for race and street vehicles</li>
          </ul>
          <p>
            Leeds motorists choose Stars &amp; Stripes Automotive for expertise
            rooted in motorsports passion.
          </p>
        </div>
      </section>
      <NextServiceArea />
      <Cta />
    </>
  );
};

export default Leeds;

