import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Overview from "@/components/Overview";
import Project from "@/components/Project";
import Stack from "@/components/Stack";
import { getLang } from "@/langs";
import { Metadata, Viewport } from "next";

const description = getLang("OVERVIEW_DESCRIPTION")().join(" ").trim();

export const metadata: Metadata = {
  title: "Rakemoon",
  description,
  openGraph: {
    title: "Rakemoon",
    type: "website",
    url: "/",
    images: ["https://avatars.githubusercontent.com/u/39423103"],
    description
  }
}

export const viewport: Viewport = {
  themeColor: "#0a0a0a"
}

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
