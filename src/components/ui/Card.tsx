import { ReactNode } from "react"

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {

  return <div className={
    "px-5 py-2.5 rounded-md bg-background border-foreground border-2 hover:rotate-12 hover:scale-105 transition flex flex-col " +
    className
  }>
    <div className="flex gap-2 mb-2.5">
      <div className="bg-red-500 h-1 aspect-square rounded-full"></div>
      <div className="bg-blue-500 h-1 aspect-square rounded-full"></div>
      <div className="bg-yellow-500 h-1 aspect-square rounded-full"></div>
    </div>
    {children}
    <div className="mt-2.5"></div>
    <div className="bg-foreground h-[1px] w-20 ml-auto mt-auto"></div>
  </div>

}
