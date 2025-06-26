import { Experience, LangRecord, ProjectList } from "@/types";
import { oneLineTrim } from "@/util";

const enUS = {
  USER_NAME: () => "Adzikri Fauzi Shiddiq" as const,
  USER_NICK: () => "Rakemoon" as const,
  USER_ARAB_NAME: () => "ادزكري فوزي صديق" as const,

  NAV_OVERVIEW: () => "Overview",
  NAV_EXPERIENCE: () => "Experience",
  NAV_STACK: () => "Stack",
  NAV_PROJECT: () => "Projects",
  NAV_CONTACT: () => "Contact",

  HERO_DESCRIPTION: () =>
    "I develop backend services and user interfaces." as const,
  HERO_TITLE: () => "Hi! I'm" as const,

  OVERVIEW_TITLE: () => "Overview",
  OVERVIEW_BADGE: () => "Introduction",
  OVERVIEW_DESCRIPTION: () => [
    oneLineTrim`
    I am a Junior Fullstack Developer with 5 months of experience in developing, designing, and deploying backend systems.
    I possess skills in design slicing and innovation in frontend development.
    Additionally, I have experience in creating WhatsApp bots, as well as working as a warehouse staff member and e-commerce administrator.
  `,
    oneLineTrim`
    Furthermore, I have a background in network engineering, thanks to my education in Computer Networking.
    I am committed to continuous learning and quickly adapting to dynamic environments, and I am enthusiastic about making a positive contribution to every project I undertake.
  `,
  ],
  OVERVIEW_CARDS: () => [
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

  EXPERIENCE_TITLE: () => "Experiences",
  EXPERIENCE_BADGE: () => "What i have done so far",
  EXPERIENCE_ITEMS: () =>
    [
      {
        when: [new Date("2019-06"), new Date("2022-07")],
        as: "Computer and Engineering Network Student",
        place: "SMKN 1 Panjalu",
        at: "Ciamis, West Java, Indonesia",
        does: [
          "Learn about TCP/IP and VoIP",
          "Experienced work as team and make Blog Website",
          "Analyzed how debian work to create DNS Server",
          "Learn and Try using Mikrotik Route",
        ],
        imagePath: "/assets/experiences/smk",
      },
      {
        when: [new Date("2021-01"), new Date("2021-03")],
        as: "Internship Student",
        place: "Ajat Computer System",
        at: "Ciamis, West Java, Indonesia",
        does: [
          "Analyzed problems and worked with teams to develop solutions about OS Installation and Build Computer",
          "Provide clerical support, addressing routine and special requirements",
        ],
        imagePath: "/assets/experiences/acs",
      },
      {
        when: [new Date("2023-12"), new Date("2024-7")],
        as: "Warehouse Staff & Office Staff",
        place: "Noforty Project Official",
        at: "Bandung, West Java, Indonesia",
        does: [
          "Managed and processed up to 1,000 orders efficiently.",
          "Responsible for inventory management, including the receipt and dispatch of goods.",
          "Oversaw the shipping process, including checking, packing, and cross-checking to ensure accuracy and customer satisfaction.",
        ],
        imagePath: "/assets/experiences/nfrty",
      },
      {
        when: [new Date("2024-05"), "now"],
        as: "Web Developer Student & Self Employee",
        place: "Random Para Nolep (RPN)",
        at: "Remote",
        does: [
          "Completed self-commission projects while advancing skills in web programming up to Phase 2.",
          "Collaborated on group projects with classmates to enhance teamwork and problem-solving abilities.",
          "Assisted junior students in overcoming challenges and difficulties in their coursework.",
          "Selected as a supervisor for live coding sessions, demonstrating leadership and attention to detail.",
        ],
        imagePath: "/assets/experiences/rpn",
      },
    ] satisfies Experience[],

  STACK_TITLE: () => "Tech Stack",
  STACK_BADGE: () => "What i have learned so far",

  PROJECT_TITLE: () => "Projects",
  PROJECT_BADGE: () => "My Work",
  PROJECT_ITEMS: () =>
    [
      {
        name: "Nad Trade",
        summary:
          "Decentralized Exchange, I tried to create dex using AMM Model called Liquidity Pools",
        stacks: [
          "react",
          "nextjs",
          "tailwindcss",
          "bun",
          "ts",
          "postgresql",
          "drizzledb",
          "monad",
          "solidity",
        ],
        imagePath: "/assets/projects/nad-trade",
        links: [
          ["Demo", "https://defi-project-tau.vercel.app"],
          ["Repository", "https://github.com/Rakemoon/defi-project"],
        ],
      },
      {
        name: "Credura - Blockchain learning",
        summary:
          "Master Web3 technologies with our interactive courses, earn crypto rewards, and build your blockchain expertise with hands-on projects and real-world applications.",
        stacks: [
          "react",
          "nextjs",
          "tailwindcss",
          "bun",
          "ts",
          "postgresql",
          "drizzledb",
          "monad",
          "solidity",
        ],
        imagePath: "/assets/projects/credura",
        links: [
          ["Demo", "https://credura.vercel.app"],
          ["Repository", "https://github.com/immanueljanis/credura"],
        ],
      },
      {
        name: "Calorie Tracker",
        summary: "Track your calorie intake effortlessly with calorie tracker!",
        stacks: [
          "html5",
          "css",
          "js",
          "jquery",
          "bulmacss",
          "honojs",
          "prismadb",
          "ts",
          "supabase",
          "postgresql",
          "bun",
          "nodejs",
        ],
        imagePath: "/assets/projects/calorie-tracker",
        links: [
          ["Demo", "https://calorie-tracker-eta.vercel.app"],
          [
            "Repository",
            "https://github.com/RaihanArdianata/calorie-calculator",
          ],
        ],
      },
      {
        name: "Matzhar",
        summary: "Monolith Featured e-commerce app!",
        stacks: [
          "svelte",
          "tailwindcss",
          "daisyui",
          "supabase",
          "postgresql",
          "drizzledb",
          "nodejs",
          "ts",
          "css",
        ],
        imagePath: "/assets/projects/matzhar",
        links: [
          ["Demo", "https://matzhar-kohl.vercel.app"],
          ["Repository", "https://github.com/Rakemoon/matzhar"],
        ],
      },
      {
        name: "Collosal Slicing",
        summary: "Self commisioned to slicing the figma design",
        stacks: ["react", "nextjs", "tailwindcss", "nodejs", "ts"],
        imagePath: "/assets/projects/collosal-slicing",
        links: [
          ["Demo", "https://collosal-slicing-figma.vercel.app/"],
          ["Repository", "https://github.com/Rakemoon/collosal-slicing-figma"],
          ["Design", "https://codedesign.dev/challenge/collosal"],
        ],
      },
    ] satisfies ProjectList[],

  CONTACT_TITLE: () => "Contact",
  CONTACT_BADGE: () => "Get In touch",
} satisfies LangRecord;

export default enUS;
