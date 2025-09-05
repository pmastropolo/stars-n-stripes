import {
  useRef,
  useState,
  useCallback,
  useMemo,
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

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      // Use ResizeObserver's measurements instead of querying layout
      // properties to avoid forced synchronous reflows.
      headerHeightRef.current = entry.contentRect.height + 30;
    });

    observer.observe(header);

    return () => observer.disconnect();
  }, []);

  const handleScroll = useCallback(() => {
    if (!ticking.current) {
      ticking.current = true;
      window.requestAnimationFrame(() => {
        const windowTop = window.scrollY;
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
      <NavMenu items={navitemlist} />
      <div className="nav-bar-border"></div>
    </header>
  );
};

export default Header;
