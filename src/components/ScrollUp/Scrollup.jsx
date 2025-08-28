import React, { useEffect, useState, useCallback, useRef } from "react";

const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ticking = useRef(false);

  const handleScrollUp = useCallback((e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;

    if (!ticking.current) {
      window.requestAnimationFrame(() => {
        setIsVisible(scrollPosition >= 350);
        ticking.current = false;
      });
      ticking.current = true;
    }
  }, []);

  useEffect(() => {
    const opts = { passive: true };
    document.addEventListener("scroll", handleScroll, opts);
    return () => {
      document.removeEventListener("scroll", handleScroll, opts);
    };
  }, [handleScroll]);

  return (
    <span
      className={`ak-scrollup ${isVisible ? "ak-scrollup-show" : ""}`}
      onClick={handleScrollUp}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 10L1.7625 11.7625L8.75 4.7875V20H11.25V4.7875L18.225 11.775L20 10L10 0L0 10Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
};

export default ScrollUpButton;
