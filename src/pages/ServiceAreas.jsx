import { Link } from "react-router-dom";
import CommonPageHero from "../components/CommonPageHero/CommonPageHero";
import Cta from "../components/Cta/Cta";
import SEO from "../components/SEO";

const ServiceAreas = () => {
  return (
    <>
      <SEO
        title="Service Areas | Stars & Stripes Automotive"
        description="Stars & Stripes Automotive serves Vestavia Hills, Mountain Brook, Hoover, Homewood, Chelsea, and surrounding Alabama communities like Helena, Pelham, and Alabaster."
        keywords="Vestavia Hills car restoration, Mountain Brook auto services, Hoover Greystone custom cars, Homewood collector builds, Chelsea automotive, Helena car restoration, Pelham performance upgrades, Alabaster custom cars, Trussville performance upgrades, Gardendale classic car restoration"
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
          <ul className="list-disc pl-6 space-y-2">
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
            <li>
              <Link to="/service-areas/alabaster-al">Alabaster, AL</Link>
            </li>
            <li>
              <Link to="/service-areas/birmingham-al-southside">Birmingham, AL (Southside)</Link>
            </li>
            <li>
              <Link to="/service-areas/birmingham-al-crestwood-avondale">Birmingham, AL (Crestwood / Avondale)</Link>
            </li>
            <li>
              <Link to="/service-areas/birmingham-al-over-the-mountain">Birmingham, AL (Over the Mountain)</Link>
            </li>
            <li>
              <Link to="/service-areas/fultondale-al">Fultondale, AL</Link>
            </li>
            <li>
              <Link to="/service-areas/gardendale-al">Gardendale, AL</Link>
            </li>
            <li>
              <Link to="/service-areas/helena-al">Helena, AL</Link>
            </li>
            <li>
              <Link to="/service-areas/hoover-al-riverchase">Hoover, AL (Riverchase)</Link>
            </li>
            <li>
              <Link to="/service-areas/irondale-al">Irondale, AL</Link>
            </li>
            <li>
              <Link to="/service-areas/lake-view-al">Lake View, AL</Link>
            </li>
            <li>
              <Link to="/service-areas/liberty-park-al">Liberty Park, AL</Link>
            </li>
            <li>
              <Link to="/service-areas/mccalla-al">McCalla, AL</Link>
            </li>
            <li>
              <Link to="/service-areas/pelham-al">Pelham, AL</Link>
            </li>
            <li>
              <Link to="/service-areas/pleasant-grove-al">Pleasant Grove, AL</Link>
            </li>
            <li>
              <Link to="/service-areas/trussville-al">Trussville, AL</Link>
            </li>
            <li>
              <Link to="/service-areas/birmingham-al-forest-park-highland-park">
                Birmingham, AL (Forest Park &amp; Highland Park)
              </Link>
            </li>
            <li>
              <Link to="/service-areas/birmingham-al-five-points-south">
                Birmingham, AL (Five Points South)
              </Link>
            </li>
            <li>
              <Link to="/service-areas/birmingham-al-avondale-heights">
                Birmingham, AL (Avondale Heights)
              </Link>
            </li>
            <li>
              <Link to="/service-areas/shoal-creek-al">Shoal Creek, AL</Link>
            </li>
            <li>
              <Link to="/service-areas/hoover-al-the-preserve">
                Hoover, AL (The Preserve)
              </Link>
            </li>
            <li>
              <Link to="/service-areas/hoover-al-ross-bridge">
                Hoover, AL (Ross Bridge)
              </Link>
            </li>
            <li>
              <Link to="/service-areas/meadowbrook-inverness-al">
                Meadowbrook &amp; Inverness, AL
              </Link>
            </li>
            <li>
              <Link to="/service-areas/leeds-al">Leeds, AL</Link>
            </li>
            <li>
              <Link to="/service-areas/moody-al">Moody, AL</Link>
            </li>
            <li>
              <Link to="/service-areas/brook-highland-al">Brook Highland, AL</Link>
            </li>
            <li>
              <Link to="/service-areas/indian-springs-village-al">
                Indian Springs Village, AL
              </Link>
            </li>
            <li>
              <Link to="/service-areas/dunnavant-valley-shoal-creek-valley">
                Dunnavant Valley &amp; Shoal Creek Valley, AL
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <Cta />
    </>
  );
};

export default ServiceAreas;
