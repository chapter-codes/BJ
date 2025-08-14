import { useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router";

export function useScrollHistory() {
  const location = useLocation();
  const positions = useRef<Record<string, number>>({});

  useLayoutEffect(() => {
    const key = location.key || location.pathname;

    // Restore saved position if exists
    if (positions.current[key] != null) {
      window.scrollTo(0, positions.current[key]);
    } else {
      window.scrollTo(0, 0);
    }

    // Save position on unload / navigation away
    return () => {
      positions.current[key] = window.scrollY;
    };
  }, [location]);
}
