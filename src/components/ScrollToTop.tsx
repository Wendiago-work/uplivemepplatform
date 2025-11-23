import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolls to the top of the page whenever the route pathname changes.
 * Keeps navigation consistent by preventing leftover scroll positions.
 */
export const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // If navigating with a hash (anchor), let the dedicated hash handler scroll instead.
    if (!location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace("#", "");
      // Give the page a tick to render before scrolling
      requestAnimationFrame(() => {
        document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, [location.hash, location.pathname]);

  return null;
};
