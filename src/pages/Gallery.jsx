import { Link } from "react-router-dom";

import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import CommonPageHero from "../components/CommonPageHero/CommonPageHero";
import SEO from "../components/SEO";

import imageData from "../dataJson/galleryImgData.json";

const Gallery = () => {
  return (
    <>
        <SEO
          title="Project Gallery | Stars & Stripes Automotive"
          description="See photos of LS swaps, paint jobs, and restoration projects completed in Bessemer, Alabama."
          keywords="auto repair gallery, LS swap photos, restoration images"
          canonical="https://starsnstripesautomotive.com/gallery"
          openGraph={{
            title: "Project Gallery | Stars & Stripes Automotive",
            description:
              "See photos of LS swaps, paint jobs, and restoration projects completed in Bessemer, Alabama.",
            type: "website",
            url: "https://starsnstripesautomotive.com/gallery",
            image:
              "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
          }}
          twitter={{
            card: "summary_large_image",
            title: "Project Gallery | Stars & Stripes Automotive",
            description:
              "See photos of LS swaps, paint jobs, and restoration projects completed in Bessemer, Alabama.",
            image:
              "https://starsnstripesautomotive.com/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg",
          }}
          structuredData={{
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Project Gallery | Stars & Stripes Automotive",
            description:
              "See photos of LS swaps, paint jobs, and restoration projects completed in Bessemer, Alabama.",
            mainEntity: {
              "@type": "ImageGallery",
              name: "Project Gallery",
              url: "https://starsnstripesautomotive.com/gallery",
            },
          }}
        />
      <CommonPageHero title={"Gallery"} />
      <div className="container">
        <div className="ak-height-75 ak-height-lg-80"></div>
        <LightGallery
          speed={500}
          plugins={[lgThumbnail]}
          elementClassNames={"gallery"}
        >
          {imageData?.map((image, index) => (
            <Link
              to={image.thumbnail}
              key={index}
              className={`item ${image.orientation}`}
            >
              <img
                src={image.thumbnail}
                alt={image.orientation}
                loading="lazy"
                decoding="async"
              />
              <div className="frame gallery-hover-icon">
                <span>
                  <img
                    src="/assets/img/icon/zoom.svg"
                    alt="zoom"
                    loading="lazy"
                    decoding="async"
                  />
                </span>
              </div>
            </Link>
          ))}
        </LightGallery>
      </div>
    </>
  );
};

export default Gallery;
