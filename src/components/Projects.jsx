import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Star } from "lucide-react";
import { Github } from "./BrandIcons";
import Section, { Reveal } from "./Section";
import { useLang } from "../LanguageContext";

const base = import.meta.env.BASE_URL;
const src = (path) => (/^https?:/.test(path) ? path : `${base}${path}`);

// Short "video" preview for a project card.
// Uses a real clip when `video` is set, otherwise plays the screenshots as a
// slow zooming slideshow so the card still feels alive.
const ProjectMedia = ({ p }) => {
  const slides = p.images || [];
  const [i, setI] = useState(0);

  useEffect(() => {
    if (p.video || slides.length < 2) return;
    const t = setInterval(() => setI((n) => (n + 1) % slides.length), 3200);
    return () => clearInterval(t);
  }, [p.video, slides.length]);

  if (p.video) {
    return (
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={src(p.video)}
        poster={slides[0] ? src(slides[0]) : undefined}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      />
    );
  }

  return (
    <AnimatePresence initial={false}>
      <motion.img
        key={slides[i]}
        src={src(slides[i])}
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover object-top"
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: 1, scale: [1.08, 1], y: slides.length < 2 ? ["0%", "-3%", "0%"] : 0 }}
        exit={{ opacity: 0 }}
        transition={{
          opacity: { duration: 0.9 },
          scale: { duration: slides.length < 2 ? 8 : 3.6, ease: "easeOut", repeat: slides.length < 2 ? Infinity : 0, repeatType: "reverse" },
          y: { duration: 10, ease: "easeInOut", repeat: Infinity },
        }}
      />
    </AnimatePresence>
  );
};

// With no href the button keeps its place but is greyed out (link coming later).
const LinkBtn = ({ href, icon: Icon, children, soon }) =>
  href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 whitespace-nowrap text-sm text-foreground/85 transition-colors hover:text-primary">
      <Icon className="h-4 w-4" />{children}
    </a>
  ) : (
    <span title={soon} aria-disabled="true" className="inline-flex cursor-not-allowed items-center gap-2 whitespace-nowrap text-sm text-muted-foreground/60">
      <Icon className="h-4 w-4" />{children}
    </span>
  );

const ProjectCard = ({ p }) => {
  const { ui } = useLang();
  const main = p.live || p.github;
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 220, damping: 26 }}
      className="surface group flex h-full flex-col p-3.5 transition-colors duration-300 ease-out hover:border-primary/40"
    >
      <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-border bg-secondary/40">
        <ProjectMedia p={p} />
        {p.badge && (
          <span className="absolute left-3 top-3 rounded-full border border-primary/40 bg-black/60 px-3 py-1 text-xs font-semibold tracking-wide text-primary backdrop-blur">
            {p.badge}
          </span>
        )}
        {p.featured && (
          <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />{ui.work.featured}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col px-2 pb-1 pt-4">
        <h3 className="font-display text-xl font-semibold tracking-tight">{p.title}</h3>
        <ul className="mt-3 flex flex-wrap gap-1.5">
          {p.stack.map((s) => (
            <li key={s} className="rounded-full border border-border bg-secondary/50 px-2.5 py-0.5 text-xs text-foreground/85">{s}</li>
          ))}
        </ul>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.summary}</p>

        <div className="mt-auto flex items-center justify-between gap-3 pt-5">
          <div className="flex items-center gap-4">
            <LinkBtn href={main} icon={ExternalLink} soon={ui.work.soon}>{ui.work.view}</LinkBtn>
            <span className="h-5 w-px bg-border" />
            <LinkBtn href={p.github} icon={Github} soon={ui.work.soon}>GitHub</LinkBtn>
          </div>
          {main ? (
            <a
              href={main}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${ui.work.view}: ${p.title}`}
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/50 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground"
            >
              <ArrowUpRight className="h-4 w-4" />
            </a>
          ) : (
            <span title={ui.work.soon} aria-disabled="true" className="inline-flex h-10 w-10 shrink-0 cursor-not-allowed items-center justify-center rounded-full border border-border text-muted-foreground/60">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
};

const Projects = () => {
  const { data: { featuredProjects, otherProjects, profile }, ui } = useLang();
  const projects = [...featuredProjects, ...otherProjects];
  const allProjects = profile.links?.github ? `${profile.links.github}?tab=repositories` : "#";
  return (
    <Section
      id="work"
      index="03"
      label={ui.work.label}
      title={ui.work.title}
      intro={ui.work.intro}
      aside={
        <a
          href={allProjects}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-primary/50 hover:bg-secondary"
        >
          {ui.work.all}<ArrowUpRight className="h-4 w-4" />
        </a>
      }
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.06} className="h-full">
            <ProjectCard p={p} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
};
export default Projects;
