import CommonPageHero from "../components/CommonPageHero/CommonPageHero";
import SEO from "../components/SEO";

const TermsCon = () => {
    return (
        <>
              <SEO
                title="Terms and Conditions | Stars & Stripes Automotive"
                description="Review the terms and conditions for using Stars & Stripes Automotive's website and services."
                keywords="terms and conditions, stars & stripes automotive"
                canonical="https://starsnstripesautomotive.com/terms-and-conditions"
                openGraph={{
                  title: "Terms and Conditions | Stars & Stripes Automotive",
                  description:
                    "Review the terms and conditions for using Stars & Stripes Automotive's website and services.",
                  type: "website",
                  url: "https://starsnstripesautomotive.com/terms-and-conditions",
                  image:
                    "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
                }}
                twitter={{
                  card: "summary_large_image",
                  title: "Terms and Conditions | Stars & Stripes Automotive",
                  description:
                    "Review the terms and conditions for using Stars & Stripes Automotive's website and services.",
                  image:
                    "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
                }}
                structuredData={{
                  "@context": "https://schema.org",
                  "@type": "WebPage",
                  name: "Terms and Conditions | Stars & Stripes Automotive",
                  description:
                    "Review the terms and conditions for using Stars & Stripes Automotive's website and services.",
                  mainEntity: {
                    "@type": "AutoRepair",
                    name: "Stars & Stripes Automotive",
                    image:
                      "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
                    "@id": "https://starsnstripesautomotive.com/#business",
                    url: "https://starsnstripesautomotive.com/",
                    telephone: "(659) 305-8483",
                    address: {
                      "@type": "PostalAddress",
                      streetAddress: "301 4th Street",
                      addressLocality: "Bessemer",
                      addressRegion: "AL",
                      postalCode: "35020",
                      addressCountry: "US",
                    },
                  },
                }}
              />
            <CommonPageHero title={"Terms and Conditions"} />
            <div className="container mx-auto p-6">
                <p className="mb-4">Welcome to Stars and Stripes Automotive, LLC. These terms and conditions outline the rules and regulations for the use of our website and services.</p>
                
                <h3 className="text-xl font-semibold mt-4">1. Acceptance of Terms</h3>
                <p className="mb-4">By accessing this website, you accept these terms and conditions. Do not continue to use the site if you do not agree with all of the terms stated on this page.</p>
                
                <h3 className="text-xl font-semibold mt-4">2. Business Information</h3>
                <p className="mb-4"><strong>Business Address:</strong> 301 4th Street, Bessemer, AL 35020</p>
                <p className="mb-4"><strong>Business Phone Number:</strong> (659) 305-8483</p>
                <p className="mb-4"><strong>Business Email:</strong> Starsnstripesautomotive@gmail.com</p>
                
                <h3 className="text-xl font-semibold mt-4">3. Services</h3>
                <p className="mb-4">Stars and Stripes Automotive, LLC provides automotive-related services, including but not limited to vehicle repairs, maintenance, and parts sales. These services are subject to availability and may be modified at our discretion.</p>
                
                <h3 className="text-xl font-semibold mt-4">4. User Responsibilities</h3>
                <p className="mb-4">Users agree to provide accurate information when using our website and services. Any fraudulent activity, misuse, or violation of these terms may result in suspension or termination of service.</p>
                
                <h3 className="text-xl font-semibold mt-4">5. Intellectual Property</h3>
                <p className="mb-4">All content, logos, trademarks, and materials on this website are the property of Stars and Stripes Automotive, LLC. Unauthorized use, reproduction, or distribution is strictly prohibited.</p>
                
                <h3 className="text-xl font-semibold mt-4">6. Limitation of Liability</h3>
                <p className="mb-4">Stars and Stripes Automotive, LLC is not liable for any damages, losses, or issues arising from the use of our services or website, to the fullest extent permitted by law.</p>
                
                <h3 className="text-xl font-semibold mt-4">7. Changes to Terms</h3>
                <p className="mb-4">We reserve the right to modify or replace these terms at any time. Any changes will be posted on this page, and continued use of the site constitutes acceptance of the updated terms.</p>
                
                <h3 className="text-xl font-semibold mt-4">8. Contact Information</h3>
                <p>If you have any questions regarding these terms, please contact us at <strong>Starsnstripesautomotive@gmail.com</strong> or call <strong>(659) 305-8483</strong>.</p>
            </div>
        </>
    );
};

export default TermsCon;