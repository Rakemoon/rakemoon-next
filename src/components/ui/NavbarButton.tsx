"use client";

type NavbarButtonProps = {
  flipNavAction: () => unknown,
  isOpen: boolean
}
export default function NavbarButton({ isOpen, flipNavAction }: NavbarButtonProps) {

  return <button onClick={flipNavAction} className="md:hidden" aria-label="navbar">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5rem"
      height="1.5rem"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round">
      <line x1={3} y1={5} x2={21} y2={5} style={{ transform: isOpen ? "rotateZ(45deg) translateX(5px) translateY(-4px)" : "" }} className="transition ease-ease-out-back duration-500"></line>
      <line x1={3} y1={5 + 7} x2={21} y2={5 + 7} style={{ transform: isOpen ? "translateX(100%) translateY(100%) rotate(180deg) scaleX(0)" : "" }} className="transition ease-in-out duration-500"></line>
      <line x1={3} y1={5 + 7 * 2} x2={21} y2={5 + 7 * 2} style={{ transform: isOpen ? "rotateZ(-45deg) translateX(-13px) translateY(-2px)" : "" }} className="transition ease-ease-out-back duration-500"></line>
    </svg>
  </button>;
}
