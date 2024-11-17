"use server"

import { codeToHtml } from "shiki";
import HalfBleedContainer from "./HalfBleedContainer";

type Props = {
  children: React.ReactNode;
  language?: string;
}

export default async function Code({ children, language }: Props) {
  if (!language) return <code>{children}</code>;
  const out = await codeToHtml(children as string, {
    lang: language.replace("language-", ""),
    theme: "catppuccin-mocha"
  })
  return <HalfBleedContainer innerHtml={out} className="overflow-auto [&>pre]:!bg-transparent bg-[rgb(17,17,27)]" />;
}
