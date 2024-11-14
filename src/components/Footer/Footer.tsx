import { cn } from "@/util";
import { GitHub, Linkedin, Facebook, Instagram, Mail } from "react-feather";
import SkyLine from "../Textures/Skyline";

type Props = {
  className?: string;
}

const links = [
  {
    name: "Github",
    href: "https://github.com/Rakemoon",
    icon: GitHub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/adzikri-fauzi-shiddiq",
    icon: Linkedin,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/adzikri.fauzi.7",
    icon: Facebook,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/kuz_rake/",
    icon: Instagram,
  },
  {
    name: "Email",
    href: "mailto:rakemoonkuzmin@gmail.com",
    icon: Mail,
  }
]

export default function Footer({ className }: Props) {
  return <footer className={cn(
    "bg-gradient-to-t from-ctp-sky to-ctp-base",
    "min-h-96",
    "flex",
    "flex-col",
    "items-center",
    "justify-between",
    "pb-viewport",
    className,
  )}>
    <SkyLine className="-mt-1 rotate-180" />
    <div className={cn(
      "h-fit",
      "flex",
      "gap-2.5",
    )}>
      {links.map(x => <a
        key={x.name}
        href={x.href}
        target="_blank"
        aria-label={x.name}
      >
        <x.icon />
      </a>)}
    </div>
  </footer>
}
