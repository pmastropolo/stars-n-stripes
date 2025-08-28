import React, {
  useRef,
  useState,
  useCallback,
  useMemo,
  useLayoutEffect,
  useEffect,
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

  useLayoutEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const updateHeight = () => {
      headerHeightRef.current = header.getBoundingClientRect().height + 30;
    };

    updateHeight();

    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(header);

    return () => resizeObserver.disconnect();
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
