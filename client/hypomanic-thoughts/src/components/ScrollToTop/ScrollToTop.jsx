//This is just a little helper that way when I click a post it will be at the top
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 300);
  }, [pathname]);

  return null;
};

export default ScrollToTop;