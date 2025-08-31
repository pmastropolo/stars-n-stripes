import HeroSlider from "../components/Sliders/HeroSlider";
import ServiceProgres from "../components/ServiceProgres/ServiceProgres";
import ChooseUs from "../components/ChooseUs/ChooseUs";
import Services from "../components/Services/ServicesSection";
import FrequentlyQuestions from "../components/FrequentlyQuestions/FrequentlyQuestions";
import SEO from "../components/SEO";

export default function Home() {
  return (
    <>
      <SEO
        title="Stars & Stripes Automotive | Bessemer Auto Repair Experts"
        description="Bessemer's trusted shop for LS/EFI conversions, mechanical and electrical repairs, paint, and bodywork."
        keywords="auto repair Bessemer AL, LS swaps, EFI conversions, mechanical repair, paint and bodywork"
        canonical="https://starsnstripesautomotive.com/"
        openGraph={{
          title: "Stars & Stripes Automotive | Bessemer Auto Repair Experts",
          description:
            "Bessemer's trusted shop for LS/EFI conversions, mechanical and electrical repairs, paint, and bodywork.",
          type: "website",
          url: "https://starsnstripesautomotive.com/",
          image:
            "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
        }}
        twitter={{
          card: "summary_large_image",
          title: "Stars & Stripes Automotive | Bessemer Auto Repair Experts",
          description:
            "Bessemer's trusted shop for LS/EFI conversions, mechanical and electrical repairs, paint, and bodywork.",
          image:
            "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
        }}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "AutoRepair",
          name: "Stars & Stripes Automotive",
          description:
            "Bessemer's trusted shop for LS/EFI conversions, mechanical and electrical repairs, paint, and bodywork.",
          image:
            "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
          "@id": "https://starsnstripesautomotive.com/#business",
          url: "https://starsnstripesautomotive.com/",
          telephone: "(205) 436-2056",
          address: {
            "@type": "PostalAddress",
            streetAddress: "301 4th Street North",
            addressLocality: "Bessemer",
            addressRegion: "AL",
            postalCode: "35020",
            addressCountry: "US",
          },
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            opens: "09:00",
            closes: "17:00",
          },
        }}
      />
      <HeroSlider />
      <ServiceProgres />
      <ChooseUs />
      <Services styleTypeTwo={true} />
      <FrequentlyQuestions />
    </>
  );
}