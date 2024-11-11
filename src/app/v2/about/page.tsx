"use client";

import { motion } from "framer-motion";

import Footer from "@/components/v2/Footer/Footer";
import Header from "@/components/v2/Header/Header";
import Navbar from "@/components/v2/Navbar/Navbar";
import { cn } from "@/util";

export default function AboutPage() {
  return <main className="min-h-screen flex flex-col">
    <Navbar className="!fixed" />
    <Header className={cn(
      "min-h-screen flex-col",
      "items-center",
      "justify-center",
      "text-ctp-base",
    )}>
      <p
        className="text-7xl font-medium flex">
        {"Hello there!".split("").map((x, i) =>
          <motion.span
            animate={{ y: [50, 0] }}
            transition={{
              duration: 0.1,
              delay: i * 0.05,
            }}
            className="min-w-5"
            key={x + i}>
            {x}
          </motion.span>
        )}
      </p>
      <span
        className="text-5xl font-medium flex">
        {"Im Adzikri Fauzi Shiddiq".split("").map((x, i) => <motion.span
          animate={{ y: [50, 0] }}
          transition={{
            duration: 0.1,
            delay: i * 0.05,
          }}
          key={x + i}
          className="min-w-5"
        >
          {x}
        </motion.span>)}
      </span>
    </Header>
    <Footer className="mt-auto" />
  </main>
}
