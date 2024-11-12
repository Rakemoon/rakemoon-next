"use client";

import { range } from "@/util";
import { memo, useEffect, useRef } from "react";

type Props = {
  className?: string;
  starsAmount: number;
}

type Star = {
  x: number;
  y: number;
  opacity: number;
  length: number;
}

export default memo(function Stars({ className, starsAmount }: Props) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let reqID = 0;
    const canvas = ref.current!;
    const { width, height } = canvas.getBoundingClientRect();
    canvas.width = width;
    canvas.height = height;

    let ctx = canvas.getContext("2d")!;
    let stars: Star[] = [];

    const drawStars: FrameRequestCallback = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const i of range(starsAmount)) {
        const star = stars[i];
        let opacity = 0;
        let length = 0;
        let x = 0, y = 0;
        if (star) {
          star.y += ((i + 1) / starsAmount);

          if (star.y < 0) star.y = canvas.height;
          if (star.y > canvas.height) star.y = 0;
          x = star.x;
          y = star.y;
          opacity = star.opacity;
          length = star.length;
        } else {
          opacity = Math.random();
          x = Math.round(Math.random() * canvas.width);
          y = Math.round(Math.random() * canvas.height);
          length = 1 + Math.random() * 2;
          stars.push({ x, y, opacity, length });
        }



        ctx.fillStyle = getComputedStyle(canvas).color;
        ctx.globalAlpha = opacity;

        ctx.beginPath();
        ctx.arc(x, y, length, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
      }
      reqID = requestAnimationFrame(drawStars);
    }

    reqID = requestAnimationFrame(drawStars);

    const onResize = () => {
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = width;
      canvas.height = height;
      ctx = canvas.getContext("2d")!;
      stars = [];
    };

    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(reqID);
      window.removeEventListener("resize", onResize);
    }
  }, [starsAmount]);

  return <canvas
    ref={ref}
    className={className}>
  </canvas>;
})
