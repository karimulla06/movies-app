import React, { useState, useEffect, useCallback } from "react";
import { CaretUp } from "@phosphor-icons/react";
import { throttle } from "@/utils";

import styles from "./scroll-to-top.module.css";

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const checkScrollTop = useCallback(() => {
    const clientHeight = document.documentElement.clientHeight; // Height of the viewport
    const scrollHeight = document.documentElement.scrollHeight; // Height of the entire document
    const scrollTop = window.scrollY; // Current vertical scroll position

    // Check if the user has scrolled past the halfway point.
    if (scrollTop > (scrollHeight - clientHeight) / 2) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, []);

  useEffect(() => {
    const throttledCheckScrollTop = throttle(checkScrollTop, 200);

    window.addEventListener("scroll", throttledCheckScrollTop);

    return () => window.removeEventListener("scroll", throttledCheckScrollTop);
  }, [checkScrollTop]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className={styles.scroll_to_top_button}
      aria-label="Scroll to top"
    >
      <CaretUp size={21} />
    </button>
  );
};
