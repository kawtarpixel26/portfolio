import { motion } from "framer-motion";
import { FaCss3Alt } from "react-icons/fa";
import {
  SiHtml5, SiJavascript, SiJquery, SiBootstrap, SiReact, SiFirebase, SiNextdotjs,
  SiTailwindcss, SiTypescript, SiFastapi, SiDocker, SiVercel, SiXampp, SiLaravel, SiFramer, SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiPostgresql,
  SiGraphql, SiGit, SiGithub, SiGitlab, SiNotion, SiPostman, SiFigma,
} from "react-icons/si";
import { useLang } from "../LanguageContext";

// Simple custom mark (no Antigravity icon exists in react-icons)
const Antigravity = ({ className, style }) => (
  <svg viewBox="0 0 24 24" className={className} style={style} fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3.5 20.5 12 3.5l8.5 17" />
    <path d="M8 20.5c1.2-2.6 2.6-3.9 4-3.9s2.8 1.3 4 3.9" />
  </svg>
);

// Icon key (used in src/data/portfolio*.js) -> [component, brand colour]. null colour = follows the text colour.
const ICONS = {
  html5: [SiHtml5, "#E34F26"], css3: [FaCss3Alt, "#1572B6"], javascript: [SiJavascript, "#F7DF1E"],
  jquery: [SiJquery, "#0769AD"], bootstrap: [SiBootstrap, "#7952B3"],
  react: [SiReact, "#61DAFB"], firebase: [SiFirebase, "#FFCA28"],
  nextjs: [SiNextdotjs, null], tailwind: [SiTailwindcss, "#38BDF8"], typescript: [SiTypescript, "#3178C6"],
  framer: [SiFramer, "#0055FF"], nodejs: [SiNodedotjs, "#5FA04E"], express: [SiExpress, null],
  mongodb: [SiMongodb, "#47A248"], mysql: [SiMysql, "#4479A1"], postgresql: [SiPostgresql, "#4169E1"],
  graphql: [SiGraphql, "#E10098"], git: [SiGit, "#F05032"], github: [SiGithub, null],
  gitlab: [SiGitlab, "#FC6D26"], notion: [SiNotion, null], postman: [SiPostman, "#FF6C37"],
  figma: [SiFigma, "#F24E1E"], antigravity: [Antigravity, "#4285F4"],
  fastapi: [SiFastapi, "#009688"], docker: [SiDocker, "#2496ED"], vercel: [SiVercel, null], xampp: [SiXampp, "#FB7A24"], laravel: [SiLaravel, "#FF2D20"],
};

const Pill = ({ name, icon }) => {
  const [Icon, color] = ICONS[icon] || [];
  return (
    <li className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-2 text-sm font-medium text-foreground shadow-sm transition-transform duration-200 hover:-translate-y-0.5">
      {Icon && <Icon className="h-[18px] w-[18px] shrink-0" style={color ? { color } : undefined} aria-hidden="true" />}
      {name}
    </li>
  );
};

const Group = ({ title, items, align = "center" }) => (
  <div className={align === "center" ? "text-center" : ""}>
    <h3 className="mb-5 font-display text-lg font-semibold tracking-tight text-primary md:text-xl">{title}</h3>
    <ul className="flex flex-wrap justify-center gap-2.5">
      {items.map((it) => <Pill key={it.name} {...it} />)}
    </ul>
  </div>
);

const TechStack = ({ delay = 0.5 }) => {
  const { data: { techStack } } = useLang();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className="mt-16 border-b border-border py-12"
    >
      <p className="eyebrow mb-10 text-center">{techStack.label}</p>
      <div className="grid gap-12 md:grid-cols-2 md:gap-10">
        <Group title={techStack.frontend.title} items={techStack.frontend.items} />
        <Group title={techStack.backend.title} items={techStack.backend.items} />
      </div>
      <div className="mt-12">
        <Group title={techStack.tools.title} items={techStack.tools.items} />
      </div>
    </motion.div>
  );
};

export default TechStack;
