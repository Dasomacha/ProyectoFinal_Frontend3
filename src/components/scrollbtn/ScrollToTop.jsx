import React, { useState, useEffect } from "react";
import styles from "../scrollbtn/ScrollToTop.module.css"; 

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button className={styles.scrollToTop} onClick={handleScrollToTop}>
        ↑
      </button>
    )
  );
};

export default ScrollToTop;
