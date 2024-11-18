"use client";

import { cn, range } from "@/util";
import { useEffect, useState } from "react";

type Props = {
  scrollOffset: number;
}

export default function TableOfContents({ scrollOffset }: Props) {
  const [parentOffset, setParentOffset] = useState(0);
  const [list, setList] = useState([] as [string, string, number][]);
  const [gridRow, setGridRow] = useState("1/2");

  useEffect(() => {
    const article = document.querySelector("article");
    const headings = document.querySelectorAll("article>h2,h3") as NodeListOf<HTMLHeadingElement>;
    setGridRow(`1/${article!.children.length + 1}`);
    const parentOfset = article!.parentElement!.offsetTop;
    setParentOffset(parentOfset);

    const headlist = [] as [number, () => unknown, () => unknown][];

    for (const heading of headings) {
      const className = "!text-ctp-sky scale-105".split(" ");
      headlist.push([heading.offsetTop + scrollOffset + parentOfset, () => {
        const anchor = document.querySelector(`#table-of-contents>nav>a[href='#${heading.id}']`) as HTMLAnchorElement;
        for (const cn of className) anchor.classList.add(cn);
      }, () => {
        const anchor = document.querySelector(`#table-of-contents>nav>a[href='#${heading.id}']`) as HTMLAnchorElement;
        for (const cn of className) anchor.classList.remove(cn);
      }]);
      setList(x => [...x, [heading.textContent!, heading.id!, heading.tagName === "H2" ? 0 : 1] as const])
    };

    const onScroll = () => {
      for (const i of range(headlist.length)) {
        const now = headlist[i];
        const next = headlist[i + 1];
        const y = Math.round(window.scrollY);

        if (y >= now[0] && y < (next?.[0] ?? Infinity)) now[1]();
        else now[2]();
      }
    }

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      setList([]);
    }
  }, [scrollOffset]);

  const onClick: React.MouseEventHandler<HTMLAnchorElement> = e => {
    e.preventDefault();
    const hash = decodeURIComponent(e.currentTarget.hash);
    const el = document.getElementById(hash.replace("#", "")) as HTMLHeadingElement;
    window.scrollTo({
      top: el.offsetTop + scrollOffset + (parentOffset),
      behavior: "smooth",
    });
  }

  return <div id="table-of-contents" className={cn(
    "![grid-column:3/4]",
    "ml-viewport",
    "hidden",
    "@[66.25rem]/article:block",
    "h-fit",
    "sticky",
    "top-32",
    "w-full"
  )} style={{ gridRow }}>
    <nav className="flex flex-col">
      <h2 className="font-medium mb-5 text-xl">TABLE OF CONTENTS</h2>
      {list.map(x =>
        <a
          className="transition text-ctp-subtext0 hover:text-ctp-subtext1"
          onClick={onClick}
          key={x[1]}
          style={{ marginLeft: `${x[2]}rem` }}
          href={`#${x[1]}`}>{x[0]}</a>
      )}
    </nav>
  </div>;
};
