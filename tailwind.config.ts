import type { Config } from "tailwindcss";
import catpuccin from "@catppuccin/tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      transitionTimingFunction: {
        "ease-out-back": "cubic-bezier(.44,.77,.6,1.2)",
      },
      spacing: {
        "viewport": "2.25rem"
      }
    },
  },
  plugins: [catpuccin({
    prefix: "ctp",
    defaultFlavour: "latte",
  })],
};
export default config;
