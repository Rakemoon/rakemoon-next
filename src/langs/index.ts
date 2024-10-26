import { LangRecord } from "@/types";
import enUS from "./enUS";

const langs = {
  enUS,
} satisfies Record<string, LangRecord>;


export function getLang<T extends keyof typeof langs["enUS"]>(k: T) {
  return langs["enUS"][k];
}
