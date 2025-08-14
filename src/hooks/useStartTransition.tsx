import { useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router";

export function useViewTransitionForServices() {
  const location = useLocation();
  const prevPath = useRef(location.pathname);

  useLayoutEffect(() => {
    const isServicePath = (path: string) =>
      path === "/services" || /^\/service\/[^/]+$/.test(path);

    // const oldPath = prevPath.current;
    const newPath = location.pathname;

    // Only animate when going to or within service pages
    if (
      document.startViewTransition &&
      (isServicePath(newPath))
    ) {
      document.startViewTransition(() => {
        prevPath.current = newPath; // update after DOM change
      });
    } else {
      prevPath.current = newPath;
    }
  }, [location]);
}
