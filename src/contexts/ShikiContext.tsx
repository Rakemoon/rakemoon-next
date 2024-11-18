"use client";

import { createContext, useCallback, useEffect, useState } from "react";
import { BundledLanguage, BundledTheme, HighlighterGeneric, createHighlighter } from "shiki";

type ContextProv = {
  getHighlighter: () => HighlighterGeneric<BundledLanguage, BundledTheme> | null;
};

export const ShikiContext = createContext<ContextProv | null>(null);

type Props = {
  children: React.ReactNode;
}

export default function ShikiContextProvider({ children }: Props) {
  const [highlighter, setHighlighter] = useState<HighlighterGeneric<BundledLanguage, BundledTheme> | null>(null);
  const getHighlighter = useCallback(() => highlighter, [highlighter]);

  const initializeHighlighter = async () => {
    const highlighter = await createHighlighter({
      themes: ["catppuccin-mocha"],
      langs: ["js"],
    });
    setHighlighter(highlighter);
    return () => highlighter?.dispose();
  }

  useEffect(() => {
    const promise = initializeHighlighter();
    return () => {
      promise.then(x => x());
    }

  }, []);
  return <ShikiContext.Provider value={{
    getHighlighter
  }}>
    {children}
  </ShikiContext.Provider>
}
