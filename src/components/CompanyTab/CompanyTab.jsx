import { useState } from "react";

const tabContents = [
  {
    title: "Mission",
    description:
      "At Stars and Stripes Automotive LLC, our mission is to bring timeless automotive dreams to life through expert craftsmanship, passion, and attention to detail. We are dedicated to restoring and customizing vintage and classic cars with unparalleled quality, turning every project into a unique masterpiece that reflects the personality and vision of its owner.",
  },
  {
    title: "Vision",
    description:
      "Our vision is to become a nationally recognized name in the restoration and customization of vintage and classic vehicles, renowned for creating show-stopping cars that embody the 'WOW' factor. We aim to preserve the spirit of automotive history while offering modern innovations, ensuring every car we touch becomes a symbol of pride and individuality for its owner. Stars and Stripes Automotive LLC is committed to honoring the legacy of classic cars and the dreams of those who own them, one build at a time.",
  },
  {
    title: "History",
    description:
      "Stars and Stripes Automotive LLC was born from a shared love of vintage cars, hot rods, and American craftsmanship. Founded by two U.S. Army veterans with a combined service of over 38 years, including time as Paratroopers and in Special Forces, we bring the same dedication, precision, and teamwork to our work as we did to serving our country. After years of friendship and a successful collaboration on iconic builds—like the restoration of a 1985 Camaro—our journey into the world of automotive restoration officially began. Our work is a tribute to our core values: God, country, and a commitment to excellence.",
  },
];

const CompanyTab = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="container">
      <div className="ak-height-125 ak-height-lg-80"></div>
      <div className="company-tab">
        <ul className="tabs">
          {tabContents?.map((tab, index) => (
            <li
              key={index}
              className={activeTab === index ? "active-tab" : ""}
              onClick={() => handleTabClick(index)}
            >
              {tab.title}
            </li>
          ))}
        </ul>

        <div className="tabs-content">
          <div className="list">
            <div className="ak-section-heading ak-style-1 ak-type-1">
              <div className="background-text">Stars and Stripes Automotive LLC</div>
              <h3 className="desp">{tabContents[activeTab].description}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyTab;
