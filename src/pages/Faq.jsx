import CommonPageHero from "../components/CommonPageHero/CommonPageHero";
import FrequentlyQuestions from "../components/FrequentlyQuestions/FrequentlyQuestions";
import SEO from "../components/SEO";

const Faq = () => {
  return (
    <>
        <SEO
          title="FAQ | Stars & Stripes Automotive"
          description="Find answers to common questions about our automotive repair and customization services."
          keywords="auto repair FAQ, Stars & Stripes Automotive questions, Bessemer AL"
          canonical="https://starsnstripesautomotive.com/faq"
          openGraph={{
            title: "FAQ | Stars & Stripes Automotive",
            description:
              "Find answers to common questions about our automotive repair and customization services.",
            type: "website",
            url: "https://starsnstripesautomotive.com/faq",
            image:
              "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
          }}
          twitter={{
            card: "summary_large_image",
            title: "FAQ | Stars & Stripes Automotive",
            description:
              "Find answers to common questions about our automotive repair and customization services.",
            image:
              "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
          }}
          structuredData={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What services do you offer?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "We provide LS/EFI conversions, mechanical and electrical repairs, paint and bodywork, and more.",
                },
              },
              {
                "@type": "Question",
                name: "Where are you located?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Our shop is located at 301 4th Street North, Bessemer, AL 35020.",
                },
              },
            ],
          }}
        />
      <CommonPageHero title={"Faq"} />
      <FrequentlyQuestions />
    </>
  );
};

export default Faq;