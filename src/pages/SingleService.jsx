import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ErrorPages from "./ErrorPages";

import CommonPageHero from "../components/CommonPageHero/CommonPageHero";
import ServicesDetailContent from "../components/Services/ServicesDetailContent";
import FrequentlyQuestions from "../components/FrequentlyQuestions/FrequentlyQuestions";
import Cta from "../components/Cta/Cta";
import SEO from "../components/SEO";

import serviceData from "../dataJson/serviceDetails.json";

const SingleService = () => {
  const { serviceId } = useParams();
  const service = serviceData.find((post) => post.id === parseInt(serviceId));

  useEffect(() => {
    if (!service) {
      window.location.replace("/404");
    }
  }, [service]);

  if (!service) {
    return <ErrorPages />;
  }

    return (
      <>
        <SEO
          title={`${service.service_details.title} | Stars & Stripes Automotive`}
          description={service.service_details.description}
          keywords={`${service.service_details.title}, auto repair service, Bessemer AL`}
          canonical={`https://starsnstripesautomotive.com/service-single/${serviceId}`}
          openGraph={{
            title: `${service.service_details.title} | Stars & Stripes Automotive`,
            description: service.service_details.description,
            type: "website",
            url: `https://starsnstripesautomotive.com/service-single/${serviceId}`,
            image:
              "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
          }}
          twitter={{
            card: "summary_large_image",
            title: `${service.service_details.title} | Stars & Stripes Automotive`,
            description: service.service_details.description,
            image:
              "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
          }}
          structuredData={{
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.service_details.title,
            description: service.service_details.description,
            provider: {
              "@type": "AutoRepair",
              name: "Stars & Stripes Automotive",
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
            },
          }}
        />
        <CommonPageHero title={"Services"} />
        <ServicesDetailContent service={service} />
        <FrequentlyQuestions />
        <Cta />
      </>
    );
};

export default SingleService;