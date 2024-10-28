import Link from "next/link";
import Stack from "./Stack";
import Project from "./Project";
import Contact from "./Contact";
import Hero from "./Hero";
import Title from "./ui/Title";
import Image from "next/image";
import { getLang } from "@/langs";


export default function Navbar() {
  const links = [
    ["overview", getLang("NAV_OVERVIEW")()],
    ["experience", getLang("NAV_EXPERIENCE")()],
    [Stack.sectionId, getLang("NAV_STACK")()],
    [Project.sectionId, getLang("NAV_PROJECT")()],
    [Contact.sectionId, getLang("NAV_CONTACT")()],
  ];

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
    <ul className="inline-flex gap-2.5 w-fit max-md:hidden">
      {
        links
          .map(
            ([id, name]) => <li key={id}><Link href={"#" + id}>{name}</Link></li>
          )
      }
    </ul>
  </nav>
}
