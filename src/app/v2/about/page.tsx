import Overview from "./sections/Overview";
import Footer from "@/components/v2/Footer/Footer";
import Header from "@/components/v2/Header/Header";
import Navbar from "@/components/v2/Navbar/Navbar";
import Stars from "@/components/v2/Textures/Stars";
import { getLang } from "@/langs";
import { cn } from "@/util";

const desc = getLang("HERO_DESCRIPTION")();

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
    <div className="min-h-screen bg-gradient-to-b from-ctp-base to-ctp-base via-ctp-sky"></div>
    <Footer className="mt-auto" />
  </main>
}
