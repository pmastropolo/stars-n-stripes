import React, { useState } from "react";
import classNames from "classnames";
import TextAnimation from "../TextAnimation/TextAnimation";

export default function MenuItem({ props, closeNavMenu }) {
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
      <TextAnimation link={props.link} title={props.title} onClick={handleLinkClick} />
      {Array.isArray(props.childern) && (
        <>
          <ul>
            {props?.childern?.map((child) => (
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
