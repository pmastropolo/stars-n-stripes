import CommonPageHero from "../../components/CommonPageHero/CommonPageHero";
import Cta from "../../components/Cta/Cta";
import SEO from "../../components/SEO";
import NextServiceArea from "../../components/NextServiceArea/NextServiceArea";

const MountainBrook = () => {
  return (
    <>
      <SEO
        title="Premium Auto Services in Mountain Brook, AL | Stars & Stripes Automotive"
        description="High-end restoration and custom automotive services for Mountain Brook, Alabama, one of the state's wealthiest communities."
        keywords="Mountain Brook car restoration, Mountain Brook premium auto services, custom cars Mountain Brook"
        canonical="https://starsnstripesautomotive.com/service-areas/mountain-brook-al"
        openGraph={{
          title:
            "Premium Auto Services in Mountain Brook, AL | Stars & Stripes Automotive",
          description:
            "High-end restoration and custom automotive services for Mountain Brook, Alabama, one of the state's wealthiest communities.",
          type: "website",
          url: "https://starsnstripesautomotive.com/service-areas/mountain-brook-al",
          image:
            "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
        }}
        twitter={{
          card: "summary_large_image",
          title:
            "Premium Auto Services in Mountain Brook, AL | Stars & Stripes Automotive",
          description:
            "High-end restoration and custom automotive services for Mountain Brook, Alabama, one of the state's wealthiest communities.",
          image:
            "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
        }}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Premium Auto Services in Mountain Brook, AL",
          areaServed: { "@type": "Place", name: "Mountain Brook, AL" },
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
      <CommonPageHero title={"Mountain Brook, AL"} />
      <section className="py-80">
        <div className="container space-y-6">
          <p>
            Mountain Brook is among the wealthiest areas in Alabama, making it ideal for
            premium restoration work and bespoke custom builds. We cater to clients who
            expect exceptional craftsmanship and attention to detail.
          </p>
          <p>
            At Stars &amp; Stripes Automotive, every build receives personalized
            attention from our seasoned technicians. We combine old-school artistry with
            modern engineering to create vehicles worthy of Mountain Brook&apos;s proud
            automotive culture.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Classic car restoration in Mountain Brook, Alabama</li>
            <li>Concours-level paint, bodywork, and detailing</li>
            <li>Custom performance builds and engine swaps</li>
            <li>Chassis upgrades and suspension tuning</li>
            <li>Interior refurbishment with premium materials</li>
          </ul>
          <p>
            From rare European imports to American muscle, our team delivers results that
            stand out at local shows and national events alike.
          </p>
        </div>
      </section>
      <NextServiceArea />
      <Cta />
    </>
  );
};

export default MountainBrook;
