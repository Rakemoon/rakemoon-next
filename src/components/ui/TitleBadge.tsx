import { ReactNode } from "react";

type TitleBadgeProps = {
  children: ReactNode;
}

export default function TitleBadge({ children }: TitleBadgeProps) {
  return <h3 className="text-sm font-lighter italic text-opacity-95">
    {children}
  </h3>;
}
