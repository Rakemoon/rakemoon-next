"use client";

import { cn } from "@/util";
import { useScroll, useVelocity, motion } from "framer-motion";
import { useEffect, useState, memo } from "react";
import { Moon, Menu, X } from "react-feather";
import Link from "../Link/Link";
import LinkOnList from "../Link/LinkOnList";
import ThemeButton from "../Button/ThemeButton";

type Props = {
  className?: string;
}

export default memo(function Navbar({ className }: Props) {
  const [hide, setHide] = useState(false);
  const [isMobileVisible, setIsMobileVisible] = useState(false);
  const { scrollY } = useScroll();
  const velocityFactor = useVelocity(scrollY);

  useEffect(() => {
    const destroyReq = velocityFactor
      .on("change", x => {
        if (x > 0) setHide(true);
        if (x < 0) setHide(false);
      });

    return () => {
      destroyReq();
    }
  });

  const toggleMobile = () => {
    setIsMobileVisible(x => !x);
  };

  return <>
    <motion.nav
      className={cn(
        "sticky top-0 w-full z-10 backdrop-blur",
        "items-center",
        "origin-top",
        "flex",
        "place-content-center",
        className
      )}
      animate={{ opacity: hide ? 0 : 1, y: hide ? "-100%" : "0%" }}
      transition={{ delay: 0.1, duration: 1 }}
    >
      <div className={cn(
        "py-viewport",
        "w-[min(120ch_,calc(100%_-_theme('spacing.viewport')))]",
        "flex",
        "gap-viewport",
      )}>
        <Link
          href="/"
          className={cn(
            "text-ctp-text",
            "font-bold",
            "text-4xl",
            "relative"
          )}>
          <span>
            RakemOon
          </span>
          <Moon className={cn(
            "text-ctp-sky",
            "absolute",
            "-top-2",
            "-right-2"
          )} />
        </Link>
        <ul className={cn(
          "flex",
          "gap-2.5",
          "h-full",
          "text-ctp-text",
          "max-sm:hidden",
          "self-end",
          "ml-viewport",
        )}>
          <li className="h-max"><Link href="/blog">Blog</Link></li>
          <li className="h-max"><Link href="/about">About</Link></li>
        </ul>
        <ul className={cn(
          "flex",
          "gap-2.5",
          "h-full",
          "text-ctp-text",
          "max-sm:hidden",
          "items-center",
          "ml-auto",
          "self-center",
        )}>
          <li><ThemeButton /></li>
        </ul>
        <button
          aria-label="NavbarToggle"
          onClick={toggleMobile}
          className={cn(
            "flex justify-center items-center text-ctp-text",
            "sm:hidden",
            "ml-auto"
          )}>
          <Menu />
        </button>
      </div>
    </motion.nav>
    <motion.div
      initial={{ x: "101%" }}
      animate={{
        x: isMobileVisible ? "0%" : "101%",
      }}
      aria-hidden={!isMobileVisible}
      className={cn(
        "fixed",
        "top-0 right-0",
        "w-96",
        "max-w-full",
        "h-screen",
        "bg-ctp-surface0 bg-opacity-50",
        "backdrop-blur-md",
        "z-[5000]",
        "sm:hidden",
        "p-viewport",
        "flex",
      )}>
      <ul className={cn(
        "grow",
        "flex",
        "flex-col",
        "text-ctp-text",
        "ml-viewport"
      )}>
        <li><LinkOnList href="/blog">Blog</LinkOnList></li>
        <li><LinkOnList href="/about">About</LinkOnList></li>
      </ul>
      <button
        aria-label="NavbarToggle"
        onClick={toggleMobile}
        className={cn(
          "flex justify-center items-center text-ctp-text",
          "sm:hidden",
          "self-start"
        )}>
        <X />
      </button>
    </motion.div>
  </>
});
