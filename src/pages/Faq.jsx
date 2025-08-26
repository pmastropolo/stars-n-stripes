import CommonPageHero from "../components/CommonPageHero/CommonPageHero";
import FrequentlyQuestions from "../components/FrequentlyQuestions/FrequentlyQuestions";
import SEO from "../components/SEO";

const Faq = () => {
  return (
    <>
      <SEO
        title="FAQ | Stars & Stripes Automotive"
        description="Find answers to common questions about our automotive repair and customization services."
      />
      <CommonPageHero title={"Faq"} />
      <FrequentlyQuestions />
    </>
  );
};

export default Faq;
