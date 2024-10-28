"use client";

import Link from "next/link";
import Stack from "./Stack";
import Project from "./Project";
import Contact from "./Contact";
import Hero from "./Hero";
import Title from "./ui/Title";
import Image from "next/image";
import { getLang } from "@/langs";
import NavbarButton from "./ui/NavbarButton";
import { useCallback, useState } from "react";


export default function Navbar() {
  const [isOpen, setisOpen] = useState(false);

  const links = [
    ["overview", getLang("NAV_OVERVIEW")()],
    ["experience", getLang("NAV_EXPERIENCE")()],
    [Stack.sectionId, getLang("NAV_STACK")()],
    [Project.sectionId, getLang("NAV_PROJECT")()],
    [Contact.sectionId, getLang("NAV_CONTACT")()],
  ];

  const flipNavAction = useCallback(() => setisOpen(x => !x), []);

  return <nav className="fixed top-0 left-0 right-0 w-full flex justify-between py-2.5 h-20 items-center bg-background px-20 max-md:px-2">
    <Link href={"#" + Hero.sectionId} className="flex h-full gap-2.5 items-center">
      <Image
        src="https://avatars.githubusercontent.com/u/39423103"
        alt="avatar"
        width={100}
        height={100}
        className="aspect-square h-full w-auto rounded-full"
      />
      <Title>Rakemoon</Title>
    </Link>
    <NavbarButton
      flipNavAction={flipNavAction}
      isOpen={isOpen}
    />
    <ul className={"flex gap-2.5 w-fit " +
      "max-md:fixed max-md:flex-col max-md:right-1 max-md:top-20 max-md:bg-background max-md:border max-md:border-foreground " +
      "max-md:rounded-md transition max-md:gap-0 " +
      (!isOpen && "max-md:scale-y-0 max-md:-translate-y-1/2")}>
      {
        links
          .map(
            ([id, name]) => <li key={id} className="max-md:hover:bg-white max-md:hover:bg-opacity-20 transition max-md:h-max"><Link className="w-full h-full block max-md:p-2.5" href={"#" + id}>{name}</Link></li>
          )
      }
    </ul>
  </nav>
}
