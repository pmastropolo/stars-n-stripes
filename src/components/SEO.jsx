import { useEffect } from "react";

const SEO = ({ title, description, robots = "index, follow" }) => {
  useEffect(() => {
    if (title) {
      document.title = title;
    }
    if (description) {
      let metaDescription = document.querySelector("meta[name='description']");
      if (!metaDescription) {
        metaDescription = document.createElement("meta");
        metaDescription.setAttribute("name", "description");
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute("content", description);
    }
    if (robots) {
      let metaRobots = document.querySelector("meta[name='robots']");
      if (!metaRobots) {
        metaRobots = document.createElement("meta");
        metaRobots.setAttribute("name", "robots");
        document.head.appendChild(metaRobots);
      }
      metaRobots.setAttribute("content", robots);
    }
  }, [title, description, robots]);

  return null;
};

export default SEO;