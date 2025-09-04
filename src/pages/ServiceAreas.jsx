import { Link } from "react-router-dom";
import CommonPageHero from "../components/CommonPageHero/CommonPageHero";
import Cta from "../components/Cta/Cta";
import SEO from "../components/SEO";

const ServiceAreas = () => {
  return (
    <>
      <SEO
        title="Service Areas | Stars & Stripes Automotive"
        description="Stars & Stripes Automotive serves Vestavia Hills, Mountain Brook, Hoover, Homewood, Chelsea, and surrounding Alabama communities."
        keywords="Vestavia Hills car restoration, Mountain Brook auto services, Hoover Greystone custom cars, Homewood collector builds, Chelsea automotive"
        canonical="https://starsnstripesautomotive.com/service-areas"
        openGraph={{
          title: "Service Areas | Stars & Stripes Automotive",
          description:
            "Serving Vestavia Hills, Mountain Brook, Hoover, Homewood, Chelsea, and more.",
          type: "website",
          url: "https://starsnstripesautomotive.com/service-areas",
          image:
            "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
        }}
        twitter={{
          card: "summary_large_image",
          title: "Service Areas | Stars & Stripes Automotive",
          description:
            "Serving Vestavia Hills, Mountain Brook, Hoover, Homewood, Chelsea, and more.",
          image:
            "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
        }}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Service Areas | Stars & Stripes Automotive",
          description:
            "Stars & Stripes Automotive serves Vestavia Hills, Mountain Brook, Hoover, Homewood, Chelsea, and surrounding Alabama communities.",
        }}
      />
      <CommonPageHero title={"Service Areas"} />
      <section className="py-80">
        <div className="container">
          <ul>
            <li>
              <Link to="/service-areas/vestavia-hills-al">Vestavia Hills, AL</Link>
            </li>
            <li>
              <Link to="/service-areas/mountain-brook-al">Mountain Brook, AL</Link>
            </li>
            <li>
              <Link to="/service-areas/hoover-al-greystone">Hoover, AL (Greystone)</Link>
            </li>
            <li>
              <Link to="/service-areas/homewood-al">Homewood, AL</Link>
            </li>
            <li>
              <Link to="/service-areas/chelsea-al">Chelsea, AL</Link>
            </li>
          </ul>
        </div>
      </section>
      <Cta />
    </>
  );
};

export default ServiceAreas;
