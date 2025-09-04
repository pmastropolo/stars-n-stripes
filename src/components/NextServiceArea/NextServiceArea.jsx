import { Link, useLocation } from "react-router-dom";
import serviceAreas from "../../dataJson/serviceAreas.json";

const NextServiceArea = () => {
  const location = useLocation();
  const slug = location.pathname.replace("/service-areas/", "").replace(/\/$/, "");
  const index = serviceAreas.findIndex((area) => area.slug === slug);
  if (index === -1) return null;
  const next = serviceAreas[(index + 1) % serviceAreas.length];
  return (
    <div className="text-center mt-8">
      <Link to={`/service-areas/${next.slug}`} className="common-btn">
        Next: {next.title}
      </Link>
    </div>
  );
};

export default NextServiceArea;
