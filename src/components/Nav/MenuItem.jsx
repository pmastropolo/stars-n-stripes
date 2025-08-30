import { useState, memo } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import TextAnimation from "../TextAnimation/TextAnimation";

function MenuItem({ item, closeNavMenu }) {
  const [showMenu, setShowMenu] = useState(false);

  const showsubnav = () => {
    setShowMenu(!showMenu);
  };

  const showActive = classNames("ak-munu_dropdown_toggle", {
    active: showMenu,
  });

  const showActivePrent = classNames("menu-item-has-children", {
    active: showMenu,
  });

  const handleLinkClick = () => {
    if (closeNavMenu) {
      closeNavMenu(); // Close the menu on link click
    }
  };

    return (
      <li className={showActivePrent}>
        <TextAnimation link={item.link} title={item.title} onClick={handleLinkClick} />
        {Array.isArray(item.childern) && (
          <>
            <ul>
              {item?.childern?.map((child) => (
                <li key={child.key}>
                  <TextAnimation link={child.link} title={child.title} onClick={handleLinkClick} />
                </li>
              ))}
            </ul>
            <span className={showActive} onClick={showsubnav}></span>
          </>
        )}
      </li>
    );
  }

MenuItem.propTypes = {
  item: PropTypes.shape({
    link: PropTypes.string,
    title: PropTypes.string,
    childern: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.any,
        link: PropTypes.string,
        title: PropTypes.string,
      })
    ),
  }).isRequired,
  closeNavMenu: PropTypes.func,
};

export default memo(MenuItem);