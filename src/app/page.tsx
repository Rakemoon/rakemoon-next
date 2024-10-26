import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Overview from "@/components/Overview";
import Project from "@/components/Project";
import Stack from "@/components/Stack";

export default function Home() {
  return <>
    <Navbar />
    <Hero />
    <Overview />
    <Experience />
    <Stack />
    <Project />
    <Contact />
  </>
}
