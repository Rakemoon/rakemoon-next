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
  radius: number;
}

export default memo(function Stars({ className, starsAmount }: Props) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let reqID = 0;
    const pseudoCanvas = document.createElement("canvas");
    const canvas = ref.current!;
    const { width, height } = canvas.getBoundingClientRect();
    canvas.width = width;
    canvas.height = height;
    pseudoCanvas.width = width;
    pseudoCanvas.height = height;

    const ctxPseudo = pseudoCanvas.getContext("2d")!;

    let ctx = canvas.getContext("2d")!;
    let stars: Star[] = [];

    const drawStars: FrameRequestCallback = () => {
      ctxPseudo.clearRect(0, 0, canvas.width, canvas.height);
      ctxPseudo.drawImage(canvas, 0, 0, canvas.width, canvas.height);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalAlpha = 0.9;
      ctx.drawImage(pseudoCanvas, 0, 0, canvas.width, canvas.height);
      for (const i of range(starsAmount)) {
        const star = stars[i];
        let opacity = 0;
        let radius = 0;
        let x = 0, y = 0;
        if (star) {
          star.y += ((i + 1) / starsAmount) + 0.5;

          if (star.y < 0) star.y = canvas.height;
          if (star.y > canvas.height) star.y = 0;
          x = star.x;
          y = star.y;
          opacity = star.opacity;
          radius = star.radius;
        } else {
          opacity = Math.random();
          x = Math.round(Math.random() * canvas.width);
          y = Math.round(Math.random() * canvas.height);
          radius = 1 + Math.random() * 2;
          stars.push({ x, y, opacity, radius });
        }



        ctx.fillStyle = getComputedStyle(canvas).color;
        ctx.globalAlpha = opacity;

        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
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
      pseudoCanvas.remove();
    }
  }, [starsAmount]);

  return <canvas
    ref={ref}
    className={className}>
  </canvas>;
})
