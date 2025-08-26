import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ErrorPages from "./ErrorPages";

import CommonPageHero from "../components/CommonPageHero/CommonPageHero";
import ServicesDetailContent from "../components/Services/ServicesDetailContent";
import FrequentlyQuestions from "../components/FrequentlyQuestions/FrequentlyQuestions";
import Cta from "../components/Cta/Cta";

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
      <CommonPageHero title={"Services"} />
      <ServicesDetailContent service={service} />
      <FrequentlyQuestions />
      <Cta />
    </>
  );
};

export default SingleService;
