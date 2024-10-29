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
      <line x1={3} y1={5} x2={21} y2={5} style={{ transform: isOpen ? "rotateZ(45deg) translateX(5px) translateY(-10px)" : "" }} className="transition"></line>
      <line x1={3} y1={5 + 7} x2={21} y2={5 + 7} style={{ transform: isOpen ? "scale(0)" : "" }} className="transition"></line>
      <line x1={3} y1={5 + 7 * 2} x2={21} y2={5 + 7 * 2} style={{ transform: isOpen ? "rotateZ(-45deg) translateX(-7px) translateY(-2px)" : "" }} className="transition"></line>
    </svg>
  </button>;
}
