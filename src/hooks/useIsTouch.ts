import { useEffect, useState } from "react";

export function useIsTouch() {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch(window.matchMedia("(hover: none), (pointer: coarse)").matches);
  }, []);

  return isTouch;
}
