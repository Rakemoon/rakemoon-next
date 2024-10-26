import { LangRecord } from "@/types";

const enUS = {
  "USER_NAME": () => "Adzikri Fauzi Shiddiq" as const,
  "USER_NICK": () => "Rakemoon" as const,
  "USER_ARAB_NAME": () => "ادزكري فوزي صديق" as const,

  "NAV_OVERVIEW": () => "Overview",
  "NAV_EXPERIENCE": () => "Experience",
  "NAV_STACK": () => "Stack",
  "NAV_PROJECT": () => "Projects",
  "NAV_CONTACT": () => "Contact",

  "HERO_DESCRIPTION": () => "I develop backend services and user interfaces." as const,
  "HERO_TITLE": () => "Hi! I'm" as const,

  "OVERVIEW_TITLE": () => "Overview",
  "OVERVIEW_BADGE": () => "Introduction",

  "EXPERIENCE_TITLE": () => "Experiences",
  "EXPERIENCE_BADGE": () => "What i have done so far",

  "STACK_TITLE": () => "Tech Stack",
  "STACK_BADGE": () => "What i have learned so far",

  "PROJECT_TITLE": () => "Projects",
  "PROJECT_BADGE": () => "My Work",

  "CONTACT_TITLE": () => "Contact",
  "CONTACT_BADGE": () => "Get In touch",
} satisfies LangRecord;

export default enUS;
