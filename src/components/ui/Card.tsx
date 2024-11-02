import { forwardRef, ReactNode } from "react"

type CardProps = {
  children: ReactNode;
  className?: string;
};

const Card = forwardRef<HTMLDivElement, CardProps>(
  function Card({ children, className = "" }, ref) {
    return <div
      ref={ref}
      className={
        "px-5 py-2.5 rounded-md bg-background border-foreground dark:border-2 flex flex-col " +
        "dark:shadow-none shadow-md shadow-stone-500 " +
        className
      }>
      <div className="flex gap-2 mb-2.5">
        <div className="bg-red-500 h-1 aspect-square rounded-full"></div>
        <div className="bg-blue-500 h-1 aspect-square rounded-full"></div>
        <div className="bg-yellow-500 h-1 aspect-square rounded-full"></div>
      </div>
      {children}
      <div className="bg-foreground h-[1px] w-20 ml-auto"></div>
    </div>;
  }
);

export default Card;
