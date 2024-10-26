import { ReactNode } from "react";

type PrettyNameProps = {
  children: ReactNode;
}

export default function PrettyName({ children }: PrettyNameProps) {
  return <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-blue-400">
    {children}
  </span>;
}
