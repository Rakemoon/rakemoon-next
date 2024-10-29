import { LangRecord, ProjectList } from "@/types";

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
  "PROJECT_ITEMS": () => [
    {
      name: "Calorie Tracker",
      summary: "Track your calorie intake effortlessly with calorie tracker!",
      stacks: ["html5", "css", "js", "jquery", "bulmacss", "honojs", "prismadb", "ts", "supabase", "postgresql", "bun", "nodejs"],
      imagePath: "/assets/projects/calorie-tracker",
      links: [
        ["Demo", "https://calorie-tracker-eta.vercel.app"],
        ["Repository", "https://github.com/RaihanArdianata/calorie-calculator"]
      ]
    },
    {
      name: "Matzhar",
      summary: "Monolith Featured e-commerce app!",
      stacks: ["svelte", "tailwindcss", "daisyui", "supabase", "postgresql", "drizzledb", "nodejs", "ts", "css"],
      imagePath: "/assets/projects/matzhar",
      links: [
        ["Demo", "https://matzhar-kohl.vercel.app"],
        ["Repository", "https://github.com/Rakemoon/matzhar"]
      ]
    },
    {
      name: "Collosal Slicing",
      summary: "Self commisioned to slicing the figma design",
      stacks: ["react", "nextjs", "tailwindcss", "nodejs", "ts"],
      imagePath: "/assets/projects/collosal-slicing",
      links: [
        ["Demo", "https://collosal-slicing-figma.vercel.app/"],
        ["Repository", "https://github.com/Rakemoon/collosal-slicing-figma"],
        ["Design", "https://codedesign.dev/challenge/collosal"]
      ]
    }
  ] satisfies ProjectList[],

  "CONTACT_TITLE": () => "Contact",
  "CONTACT_BADGE": () => "Get In touch",
} satisfies LangRecord;

export default enUS;
