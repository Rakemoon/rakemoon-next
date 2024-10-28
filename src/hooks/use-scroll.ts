import { useCallback, useEffect, useState } from "react";

export default function useScroll() {
  const [xy, setXY] = useState([0, 0]);
  const cb = useCallback(() => setXY([window.scrollX, window.scrollY]), []);
  useEffect(() => {
    window.addEventListener("scroll", cb);
    return () => {
      window.removeEventListener("scroll", cb);
    }
  }, [cb]);
  return xy as [x: number, y: number];
}
