import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, BadgeCheck, GraduationCap, Link2, PenLine } from "lucide-react";
import { Github, Linkedin } from "./BrandIcons";
import { useLang } from "../LanguageContext";
import TechStack from "./TechStack";

const ease = [0.22, 1, 0.36, 1];

// Your photo: save it as src/assets/profile.jpg (.jpeg / .png / .webp). Picked up automatically.
const found = import.meta.glob("../assets/profile.{jpg,jpeg,png,webp}", { eager: true, import: "default" });
const photo = Object.values(found)[0];

const TypingRoles = () => {
  const { data: { heroRoles }, ui } = useLang();
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => { setText(""); setIsDeleting(false); setRoleIndex(0); }, [heroRoles]);

  useEffect(() => {
    const role = heroRoles[roleIndex];
    let delay = isDeleting ? 45 : 90;
    if (!isDeleting && text === role) delay = 2000;
    const t = setTimeout(() => {
      if (!isDeleting) {
        if (text.length < role.length) setText(role.slice(0, text.length + 1));
        else setIsDeleting(true);
      } else if (text.length > 0) setText(text.slice(0, -1));
      else { setIsDeleting(false); setRoleIndex((i) => (i + 1) % heroRoles.length); }
    }, delay);
    return () => clearTimeout(t);
  }, [text, isDeleting, roleIndex, heroRoles]);

  const prefix = ui.iAm(heroRoles[roleIndex] || "");
  return (
    <p className="text-base text-muted-foreground md:text-lg" aria-label={`${prefix}${heroRoles.join(", ")}`}>
      <span aria-hidden="true">
        {prefix}<span className="text-primary">{text}</span>
        <span className="ml-0.5 inline-block h-[1.1em] w-[2px] translate-y-[0.2em] animate-pulse bg-primary" />
      </span>
    </p>
  );
};

const CAPTION_MS = 3000;

// Name stays put; the line beneath rotates through your captions.
const PortraitCaption = () => {
  const { data: { profile, heroCaptions } } = useLang();
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % heroCaptions.length), CAPTION_MS);
    return () => clearInterval(id);
  }, [heroCaptions.length]);
  const current = heroCaptions[index % heroCaptions.length];
  return (
    <div className="min-w-0">
      <p className="font-display text-lg font-semibold">{profile.name}</p>
      <div className="relative mt-1 h-5 overflow-hidden" aria-live="polite">
        <AnimatePresence mode="wait" initial={false}>
          <motion.p
            key={current.text}
            initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -10, filter: "blur(6px)" }}
            transition={{ duration: 0.45, ease }}
            className="flex items-center gap-1.5 whitespace-nowrap text-[13px] font-medium text-white/80"
          >
            {current.certified && <BadgeCheck className="h-4 w-4 shrink-0 text-primary" />}
            {current.text}
          </motion.p>
        </AnimatePresence>
      </div>
      <div className="mt-3 flex gap-1.5" aria-hidden="true">
        {heroCaptions.map((c, i) => (
          <span key={c.text} className="relative h-[3px] w-6 overflow-hidden rounded-full bg-white/20">
            {i === index && (
              <motion.span key={index} className="absolute inset-y-0 left-0 rounded-full bg-primary" initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: CAPTION_MS / 1000, ease: "linear" }} />
            )}
            {i < index && <span className="absolute inset-0 rounded-full bg-white/50" />}
          </span>
        ))}
      </div>
    </div>
  );
};

const fadeUp = (delay) => ({ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay, ease } });

export const socialIcon = (key) => ({ github: Github, linkedin: Linkedin, devto: PenLine }[key] || Link2);
const labelFor = (key, ui) => ({ github: "GitHub", linkedin: "LinkedIn", devto: ui.writingOnDev }[key] || key);

const Hero = () => {
  const { data: { profile, stats }, ui } = useLang();
  const socials = Object.entries(profile.links).map(([key, href]) => ({ href, label: labelFor(key, ui), icon: socialIcon(key) }));
  return (
    <section id="home" className="relative overflow-hidden pt-28 md:pt-36">
      {/* Backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-50 dark:opacity-60"
          src={`${import.meta.env.BASE_URL}hero-bg.mp4`}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
        />
        {/* Scrim keeps text readable and fades the video into the page */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="absolute inset-0 bg-glow" />
      </div>

      <div className="container max-w-6xl">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          {/* Copy */}
          <div className="lg:col-span-7">
            <motion.div {...fadeUp(0)} className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-border bg-card/60 py-1.5 pl-2 pr-4 text-xs text-muted-foreground backdrop-blur">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2 py-0.5 font-medium text-primary">
                <GraduationCap className="h-3.5 w-3.5" />
                {ui.engStudent}
              </span>
              {profile.role} · {profile.location}
            </motion.div>

            <motion.h1 {...fadeUp(0.08)} className="text-balance font-display text-[2.25rem] font-semibold leading-[1.05] tracking-[-0.03em] sm:text-5xl lg:text-[3.5rem]">
              <span className="sr-only">{profile.name}. </span>
              {ui.heroTitle[0]}<span className="text-primary">{ui.heroTitle[1]}</span>{ui.heroTitle[2]}
            </motion.h1>

            <motion.div {...fadeUp(0.12)} className="mt-6 h-7"><TypingRoles /></motion.div>

            <motion.p {...fadeUp(0.16)} className="mt-5 max-w-xl text-pretty text-base leading-relaxed md:text-[17px] text-muted-foreground">
              {ui.heroIntro}
            </motion.p>

            <motion.div {...fadeUp(0.24)} className="mt-10 flex flex-wrap items-center gap-3">
              <a href="#work" className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90">
                {ui.viewProjects}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <div className="ml-1 flex items-center gap-1">
                {socials.map(({ href, label, icon: Icon }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="inline-flex h-11 w-11 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
                    <Icon className="h-[18px] w-[18px]" />
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.dl {...fadeUp(0.32)} className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-5">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dd className="font-display text-3xl font-semibold tracking-tight md:text-4xl">{stat.value}</dd>
                  <dt className="mt-1 text-sm text-muted-foreground">{stat.label}</dt>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* Portrait */}
          <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2, ease }} className="lg:col-span-5">
            <figure className="relative mx-auto max-w-sm lg:ml-auto lg:mr-0">
              <div className="relative overflow-hidden rounded-[1.75rem] border border-border bg-card">
                {photo ? (
                  <img src={photo} alt={`${ui.portraitOf} ${profile.name}`} width="800" height="1000" className="aspect-[4/5] w-full object-cover object-[50%_20%]" />
                ) : (
                  <div className="relative flex aspect-[4/5] w-full items-center justify-center bg-card" aria-hidden="true">
                    <div className="absolute inset-0 bg-grid" />
                    <div className="absolute inset-0 bg-glow" />
                    <span className="relative -mt-16 font-display text-8xl font-semibold tracking-tighter">{profile.monogram}</span>
                  </div>
                )}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 text-white">
                  <PortraitCaption />
                  <span className="hidden shrink-0 rounded-full border border-white/20 bg-white/10 px-3 py-1 min-[400px]:inline-block text-[11px] font-medium uppercase tracking-[0.14em] text-white/80 backdrop-blur">
                    {profile.location.split(",")[0]}
                  </span>
                </figcaption>
              </div>
            </figure>
          </motion.div>
        </div>

        <TechStack />
      </div>
    </section>
  );
};

export default Hero;
