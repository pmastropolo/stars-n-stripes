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
  const [isSticky, setIsSticky] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const headerRef = useRef(null);

  const headerHeightRef = useRef(0);
  const lastScrollTop = useRef(0);
  const ticking = useRef(false);

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
    const windowTop = window.pageYOffset || document.documentElement.scrollTop;

    if (!ticking.current) {
      window.requestAnimationFrame(() => {
        const headerHeight = headerHeightRef.current;

        if (windowTop >= headerHeight) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
          setIsHeaderVisible(false);
        }

        if (isSticky) {
          if (windowTop < lastScrollTop.current) {
            setIsHeaderVisible(true);
          } else {
            setIsHeaderVisible(false);
          }
        }

        lastScrollTop.current = windowTop;
        ticking.current = false;
      });
      ticking.current = true;
    }
  }, [isSticky]);

  useEffect(() => {
    const opts = { passive: true };
    window.addEventListener("scroll", handleScroll, opts);
    return () => window.removeEventListener("scroll", handleScroll, opts);
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
