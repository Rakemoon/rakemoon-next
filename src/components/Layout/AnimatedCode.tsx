"use client";

import { useEffect, useState, memo, useContext } from "react";
import { BundledLanguage, type HighlighterCore } from "shiki";
import { ShikiMagicMove } from "shiki-magic-move/react";

import "shiki-magic-move/dist/style.css";
import { ShikiContext } from "@/contexts/ShikiContext";

type Props = {
  code: string;
  lang: BundledLanguage;
}

const AnimatedCode = memo(
  function AnimatedCode({ code, lang }: Props) {
    const ctx = useContext(ShikiContext);
    const [highlighter, setHighlighter] = useState<HighlighterCore>();

    useEffect(() => {
      const highlighter = ctx?.getHighlighter();
      setHighlighter(highlighter!);
    }, [ctx])

    return highlighter ? <ShikiMagicMove
      className="!bg-transparent overflow-auto"
      lang={lang}
      theme="catppuccin-mocha"
      highlighter={highlighter}
      code={code}
      options={{ duration: 500, stagger: 0.3, lineNumbers: false }}
    /> : <p>Loading</p>
  });

export default AnimatedCode;
