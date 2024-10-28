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
  "OVERVIEW_DESCRIPTION": () => [`
    I am a Junior Fullstack Developer with 5 months of experience in developing, designing, and deploying backend systems.
    I possess skills in design slicing and innovation in frontend development.
    Additionally, I have experience in creating WhatsApp bots, as well as working as a warehouse staff member and e-commerce administrator.
  `, `
    Furthermore, I have a background in network engineering, thanks to my education in Computer Networking.
    I am committed to continuous learning and quickly adapting to dynamic environments, and I am enthusiastic about making a positive contribution to every project I undertake.
  `
  ],
  "OVERVIEW_CARDS": () => [
    {
      title: "FrontEnd Developer",
    },
    {
      title: "Backend Developer",
    },
    {
      title: "Bot Developer",
    },
    {
      title: "Network Engineer",
    },
    {
      title: "Warehouse Worker",
    },
    {
      title: "Ecommerce Admin",
    },
  ],


  "EXPERIENCE_TITLE": () => "Experiences",
  "EXPERIENCE_BADGE": () => "What i have done so far",
  "EXPERIENCE_ITEMS": () => [

  ] as const,

  "STACK_TITLE": () => "Tech Stack",
  "STACK_BADGE": () => "What i have learned so far",

  "PROJECT_TITLE": () => "Projects",
  "PROJECT_BADGE": () => "My Work",

  "CONTACT_TITLE": () => "Contact",
  "CONTACT_BADGE": () => "Get In touch",
} satisfies LangRecord;

export default enUS;
