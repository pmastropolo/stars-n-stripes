import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  useMemo,
} from "react";
import classNames from "classnames";
import NavMenu from "../../components/Nav/NavMenu";
import navitemlist from "../../dataJson/navitemlist.json";

const Header = () => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const headerRef = useRef(null);

  const headerHeightRef = useRef(0);

  useEffect(() => {
    const header = headerRef.current;
    if (header) {
      headerHeightRef.current = header.offsetHeight + 30;
    }
  }, []);

  const handleScroll = useCallback(() => {
    const headerHeight = headerHeightRef.current;
    const windowTop = window.pageYOffset || document.documentElement.scrollTop;

    if (windowTop >= headerHeight) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
      setIsHeaderVisible(false);
    }

    if (isSticky) {
      if (windowTop < lastScrollTop) {
        setIsHeaderVisible(true);
      } else {
        setIsHeaderVisible(false);
      }
    }

    setLastScrollTop(windowTop);
  }, [isSticky, lastScrollTop]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const navClass = useMemo(
    () =>
      classNames("ak-sticky_header", "ak-site_header", "ak-style1", {
        "ak-gescout_sticky": isSticky,
        "ak-gescout_show": isHeaderVisible,
      }),
    [isSticky, isHeaderVisible]
  );
  return (
    <header ref={headerRef} className={navClass}>
      <NavMenu props={navitemlist} />
      <div className="nav-bar-border"></div>
    </header>
  );
};

export default Header;
