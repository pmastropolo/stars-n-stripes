import { useState, memo } from "react";
import { Link } from "react-router-dom";
import MenuItem from "./MenuItem"; // Ensure MenuItem is correctly imported
import logo from "/assets/img/icon/stars-and-stripes-automotive-llc-logo.svg";
import navitemlist from "../../dataJson/navitemlist.json"; // Make sure this file exists and contains your nav data

function NavMenu() {
  const [navBar, setNavbar] = useState("");
  const [navlist, setNavList] = useState("");

  // Function to toggle the navbar visibility
  const navBarShow = () => {
    if (navBar === "") {
      setNavbar("ak-toggle_active");
    } else {
      setNavbar("");
    }

    if (navlist === "") {
      setNavList("ak-show-moblie-nav-list");
    } else {
      setNavList("");
    }
  };

  // Function to close the navbar (called when a link is clicked)
  const closeNavMenu = () => {
    setNavbar(""); // Reset the navbar state
    setNavList(""); // Hide the mobile nav list
  };

  return (
    <div className="ak-main_header">
      <div className="container">
        <div className="ak-main_header_in">
          <div className="ak-main-header-left">
            <Link className="ak-site_branding" to="/">
              <img src={logo} alt="..." decoding="async" />
            </Link>
          </div>
          <div className="ak-main-header-center">
            <div className="ak-nav ak-medium">
              <ul id="ak-nav_list" className={`ak-nav_list ${navlist}`}>
                {navitemlist?.map((item, i) => {
                  return (
                    // Pass closeNavMenu function to MenuItem so it can be used in TextAnimation
                      <MenuItem item={item} key={i} closeNavMenu={closeNavMenu} />
                  );
                })}
              </ul>
              <span
                onClick={() => navBarShow()}
                id="navBar"
                className={`ak-munu_toggle ${navBar}`}
              >
                <span></span>
              </span>
            </div>
          </div>
          <div className="ak-main-header-right">
            <Link to="tel:205-436-2056">
              <div className="d-flex align-items-center gap-3">
                <div className="heartbeat-icon">
                  <span className="ak-heartbeat-btn">
                    <img
                      src="/assets/img/icon/phone.svg"
                      alt="..."
                      loading="lazy"
                      decoding="async"
                    />
                  </span>
                </div>
                <span className="h6">205-436-2056</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(NavMenu);