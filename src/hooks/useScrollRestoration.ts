import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useScrollRestoration = () => {
  const location = useLocation();

  useEffect(() => {
    const savedPosition = sessionStorage.getItem(`scroll-${location.key}`);
    if (savedPosition) {
      window.scrollTo(0, parseInt(savedPosition));
    }

    return () => {
      sessionStorage.setItem(`scroll-${location.key}`, window.scrollY.toString());
    };
  }, [location]);
};
