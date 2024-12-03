"use client";

import { createContext, useEffect, useState } from "react";

type ThemeList = "dark" | "light";

type ContextProps = {
  setTheme: (theme: ThemeList) => void;
  getTheme: () => ThemeList;
}

type Props = {
  children: React.ReactNode;
}

export const ThemeContext = createContext<ContextProps | null>(null);

export default function ThemeContextProvider({ children }: Props) {
  const [theme, setTheme] = useState("dark" as ThemeList);
  useEffect(() => {
    const html = document.documentElement;
    html.classList[theme === "dark" ? "add" : "remove"]("dark");
  }, [theme]);
  return <ThemeContext.Provider value={{
    setTheme(theme) {
      setTheme(theme);
    },
    getTheme() {
      return theme;
    },
  }}>
    {children}
  </ThemeContext.Provider>;
}
