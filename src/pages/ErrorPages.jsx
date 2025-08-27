import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function ErrorPages() {
  return (

    <>
 <SEO
          title="404 - Page Not Found | Stars & Stripes Automotive"
          description="The page you're looking for can't be found."
          keywords="404 error, page not found"
          robots="noindex, nofollow"
          canonical="https://starsnstripesautomotive.com/404"
          openGraph={{
            title: "404 - Page Not Found | Stars & Stripes Automotive",
            description: "The page you're looking for can't be found.",
            type: "website",
            url: "https://starsnstripesautomotive.com/404",
            image:
              "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
          }}
          twitter={{
            card: "summary_large_image",
            title: "404 - Page Not Found | Stars & Stripes Automotive",
            description: "The page you're looking for can't be found.",
            image:
              "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
          }}
          structuredData={{
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "404 - Page Not Found",
            description: "The page you're looking for can't be found.",
          }}
        />
      <div className="error-section error-page-bg-img ak-bg ak-center">
        <div className="error-content">
          <h1 className="error-title ak-stroke-number color-white">404</h1>
          <h2 className="erro-sub-title">Sorry! The Page isn't Found Here</h2>
          <p className="erro-desp">error</p>
          <div className="go-to-home">
            <Link to="/" className="common-btn">
              BACK TO HOME
            </Link>
          </div>

        </div>
      </div>
        </>
  );
}
