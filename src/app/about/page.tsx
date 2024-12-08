import Overview from "./sections/Overview";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import Stars from "@/components/Textures/Stars";
import { getLang } from "@/langs";
import { cn } from "@/util";
import Experience from "./sections/Experience";
import TechStack from "./sections/TechStack";
import Projects from "./sections/Projects";
import { Metadata } from "next";
import Contact from "./sections/Contact";

const desc = getLang("HERO_DESCRIPTION")();

export const metadata: Metadata = {
  title: "Adzikri Fauzi Shiddiq | Fullstack Developer",
}

export default function AboutPage() {

  return <main className="min-h-screen flex flex-col">
    <Navbar className="!fixed" />
    <Header className={cn(
      "min-h-screen",
      "justify-center",
      "items-center",
      "text-ctp-text",
      "px-viewport",
      "gap-5"
    )}>
      <Stars className={cn(
        "absolute inset-0 w-full h-full",
        "text-ctp-sapphire dark:text-ctp-yellow"
      )} starsAmount={500} />
      <div className="z-10">
        <p className={cn(
          "text-5xl font-bold",
          "drop-shadow-md",
          "flex flex-wrap gap-3"
        )}>
          <span>Hi there!</span> <span className="text-ctp-subtext1">Im Adzikri.</span>
        </p>
        <p className="text-xl font-medium">{desc}</p>
      </div>
    </Header>
    <Overview />
    <Experience />
    <TechStack />
    <Projects />
    <Contact />
    <Footer className="mt-auto" />
  </main>
}
