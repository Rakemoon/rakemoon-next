"use client";

import { useEffect, useRef, useState } from "react";

type Handler<El extends Element> = (el: El, onView: boolean) => unknown;

const intersectOption = new Map<Element, Handler<never>>;

let observer: null | IntersectionObserver = null;

if (globalThis.IntersectionObserver && observer === null) {
  observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      const opt = intersectOption.get(entry.target);
      opt?.(
        entry.target as never,
        entry.isIntersecting
      );
    }
  })
}

export function useOnView<Ref extends Element>() {
  const ref = useRef<Ref | null>(null);
  const [isOnView, setIsOnView] = useState(false);

  useEffect(() => {
    const current = ref.current;
    if (current && observer) {
      observer.observe(current);
      intersectOption.set(current, (_, x) => setIsOnView(x));

      return () => {
        observer.unobserve(current);
        intersectOption.delete(current);
      }
    };
  }, []);

  return [ref, isOnView] as [ref: typeof ref, isOnView: boolean];
}
