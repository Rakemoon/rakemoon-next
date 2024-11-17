import { cn } from "@/util";

type Props = {
  children: React.ReactNode;
}

export default function Paragraph({ children }: Props) {
  return <p className={cn(
    "mb-5",

    // kbd style
    "[&>kbd]:bg-ctp-surface0",
    "[&>kbd]:py-1",
    "[&>kbd]:px-2",
    "[&>kbd]:relative",
    "[&>kbd]:rounded-md",
    "[&>kbd]:before:absolute",
    "[&>kbd]:before:bg-ctp-surface2",
    "[&>kbd]:before:inset-0",
    "[&>kbd]:before:w-full",
    "[&>kbd]:before:h-full",
    "[&>kbd]:before:top-[1.5px]",
    "[&>kbd]:before:-z-10",
    "[&>kbd]:before:rounded-md",

    //mark style
    "[&>mark]:bg-ctp-sky",
    "[&>mark]:bg-opacity-20",
    "[&>mark]:px-2",
    "[&>mark]:border-l-2",
    "[&>mark]:border-ctp-sky",
    "[&>mark]:text-ctp-text",
    "[&>mark]:rounded-sm",

    //code style
    "[&>code]:bg-ctp-crust",
    "[&>code]:rounded-sm",
    "[&>code]:px-[5px]",
  )}>{children}</p>;
}
