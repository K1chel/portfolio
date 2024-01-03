import { useEffect, useState } from "react";

export const useScrollTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("click", scrollToTop);

  setTimeout(() => {
    window.removeEventListener("click", scrollToTop);
  }, 300);

  return {
    scrollToTop,
    visible,
  };
};
