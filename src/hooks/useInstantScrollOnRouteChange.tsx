import { useLayoutEffect } from "react";
import { useLocation } from "react-router";

export function useInstantScrollOnRouteChange() {
  const location = useLocation();

  useLayoutEffect(() => {
    const html = document.documentElement;
    // const prevBehavior = html.style.scrollBehavior;
    // console.log(prevBehavior)

    // Disable smooth scrolling immediately
    html.style.scrollBehavior = "auto";

    // Restore after two frames
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        html.style.scrollBehavior = 'smooth';
      });
    });

  }, [location.pathname]);
}
