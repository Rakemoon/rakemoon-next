import { ReactNode } from "react";

type TitleBadgeProps = {
  children: ReactNode;
  className?: string;
}

export default function TitleBadge({ children, className = "" }: TitleBadgeProps) {
  return <h3 className={
    "text-sm font-lighter italic text-opacity-95 " +
    className
  }>
    {children}
  </h3>;
}
