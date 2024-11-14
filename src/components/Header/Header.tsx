import { cn } from "@/util";
import SkyLine from "../Textures/Skyline";

type Props = {
  children?: React.ReactNode;
  className?: string;
}

export default function Header({ children, className }: Props) {
  return <header className={cn(
    "from-ctp-sky to-ctp-base bg-gradient-to-t",
    "h-96 flex items-end relative",
    className,
  )}>
    {children}
    <SkyLine className="absolute -bottom-[1px]" />
  </header>;
}
